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

    return res.status(405).json({
      success: false,
    });
  }

  try {

    const { id } =
      req.body;

    await pool.query(
      `
        DELETE FROM ads
        WHERE id = $1
      `,
      [id]
    );

    return res.status(200).json({
      success: true,
    });

  } catch (error) {

    console.error(
      error
    );

    return res.status(500).json({
      success: false,
    });
  }
}
