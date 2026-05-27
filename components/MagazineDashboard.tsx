"use client";

import { useState } from "react";

import Sidebar from "./Sidebar";
import MagazineCard from "./MagazineCard";
import MagazineView from "./MagazineView";

import { regions } from "../data/kommuner";

export default function MagazineDashboard() {

  const [
    selectedKommune,
    setSelectedKommune,
  ] = useState<string | null>(
    null
  );

  const [
    activeMagazines,
    setActiveMagazines,
  ] = useState([
    {
      navn:
        "Aalborg",

      region:
        "Region Nordjylland",

      fyldning: 91,

      deadline:
        "12 Juni 2026",
    },

    {
      navn:
        "Hjørring",

      region:
        "Region Nordjylland",

      fyldning: 64,

      deadline:
        "19 Juni 2026",
    },

    {
      navn:
        "Brønderslev",

      region:
        "Region Nordjylland",

      fyldning: 57,

      deadline:
        "27 Juni 2026",
    },

    {
      navn:
        "Jammerbugt",

      region:
        "Region Nordjylland",

      fyldning: 71,

      deadline:
        "30 Juni 2026",
    },

    {
      navn:
        "Aarhus",

      region:
        "Region Midtjylland",

      fyldning: 82,

      deadline:
        "18 Juni 2026",
    },
  ]);

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

        activeMagazines={
          activeMagazines
        }

        setActiveMagazines={
          setActiveMagazines
        }

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

                style={{
                  position:
                    "relative",
                }}
              >
                <div
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

                <button
                  onClick={() => {

                    const confirmDelete =
                      confirm(
                        `Slet ${kommune.navn}?`
                      );

                    if (
                      !confirmDelete
                    ) {
                      return;
                    }

                    setActiveMagazines(
                      activeMagazines.filter(
                        (
                          item
                        ) =>
                          item.navn !==
                          kommune.navn
                      )
                    );
                  }}

                  style={{
                    position:
                      "absolute",

                    top: "12px",

                    right: "12px",

                    background:
                      "#ef4444",

                    color:
                      "white",

                    border:
                      "none",

                    borderRadius:
                      "8px",

                    padding:
                      "6px 10px",

                    cursor:
                      "pointer",

                    fontSize:
                      "12px",
                  }}
                >
                  Slet
                </button>
              </div>
            )
          )}
        </div>
      </div>
    </div>
  );
}
