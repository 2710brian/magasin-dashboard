import { useEffect, useState } from "react";

import AdBlock from "./AdBlock";
import AdModal from "./AdModal";

type PageEditorProps = {
  selectedPage: any;

  setSelectedPage: (
    page: any | null
  ) => void;

  refreshAds?: () => Promise<void>;
};

export default function PageEditor({
  selectedPage,
  setSelectedPage,
  refreshAds,
}: PageEditorProps) {

  const [
    localPage,
    setLocalPage,
  ] = useState(
    selectedPage
  );

  const [
    selectedAdId,
    setSelectedAdId,
  ] = useState<
    number | null
  >(null);

  useEffect(() => {

    setLocalPage(
      selectedPage
    );

  }, [selectedPage]);

  const selectedAd =
    localPage.ads.find(
      (ad: any) =>
        ad.id ===
        selectedAdId
    );

  function handleAdSaved(
    updatedAd: any
  ) {

    const updatedAds =
      localPage.ads.map(
        (ad: any) => {

          if (
            ad.id ===
            updatedAd.id
          ) {

            return updatedAd;
          }

          return ad;
        }
      );

    setLocalPage({
      ...localPage,
      ads: updatedAds,
    });
  }

  return (
    <div>

      {/* TOP */}

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
            Side {
              localPage?.side
            }
          </h1>

          <p
            style={{
              color:
                "#888",
            }}
          >
            Side editor
          </p>

        </div>

        <button
          onClick={() =>
            setSelectedPage(
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
          Tilbage til sider
        </button>
      </div>

      {/* SIDE */}

      <div
        style={{
          display:
            "flex",

          justifyContent:
            "center",
        }}
      >
        <div
          style={{
            width:
              "500px",

            aspectRatio:
              "210 / 297",

            background:
              "#1b1b1b",

            borderRadius:
              "14px",

            padding:
              "10px",

            display:
              "grid",

            gridTemplateColumns:
              localPage.layout ===
              "quarter"
                ? "1fr 1fr"
                : "1fr",

            gridTemplateRows:
              localPage.layout ===
              "quarter"
                ? "1fr 1fr"
                : "1fr",

            gap: "6px",

            overflow:
              "hidden",
          }}
        >
          {localPage.ads.map(
            (
              ad: any,
              index: number
            ) => (

              <div
                key={
                  ad.id ||
                  index
                }

                onClick={() =>
                  setSelectedAdId(
                    ad.id
                  )
                }

                style={{
                  cursor:
                    "pointer",
                }}
              >
                <AdBlock
                  title={
                    ad.title
                  }

                  status={
                    ad.status
                  }

                  price={
                    ad.price
                  }

                  color={
                    ad.color
                  }

                  type={
                    ad.type
                  }
                />
              </div>
            )
          )}
        </div>
      </div>

      {selectedAd && (

        <AdModal
          ad={selectedAd}

          refreshAds={
            refreshAds
          }

          onSaved={
            handleAdSaved
          }

          onClose={() =>
            setSelectedAdId(
              null
            )
          }
        />
      )}
    </div>
  );
}
