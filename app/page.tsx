"use client";

import { useState } from "react";

export default function Home() {
  const [loggedIn, setLoggedIn] = useState(false);

  const kommuner = [
    // REGION HOVEDSTADEN
    {
      navn: "København",
      region: "Region Hovedstaden",
      status: "I salg",
      fyldning: 72,
      deadline: "18 maj",
    },
    {
      navn: "Frederiksberg",
      region: "Region Hovedstaden",
      status: "Under produktion",
      fyldning: 84,
      deadline: "22 maj",
    },
    {
      navn: "Gentofte",
      region: "Region Hovedstaden",
      status: "Ikke startet",
      fyldning: 22,
      deadline: "28 maj",
    },
    {
      navn: "Helsingør",
      region: "Region Hovedstaden",
      status: "I salg",
      fyldning: 55,
      deadline: "24 maj",
    },
    {
      navn: "Hillerød",
      region: "Region Hovedstaden",
      status: "Klar til print",
      fyldning: 96,
      deadline: "12 maj",
    },

    // REGION SJÆLLAND
    {
      navn: "Roskilde",
      region: "Region Sjælland",
      status: "I salg",
      fyldning: 61,
      deadline: "19 maj",
    },
    {
      navn: "Næstved",
      region: "Region Sjælland",
      status: "Under produktion",
      fyldning: 82,
      deadline: "20 maj",
    },
    {
      navn: "Slagelse",
      region: "Region Sjælland",
      status: "Ikke startet",
      fyldning: 18,
      deadline: "30 maj",
    },
    {
      navn: "Holbæk",
      region: "Region Sjælland",
      status: "I salg",
      fyldning: 49,
      deadline: "26 maj",
    },

    // REGION SYDDANMARK
    {
      navn: "Odense",
      region: "Region Syddanmark",
      status: "Under produktion",
      fyldning: 88,
      deadline: "17 maj",
    },
    {
      navn: "Kolding",
      region: "Region Syddanmark",
      status: "I salg",
      fyldning: 57,
      deadline: "25 maj",
    },
    {
      navn: "Esbjerg",
      region: "Region Syddanmark",
      status: "Ikke startet",
      fyldning: 12,
      deadline: "31 maj",
    },
    {
      navn: "Vejle",
      region: "Region Syddanmark",
      status: "I salg",
      fyldning: 69,
      deadline: "21 maj",
    },

    // REGION MIDTJYLLAND
    {
      navn: "Aarhus",
      region: "Region Midtjylland",
      status: "Under produktion",
      fyldning: 91,
      deadline: "16 maj",
    },
    {
      navn: "Randers",
      region: "Region Midtjylland",
      status: "I salg",
      fyldning: 63,
      deadline: "24 maj",
    },
    {
      navn: "Horsens",
      region: "Region Midtjylland",
      status: "I salg",
      fyldning: 58,
      deadline: "27 maj",
    },
    {
      navn: "Silkeborg",
      region: "Region Midtjylland",
      status: "Ikke startet",
      fyldning: 15,
      deadline: "2 juni",
    },

    // REGION NORDJYLLAND
    {
      navn: "Aalborg",
      region: "Region Nordjylland",
      status: "I salg",
      fyldning: 73,
      deadline: "20 maj",
    },
    {
      navn: "Hjørring",
      region: "Region Nordjylland",
      status: "Ikke startet",
      fyldning: 11,
      deadline: "3 juni",
    },
    {
      navn: "Frederikshavn",
      region: "Region Nordjylland",
      status: "Under produktion",
      fyldning: 79,
      deadline: "18 maj",
    },
  ];

  const regions = [
    "Region Hovedstaden",
    "Region Sjælland",
    "Region Syddanmark",
    "Region Midtjylland",
    "Region Nordjylland",
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
            width: "280px",
            background: "#161616",
            padding: "25px",
            borderRight: "1px solid #222",
            overflowY: "auto",
          }}
        >
          <h2 style={{ marginBottom: "40px" }}>
            Magasin System
          </h2>

          <div style={{ marginBottom: "35px" }}>
            <div style={{ marginBottom: "12px" }}>
              Dashboard
            </div>

            <div style={{ marginBottom: "12px" }}>
              Omsætning
            </div>

            <div style={{ marginBottom: "12px" }}>
              Deadlines
            </div>

            <div style={{ marginBottom: "12px" }}>
              Premium sider
            </div>
          </div>

          {regions.map((region) => (
            <div
              key={region}
              style={{
                marginBottom: "25px",
              }}
            >
              <h3
                style={{
                  color: "#888",
                  marginBottom: "12px",
                }}
              >
                {region}
              </h3>

              {kommuner
                .filter((k) => k.region === region)
                .map((kommune) => (
                  <div
                    key={kommune.navn}
                    style={{
                      padding: "8px 10px",
                      borderRadius: "8px",
                      marginBottom: "6px",
                      background: "#1f1f1f",
                      cursor: "pointer",
                    }}
                  >
                    {kommune.navn}
                  </div>
                ))}
            </div>
          ))}
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
              <p style={{ fontSize: "30px" }}>24</p>
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
              <p style={{ fontSize: "30px" }}>18</p>
            </div>
          </div>

          {/* KOMMUNER */}

          <h2 style={{ marginBottom: "20px" }}>
            Alle kommuner
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
