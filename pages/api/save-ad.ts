import type {
  NextApiRequest,
  NextApiResponse,
} from "next";

import pool from "../../lib/db";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (req.method !== "POST") {
    return res.status(405).json({
      error: "Method not allowed",
    });
  }

  try {
    const ad = req.body;

    // UPDATE existing ad
    if (ad.id) {
      await pool.query(
        `
        UPDATE ads
        SET
          page = $1,
          title = $2,
          status = $3,
          price = $4,
          color = $5,
          type = $6,
          clientid = $7,
          updatedat = $8
        WHERE id = $9
      `,
        [
          ad.page,
          ad.title || "",
          ad.status || "",
          ad.price || "",
          ad.color || "",
          ad.type || "",
          ad.clientId || null,
          new Date().toISOString(),
          ad.id,
        ]
      );

      return res.status(200).json({
        success: true,
        mode: "updated",
      });
    }

    // CREATE new ad
    const result = await pool.query(
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

      RETURNING id
    `,
      [
        ad.page,
        ad.title || "",
        ad.status || "",
        ad.price || "",
        ad.color || "",
        ad.type || "",
        ad.clientId || null,
        new Date().toISOString(),
        new Date().toISOString(),
      ]
    );

    return res.status(200).json({
      success: true,
      mode: "created",
      id: result.rows[0].id,
    });
  } catch (error) {
    console.error(error);

    return res.status(500).json({
      success: false,
      error: "Failed to save ad",
    });
  }
}
