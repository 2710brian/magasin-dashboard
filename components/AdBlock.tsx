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
  let minHeight = "120px";

  if (type === "helside") {
    minHeight = "420px";
  }

  if (
    type ===
    "half-horizontal"
  ) {
    minHeight = "200px";
  }

  if (
    type ===
    "half-vertical"
  ) {
    minHeight = "420px";
  }

  if (type === "quarter") {
    minHeight = "140px";
  }

  if (
    type === "banner-top"
  ) {
    minHeight = "90px";
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

        minHeight,
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
