"use client";

import { useState } from "react";

export default function Home() {
  const [loggedIn, setLoggedIn] = useState(false);

  const kommuner = [
    // REGION HOVEDSTADEN
    { navn: "Albertslund", region: "Region Hovedstaden", status: "I salg", fyldning: 45, deadline: "18 maj" },
    { navn: "Allerød", region: "Region Hovedstaden", status: "I salg", fyldning: 61, deadline: "20 maj" },
    { navn: "Ballerup", region: "Region Hovedstaden", status: "Under produktion", fyldning: 88, deadline: "14 maj" },
    { navn: "Bornholm", region: "Region Hovedstaden", status: "Ikke startet", fyldning: 12, deadline: "28 maj" },
    { navn: "Brøndby", region: "Region Hovedstaden", status: "I salg", fyldning: 55, deadline: "22 maj" },
    { navn: "Dragør", region: "Region Hovedstaden", status: "I salg", fyldning: 48, deadline: "24 maj" },
    { navn: "Egedal", region: "Region Hovedstaden", status: "Under produktion", fyldning: 76, deadline: "17 maj" },
    { navn: "Fredensborg", region: "Region Hovedstaden", status: "I salg", fyldning: 66, deadline: "25 maj" },
    { navn: "Frederiksberg", region: "Region Hovedstaden", status: "Klar til print", fyldning: 97, deadline: "11 maj" },
    { navn: "Frederikssund", region: "Region Hovedstaden", status: "I salg", fyldning: 58, deadline: "21 maj" },
    { navn: "Furesø", region: "Region Hovedstaden", status: "Ikke startet", fyldning: 9, deadline: "31 maj" },
    { navn: "Gentofte", region: "Region Hovedstaden", status: "Under produktion", fyldning: 84, deadline: "16 maj" },
    { navn: "Gladsaxe", region: "Region Hovedstaden", status: "I salg", fyldning: 64, deadline: "19 maj" },
    { navn: "Glostrup", region: "Region Hovedstaden", status: "I salg", fyldning: 53, deadline: "22 maj" },
    { navn: "Gribskov", region: "Region Hovedstaden", status: "Ikke startet", fyldning: 18, deadline: "30 maj" },
    { navn: "Halsnæs", region: "Region Hovedstaden", status: "I salg", fyldning: 49, deadline: "23 maj" },
    { navn: "Helsingør", region: "Region Hovedstaden", status: "Under produktion", fyldning: 82, deadline: "15 maj" },
    { navn: "Herlev", region: "Region Hovedstaden", status: "I salg", fyldning: 57, deadline: "20 maj" },
    { navn: "Hillerød", region: "Region Hovedstaden", status: "Klar til print", fyldning: 98, deadline: "10 maj" },
    { navn: "Hvidovre", region: "Region Hovedstaden", status: "I salg", fyldning: 63, deadline: "18 maj" },
    { navn: "Høje-Taastrup", region: "Region Hovedstaden", status: "Under produktion", fyldning: 75, deadline: "17 maj" },
    { navn: "Hørsholm", region: "Region Hovedstaden", status: "I salg", fyldning: 52, deadline: "26 maj" },
    { navn: "Ishøj", region: "Region Hovedstaden", status: "Ikke startet", fyldning: 14, deadline: "1 juni" },
    { navn: "København", region: "Region Hovedstaden", status: "Under produktion", fyldning: 92, deadline: "13 maj" },
    { navn: "Lyngby-Taarbæk", region: "Region Hovedstaden", status: "I salg", fyldning: 67, deadline: "21 maj" },
    { navn: "Rudersdal", region: "Region Hovedstaden", status: "I salg", fyldning: 59, deadline: "24 maj" },
    { navn: "Rødovre", region: "Region Hovedstaden", status: "I salg", fyldning: 51, deadline: "22 maj" },
    { navn: "Tårnby", region: "Region Hovedstaden", status: "Under produktion", fyldning: 81, deadline: "16 maj" },
    { navn: "Vallensbæk", region: "Region Hovedstaden", status: "Ikke startet", fyldning: 11, deadline: "2 juni" },

    // REGION SJÆLLAND
    { navn: "Faxe", region: "Region Sjælland", status: "I salg", fyldning: 44, deadline: "23 maj" },
    { navn: "Greve", region: "Region Sjælland", status: "Under produktion", fyldning: 74, deadline: "18 maj" },
    { navn: "Guldborgsund", region: "Region Sjælland", status: "Ikke startet", fyldning: 16, deadline: "1 juni" },
    { navn: "Holbæk", region: "Region Sjælland", status: "I salg", fyldning: 56, deadline: "25 maj" },
    { navn: "Kalundborg", region: "Region Sjælland", status: "I salg", fyldning: 61, deadline: "22 maj" },
    { navn: "Køge", region: "Region Sjælland", status: "Under produktion", fyldning: 79, deadline: "17 maj" },
    { navn: "Lejre", region: "Region Sjælland", status: "Ikke startet", fyldning: 13, deadline: "30 maj" },
    { navn: "Lolland", region: "Region Sjælland", status: "I salg", fyldning: 47, deadline: "24 maj" },
    { navn: "Næstved", region: "Region Sjælland", status: "Under produktion", fyldning: 83, deadline: "15 maj" },
    { navn: "Odsherred", region: "Region Sjælland", status: "I salg", fyldning: 54, deadline: "27 maj" },
    { navn: "Ringsted", region: "Region Sjælland", status: "I salg", fyldning: 63, deadline: "21 maj" },
    { navn: "Roskilde", region: "Region Sjælland", status: "Under produktion", fyldning: 88, deadline: "14 maj" },
    { navn: "Slagelse", region: "Region Sjælland", status: "I salg", fyldning: 57, deadline: "26 maj" },
    { navn: "Solrød", region: "Region Sjælland", status: "Ikke startet", fyldning: 10, deadline: "3 juni" },
    { navn: "Sorø", region: "Region Sjælland", status: "I salg", fyldning: 48, deadline: "24 maj" },
    { navn: "Stevns", region: "Region Sjælland", status: "I salg", fyldning: 50, deadline: "25 maj" },
    { navn: "Vordingborg", region: "Region Sjælland", status: "Under produktion", fyldning: 76, deadline: "18 maj" },
  ];

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
        <div
          style={{
            width: "300px",
            background: "#161616",
            padding: "25px",
            borderRight: "1px solid #222",
            overflowY: "auto",
            height: "100vh",
          }}
        >
          <h2 style={{ marginBottom: "30px" }}>
            Magasin System
          </h2>

          <div style={{ marginBottom: "30px" }}>
            <div style={{ marginBottom: "10px" }}>
              Dashboard
            </div>

            <div style={{ marginBottom: "10px" }}>
              Omsætning
            </div>

            <div style={{ marginBottom: "10px" }}>
              Deadlines
            </div>
          </div>

          <h3
            style={{
              color: "#888",
              marginBottom: "15px",
            }}
          >
            Kommuner
          </h3>

          {kommuner.map((kommune) => (
            <div
              key={kommune.navn}
              style={{
                padding: "10px",
                marginBottom: "8px",
                background: "#1f1f1f",
                borderRadius: "8px",
                cursor: "pointer",
              }}
            >
              {kommune.navn}
            </div>
          ))}
        </div>

        <div
          style={{
            flex: 1,
            padding: "30px",
            overflowY: "auto",
          }}
        >
          <h1 style={{ marginBottom: "30px" }}>
            Dashboard
          </h1>

          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(4, 1fr)",
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
              <p style={{ fontSize: "30px" }}>
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
              <h3>Aktive magasiner</h3>
              <p style={{ fontSize: "30px" }}>
                97
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
              <p style={{ fontSize: "30px" }}>
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
              <p style={{ fontSize: "30px" }}>
                42
              </p>
            </div>
          </div>

          <h2 style={{ marginBottom: "20px" }}>
            Kommuneoversigt
          </h2>

          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(3, 1fr)",
              gap: "20px",
            }}
          >
            {kommuner.map((kommune) => (
              <div
                key={kommune.navn}
                style={{
                  background: "#1b1b1b",
                  padding: "20px",
                  borderRadius: "14px",
                }}
              >
                <h3>{kommune.navn}</h3>

                <p
                  style={{
                    color: "#888",
                    marginBottom: "15px",
                  }}
                >
                  {kommune.region}
                </p>

                <p>Status: {kommune.status}</p>

                <p>
                  Fyldning: {kommune.fyldning}%
                </p>

                <p>
                  Deadline: {kommune.deadline}
                </p>
              </div>
            ))}
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
        <h1 style={{ marginBottom: "30px" }}>
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
          onClick={() => setLoggedIn(true)}
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
