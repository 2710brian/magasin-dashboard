import pool from "../../lib/db";

export default async function handler(
  req,
  res
) {

  try {

    const {
      categoryId,
    } = req.query;

    const result =
      await pool.query(
        `
        SELECT *
        FROM marketing_notes
        WHERE category_id = $1
        ORDER BY id ASC
        `,
        [
          categoryId,
        ]
      );

    return res.status(200).json({
      success: true,
      notes:
        result.rows,
    });

  } catch (
    error
  ) {

    console.error(
      error
    );

    return res.status(500).json({
      success: false,
    });
  }
}
