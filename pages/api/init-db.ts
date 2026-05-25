import type {
  NextApiRequest,
  NextApiResponse,
} from "next";

import pool from "../../lib/db";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  try {
    await pool.query(`
      CREATE TABLE IF NOT EXISTS clients (
        id SERIAL PRIMARY KEY,

        title TEXT,
        vat TEXT,

        contactperson TEXT,
        email TEXT,
        phone TEXT,
        website TEXT,

        facebook TEXT,
        instagram TEXT,
        linkedin TEXT,
        tiktok TEXT,

        logo TEXT,

        country TEXT,
        region TEXT,
        municipality TEXT,

        contactedat TEXT,
        followupdate TEXT,
        deadline TEXT,

        notes TEXT,

        createdat TEXT,
        updatedat TEXT
      )
    `);

    return res.status(200).json({
      success: true,
      message: "Database initialized",
    });
  } catch (error) {
    console.error(error);

    return res.status(500).json({
      success: false,
      error: "Database init failed",
    });
  }
}
