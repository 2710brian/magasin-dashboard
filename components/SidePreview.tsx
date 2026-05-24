type SidePreviewProps = {
  side: number;

  premium?: boolean;

  layout: string;

  onClick: () => void;
};

export default function SidePreview({
  side,

  premium,

  layout,

  onClick,
}: SidePreviewProps) {
  return (
    <div
      onClick={onClick}
      style={{
        background: "#1b1b1b",

        borderRadius: "14px",

        padding: "20px",

        cursor: "pointer",

        border: premium
          ? "2px solid gold"
          : "1px solid #2a2a2a",
      }}
    >
      <div
        style={{
          display: "flex",

          justifyContent:
            "space-between",

          marginBottom: "20px",
        }}
      >
        <h3>Side {side}</h3>

        {premium && (
          <div
            style={{
              color: "gold",

              fontSize: "12px",
            }}
          >
            PREMIUM
          </div>
        )}
      </div>

      {/* MINI PREVIEW */}

      <div
        style={{
          background: "#111",

          borderRadius: "10px",

          padding: "12px",

          width: "100%",

          aspectRatio: "210 / 297",

          display: "flex",

          flexDirection: "column",

          gap: "8px",
        }}
      >
        <div
          style={{
            flex: 1,

            background: "#22c55e",

            borderRadius: "6px",
          }}
        />
      </div>

      <div
        style={{
          marginTop: "15px",

          color: "#888",

          fontSize: "14px",
        }}
      >
        Layout: {layout}
      </div>
    </div>
  );
}
