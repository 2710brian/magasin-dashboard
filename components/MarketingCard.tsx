type MagazineCardProps = {
  kommune: {
    navn: string;
    region: string;
    fyldning: number;
    deadline: string;
  };

  dbAds: any[];
};

export default function MagazineCard({
  kommune,
  dbAds,
}: MagazineCardProps) {

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

     <div
  style={{
    display: "grid",
    gridTemplateColumns: "1fr 1fr",
    gap: "12px",
  }}
>

  <div>
    <strong>Prompts</strong>
    <div>0</div>
  </div>

  <div>
    <strong>Noter</strong>
    <div>0</div>
  </div>

  <div>
    <strong>Pitch</strong>
    <div>0</div>
  </div>

  <div>
    <strong>Emails</strong>
    <div>0</div>
  </div>

  <div>
    <strong>PDF</strong>
    <div>0</div>
  </div>

  <div>
    <strong>Billeder</strong>
    <div>0</div>
  </div>

  <div>
    <strong>Lyd</strong>
    <div>0</div>
  </div>

  <div>
    <strong>Video</strong>
    <div>0</div>
  </div>

</div>
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
            0/0 solgt
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
