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
