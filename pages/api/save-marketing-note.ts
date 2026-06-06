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
      category,
      type,
      title,
      content,
      date,
    } = req.body;

    const result =
      await pool.query(
        `
        INSERT INTO marketing_notes
        (
          category,
          type,
          title,
          content,
          note_date
        )
        VALUES
        (
          $1,
          $2,
          $3,
          $4,
          $5
        )
        RETURNING *
        `,
        [
          category,
          type,
          title,
          content,
          date,
        ]
      );

    return res.status(200).json({
      success: true,
      note:
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
    });
  }
}
