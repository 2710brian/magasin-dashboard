type MagazineCardProps = {
  kommune: {
    navn: string;
    region: string;
    fyldning: number;
    deadline: string;
  };
};

export default function MagazineCard({
  kommune,
}: MagazineCardProps) {
  function generatePages() {
    return Array.from(
      { length: 56 },
      (_, i) => {
        const page = i + 1;

        return {
          side: page,

          premium:
            page === 3 ||
            page === 28 ||
            page === 56,

          status:
            page % 5 === 0
              ? "solgt"
              : page % 3 === 0
              ? "reserveret"
              : "ledig",
        };
      }
    );
  }

  function getPageColor(status: string) {
    if (status === "solgt") {
      return "#22c55e";
    }

    if (status === "reserveret") {
      return "#eab308";
    }

    return "#444";
  }

  const pages = generatePages();

  return (
    <div
      style={{
        background: "#1b1b1b",
        padding: "20px",
        borderRadius: "14px",
        border: "1px solid #2a2a2a",
      }}
    >
      <div
        style={{
          display: "flex",
          justifyContent:
            "space-between",
          alignItems: "center",
          marginBottom: "15px",
        }}
      >
        <h3>{kommune.navn}</h3>

        <div
          style={{
            width: "12px",
            height: "12px",
            borderRadius: "50%",
            background: "#22c55e",
          }}
        />
      </div>

      <p
        style={{
          color: "#888",
          marginBottom: "12px",
        }}
      >
        {kommune.region}
      </p>

      <p>
        Fyldning:{" "}
        {kommune.fyldning}%
      </p>

      <p>
        Deadline:{" "}
        {kommune.deadline}
      </p>

      <div
        style={{
          marginTop: "20px",
          display: "grid",
          gridTemplateColumns:
            "repeat(8, 1fr)",
          gap: "6px",
        }}
      >
        {pages.map((page) => (
          <div
            key={page.side}
            style={{
              height: "22px",
              borderRadius: "4px",
              background:
                getPageColor(
                  page.status
                ),

              border:
                page.premium
                  ? "2px solid gold"
                  : "none",
            }}
          />
        ))}
      </div>
    </div>
  );
}
