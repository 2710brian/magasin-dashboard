if (loggedIn) {
  return (
    <main
      style={{
        background: "#0f0f0f",
        color: "white",
        minHeight: "100vh",
        display: "flex",
        fontFamily: "Arial",
      }}
    >
      <Sidebar
        regions={regions}
        selectedKommune={
          selectedKommune || ""
        }
        setSelectedKommune={
          setSelectedKommune
        }
      />

      <div
        style={{
          flex: 1,
          padding: "30px",
          overflowY: "auto",
        }}
      >
        {!selectedKommune && (
          <>
            <h1
              style={{
                marginBottom: "30px",
              }}
            >
              Aktive magasiner
            </h1>

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
                  padding: "25px",
                  borderRadius: "14px",
                }}
              >
                <h3>Kommuner</h3>

                <p
                  style={{
                    fontSize: "30px",
                  }}
                >
                  {kommuner.length}
                </p>
              </div>

              <div
                style={{
                  background: "#1b1b1b",
                  padding: "25px",
                  borderRadius: "14px",
                }}
              >
                <h3>Aktive</h3>

                <p
                  style={{
                    fontSize: "30px",
                  }}
                >
                  {
                    aktiveKort.length
                  }
                </p>
              </div>

              <div
                style={{
                  background: "#1b1b1b",
                  padding: "25px",
                  borderRadius: "14px",
                }}
              >
                <h3>Omsætning</h3>

                <p
                  style={{
                    fontSize: "30px",
                  }}
                >
                  1.245.000 kr.
                </p>
              </div>

              <div
                style={{
                  background: "#1b1b1b",
                  padding: "25px",
                  borderRadius: "14px",
                }}
              >
                <h3>Premium sider</h3>

                <p
                  style={{
                    fontSize: "30px",
                  }}
                >
                  42
                </p>
              </div>
            </div>

            <h2
              style={{
                marginBottom: "20px",
              }}
            >
              Kommuner i arbejde
            </h2>

            <div
              style={{
                display: "grid",
                gridTemplateColumns:
                  "repeat(3, 1fr)",

                gap: "20px",
              }}
            >
              {aktiveKort.map(
                (kommune) => (
                  <div
                    key={
                      kommune.navn
                    }
                    onClick={() =>
                      setSelectedKommune(
                        kommune.navn
                      )
                    }
                    style={{
                      cursor:
                        "pointer",
                    }}
                  >
                    <MagazineCard
                      kommune={
                        kommune
                      }
                    />
                  </div>
                )
              )}
            </div>
          </>
        )}

        {selectedKommune && (
          <MagazineView
            setSelectedKommune={
              setSelectedKommune
            }
          />
        )}
      </div>
    </main>
  );
}
