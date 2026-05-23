"use client";

import { useState } from "react";
import Sidebar from "../components/Sidebar";

export default function Home() {
  const [loggedIn, setLoggedIn] = useState(false);

  const regions = {
    "Region Hovedstaden": [
      "Albertslund",
      "Allerød",
      "Ballerup",
      "Bornholm",
      "Brøndby",
      "Dragør",
      "Egedal",
      "Fredensborg",
      "Frederiksberg",
      "Frederikssund",
      "Furesø",
      "Gentofte",
      "Gladsaxe",
      "Glostrup",
      "Gribskov",
      "Halsnæs",
      "Helsingør",
      "Herlev",
      "Hillerød",
      "Hvidovre",
      "Høje-Taastrup",
      "Hørsholm",
      "Ishøj",
      "København",
      "Lyngby-Taarbæk",
      "Rudersdal",
      "Rødovre",
      "Tårnby",
      "Vallensbæk",
    ],

    "Region Sjælland": [
      "Faxe",
      "Greve",
      "Guldborgsund",
      "Holbæk",
      "Kalundborg",
      "Køge",
      "Lejre",
      "Lolland",
      "Næstved",
      "Odsherred",
      "Ringsted",
      "Roskilde",
      "Slagelse",
      "Solrød",
      "Sorø",
      "Stevns",
      "Vordingborg",
    ],

    "Region Syddanmark": [
      "Assens",
      "Billund",
      "Esbjerg",
      "Fanø",
      "Fredericia",
      "Faaborg-Midtfyn",
      "Haderslev",
      "Kerteminde",
      "Kolding",
      "Langeland",
      "Middelfart",
      "Nordfyn",
      "Nyborg",
      "Odense",
      "Svendborg",
      "Sønderborg",
      "Tønder",
      "Varde",
      "Vejen",
      "Vejle",
      "Ærø",
      "Aabenraa",
    ],

    "Region Midtjylland": [
      "Aarhus",
      "Favrskov",
      "Hedensted",
      "Herning",
      "Holstebro",
      "Horsens",
      "Ikast-Brande",
      "Lemvig",
      "Norddjurs",
      "Odder",
      "Randers",
      "Ringkøbing-Skjern",
      "Samsø",
      "Silkeborg",
      "Skanderborg",
      "Skive",
      "Struer",
      "Syddjurs",
      "Viborg",
    ],

    "Region Nordjylland": [
      "Aalborg",
      "Brønderslev",
      "Frederikshavn",
      "Hjørring",
      "Jammerbugt",
      "Læsø",
      "Mariagerfjord",
      "Morsø",
      "Rebild",
      "Thisted",
      "Vesthimmerland",
    ],
  };

  const kommuner = Object.entries(regions).flatMap(
    ([region, kommuner]) =>
      kommuner.map((navn) => ({
        navn,
        region,
        status: "I salg",
        fyldning: Math.floor(Math.random() * 100),
        deadline: "25 maj",
      }))
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
        {/* SIDEBAR */}

        <div
          style={{
            width: "320px",
            background: "#161616",
            padding: "25px",
            borderRight: "1px solid #222",
            overflowY: "auto",
            height: "100vh",
          }}
        >
          <h2 style={{ marginBottom: "35px" }}>
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

          {Object.entries(regions).map(
            ([region, kommuner]) => (
              <div
                key={region}
                style={{
                  marginBottom: "30px",
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

                {kommuner.map((kommune) => (
                  <div
                    key={kommune}
                    style={{
                      padding: "10px",
                      marginBottom: "8px",
                      background: "#1f1f1f",
                      borderRadius: "8px",
                      cursor: "pointer",
                    }}
                  >
                    {kommune}
                  </div>
                ))}
              </div>
            )
          )}
        </div>

        {/* CONTENT */}

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
