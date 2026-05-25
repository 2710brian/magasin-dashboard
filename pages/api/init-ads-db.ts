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
      CREATE TABLE IF NOT EXISTS ads (
        id SERIAL PRIMARY KEY,

        page INTEGER,

        title TEXT,

        status TEXT,

        price TEXT,

        color TEXT,

        type TEXT,

        clientid INTEGER,

        createdat TEXT,

        updatedat TEXT
      )
    `);

    return res.status(200).json({
      success: true,
      message: "Ads table initialized",
    });
  } catch (error) {
    console.error(error);

    return res.status(500).json({
      success: false,
      error: "Ads table init failed",
    });
  }
}
