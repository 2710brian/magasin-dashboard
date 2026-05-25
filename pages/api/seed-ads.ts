import type {
  NextApiRequest,
  NextApiResponse,
} from "next";

import pool from "../../lib/db";

import { pages } from "../../data/pages";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {

  try {

    await pool.query(`
      DELETE FROM ads
    `);

    for (const page of pages) {

      for (
        let i = 0;
        i < page.slots;
        i++
      ) {

        await pool.query(
          `
          INSERT INTO ads (
            page,
            title,
            status,
            price,
            color,
            type,
            clientid,
            createdat,
            updatedat
          )

          VALUES (
            $1,$2,$3,$4,$5,
            $6,$7,$8,$9
          )
        `,
          [
            page.side,

            "LEDIG",

            "Ledig",

            "",

            "#444",

            page.layout,

            i + 1,

            new Date().toISOString(),

            new Date().toISOString(),
          ]
        );
      }
    }

    return res.status(200).json({
      success: true,
      message:
        "Ads seeded successfully",
    });

  } catch (error) {

    console.error(error);

    return res.status(500).json({
      success: false,
      error:
        "Failed to seed ads",
    });
  }
}
