import { db } from "../config/db.js";
import { ConflictError } from "../errors/ConflictError.js";

type PostgresError = Error & {
  code?: string;
};

export const createUrl = async (url: string, shortCode: string) => {
  try {
    const result = await db.query(
      `
        INSERT INTO urls (short_code, original_url)
        VALUES( $1, $2)
        RETURNING short_code, original_url
        `,
      [shortCode, url],
    );

    return result.rows[0];
  } catch (error: unknown) {
    const pgError = error as PostgresError;

    if (pgError.code === "23505") {
      throw new ConflictError("try creating again");
    }

    throw error;
  }
};

export const getOriginalUrl = async (shortCode: string) => {
  const result = await db.query(
    `
        SELECT original_url FROM urls
        WHERE short_code = $1
        `,
    [shortCode],
  );

  return result.rows[0] ?? null;
};
