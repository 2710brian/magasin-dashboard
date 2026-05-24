type MagazineViewProps = {
  setSelectedKommune: (
    kommune: string | null
  ) => void;
};

export default function MagazineView({
  setSelectedKommune,
}: MagazineViewProps) {
  const pages = Array.from(
    { length: 56 },
    (_, i) => {
      const side = i + 1;

      let layout = "1 helside";

      if (side % 5 === 0) {
        layout = "4 kvart";
      } else if (side % 3 === 0) {
        layout = "2 halve";
      }

      return {
        side,
        layout,

        premium:
          side === 3 ||
          side === 28 ||
          side === 29 ||
          side === 56,
      };
    }
  );

  return (
    <div>
      {/* HEADER */}

      <div
        style={{
          display: "flex",
          justifyContent:
            "space-between",

          alignItems: "center",

          marginBottom: "30px",
        }}
      >
        <div>
          <h1>Aalborg</h1>

          <p
            style={{
              color: "#888",
            }}
          >
            56 sider • Under produktion
          </p>
        </div>

        <button
          onClick={() =>
            setSelectedKommune(
              null
            )
          }
          style={{
            background: "#1f1f1f",
            border: "1px solid #333",
            color: "white",
            padding:
              "12px 18px",
            borderRadius: "10px",
            cursor: "pointer",
          }}
        >
          Tilbage
        </button>
      </div>

      {/* STATS */}

      <div
        style={{
          display: "grid",
          gridTemplateColumns:
            "repeat(4, 1fr)",

          gap: "20px",

          marginBottom: "40px",
        }}
      >
        <div
          style={{
            background: "#1b1b1b",
            padding: "20px",
            borderRadius: "14px",
          }}
        >
          <h3>Solgte sider</h3>

          <p
            style={{
              fontSize: "30px",
            }}
          >
            34
          </p>
        </div>

        <div
          style={{
            background: "#1b1b1b",
            padding: "20px",
            borderRadius: "14px",
          }}
        >
          <h3>Ledige sider</h3>

          <p
            style={{
              fontSize: "30px",
            }}
          >
            22
          </p>
        </div>

        <div
          style={{
            background: "#1b1b1b",
            padding: "20px",
            borderRadius: "14px",
          }}
        >
          <h3>Premium</h3>

          <p
            style={{
              fontSize: "30px",
            }}
          >
            4
          </p>
        </div>

        <div
          style={{
            background: "#1b1b1b",
            padding: "20px",
            borderRadius: "14px",
          }}
        >
          <h3>Omsætning</h3>

          <p
            style={{
              fontSize: "30px",
            }}
          >
            148.000 kr.
          </p>
        </div>
      </div>

      {/* SIDER */}

      <div
        style={{
          display: "grid",
          gridTemplateColumns:
            "repeat(4, 1fr)",

          gap: "20px",
        }}
      >
        {pages.map((page) => (
          <div
            key={page.side}
            style={{
              background: "#1b1b1b",

              borderRadius: "14px",

              padding: "20px",

              border:
                page.premium
                  ? "2px solid gold"
                  : "1px solid #2a2a2a",
            }}
          >
            {/* TOP */}

            <div
              style={{
                display: "flex",

                justifyContent:
                  "space-between",

                marginBottom: "20px",
              }}
            >
              <h3>
                Side {page.side}
              </h3>

              {page.premium && (
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

            {/* MAGASIN SIDE */}

            <div
              style={{
                background: "#111",

                borderRadius: "10px",

                padding: "12px",

                width: "100%",

                aspectRatio:
                  "210 / 297",

                display: "flex",

                flexDirection:
                  "column",

                gap: "8px",
              }}
            >
              {/* HELSIDE */}

              {page.layout ===
                "1 helside" && (
                <div
                  style={{
                    flex: 1,

                    background:
                      "#22c55e",

                    borderRadius:
                      "6px",

                    padding: "10px",

                    display: "flex",

                    flexDirection:
                      "column",

                    justifyContent:
                      "space-between",
                  }}
                >
                  <div>
                    Hansen VVS
                  </div>

                  <div
                    style={{
                      fontSize:
                        "12px",
                    }}
                  >
                    Helside
                  </div>
                </div>
              )}

              {/* 2 HALVE */}

              {page.layout ===
                "2 halve" && (
                <>
                  <div
                    style={{
                      flex: 1,

                      background:
                        "#eab308",

                      borderRadius:
                        "6px",

                      padding: "10px",

                      display: "flex",

                      flexDirection:
                        "column",

                      justifyContent:
                        "space-between",
                    }}
                  >
                    <div>
                      XL Byg
                    </div>

                    <div
                      style={{
                        fontSize:
                          "12px",
                      }}
                    >
                      1/2 side
                    </div>
                  </div>

                  <div
                    style={{
                      flex: 1,

                      background:
                        "#444",

                      borderRadius:
                        "6px",

                      padding: "10px",

                      display: "flex",

                      alignItems:
                        "center",

                      justifyContent:
                        "center",

                      color:
                        "#888",

                      fontSize:
                        "12px",
                    }}
                  >
                    LEDIG
                  </div>
                </>
              )}

              {/* 4 KVART */}

              {page.layout ===
                "4 kvart" && (
                <div
                  style={{
                    display:
                      "grid",

                    gridTemplateColumns:
                      "1fr 1fr",

                    gap: "8px",

                    flex: 1,
                  }}
                >
                  <div
                    style={{
                      background:
                        "#22c55e",

                      borderRadius:
                        "6px",

                      padding: "8px",

                      fontSize:
                        "11px",
                    }}
                  >
                    Frisør Hansen
                  </div>

                  <div
                    style={{
                      background:
                        "#eab308",

                      borderRadius:
                        "6px",

                      padding: "8px",

                      fontSize:
                        "11px",
                    }}
                  >
                    Reserveret
                  </div>

                  <div
                    style={{
                      background:
                        "#444",

                      borderRadius:
                        "6px",

                      padding: "8px",

                      fontSize:
                        "11px",

                      color:
                        "#999",
                    }}
                  >
                    Ledig
                  </div>

                  <div
                    style={{
                      background:
                        "#22c55e",

                      borderRadius:
                        "6px",

                      padding: "8px",

                      fontSize:
                        "11px",
                    }}
                  >
                    Café Nytorv
                  </div>
                </div>
              )}
            </div>

            {/* FOOTER */}

            <div
              style={{
                marginTop: "15px",
                color: "#888",
                fontSize: "14px",
              }}
            >
              Layout: {page.layout}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
