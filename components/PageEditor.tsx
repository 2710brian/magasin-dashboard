import {
  useEffect,
  useState,
} from "react";

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

  const [
    draggedAd,
    setDraggedAd,
  ] = useState<any>(null);

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

  function moveAd(
    targetIndex: number
  ) {

    if (!draggedAd) {
      return;
    }

    const ads = [
      ...localPage.ads,
    ];

    const fromIndex =
      ads.findIndex(
        (
          ad: any
        ) =>
          ad.id ===
          draggedAd.id
      );

    const targetAd =
      ads[targetIndex];

    ads[targetIndex] =
      draggedAd;

    ads[fromIndex] =
      targetAd;

    setLocalPage({
      ...localPage,
      ads,
    });

    setDraggedAd(
      null
    );
  }

  const totalValue =
    localPage.ads.reduce(
      (
        total: number,
        ad: any
      ) =>
        total +
        Number(
          ad.price || 0
        ),
      0
    );

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

          <div
            style={{
              marginTop:
                "10px",

              color:
                "#22c55e",

              fontWeight:
                "bold",
            }}
          >
            Sideværdi:
            {" "}
            {
              totalValue.toLocaleString()
            }
            {" "}
            DKK
          </div>

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

      {/* TOOLS */}

      <div
        style={{
          display:
            "flex",

          gap:
            "12px",

          marginBottom:
            "20px",

          justifyContent:
            "center",
        }}
      >

        <button
          onClick={() => {

            const newAd = {
              id:
                Date.now(),

              title:
                "Tekst område",

              status:
                "Indhold",

              type:
                "quarter",

              color:
                "#2d3748",

              price: 0,
            };

            setLocalPage({
              ...localPage,

              ads: [
                ...localPage.ads,
                newAd,
              ],
            });
          }}

          style={{
            padding:
              "10px 14px",

            background:
              "#2563eb",

            border:
              "none",

            borderRadius:
              "10px",

            color:
              "white",

            cursor:
              "pointer",
          }}
        >
          + Tekst område
        </button>

        <button
          onClick={() => {

            const newAd = {
              id:
                Date.now(),

              title:
                "Placeholder",

              status:
                "Ledig",

              type:
                "quarter",

              color:
                "#444",

              price: 0,
            };

            setLocalPage({
              ...localPage,

              ads: [
                ...localPage.ads,
                newAd,
              ],
            });
          }}

          style={{
            padding:
              "10px 14px",

            background:
              "#444",

            border:
              "none",

            borderRadius:
              "10px",

            color:
              "white",

            cursor:
              "pointer",
          }}
        >
          + Placeholder
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
              "1fr 1fr",

            gridAutoRows:
              "1fr",

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

                draggable

                onDragStart={() =>
                  setDraggedAd(
                    ad
                  )
                }

                onDragOver={(
                  e
                ) =>
                  e.preventDefault()
                }

                onDrop={() =>
                  moveAd(
                    index
                  )
                }

                onClick={() =>
                  setSelectedAdId(
                    ad.id
                  )
                }

                style={{
                  cursor:
                    "grab",
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
