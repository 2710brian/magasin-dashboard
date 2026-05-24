"use client";

import { useState } from "react";

import PageEditor from "./PageEditor";
import SidePreview from "./SidePreview";

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
          <SidePreview
            key={page.side}
            side={page.side}
            premium={page.premium}
            layout={page.layout}
            onClick={() =>
              setSelectedPage(
                page.side
              )
            }
          />
        ))}
      </div>
    </div>
  );
}
