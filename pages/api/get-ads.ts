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
    const result = await pool.query(`
      SELECT *
      FROM ads
      ORDER BY id ASC
    `);

    return res.status(200).json({
      success: true,
      ads: result.rows,
    });
  } catch (error) {
    console.error(error);

    return res.status(500).json({
      success: false,
      error: "Failed to fetch ads",
    });
  }
}
