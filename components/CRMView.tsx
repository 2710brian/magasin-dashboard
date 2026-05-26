"use client";

import {
  useEffect,
  useState,
} from "react";

import AdModal from "./AdModal";

export default function CRMView() {

  const [
    ads,
    setAds,
  ] = useState<any[]>([]);

  const [
    selectedAd,
    setSelectedAd,
  ] = useState<any | null>(
    null
  );

  const [
    search,
    setSearch,
  ] = useState("");

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

        setAds(
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

  const filteredAds =
    ads.filter(
      (ad) => {

        const text = `
          ${ad.title || ""}
          ${ad.email || ""}
          ${ad.phone || ""}
          ${ad.website || ""}
        `.toLowerCase();

        return text.includes(
          search.toLowerCase()
        );
      }
    );

  return (
    <div>

      {/* TOP */}

      <div
        style={{
          display:
            "flex",

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
            CRM
          </h1>

          <p
            style={{
              color:
                "#777",
            }}
          >
            Kundedatabase
          </p>

        </div>

        <input
          value={search}

          onChange={(e) =>
            setSearch(
              e.target.value
            )
          }

          placeholder="Søg kunde..."

          style={{
            width: "320px",

            background:
              "#1f1f1f",

            border:
              "1px solid #333",

            color:
              "white",

            padding:
              "14px",

            borderRadius:
              "10px",
          }}
        />
      </div>

      {/* GRID */}

      <div
        style={{
          display:
            "grid",

          gridTemplateColumns:
            "repeat(3, 1fr)",

          gap:
            "20px",
        }}
      >
        {filteredAds.map(
          (ad) => (

            <div
              key={ad.id}

              onClick={() =>
                setSelectedAd(
                  ad
                )
              }

              style={{
                background:
                  "#1f1f1f",

                border:
                  "1px solid #333",

                borderRadius:
                  "16px",

                padding:
                  "24px",

                cursor:
                  "pointer",
              }}
            >
              <div
                style={{
                  fontSize:
                    "24px",

                  fontWeight:
                    "bold",

                  marginBottom:
                    "10px",
                }}
              >
                {ad.title}
              </div>

              <div
                style={{
                  color:
                    "#888",

                  marginBottom:
                    "10px",
                }}
              >
                {ad.email}
              </div>

              <div
                style={{
                  color:
                    "#888",

                  marginBottom:
                    "10px",
                }}
              >
                {ad.phone}
              </div>

              <div
                style={{
                  color:
                    "#888",

                  marginBottom:
                    "16px",
                }}
              >
                {ad.website}
              </div>

              <div
                style={{
                  display:
                    "flex",

                  gap:
                    "10px",

                  flexWrap:
                    "wrap",
                }}
              >
                {ad.affiliate_status && (
                  <Badge>
                    {
                      ad.affiliate_status
                    }
                  </Badge>
                )}

                {ad.pipeline && (
                  <Badge>
                    {ad.pipeline}
                  </Badge>
                )}

                {ad.country && (
                  <Badge>
                    {ad.country}
                  </Badge>
                )}
              </div>
            </div>
          )
        )}
      </div>

      {/* MODAL */}

      {selectedAd && (

        <AdModal
          ad={selectedAd}

          onClose={() =>
            setSelectedAd(
              null
            )
          }

          refreshAds={
            loadAds
          }

          onSaved={(
            updatedAd
          ) => {

            setAds(
              (
                prev
              ) =>
                prev.map(
                  (
                    item
                  ) => {

                    if (
                      item.id ===
                      updatedAd.id
                    ) {

                      return updatedAd;
                    }

                    return item;
                  }
                )
            );

            setSelectedAd(
              updatedAd
            );
          }}
        />
      )}
    </div>
  );
}

function Badge({
  children,
}: any) {

  return (
    <div
      style={{
        background:
          "#333",

        padding:
          "8px 12px",

        borderRadius:
          "999px",

        fontSize:
          "13px",

        color:
          "#ddd",
      }}
    >
      {children}
    </div>
  );
}
