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

    const clientid =
      req.query.clientid;

    const result =
      await pool.query(
        `
        SELECT *
        FROM notes

        WHERE clientid = $1

        ORDER BY createdat DESC
      `,
        [clientid]
      );

    return res.status(200).json({
      success: true,

      notes:
        result.rows,
    });

  } catch (error) {

    console.error(error);

    return res.status(500).json({
      success: false,
    });
  }
}
