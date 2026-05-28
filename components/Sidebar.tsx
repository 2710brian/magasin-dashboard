"use client";

import { useState } from "react";

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

export default function Sidebar({
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
    newMagazineRegion,
    setNewMagazineRegion,
  ] = useState(
    Object.keys(regions)[0]
  );

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

        region:
          newMagazineRegion,

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
  }

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
          Magasin System
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
          + Opret magasin
        </button>

        <div
          style={{
            marginBottom:
              "35px",
          }}
        >
          <div
            style={{
              marginBottom:
                "12px",
            }}
          >
            Dashboard
          </div>

          <div
            style={{
              marginBottom:
                "12px",
            }}
          >
            Omsætning
          </div>

          <div
            style={{
              marginBottom:
                "12px",
            }}
          >
            Deadlines
          </div>

          <div
            style={{
              marginBottom:
                "12px",
            }}
          >
            Premium sider
          </div>
        </div>

        {Object.entries(
          regions
        ).map(
          ([region, kommuner]) => (
            <div
              key={region}

              style={{
                marginBottom:
                  "30px",
              }}
            >
              <h3
                style={{
                  color:
                    "#888",

                  marginBottom:
                    "12px",
                }}
              >
                {region}
              </h3>

              {kommuner.map(
                (kommune) => {

                  const isActive =
                    activeMagazines.some(
                      (
                        item
                      ) =>
                        item.navn ===
                        kommune
                    );

                  return (
                    <div
                      key={kommune}

                      onClick={() => {

                        if (
                          !isActive
                        ) {

                          const confirmCreate =
                            confirm(
                              `Opret magasin for ${kommune}?`
                            );

                          if (
                            !confirmCreate
                          ) {
                            return;
                          }

                          setActiveMagazines([
                            ...activeMagazines,

                            {
                              navn:
                                kommune,

                              region,

                              fyldning: 0,

                              deadline:
                                "Ikke sat",

                              totalPages: 56,
                            },
                          ]);

                          return;
                        }

                        handleClick(
                          kommune
                        );
                      }}

                      style={{
                        padding:
                          "10px",

                        marginBottom:
                          "8px",

                        background:
                          selectedKommune ===
                          kommune
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
                        {kommune}
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
                            isActive
                              ? "#22c55e"
                              : "#ef4444",
                        }}
                      />
                    </div>
                  );
                }
              )}
            </div>
          )
        )}
      </div>

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
                Region
              </div>

              <select
                value={
                  newMagazineRegion
                }

                onChange={(
                  e
                ) =>
                  setNewMagazineRegion(
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
                {Object.keys(
                  regions
                ).map(
                  (
                    region
                  ) => (

                    <option
                      key={
                        region
                      }
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
