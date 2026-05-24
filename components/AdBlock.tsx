type AdBlockProps = {
  title: string;

  status?: string;

  price?: string;

  color?: string;
};

export default function AdBlock({
  title,

  status = "Ledig",

  price = "",

  color = "#444",
}: AdBlockProps) {
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

        minHeight: "120px",
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
