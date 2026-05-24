type AdBlockProps = {
  title: string;

  status?: string;

  price?: string;

  color?: string;

  type?: string;
};

export default function AdBlock({
  title,

  status = "Ledig",

  price = "",

  color = "#444",

  type = "quarter",
}: AdBlockProps) {
  let gridColumn =
    "span 1";

  let gridRow =
    "span 1";

  if (type === "helside") {
    gridColumn =
      "span 2";

    gridRow =
      "span 2";
  }

  if (
    type ===
    "half-horizontal"
  ) {
    gridColumn =
      "span 2";

    gridRow =
      "span 1";
  }

  if (
    type ===
    "half-vertical"
  ) {
    gridColumn =
      "span 1";

    gridRow =
      "span 2";
  }

  if (type === "quarter") {
    gridColumn =
      "span 1";

    gridRow =
      "span 1";
  }

  if (
    type === "banner-top"
  ) {
    gridColumn =
      "span 2";

    gridRow =
      "span 1";
  }

  return (
    <div
      style={{
        background: color,

        borderRadius: "10px",

        padding: "15px",

        display: "flex",

        flexDirection: "column",

        justifyContent:
          "space-between",

        gridColumn,

        gridRow,

        minHeight: "100%",
      }}
    >
      <div
        style={{
          fontWeight: "bold",
        }}
      >
        {title}
      </div>

      <div
        style={{
          fontSize: "12px",

          opacity: 0.8,

          marginTop: "10px",
        }}
      >
        {status}
      </div>

      <div
        style={{
          fontSize: "11px",

          marginTop: "8px",

          opacity: 0.7,
        }}
      >
        {type}
      </div>

      {price && (
        <div
          style={{
            marginTop: "10px",

            fontSize: "13px",

            fontWeight: "bold",
          }}
        >
          {price}
        </div>
      )}
    </div>
  );
}
