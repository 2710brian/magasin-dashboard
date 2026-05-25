import type {
  NextApiRequest,
  NextApiResponse,
} from "next";

import pool from "../../lib/db";

export default async function handler(
  req: NextApiRequest,

  res: NextApiResponse
) {
  if (
    req.method !== "POST"
  ) {
    return res
      .status(405)
      .json({
        error:
          "Method not allowed",
      });
  }

  try {
    const client =
      req.body;

    await pool.query(`
      CREATE TABLE IF NOT EXISTS clients (
        id SERIAL PRIMARY KEY,

        title TEXT,

        contactperson TEXT,

        email TEXT,

        phone TEXT,

        website TEXT,

        logo TEXT,

        createdat TEXT,

        contactedat TEXT,

        deadline TEXT
      )
    `);

    await pool.query(
      `
      INSERT INTO clients (
        title,
        contactperson,
        email,
        phone,
        website,
        logo,
        createdat,
        contactedat,
        deadline
      )

      VALUES (
        $1,$2,$3,$4,$5,$6,$7,$8,$9
      )
    `,
      [
        client.title,

        client.contactPerson,

        client.email,

        client.phone,

        client.website,

        client.logo,

        client.createdAt,

        client.contactedAt,

        client.deadline,
      ]
    );

    return res
      .status(200)
      .json({
        success: true,
      });
  } catch (error) {
    console.error(error);

    return res
      .status(500)
      .json({
        error:
          "Database error",
      });
  }
}
