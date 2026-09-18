import { db } from "../config/db.js";

export const createUrl = async (url: string, shortCode: string) => {
  const result = await db.query(
    `
        INSERT INTO urls (short_code, original_url)
        VALUES( $1, $2)
        RETURNING short_code, original_url
        `,
    [shortCode, url],
  );

  return result.rows[0];
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
