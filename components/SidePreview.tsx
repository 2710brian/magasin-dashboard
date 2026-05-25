type SidePreviewProps = {
  side: number;

  premium?: boolean;

  ads: any[];

  onClick: () => void;
};

export default function SidePreview({
  side,
  premium,
  ads,
  onClick,
}: SidePreviewProps) {

  const layoutText =
    ads.length === 1
      ? "1 helside"
      : ads.length === 2
      ? "2 halve"
      : "4 kvart";

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
        <h3>
          Side {side}
        </h3>

        {premium && (
          <div
            style={{
              color: "gold",

              fontSize:
                "12px",
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

          borderRadius:
            "10px",

          padding: "12px",

          width: "100%",

          aspectRatio:
            "210 / 297",

          display: "grid",

          gridTemplateColumns:
            ads.length === 4
              ? "1fr 1fr"
              : "1fr",

          gap: "8px",
        }}
      >
        {ads.map(
          (ad, index) => (
            <div
              key={index}
              style={{
                background:
                  ad.color,

                borderRadius:
                  "6px",

                minHeight:
                  ads.length ===
                  1
                    ? "300px"
                    : "140px",
              }}
            />
          )
        )}
      </div>

      <div
        style={{
          marginTop: "15px",

          color: "#888",

          fontSize: "14px",
        }}
      >
        Layout:{" "}
        {layoutText}
      </div>
    </div>
  );
}
