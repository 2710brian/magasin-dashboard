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
      error:
        "Method not allowed",
    });
  }

  try {

    const ad = req.body;

    console.log(
      "SAVE AD:",
      ad
    );

    // UPDATE existing ad

    if (ad.id) {

      const result =
        await pool.query(
          `
          UPDATE ads
          SET
            title = $1,
            status = $2,
            price = $3,
            color = $4,
            type = $5,
            updatedat = $6
          WHERE id = $7

          RETURNING *
        `,
          [
            ad.title || "",

            ad.status || "",

            ad.price || "",

            ad.color || "",

            ad.type || "",

            new Date().toISOString(),

            ad.id,
          ]
        );

      console.log(
        "UPDATED:",
        result.rows
      );

      return res.status(200).json({
        success: true,

        mode: "updated",

        ad:
          result.rows[0],
      });
    }

    // CREATE fallback

    const result =
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

        RETURNING *
      `,
        [
          ad.page,

          ad.title || "",

          ad.status || "",

          ad.price || "",

          ad.color || "",

          ad.type || "",

          ad.clientId || 1,

          new Date().toISOString(),

          new Date().toISOString(),
        ]
      );

    return res.status(200).json({
      success: true,

      mode: "created",

      ad:
        result.rows[0],
    });

  } catch (error) {

    console.error(error);

    return res.status(500).json({
      success: false,

      error:
        "Failed to save ad",
    });
  }
}
