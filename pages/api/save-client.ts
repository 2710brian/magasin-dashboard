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
      success: false,
      error: "Method not allowed",
    });
  }

  try {
    const client = req.body;

    const values = [
      client.title || "",
      client.vat || "",
      client.contactperson || client.contactPerson || "",
      client.email || "",
      client.phone || "",
      client.website || "",
      client.facebook || "",
      client.instagram || "",
      client.linkedin || "",
      client.tiktok || "",
      client.logo || "",
      client.country || "",
      client.region || "",
      client.municipality || "",
      client.contactedat || client.contactedAt || "",
      client.followupdate || client.followUpDate || "",
      client.deadline || "",
      client.notes || "",
      client.status || "",
    ];

    // UPDATE
    if (client.id) {
      const result = await pool.query(
        `
        UPDATE clients
        SET
          title = $1,
          vat = $2,
          contactperson = $3,
          email = $4,
          phone = $5,
          website = $6,
          facebook = $7,
          instagram = $8,
          linkedin = $9,
          tiktok = $10,
          logo = $11,
          country = $12,
          region = $13,
          municipality = $14,
          contactedat = $15,
          followupdate = $16,
          deadline = $17,
          notes = $18,
          status = $19,
          updatedat = NOW()
        WHERE id = $20
        RETURNING *
        `,
        [...values, client.id]
      );

      return res.status(200).json({
        success: true,
        mode: "update",
        client: result.rows[0],
      });
    }

    // INSERT
    const result = await pool.query(
      `
      INSERT INTO clients (
        title,
        vat,
        contactperson,
        email,
        phone,
        website,
        facebook,
        instagram,
        linkedin,
        tiktok,
        logo,
        country,
        region,
        municipality,
        contactedat,
        followupdate,
        deadline,
        notes,
        status,
        createdat,
        updatedat
      )
      VALUES (
        $1,$2,$3,$4,$5,$6,$7,$8,$9,$10,
        $11,$12,$13,$14,$15,$16,$17,$18,$19,
        NOW(),
        NOW()
      )
      RETURNING *
      `,
      values
    );

    return res.status(200).json({
      success: true,
      mode: "insert",
      client: result.rows[0],
    });
  } catch (error) {
    console.error(error);

    return res.status(500).json({
      success: false,
      error: "Database error",
    });
  }
}
