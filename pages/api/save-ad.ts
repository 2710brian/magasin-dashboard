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

            vat = $6,
            contactperson = $7,
            email = $8,
            phone = $9,
            website = $10,
            facebook = $11,
            instagram = $12,
            linkedin = $13,
            tiktok = $14,

            premiumplacement = $15,
            seller = $16,
            pipeline = $17,
            deadline = $18,
            qrurl = $19,

            country = $20,
            region = $21,
            province = $22,
            municipality = $23,
            city = $24,
            zipcode = $25,
            address = $26,
            area = $27,
            industry = $28,
            subindustry = $29,
            languages = $30,
            timezone = $31,

            updatedat = $32

          WHERE id = $33

          RETURNING *
        `,
          [
            ad.title || "",

            ad.status || "",

            ad.price || "",

            ad.color || "",

            ad.type || "",

            ad.vat || "",

            ad.contactPerson || "",

            ad.email || "",

            ad.phone || "",

            ad.website || "",

            ad.facebook || "",

            ad.instagram || "",

            ad.linkedin || "",

            ad.tiktok || "",

            ad.premiumPlacement || "",

            ad.seller || "",

            ad.pipeline || "",

            ad.deadline || "",

            ad.qrurl || "",

            ad.country || "",

            ad.region || "",

            ad.province || "",

            ad.municipality || "",

            ad.city || "",

            ad.zipcode || "",

            ad.address || "",

            ad.area || "",

            ad.industry || "",

            ad.subindustry || "",

            ad.languages || "",

            ad.timezone || "",

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

          vat,
          contactperson,
          email,
          phone,
          website,
          facebook,
          instagram,
          linkedin,
          tiktok,

          premiumplacement,
          seller,
          pipeline,
          deadline,
          qrurl,

          country,
          region,
          province,
          municipality,
          city,
          zipcode,
          address,
          area,
          industry,
          subindustry,
          languages,
          timezone,

          clientid,
          createdat,
          updatedat
        )

        VALUES (
          $1,$2,$3,$4,$5,
          $6,$7,$8,$9,$10,
          $11,$12,$13,$14,$15,
          $16,$17,$18,$19,$20,
          $21,$22,$23,$24,$25,
          $26,$27,$28,$29,$30,
          $31,$32,$33,$34,$35
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

          ad.vat || "",

          ad.contactPerson || "",

          ad.email || "",

          ad.phone || "",

          ad.website || "",

          ad.facebook || "",

          ad.instagram || "",

          ad.linkedin || "",

          ad.tiktok || "",

          ad.premiumPlacement || "",

          ad.seller || "",

          ad.pipeline || "",

          ad.deadline || "",

          ad.qrurl || "",

          ad.country || "",

          ad.region || "",

          ad.province || "",

          ad.municipality || "",

          ad.city || "",

          ad.zipcode || "",

          ad.address || "",

          ad.area || "",

          ad.industry || "",

          ad.subindustry || "",

          ad.languages || "",

          ad.timezone || "",

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
