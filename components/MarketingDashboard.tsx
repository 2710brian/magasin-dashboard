"use client";

import {
  useEffect,
  useState,
} from "react";

import MarketingSidebar from "./MarketingSidebar";
import MarketingCard from "./MarketingCard";
import MarketingView from "./MarketingView";

import { regions } from "../data/kommuner";

export default function MarketingDashboard() {

  const [
    selectedKommune,
    setSelectedKommune,
  ] = useState<string | null>(
    null
  );

  const defaultMagazines = [
  {
    navn: "Kommuner",
    region: "Offentlig",
  },

  {
    navn: "Lufthavne",
    region: "Transport",
  },

  {
    navn: "Privathospitaler",
    region: "Sundhed",
  },

  {
    navn: "Hørecentre",
    region: "Sundhed",
  },

  {
    navn: "Tandlæger",
    region: "Sundhed",
  },

  {
    navn: "Advokater",
    region: "Juridisk",
  },

  {
    navn: "Hjælpemidler",
    region: "Senior",
  },

  {
    navn: "Pleje & Hjemmehjælp",
    region: "Senior",
  },

  {
    navn: "Ejendomsmæglere",
    region: "Bolig",
  },

  {
    navn: "Bedemænd",
    region: "Senior",
  },

  {
    navn: "Banker",
    region: "Finans",
  },

  {
    navn: "Forsikring",
    region: "Finans",
  },

  {
    navn: "Plejehjem",
    region: "Senior",
  },

  {
    navn: "Seniorboliger",
    region: "Senior",
  },

  {
    navn: "Golf",
    region: "Fritid",
  },

  {
    navn: "Kultur",
    region: "Fritid",
  },

  {
    navn: "Apoteker",
    region: "Sundhed",
  },

  {
    navn: "Helse",
    region: "Sundhed",
  },

  {
    navn: "Rejsebureauer",
    region: "Rejser",
  },
];

  const [
    activeMagazines,
    setActiveMagazines,
  ] = useState<any[]>([]);
const [
  dbAds,
  setDbAds,
] = useState<any[]>([]);

async function loadAds() {

  const response =
    await fetch(
      "/api/get-ads"
    );

  const data =
    await response.json();

  if (
    data.success
  ) {

    setDbAds(
      data.ads
    );
  }
}

useEffect(() => {

  loadAds();

    const savedMagazines =
      localStorage.getItem(
        "activeMagazines"
      );

    if (
      savedMagazines
    ) {

      setActiveMagazines(
        JSON.parse(
          savedMagazines
        )
      );

    } else {

      setActiveMagazines(
        defaultMagazines
      );
    }

  }, []);

  useEffect(() => {

    localStorage.setItem(
      "activeMagazines",

      JSON.stringify(
        activeMagazines
      )
    );

  }, [activeMagazines]);

  const selectedMagazine =
    activeMagazines.find(
      (item) =>
        item.navn ===
        selectedKommune
    );

  if (
    selectedMagazine
  ) {

    return (
      <MarketingView
        selectedMagazine={
          selectedMagazine
        }

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
            Marketing Guide
          </h1>

          <p
            style={{
              color:
                "#888",
            }}
          >
            Oversigt over
            Opslagsværk for brancher, salgsstrategier og pitches
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
  <MarketingCard
    kommune={
      kommune
    }

    dbAds={
      dbAds
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
