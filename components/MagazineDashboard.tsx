"use client";

import { useState } from "react";

import Sidebar from "./Sidebar";
import MagazineCard from "./MagazineCard";
import MagazineView from "./MagazineView";

import { regions } from "../data/regions";

export default function MagazineDashboard() {

  const [
    selectedKommune,
    setSelectedKommune,
  ] = useState<string | null>(
    null
  );

  const activeMagazines = [
    {
      navn:
        "Senior Guiden Fyn",

      region:
        "Region Syddanmark",

      fyldning: 78,

      deadline:
        "14 Juni 2026",
    },

    {
      navn:
        "Senior Guiden Aarhus",

      region:
        "Region Midtjylland",

      fyldning: 82,

      deadline:
        "18 Juni 2026",
    },

    {
      navn:
        "Senior Guiden Trekanten",

      region:
        "Region Syddanmark",

      fyldning: 69,

      deadline:
        "22 Juni 2026",
    },

    {
      navn:
        "Senior Guiden Sønderjylland",

      region:
        "Region Syddanmark",

      fyldning: 74,

      deadline:
        "25 Juni 2026",
    },

    {
      navn:
        "Senior Guiden Aalborg",

      region:
        "Region Nordjylland",

      fyldning: 91,

      deadline:
        "12 Juni 2026",
    },

    {
      navn:
        "Senior Guiden Hjørring",

      region:
        "Region Nordjylland",

      fyldning: 64,

      deadline:
        "19 Juni 2026",
    },

    {
      navn:
        "Senior Guiden Brønderslev",

      region:
        "Region Nordjylland",

      fyldning: 57,

      deadline:
        "27 Juni 2026",
    },

    {
      navn:
        "Senior Guiden Jammerbugt",

      region:
        "Region Nordjylland",

      fyldning: 71,

      deadline:
        "30 Juni 2026",
    },
  ];

  if (
    selectedKommune
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
            aktive magasiner
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
          {activeMagazines.map(
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
