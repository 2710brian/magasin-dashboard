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

  const adTypes = [
    {
      label:
        "Visitkort",

      type:
        "business-card",
    },

    {
      label:
        "Dobbelt Visitkort",

      type:
        "double-business-card",
    },

    {
      label:
        "Kvart",

      type:
        "quarter",
    },

    {
      label:
        "Halv Vandret",

      type:
        "half-horizontal",
    },

    {
      label:
        "Halv Lodret",

      type:
        "half-vertical",
    },

    {
      label:
        "Helside",

      type:
        "helside",
    },

    {
      label:
        "Dobbelt Side",

      type:
        "double-page",
    },

    {
      label:
        "Tekstområde",

      type:
        "text",
    },
  ];

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

          flexWrap:
            "wrap",
        }}
      >
        {adTypes.map(
          (item) => (

            <button
              key={
                item.type
              }

              onClick={() => {

                const newAd = {
                  id:
                    Date.now(),

                  title:
                    item.label,

                  status:
                    "Ledig",

                  type:
                    item.type,

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
                  "#2d2d2d",

                border:
                  "1px solid #444",

                borderRadius:
                  "10px",

                color:
                  "white",

                cursor:
                  "pointer",
              }}
            >
              + {item.label}
            </button>
          )
        )}
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

            minHeight:
              "700px",

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

                  position:
                    "relative",
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

                <button
                  onClick={(e) => {

                    e.stopPropagation();

                    const updatedAds =
                      localPage.ads.filter(
                        (
                          item: any
                        ) =>
                          item.id !==
                          ad.id
                      );

                    setLocalPage({
                      ...localPage,

                      ads:
                        updatedAds,
                    });
                  }}

                  style={{
                    position:
                      "absolute",

                    top: "8px",

                    right: "8px",

                    background:
                      "#ef4444",

                    border:
                      "none",

                    color:
                      "white",

                    width: "24px",

                    height: "24px",

                    borderRadius:
                      "50%",

                    cursor:
                      "pointer",

                    fontSize:
                      "12px",

                    zIndex: 20,
                  }}
                >
                  ×
                </button>
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
