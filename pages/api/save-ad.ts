import type {
  NextApiRequest,
  NextApiResponse,
} from "next";

import pool from "../../lib/db";

const allowedFields = [

  // BASIC

  "title",
  "status",
  "price",
  "color",
  "type",

  // CONTACT

  "vat",
  "contactperson",
  "email",
  "phone",
  "website",
  "facebook",
  "instagram",
  "linkedin",
  "tiktok",

  // SALES

  "premiumplacement", 
  "seller",
  "pipeline",
  "deadline",
  "qrurl",

  // GEOGRAPHY

  "country",
  "region",
  "province",
  "municipality",
  "city",
  "zipcode",
  "address",
  "area",
  "industry",
  "subindustry",
  "languages",
  "timezone",

  // MARKETING

  "googleads_active",
  "googleads_budget",
  "googleads_start",
  "googleads_end",
  "googleads_manager",
  "googleads_comment",

  "seo_active",
  "seo_budget",
  "seo_start",
  "seo_end",
  "seo_manager",
  "seo_comment",

  "emailmarketing_active",
  "emailmarketing_budget",
  "emailmarketing_start",
  "emailmarketing_end",
  "emailmarketing_manager",
  "emailmarketing_comment",

  "affiliate_active",
  "affiliate_budget",
  "affiliate_start",
  "affiliate_end",
  "affiliate_manager",
  "affiliate_comment",

  "metaads_active",
  "metaads_budget",
  "metaads_start",
  "metaads_end",
  "metaads_manager",
  "metaads_comment",

  "tiktokads_active",
  "tiktokads_budget",
  "tiktokads_start",
  "tiktokads_end",
  "tiktokads_manager",
  "tiktokads_comment",

  "linkedin_active",
  "linkedin_budget",
  "linkedin_start",
  "linkedin_end",
  "linkedin_manager",
  "linkedin_comment",

  "radio_active",
  "radio_budget",
  "radio_start",
  "radio_end",
  "radio_manager",
  "radio_comment",

  "tv_active",
  "tv_budget",
  "tv_start",
  "tv_end",
  "tv_manager",
  "tv_comment",

  "print_active",
  "print_budget",
  "print_start",
  "print_end",
  "print_manager",
  "print_comment",

  // NOTES

  "internalnotes",

  // AFFILIATE

  "affiliate_webshops",

  "affiliate_dialogstatus",
  "affiliate_status",

  "affiliate_ticket",
  "affiliate_nextfollowup",
  "affiliate_contactdate",

  "affiliate_maincategory",
  "affiliate_products",
  "affiliate_epc",

  "affiliate_addeddate",
  "affiliate_programname",
  "affiliate_segment",
  "affiliate_salespercent",
  "affiliate_leadprice",

  "affiliate_traffic",
  "affiliate_feed",

"affiliate_networks",
"affiliate_countries",

// PRODUCTION

"production_materialreceived",
"production_proofsent",
"production_approved",
"production_readyforprint",

"production_status",
"production_manager",

"production_deadline",
"production_printdate",
"production_distributiondate",

"production_comment",
];

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

    if (!ad.id) {

      return res.status(400).json({
        success: false,

        error:
          "Missing ad id",
      });
    }

    const fieldsToUpdate =
      allowedFields.filter(
        (
          field
        ) =>
          Object.prototype.hasOwnProperty.call(
            ad,
            field
          )
      );

    const setClause =
      fieldsToUpdate.map(
        (
          field,
          index
        ) =>
          `${field} = $${index + 1}`
      );

    setClause.push(
      `updatedat = $${
        fieldsToUpdate.length + 1
      }`
    );

    const values =
      fieldsToUpdate.map(
        (
          field
        ) =>
          ad[field] || ""
      );

    values.push(
      new Date().toISOString()
    );

    values.push(
      ad.id
    );

    const query = `
      UPDATE ads
      SET
        ${setClause.join(", ")}

      WHERE id = $${
        fieldsToUpdate.length + 2
      }

      RETURNING *
    `;

const result = await pool.query(query, values);

console.log(
  "AD ID:",
  ad.id
);

console.log(
  "ROWS UPDATED:",
  result.rowCount
);

console.log(
  "RESULT:",
  result.rows
);
    return res.status(200).json({
      success: true,

      mode: "updated",

      ad:
        result.rows[0],
    });

  } catch (error) {

    console.error(
      error
    );

    return res.status(500).json({
      success: false,

      error:
        "Failed to save ad",
    });
  }
}
