"use client";

import { useEffect, useState } from "react";

import PageEditor from "./PageEditor";
import SidePreview from "./SidePreview";

import { pages } from "../data/pages";

type MagazineViewProps = {
  setSelectedKommune: (
    kommune: string | null
  ) => void;

  kommune?: string;
};

export default function MagazineView({
  setSelectedKommune,
  kommune,
}: MagazineViewProps) {

  const [
    selectedPage,
    setSelectedPage,
  ] = useState<any | null>(
    null
  );

  useEffect(() => {
    console.log(
      "MagazineView loaded"
    );
  }, []);

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
          <h1>
            {kommune}
          </h1>

          <p
            style={{
              color: "#888",
            }}
          >
            56 sider • Under
            produktion
          </p>
        </div>

        <button
          onClick={() =>
            setSelectedKommune(
              null
            )
          }
          style={{
            background:
              "#1f1f1f",

            border:
              "1px solid #333",

            color: "white",

            padding:
              "12px 18px",

            borderRadius:
              "10px",

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
            premium={
              page.premium
            }
            ads={page.ads}
            onClick={() =>
              setSelectedPage(
                page
              )
            }
          />
        ))}
      </div>
    </div>
  );
}
