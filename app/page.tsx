"use client";

import { useState } from "react";
import Sidebar from "../components/Sidebar";
import MagazineCard from "../components/MagazineCard";
import MagazineView from "../components/MagazineView";
import { regions } from "../data/kommuner";

export default function Home() {
  const [loggedIn, setLoggedIn] = useState(false);

  const [selectedKommune, setSelectedKommune] =
    useState<string | null>(null);

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
