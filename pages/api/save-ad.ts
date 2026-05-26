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

            googleads_active = $32,
            googleads_budget = $33,
            googleads_start = $34,
            googleads_end = $35,
            googleads_manager = $36,
            googleads_comment = $37,

            seo_active = $38,
            seo_budget = $39,
            seo_start = $40,
            seo_end = $41,
            seo_manager = $42,
            seo_comment = $43,

            emailmarketing_active = $44,
            emailmarketing_budget = $45,
            emailmarketing_start = $46,
            emailmarketing_end = $47,
            emailmarketing_manager = $48,
            emailmarketing_comment = $49,

            affiliate_active = $50,
            affiliate_budget = $51,
            affiliate_start = $52,
            affiliate_end = $53,
            affiliate_manager = $54,
            affiliate_comment = $55,

            metaads_active = $56,
            metaads_budget = $57,
            metaads_start = $58,
            metaads_end = $59,
            metaads_manager = $60,
            metaads_comment = $61,

            tiktokads_active = $62,
            tiktokads_budget = $63,
            tiktokads_start = $64,
            tiktokads_end = $65,
            tiktokads_manager = $66,
            tiktokads_comment = $67,

            linkedin_active = $68,
            linkedin_budget = $69,
            linkedin_start = $70,
            linkedin_end = $71,
            linkedin_manager = $72,
            linkedin_comment = $73,

            radio_active = $74,
            radio_budget = $75,
            radio_start = $76,
            radio_end = $77,
            radio_manager = $78,
            radio_comment = $79,

            tv_active = $80,
            tv_budget = $81,
            tv_start = $82,
            tv_end = $83,
            tv_manager = $84,
            tv_comment = $85,

            print_active = $86,
            print_budget = $87,
            print_start = $88,
            print_end = $89,
            print_manager = $90,
            print_comment = $91,

            internalnotes = $92,

            updatedat = $93

          WHERE id = $94

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

            ad.googleads_active || "",
            ad.googleads_budget || "",
            ad.googleads_start || "",
            ad.googleads_end || "",
            ad.googleads_manager || "",
            ad.googleads_comment || "",

            ad.seo_active || "",
            ad.seo_budget || "",
            ad.seo_start || "",
            ad.seo_end || "",
            ad.seo_manager || "",
            ad.seo_comment || "",

            ad.emailmarketing_active || "",
            ad.emailmarketing_budget || "",
            ad.emailmarketing_start || "",
            ad.emailmarketing_end || "",
            ad.emailmarketing_manager || "",
            ad.emailmarketing_comment || "",

            ad.affiliate_active || "",
            ad.affiliate_budget || "",
            ad.affiliate_start || "",
            ad.affiliate_end || "",
            ad.affiliate_manager || "",
            ad.affiliate_comment || "",

            ad.metaads_active || "",
            ad.metaads_budget || "",
            ad.metaads_start || "",
            ad.metaads_end || "",
            ad.metaads_manager || "",
            ad.metaads_comment || "",

            ad.tiktokads_active || "",
            ad.tiktokads_budget || "",
            ad.tiktokads_start || "",
            ad.tiktokads_end || "",
            ad.tiktokads_manager || "",
            ad.tiktokads_comment || "",

            ad.linkedin_active || "",
            ad.linkedin_budget || "",
            ad.linkedin_start || "",
            ad.linkedin_end || "",
            ad.linkedin_manager || "",
            ad.linkedin_comment || "",

            ad.radio_active || "",
            ad.radio_budget || "",
            ad.radio_start || "",
            ad.radio_end || "",
            ad.radio_manager || "",
            ad.radio_comment || "",

            ad.tv_active || "",
            ad.tv_budget || "",
            ad.tv_start || "",
            ad.tv_end || "",
            ad.tv_manager || "",
            ad.tv_comment || "",

            ad.print_active || "",
            ad.print_budget || "",
            ad.print_start || "",
            ad.print_end || "",
            ad.print_manager || "",
            ad.print_comment || "",

            ad.internalnotes || "",

            new Date().toISOString(),

            ad.id,
          ]
        );

      return res.status(200).json({
        success: true,

        mode: "updated",

        ad:
          result.rows[0],
      });
    }

    return res.status(200).json({
      success: true,
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
