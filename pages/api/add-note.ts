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

    const {
      clientid,
      note,
    } = req.body;

    const result =
      await pool.query(
        `
        INSERT INTO notes (
          clientid,
          note,
          createdby
        )

        VALUES (
          $1,$2,$3
        )

        RETURNING *
      `,
        [
          clientid,

          note,

          "Brian",
        ]
      );

    return res.status(200).json({
      success: true,

      note:
        result.rows[0],
    });

  } catch (error) {

    console.error(error);

    return res.status(500).json({
      success: false,
    });
  }
}
