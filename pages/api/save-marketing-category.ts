import pool from "../../lib/db";

export default async function handler(
  req,
  res
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
      name,
    } = req.body;

    const result =
      await pool.query(
        `
        INSERT INTO marketing_categories
        (
          name
        )
        VALUES
        (
          $1
        )
        RETURNING *
        `,
        [
          name,
        ]
      );

    return res.status(200).json({
      success: true,
      category:
        result.rows[0],
    });

  } catch (
    error
  ) {

    console.error(
      error
    );

    return res.status(500).json({
      success: false,
      error:
        "Database error",
    });
  }
}
