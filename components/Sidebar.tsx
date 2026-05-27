type SidebarProps = {
  regions: {
    [key: string]: string[];
  };

  selectedKommune: string;

  setSelectedKommune: (
    kommune: string
  ) => void;
};

export default function Sidebar({
  regions,
  selectedKommune,
  setSelectedKommune,
}: SidebarProps) {

  const handleClick = (
    kommune: string
  ) => {

    console.log(
      "CLICKED:",
      kommune
    );

    setSelectedKommune(
      kommune
    );
  };

  return (
  <div
    style={{
      width: "320px",

      background: "#161616",

      padding: "25px",

      borderRight:
        "1px solid #222",

      overflowY:
        "scroll",

      height:
        "calc(100vh - 40px)",

      maxHeight:
        "calc(100vh - 40px)",
    }}
  >
        <h2 style={{ marginBottom: "35px" }}>
        Magasin System
      </h2>

      <div
        style={{
          marginBottom: "35px",
        }}
      >
        <div
          style={{
            marginBottom: "12px",
          }}
        >
          Dashboard
        </div>

        <div
          style={{
            marginBottom: "12px",
          }}
        >
          Omsætning
        </div>

        <div
          style={{
            marginBottom: "12px",
          }}
        >
          Deadlines
        </div>

        <div
          style={{
            marginBottom: "12px",
          }}
        >
          Premium sider
        </div>
      </div>

      {Object.entries(
        regions
      ).map(
        ([region, kommuner]) => (
          <div
            key={region}
            style={{
              marginBottom:
                "30px",
            }}
          >
            <h3
              style={{
                color: "#888",
                marginBottom:
                  "12px",
              }}
            >
              {region}
            </h3>

            {kommuner.map(
              (kommune) => (
                <div
                  key={kommune}

                  onClick={() =>
                    handleClick(
                      kommune
                    )
                  }

                  style={{
                    padding:
                      "10px",

                    marginBottom:
                      "8px",

                    background:
                      selectedKommune ===
                      kommune
                        ? "#2a2a2a"
                        : "#1f1f1f",

                    borderRadius:
                      "8px",

                    cursor:
                      "pointer",

                    display:
                      "flex",

                    alignItems:
                      "center",

                    justifyContent:
                      "space-between",
                  }}
                >
                  <span>
                    {kommune}
                  </span>

                  <div
                    style={{
                      width:
                        "10px",

                      height:
                        "10px",

                      borderRadius:
                        "50%",

                      background:
                        "#22c55e",
                    }}
                  />
                </div>
              )
            )}
          </div>
        )
      )}
    </div>
  );
}
