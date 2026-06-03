"use client";

import {
  useEffect,
  useState,
} from "react";

import PageEditor from "./PageEditor";
import SidePreview from "./SidePreview";

import { pages } from "../data/pages";

type MagazineViewProps = {
  selectedMagazine: any;

  setSelectedKommune: (
    kommune: string | null
  ) => void;
};

export default function MagazineView({
  selectedMagazine,
  setSelectedKommune,
}: MagazineViewProps) {

  const [
    selectedPageSide,
    setSelectedPageSide,
  ] = useState<number | null>(
    null
  );

  const [
    dbAds,
    setDbAds,
  ] = useState<any[]>([]);

  async function loadAds() {

    try {

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

    } catch (error) {

      console.error(
        error
      );
    }
  }

  useEffect(() => {

  loadAds();

}, []);

  const totalPages =
    selectedMagazine?.totalPages ||
    56;

  const generatedPages =
    Array.from(
      {
        length:
          totalPages,
      },
      (_, i) => {

        const side =
          i + 1;

    const ads =
  dbAds.filter(
    (ad) =>
      Number(ad.page) ===
        Number(side) &&
      ad.magazinename ===
        selectedMagazine?.navn
  );

        return {

          side,

          premium:
            side === 3 ||
            side === 28 ||
            side ===
              totalPages,

          ads,
        };
      }
    );

  const selectedPage =
    generatedPages.find(
      (page) =>
        page.side ===
        selectedPageSide
    );

  if (selectedPage) {

    return (
     <PageEditor
  selectedPage={
    selectedPage
  }

  selectedMagazine={
    selectedMagazine
  }

  setSelectedPage={(
    page: any
  ) => {

          if (!page) {

            setSelectedPageSide(
              null
            );

            return;
          }

          setSelectedPageSide(
            page.side
          );
        }}
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

          alignItems:
            "center",

          marginBottom:
            "30px",
        }}
      >
        <div>

          <h1>
            {
              selectedMagazine?.navn
            }
          </h1>

          <p
            style={{
              color:
                "#888",
            }}
          >
            {
              totalPages
            }
            {" "}
            sider • Under
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

            color:
              "white",

            padding:
              "12px 18px",

            borderRadius:
              "10px",

            cursor:
              "pointer",
          }}
        >
          Tilbage
        </button>
      </div>

      {/* SIDER */}

      <div
        style={{
          display:
            "grid",

          gridTemplateColumns:
            "repeat(4, 1fr)",

          gap:
            "20px",
        }}
      >
        {generatedPages.map(
          (page) => (

            <SidePreview
              key={
                page.side
              }

              side={
                page.side
              }

              premium={
                page.premium
              }

              ads={
                page.ads
              }

              onClick={() =>
                setSelectedPageSide(
                  page.side
                )
              }
            />
          )
        )}
      </div>
    </div>
  );
}
