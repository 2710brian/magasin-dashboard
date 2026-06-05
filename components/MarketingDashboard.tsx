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

  const [
  marketingCategories,
  setMarketingCategories,
] = useState<any[]>([]);

const [
  categories,
  setCategories,
] = useState<any[]>([]);

const [
  dbAds,
  setDbAds,
] = useState<any[]>([]);

 async function loadCategories() {

  setMarketingCategories([
    {
      navn: "Kommuner",
      region: "Marketing",
    },
    {
      navn: "Advokater",
      region: "Marketing",
    },
    {
      navn: "Tandlæger",
      region: "Marketing",
    },
    {
      navn: "Plejehjem",
      region: "Marketing",
    },
  ]);
}
  
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

  loadCategories();

}, []);

  useEffect(() => {

  localStorage.setItem(
    "marketingCategories",

    JSON.stringify(
      marketingCategories
    )
  );

}, [marketingCategories]);

const selectedCategory =
  marketingCategories.find(
    (item) =>
      item.navn ===
      selectedKommune
  );

if (
  selectedCategory
) {

  return (
    <MarketingView
      selectedMagazine={
        selectedCategory
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
<MarketingSidebar
  regions={regions}

  marketingCategories={
    marketingCategories
  }

  setMarketingCategories={
    setMarketingCategories
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
          {marketingCategories.map(
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

                    setMarketingCategories(
  marketingCategories.filter(
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
