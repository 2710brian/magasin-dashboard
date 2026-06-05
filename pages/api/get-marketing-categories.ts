import pool from "../../lib/db";

export default async function handler(
  req,
  res
) {
  try {

    const result =
      await pool.query(`
        SELECT *
        FROM marketing_categories
        ORDER BY name ASC
      `);

    return res.status(200).json({
      success: true,
      categories:
        result.rows,
    });

  } catch (error) {

    console.error(error);

    return res.status(500).json({
      success: false,
    });
  }
}
