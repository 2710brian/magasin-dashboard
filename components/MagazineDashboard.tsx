"use client";

import { useState } from "react";

import Sidebar from "./Sidebar";
import MagazineCard from "./MagazineCard";
import MagazineView from "./MagazineView";

const regions = {
  Nordjylland: [
    "Aalborg",
    "Hjørring",
    "Frederikshavn",
    "Brønderslev",
    "Jammerbugt",
  ],

  Midtjylland: [
    "Aarhus",
    "Randers",
    "Herning",
    "Silkeborg",
    "Viborg",
  ],

  Syddanmark: [
    "Odense",
    "Esbjerg",
    "Kolding",
    "Vejle",
    "Sønderborg",
  ],

  Sjælland: [
    "Roskilde",
    "Næstved",
    "Slagelse",
    "Køge",
    "Holbæk",
  ],

  Hovedstaden: [
    "København",
    "Frederiksberg",
    "Helsingør",
    "Hillerød",
    "Lyngby",
  ],
};

export default function MagazineDashboard() {

  const [
    selectedKommune,
    setSelectedKommune,
  ] = useState<string | null>(
    null
  );

  const allKommuner =
    Object.entries(
      regions
    ).flatMap(
      ([region, kommuner]) =>
        kommuner.map(
          (kommune) => ({
            navn:
              kommune,

            region,

            fyldning:
              Math.floor(
                Math.random() *
                  40
              ) + 60,

            deadline:
              "14 Juni 2026",
          })
        )
    );

  const selectedMagazine =
    allKommuner.find(
      (kommune) =>
        kommune.navn ===
        selectedKommune
    );

  if (
    selectedMagazine
  ) {

    return (
      <MagazineView
        setSelectedKommune={
          setSelectedKommune
        }
      />
    );
  }

  return (
    <div
      style={{
        display: "flex",

        height: "100%",
      }}
    >
      <Sidebar
        regions={regions}

        selectedKommune={
          selectedKommune ||
          ""
        }

        setSelectedKommune={
          setSelectedKommune
        }
      />

      <div
        style={{
          flex: 1,

          padding: "30px",

          overflowY:
            "auto",
        }}
      >
        <div
          style={{
            marginBottom:
              "30px",
          }}
        >
          <h1>
            Aktive magasiner
          </h1>

          <p
            style={{
              color:
                "#888",
            }}
          >
            Oversigt over
            aktive kommuner
            og magasiner
          </p>
        </div>

        <div
          style={{
            display:
              "grid",

            gridTemplateColumns:
              "repeat(auto-fill, minmax(320px, 1fr))",

            gap: "20px",
          }}
        >
          {allKommuner.map(
            (
              kommune
            ) => (

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
      </div>
    </div>
  );
}
