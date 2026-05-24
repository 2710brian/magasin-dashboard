"use client";

import { useState } from "react";
import Sidebar from "../components/Sidebar";
import { regions } from "../data/kommuner";

export default function Home() {
  const [loggedIn, setLoggedIn] = useState(false);

  const [selectedKommune, setSelectedKommune] =
    useState("Aalborg");

  const aktiveKommuner = [
    "Aalborg",
    "Aarhus",
    "Odense",
    "Roskilde",
    "Kolding",
    "Horsens",
    "Frederiksberg",
    "Næstved",
  ];

  const kommuner = Object.entries(regions).flatMap(
    ([region, kommuner]) =>
      kommuner.map((navn) => ({
        navn,
        region,

        aktiv:
          aktiveKommuner.includes(navn),

        status:
          aktiveKommuner.includes(navn)
            ? "I salg"
            : "Ikke startet",

        fyldning:
          aktiveKommuner.includes(navn)
            ? Math.floor(
                Math.random() * 100
              )
            : 0,

        deadline:
          aktiveKommuner.includes(navn)
            ? "25 maj"
            : "-",
      }))
  );

  const aktiveKort = kommuner.filter(
    (kommune) => kommune.aktiv
  );

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
            selectedKommune
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
              (kommune) => {
                const pages =
                  generatePages();

                return (
                  <div
                    key={
                      kommune.navn
                    }
                    style={{
                      background:
                        "#1b1b1b",

                      padding:
                        "20px",

                      borderRadius:
                        "14px",

                      border:
                        "1px solid #2a2a2a",
                    }}
                  >
                    <div
                      style={{
                        display:
                          "flex",

                        justifyContent:
                          "space-between",

                        alignItems:
                          "center",

                        marginBottom:
                          "15px",
                      }}
                    >
                      <h3>
                        {
                          kommune.navn
                        }
                      </h3>

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

                    <p
                      style={{
                        color:
                          "#888",

                        marginBottom:
                          "12px",
                      }}
                    >
                      {
                        kommune.region
                      }
                    </p>

                    <p>
                      Fyldning:{" "}
                      {
                        kommune.fyldning
                      }
                      %
                    </p>

                    <p>
                      Deadline:{" "}
                      {
                        kommune.deadline
                      }
                    </p>

                    <div
                      style={{
                        marginTop:
                          "20px",

                        display:
                          "grid",

                        gridTemplateColumns:
                          "repeat(8, 1fr)",

                        gap: "6px",
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
            )}
          </div>
        </div>
      </main>
    );
  }

  return (
    <main
      style={{
        background: "#111",
        color: "white",
        minHeight: "100vh",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        fontFamily: "Arial",
      }}
    >
      <div
        style={{
          background: "#1c1c1c",
          padding: "40px",
          borderRadius: "12px",
          width: "350px",
        }}
      >
        <h1
          style={{
            marginBottom: "30px",
          }}
        >
          Magasin Login
        </h1>

        <input
          type="email"
          placeholder="Email"
          style={{
            width: "100%",
            padding: "12px",
            marginBottom: "15px",
            borderRadius: "8px",
            border: "none",
            background: "#333",
            color: "white",
          }}
        />

        <input
          type="password"
          placeholder="Password"
          style={{
            width: "100%",
            padding: "12px",
            marginBottom: "20px",
            borderRadius: "8px",
            border: "none",
            background: "#333",
            color: "white",
          }}
        />

        <button
          onClick={() =>
            setLoggedIn(true)
          }
          style={{
            width: "100%",
            padding: "12px",
            borderRadius: "8px",
            border: "none",
            background: "#fff",
            color: "#111",
            fontWeight: "bold",
            cursor: "pointer",
          }}
        >
          Login
        </button>
      </div>
    </main>
  );
}
