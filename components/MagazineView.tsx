"use client";

import {
  useEffect,
  useState,
} from "react";

import PageEditor from "./PageEditor";
import SidePreview from "./SidePreview";

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

  const [pages, setPages] =
    useState<any[]>([]);

  async function loadAds() {

    try {

      const response =
        await fetch(
          "/api/get-ads"
        );

      const data =
        await response.json();

      if (!data.success) {
        return;
      }

      const groupedPages: {
        [key: number]: any[];
      } = {};

      data.ads.forEach(
        (ad: any) => {

          if (
            !groupedPages[
              ad.page
            ]
          ) {

            groupedPages[
              ad.page
            ] = [];
          }

          groupedPages[
            ad.page
          ].push(ad);
        }
      );

      const builtPages =
        Object.keys(
          groupedPages
        ).map(
          (
            pageNumber
          ) => ({
            side: Number(
              pageNumber
            ),

            premium: false,

            ads: groupedPages[
              Number(
                pageNumber
              )
            ],
          })
        );

      setPages(
        builtPages
      );

    } catch (error) {

      console.error(error);
    }
  }

  useEffect(() => {
    loadAds();
  }, []);

  if (
    selectedPage &&
    pages.length > 0
  ) {

    const freshPage =
      pages.find(
        (p) =>
          p.side ===
          selectedPage.side
      );

    if (freshPage) {

      return (
        <PageEditor
          selectedPage={
            freshPage
          }

          setSelectedPage={
            setSelectedPage
          }
        />
      );
    }
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
            {kommune}
          </h1>

          <p
            style={{
              color: "#888",
            }}
          >
            {pages.length}
            {" "}sider • Under
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
