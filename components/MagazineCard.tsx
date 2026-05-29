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

          premium: false,

          status: "ledig",
        };
      }
    );
  }

  function getPageColor(
    status: string
  ) {

    if (
      status === "solgt"
    ) {

      return "#22c55e";
    }

    if (
      status === "reserveret"
    ) {

      return "#eab308";
    }

    return "#444";
  }

  const pages =
    generatePages();

  const premiumPages =
    pages.filter(
      (page) =>
        page.premium
    );

  const soldPremium =
    premiumPages.filter(
      (page) =>
        page.status ===
        "solgt"
    ).length;

  const totalOmsaetning = 0;

  return (
    <div
      style={{
        background:
          "#1b1b1b",

        padding:
          "20px",

        borderRadius:
          "14px",

        border:
          "1px solid #2a2a2a",

        display:
          "flex",

        flexDirection:
          "column",

        gap:
          "14px",
      }}
    >

      {/* TOP */}

      <div
        style={{
          display:
            "flex",

          justifyContent:
            "space-between",

          alignItems:
            "flex-start",
        }}
      >
        <div>

          <h3
            style={{
              margin: 0,

              marginBottom:
                "6px",
            }}
          >
            {kommune.navn}
          </h3>

          <div
            style={{
              color:
                "#888",

              fontSize:
                "14px",
            }}
          >
            {kommune.region}
          </div>
        </div>

        <div
          style={{
            width:
              "12px",

            height:
              "12px",

            borderRadius:
              "50%",

            background:
              "#22c55e",
          }}
        />
      </div>

      {/* STATS */}

      <div
        style={{
          display:
            "grid",

          gridTemplateColumns:
            "1fr 1fr",

          gap:
            "12px",
        }}
      >

        <div>
          <div
            style={{
              color:
                "#777",

              fontSize:
                "12px",

              marginBottom:
                "4px",
            }}
          >
            OMSÆTNING
          </div>

          <div
            style={{
              fontWeight:
                700,

              fontSize:
                "18px",

              color:
                "#22c55e",
            }}
          >
            {totalOmsaetning.toLocaleString("da-DK")} kr
          </div>
        </div>

        <div>
          <div
            style={{
              color:
                "#777",

              fontSize:
                "12px",

              marginBottom:
                "4px",
            }}
          >
            PREMIUM
          </div>

          <div
            style={{
              fontWeight:
                700,

              fontSize:
                "16px",

              color:
                "#facc15",
            }}
          >
            {soldPremium}/3 solgt
          </div>
        </div>

        <div>
          <div
            style={{
              color:
                "#777",

              fontSize:
                "12px",

              marginBottom:
                "4px",
            }}
          >
            FYLDNING
          </div>

          <div
            style={{
              fontWeight:
                700,
            }}
          >
            {kommune.fyldning}%
          </div>
        </div>

        <div>
          <div
            style={{
              color:
                "#777",

              fontSize:
                "12px",

              marginBottom:
                "4px",
            }}
          >
            SIDER
          </div>

          <div
            style={{
              fontWeight:
                700,
            }}
          >
            56 sider
          </div>
        </div>
      </div>

      {/* DEADLINE */}

      <div>
        <div
          style={{
            color:
              "#777",

            fontSize:
              "12px",

            marginBottom:
              "4px",
          }}
        >
          DEADLINE
        </div>

        <div
          style={{
            fontWeight:
              600,
          }}
        >
          {kommune.deadline}
        </div>
      </div>

      {/* PAGE GRID */}

      <div
        style={{
          marginTop:
            "6px",

          display:
            "grid",

          gridTemplateColumns:
            "repeat(8, 1fr)",

          gap:
            "6px",
        }}
      >
        {pages.map(
          (page) => (

            <div
              key={
                page.side
              }

              style={{
                height:
                  "22px",

                borderRadius:
                  "4px",

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
          )
        )}
      </div>
    </div>
  );
}
