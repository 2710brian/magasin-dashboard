"use client";

import { useState } from "react";
import PageEditor from "./PageEditor";

type MagazineViewProps = {
  setSelectedKommune: (
    kommune: string | null
  ) => void;
};

export default function MagazineView({
  setSelectedKommune,
}: MagazineViewProps) {
  const [selectedPage, setSelectedPage] =
    useState<number | null>(null);

  const pages = Array.from(
    { length: 56 },
    (_, i) => {
      const side = i + 1;

      let layout = "1 helside";

      if (side % 5 === 0) {
        layout = "4 kvart";
      } else if (side % 3 === 0) {
        layout = "2 halve";
      }

      return {
        side,
        layout,

        premium:
          side === 3 ||
          side === 28 ||
          side === 29 ||
          side === 56,
      };
    }
  );

  if (selectedPage) {
    return (
      <PageEditor
        selectedPage={
          selectedPage
        }
        setSelectedPage={
          setSelectedPage
        }
      />
    );
  }

  return (
    <div>
      {/* HEADER */}

      <div
        style={{
          display: "flex",
          justifyContent:
            "space-between",

          alignItems: "center",

          marginBottom: "30px",
        }}
      >
        <div>
          <h1>Aalborg</h1>

          <p
            style={{
              color: "#888",
            }}
          >
            56 sider • Under produktion
          </p>
        </div>

        <button
          onClick={() =>
            setSelectedKommune(
              null
            )
          }
          style={{
            background: "#1f1f1f",
            border: "1px solid #333",
            color: "white",
            padding:
              "12px 18px",
            borderRadius: "10px",
            cursor: "pointer",
          }}
        >
          Tilbage
        </button>
      </div>

      {/* SIDER */}

      <div
        style={{
          display: "grid",
          gridTemplateColumns:
            "repeat(4, 1fr)",

          gap: "20px",
        }}
      >
        {pages.map((page) => (
          <div
            key={page.side}
            onClick={() =>
              setSelectedPage(
                page.side
              )
            }
            style={{
              background: "#1b1b1b",

              borderRadius: "14px",

              padding: "20px",

              cursor: "pointer",

              border:
                page.premium
                  ? "2px solid gold"
                  : "1px solid #2a2a2a",
            }}
          >
            <div
              style={{
                display: "flex",

                justifyContent:
                  "space-between",

                marginBottom: "20px",
              }}
            >
              <h3>
                Side {page.side}
              </h3>

              {page.premium && (
                <div
                  style={{
                    color: "gold",
                    fontSize:
                      "12px",
                  }}
                >
                  PREMIUM
                </div>
              )}
            </div>

            <div
              style={{
                background: "#111",

                borderRadius: "10px",

                padding: "12px",

                width: "100%",

                aspectRatio:
                  "210 / 297",

                display: "flex",

                flexDirection:
                  "column",

                gap: "8px",
              }}
            >
              <div
                style={{
                  flex: 1,

                  background:
                    "#22c55e",

                  borderRadius:
                    "6px",
                }}
              />
            </div>

            <div
              style={{
                marginTop: "15px",
                color: "#888",
                fontSize: "14px",
              }}
            >
              Layout: {page.layout}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
