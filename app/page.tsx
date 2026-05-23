"use client";

import { useState } from "react";

export default function Home() {
  const [loggedIn, setLoggedIn] = useState(false);

  const regions = [
    {
      name: "Region Nordjylland",
      kommuner: ["Aalborg", "Hjørring", "Frederikshavn"],
    },
    {
      name: "Region Midtjylland",
      kommuner: ["Aarhus", "Randers", "Horsens"],
    },
    {
      name: "Region Syddanmark",
      kommuner: ["Odense", "Kolding", "Esbjerg"],
    },
    {
      name: "Region Sjælland",
      kommuner: ["Roskilde", "Næstved", "Slagelse"],
    },
    {
      name: "Region Hovedstaden",
      kommuner: ["København", "Hillerød", "Bornholm"],
    },
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
        {/* SIDEBAR */}

        <div
          style={{
            width: "260px",
            background: "#161616",
            padding: "25px",
            borderRight: "1px solid #222",
          }}
        >
          <h2 style={{ marginBottom: "40px" }}>
            Magasin System
          </h2>

          <div style={{ marginBottom: "30px" }}>
            <p style={{ color: "#888", marginBottom: "10px" }}>
              OVERBLIK
            </p>

            <div style={{ marginBottom: "12px" }}>
              Dashboard
            </div>

            <div style={{ marginBottom: "12px" }}>
              Deadlines
            </div>

            <div style={{ marginBottom: "12px" }}>
              Omsætning
            </div>
          </div>

          <div>
            <p style={{ color: "#888", marginBottom: "10px" }}>
              REGIONER
            </p>

            {regions.map((region) => (
              <div
                key={region.name}
                style={{
                  marginBottom: "18px",
                }}
              >
                <div
                  style={{
                    fontWeight: "bold",
                    marginBottom: "8px",
                  }}
                >
                  {region.name}
                </div>

                {region.kommuner.map((kommune) => (
                  <div
                    key={kommune}
                    style={{
                      paddingLeft: "10px",
                      marginBottom: "6px",
                      color: "#bbb",
                      cursor: "pointer",
                    }}
                  >
                    {kommune}
                  </div>
                ))}
              </div>
            ))}
          </div>
        </div>

        {/* CONTENT */}

        <div
          style={{
            flex: 1,
            padding: "30px",
          }}
        >
          <h1 style={{ marginBottom: "30px" }}>
            Dashboard
          </h1>

          {/* TOP CARDS */}

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
              <p style={{ fontSize: "28px" }}>97</p>
            </div>

            <div
              style={{
                background: "#1b1b1b",
                padding: "25px",
                borderRadius: "14px",
              }}
            >
              <h3>Aktive magasiner</h3>
              <p style={{ fontSize: "28px" }}>24</p>
            </div>

            <div
              style={{
                background: "#1b1b1b",
                padding: "25px",
                borderRadius: "14px",
              }}
            >
              <h3>Omsætning</h3>
              <p style={{ fontSize: "28px" }}>
                485.000 kr.
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
              <p style={{ fontSize: "28px" }}>18</p>
            </div>
          </div>

          {/* KOMMUNE GRID */}

          <h2 style={{ marginBottom: "20px" }}>
            Aktive kommuner
          </h2>

          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(3, 1fr)",
              gap: "20px",
            }}
          >
            {[
              "Aalborg",
              "Aarhus",
              "Odense",
              "Roskilde",
              "Horsens",
              "Kolding",
            ].map((kommune) => (
              <div
                key={kommune}
                style={{
                  background: "#1b1b1b",
                  padding: "20px",
                  borderRadius: "14px",
                }}
              >
                <h3>{kommune}</h3>

                <p>Status: I salg</p>
                <p>Fyldning: 68%</p>
                <p>Deadline: 18 maj</p>
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
