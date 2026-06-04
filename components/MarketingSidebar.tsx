"use client";

import { useState } from "react";

import { locationData } from "../data/locationData";

type SidebarProps = {
  regions: {
    [key: string]: string[];
  };

  activeMagazines: any[];

  setActiveMagazines: any;

  selectedKommune: string;

  setSelectedKommune: (
    kommune: string
  ) => void;
};

export default function MarketingSidebar({
  regions,
  activeMagazines,
  setActiveMagazines,
  selectedKommune,
  setSelectedKommune,
}: SidebarProps) {

  const [
    showCreateModal,
    setShowCreateModal,
  ] = useState(false);

  const [
    newMagazineName,
    setNewMagazineName,
  ] = useState("");

  const [
    selectedCountry,
    setSelectedCountry,
  ] = useState("Danmark");

  const [
    selectedRegion,
    setSelectedRegion,
  ] = useState("");

  const [
    selectedProvince,
    setSelectedProvince,
  ] = useState("");

  const [
    selectedCity,
    setSelectedCity,
  ] = useState("");

  const [
    newMagazinePages,
    setNewMagazinePages,
  ] = useState(56);

  const handleClick = (
    kommune: string
  ) => {

    setSelectedKommune(
      kommune
    );
  };

  function createMagazine() {

    if (
      !newMagazineName
    ) {
      return;
    }

    setActiveMagazines([
      ...activeMagazines,

      {
        navn:
          newMagazineName,

        country:
          selectedCountry,

        region:
          selectedRegion,

        province:
          selectedProvince,

        city:
          selectedCity,

        fyldning: 0,

        deadline:
          "Ikke sat",

        totalPages:
          newMagazinePages,
      },
    ]);

    setShowCreateModal(
      false
    );

    setNewMagazineName(
      ""
    );

    setSelectedRegion(
      ""
    );

    setSelectedProvince(
      ""
    );

    setSelectedCity(
      ""
    );
  }

  const regionData =
    selectedRegion
      ? locationData[
          selectedCountry as keyof typeof locationData
        ][
          selectedRegion as keyof typeof locationData["Danmark"]
        ]
      : {};

  const provinces =
    Object.keys(
      regionData || {}
    );

  const cities =
    selectedProvince
      ? regionData[
          selectedProvince as keyof typeof regionData
        ] || []
      : [];

  return (
    <>
      <div
        style={{
          width: "320px",

          background: "#161616",

          padding: "25px",

          borderRight:
            "1px solid #222",

          overflowY:
            "scroll",

          height:
            "calc(100vh - 40px)",

          maxHeight:
            "calc(100vh - 40px)",
        }}
      >
        <h2
          style={{
            marginBottom:
              "20px",
          }}
        >
          Marketing Guide
        </h2>

        <button
          onClick={() =>
            setShowCreateModal(
              true
            )
          }

          style={{
            width:
              "100%",

            background:
              "#22c55e",

            color:
              "white",

            border:
              "none",

            borderRadius:
              "10px",

            padding:
              "12px",

            marginBottom:
              "30px",

            cursor:
              "pointer",

            fontWeight:
              700,
          }}
        >
          + Opret branche
        </button>

        {activeMagazines.map(
  (branche) => (

    <div
      key={
        branche.navn
      }

      onClick={() =>
        handleClick(
          branche.navn
        )
      }

      style={{
        padding:
          "10px",

        marginBottom:
          "8px",

        background:
          selectedKommune ===
          branche.navn
            ? "#2a2a2a"
            : "#1f1f1f",

        borderRadius:
          "8px",

        cursor:
          "pointer",

        display:
          "flex",

        alignItems:
          "center",

        justifyContent:
          "space-between",
      }}
    >
      <span>
        {branche.navn}
      </span>

      <div
        style={{
          width:
            "10px",

          height:
            "10px",

          borderRadius:
            "50%",

          background:
            "#22c55e",
        }}
      />
    </div>
  )
)}

      {showCreateModal && (

        <div
          style={{
            position:
              "fixed",

            inset: 0,

            background:
              "rgba(0,0,0,0.7)",

            display:
              "flex",

            alignItems:
              "center",

            justifyContent:
              "center",

            zIndex: 9999,
          }}
        >

          <div
            style={{
              width:
                "420px",

              background:
                "#1b1b1b",

              borderRadius:
                "14px",

              padding:
                "24px",

              border:
                "1px solid #333",
            }}
          >

            <h2
              style={{
                marginBottom:
                  "24px",
              }}
            >
              Opret magasin
            </h2>

            <div
              style={{
                marginBottom:
                  "16px",
              }}
            >
              <div
                style={{
                  marginBottom:
                    "8px",
                }}
              >
                Magasin navn
              </div>

              <input
                value={
                  newMagazineName
                }

                onChange={(
                  e
                ) =>
                  setNewMagazineName(
                    e.target.value
                  )
                }

                style={{
                  width:
                    "100%",

                  padding:
                    "12px",

                  borderRadius:
                    "10px",

                  border:
                    "1px solid #333",

                  background:
                    "#111",

                  color:
                    "white",
                }}
              />
            </div>

            <div
              style={{
                marginBottom:
                  "16px",
              }}
            >
              <div
                style={{
                  marginBottom:
                    "8px",
                }}
              >
                Land
              </div>

              <select
                value={
                  selectedCountry
                }

                onChange={(e) => {

                  setSelectedCountry(
                    e.target.value
                  );

                  setSelectedRegion(
                    ""
                  );

                  setSelectedProvince(
                    ""
                  );

                  setSelectedCity(
                    ""
                  );
                }}

                style={{
                  width:
                    "100%",

                  padding:
                    "12px",

                  borderRadius:
                    "10px",

                  border:
                    "1px solid #333",

                  background:
                    "#111",

                  color:
                    "white",
                }}
              >
                <option>
                  Danmark
                </option>

                <option>
                  Spanien
                </option>
              </select>
            </div>

            <div
              style={{
                marginBottom:
                  "16px",
              }}
            >
              <div
                style={{
                  marginBottom:
                    "8px",
                }}
              >
                Region
              </div>

              <select
                value={
                  selectedRegion
                }

                onChange={(e) => {

                  setSelectedRegion(
                    e.target.value
                  );

                  setSelectedProvince(
                    ""
                  );

                  setSelectedCity(
                    ""
                  );
                }}

                style={{
                  width:
                    "100%",

                  padding:
                    "12px",

                  borderRadius:
                    "10px",

                  border:
                    "1px solid #333",

                  background:
                    "#111",

                  color:
                    "white",
                }}
              >
                <option value="">
                  Vælg region
                </option>

                {Object.keys(
                  locationData[
                    selectedCountry as keyof typeof locationData
                  ]
                ).map(
                  (
                    region
                  ) => (

                    <option
                      key={region}
                      value={region}
                    >
                      {region}
                    </option>
                  )
                )}
              </select>
            </div>

            <div
              style={{
                marginBottom:
                  "16px",
              }}
            >
              <div
                style={{
                  marginBottom:
                    "8px",
                }}
              >
                Provins
              </div>

              <select
                value={
                  selectedProvince
                }

                onChange={(e) => {

                  setSelectedProvince(
                    e.target.value
                  );

                  setSelectedCity(
                    ""
                  );
                }}

                style={{
                  width:
                    "100%",

                  padding:
                    "12px",

                  borderRadius:
                    "10px",

                  border:
                    "1px solid #333",

                  background:
                    "#111",

                  color:
                    "white",
                }}
              >
                <option value="">
                  Vælg provins
                </option>

                {provinces.map(
                  (
                    province
                  ) => (

                    <option
                      key={
                        province
                      }

                      value={
                        province
                      }
                    >
                      {province}
                    </option>
                  )
                )}
              </select>
            </div>

            <div
              style={{
                marginBottom:
                  "16px",
              }}
            >
              <div
                style={{
                  marginBottom:
                    "8px",
                }}
              >
                By / Kommune
              </div>

              <select
                value={
                  selectedCity
                }

                onChange={(e) =>
                  setSelectedCity(
                    e.target.value
                  )
                }

                style={{
                  width:
                    "100%",

                  padding:
                    "12px",

                  borderRadius:
                    "10px",

                  border:
                    "1px solid #333",

                  background:
                    "#111",

                  color:
                    "white",
                }}
              >
                <option value="">
                  Vælg by
                </option>

                {cities.map(
                  (
                    city: string
                  ) => (

                    <option
                      key={city}
                      value={city}
                    >
                      {city}
                    </option>
                  )
                )}
              </select>
            </div>

            <div
              style={{
                marginBottom:
                  "24px",
              }}
            >
              <div
                style={{
                  marginBottom:
                    "8px",
                }}
              >
                Antal sider
              </div>

              <input
                type="number"

                value={
                  newMagazinePages
                }

                onChange={(
                  e
                ) =>
                  setNewMagazinePages(
                    Number(
                      e.target.value
                    )
                  )
                }

                style={{
                  width:
                    "100%",

                  padding:
                    "12px",

                  borderRadius:
                    "10px",

                  border:
                    "1px solid #333",

                  background:
                    "#111",

                  color:
                    "white",
                }}
              />
            </div>

            <div
              style={{
                display:
                  "flex",

                gap:
                  "12px",
              }}
            >

              <button
                onClick={() =>
                  setShowCreateModal(
                    false
                  )
                }

                style={{
                  flex: 1,

                  background:
                    "#333",

                  color:
                    "white",

                  border:
                    "none",

                  padding:
                    "12px",

                  borderRadius:
                    "10px",

                  cursor:
                    "pointer",
                }}
              >
                Luk
              </button>

              <button
                onClick={
                  createMagazine
                }

                style={{
                  flex: 1,

                  background:
                    "#22c55e",

                  color:
                    "white",

                  border:
                    "none",

                  padding:
                    "12px",

                  borderRadius:
                    "10px",

                  cursor:
                    "pointer",

                  fontWeight:
                    700,
                }}
              >
                Opret
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
