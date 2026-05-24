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

        overflow: "hidden",

        height: "100%",
      }}
    >
      <div
        style={{
          fontWeight: "bold",

          fontSize: "22px",
        }}
      >
        {title}
      </div>

      <div
        style={{
          fontSize: "14px",

          opacity: 0.8,
        }}
      >
        {status}
      </div>

      <div
        style={{
          fontSize: "12px",

          opacity: 0.6,
        }}
      >
        {type}
      </div>

      {price && (
        <div
          style={{
            fontSize: "18px",

            fontWeight: "bold",
          }}
        >
          {price}
        </div>
      )}
    </div>
  );
}
