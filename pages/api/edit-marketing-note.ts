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
      id,
      title,
      content,
    } = req.body;

    const result =
      await pool.query(
        `
        UPDATE marketing_notes
        SET
          note_title = $1,
          note_content = $2,
          updated_at = NOW()
        WHERE id = $3
        RETURNING *
        `,
        [
          title,
          content,
          id,
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
