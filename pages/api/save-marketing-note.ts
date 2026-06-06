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
      categoryId,
      title,
      content,
    } = req.body;

    const result =
      await pool.query(
        `
        INSERT INTO marketing_notes
        (
          category_id,
          note_title,
          note_content
        )
        VALUES
        (
          $1,
          $2,
          $3
        )
        RETURNING *
        `,
        [
          categoryId,
          title,
          content,
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
