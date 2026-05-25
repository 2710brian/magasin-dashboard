"use client";

import {
  useEffect,
  useState,
} from "react";

import PageEditor from "./PageEditor";
import SidePreview from "./SidePreview";

import { pages } from "../data/pages";

type MagazineViewProps = {
  setSelectedKommune: (
    kommune: string | null
  ) => void;
};

export default function MagazineView({
  setSelectedKommune,
}: MagazineViewProps) {

  const [
    selectedPage,
    setSelectedPage,
  ] = useState<any | null>(
    null
  );

  const [
    mergedPages,
    setMergedPages,
  ] = useState(pages);

  useEffect(() => {

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

        const updatedPages =
          pages.map((page) => {

            const updatedAds =
              page.ads.map(
                (
                  localAd,
                  index
                ) => {

                  const dbAd =
                    data.ads.find(
                      (
                        ad: any
                      ) =>
                        ad.page ===
                          page.side &&
                        ad.clientid ===
                          localAd.clientId
                    );

                  if (!dbAd) {
                    return localAd;
                  }

                  return {
                    ...localAd,

                    id: dbAd.id,

                    title:
                      dbAd.title,

                    status:
                      dbAd.status,

                    price:
                      dbAd.price,

                    color:
                      dbAd.color,

                    type:
                      dbAd.type,
                  };
                }
              );

            return {
              ...page,

              ads: updatedAds,
            };
          });

        setMergedPages(
          updatedPages
        );

      } catch (error) {

        console.error(error);
      }
    }

    loadAds();

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

          alignItems:
            "center",

          marginBottom:
            "30px",
        }}
      >
        <div>
          <h1>Aalborg</h1>

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
        {mergedPages.map(
          (page) => (
            <SidePreview
              key={page.side}

              side={
                page.side
              }

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
          )
        )}
      </div>
    </div>
  );
}
