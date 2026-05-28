import {
  useEffect,
  useState,
} from "react";

import AdBlock from "./AdBlock";

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
    draggedIndex,
    setDraggedIndex,
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

      ads:
        updatedAds,
    });
  }

  function handleDrop(
    targetIndex: number
  ) {

    if (
      draggedIndex ===
      null
    ) {
      return;
    }

    const updatedAds = [
      ...localPage.ads,
    ];

    const draggedItem =
      updatedAds[
        draggedIndex
      ];

    updatedAds.splice(
      draggedIndex,
      1
    );

    updatedAds.splice(
      targetIndex,
      0,
      draggedItem
    );

    setLocalPage({
      ...localPage,

      ads:
        updatedAds,
    });

    setDraggedIndex(
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
        "Kvart Lodret",

      type:
        "quarter",
    },

    {
      label:
        "Kvart Vandret",

      type:
        "quarter-horizontal",
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

              fontSize:
                "18px",
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

      {/* TOOLBAR */}

      <div
        style={{
          display:
            "flex",

          gap:
            "10px",

          flexWrap:
            "wrap",

          marginBottom:
            "25px",
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

                  seller:
                    "",

                  customer:
                    "",

                  image:
                    "",
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
                background:
                  "#2d2d2d",

                border:
                  "1px solid #444",

                color:
                  "white",

                padding:
                  "10px 14px",

                borderRadius:
                  "10px",

                cursor:
                  "pointer",
              }}
            >
              + {item.label}
            </button>
          )
        )}
      </div>

      {/* PAGE */}

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
              "900px",

            minHeight:
              "1300px",

            background:
              "#1b1b1b",

            borderRadius:
              "14px",

            padding:
              "14px",

            display:
              "grid",

            gridTemplateColumns:
              "repeat(12, 1fr)",

            gridAutoRows:
              "60px",

            gap:
              "8px",
          }}
        >
          {localPage.ads.map(
            (
              ad: any,
              index: number
            ) => (

              <div
                key={
                  ad.id
                }

                draggable

                onDragStart={() =>
                  setDraggedIndex(
                    index
                  )
                }

                onDragOver={(
                  e
                ) =>
                  e.preventDefault()
                }

                onDrop={() =>
                  handleDrop(
                    index
                  )
                }

                onClick={() =>
                  setSelectedAdId(
                    ad.id
                  )
                }

                style={{
                  position:
                    "relative",

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

                  customer={
                    ad.customer
                  }

                  seller={
                    ad.seller
                  }

                  image={
                    ad.image
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

                    width: "26px",

                    height: "26px",

                    borderRadius:
                      "50%",

                    cursor:
                      "pointer",

                    zIndex: 100,
                  }}
                >
                  ×
                </button>
              </div>
            )
          )}
        </div>
      </div>

      {/* MINI MODAL */}

      {selectedAd && (

        <div
          style={{
            position:
              "fixed",

            inset: 0,

            background:
              "rgba(0,0,0,0.7)",

            display:
              "flex",

            justifyContent:
              "center",

            alignItems:
              "center",

            zIndex:
              9999,
          }}
        >
          <div
            style={{
              width:
                "500px",

              background:
                "#1b1b1b",

              border:
                "1px solid #333",

              borderRadius:
                "16px",

              padding:
                "24px",

              display:
                "flex",

              flexDirection:
                "column",

              gap:
                "16px",
            }}
          >

            <h2>
              Annonce
            </h2>

            <input
              value={
                selectedAd.title ||
                ""
              }

              onChange={(e) =>
                handleAdSaved({
                  ...selectedAd,

                  title:
                    e.target.value,
                })
              }

              placeholder="Kundenavn"

              style={
                inputStyle
              }
            />

            <input
              value={
                selectedAd.price ||
                ""
              }

              onChange={(e) =>
                handleAdSaved({
                  ...selectedAd,

                  price:
                    e.target.value,
                })
              }

              placeholder="Pris"

              style={
                inputStyle
              }
            />

            <input
              value={
                selectedAd.seller ||
                ""
              }

              onChange={(e) =>
                handleAdSaved({
                  ...selectedAd,

                  seller:
                    e.target.value,
                })
              }

              placeholder="Sælger"

              style={
                inputStyle
              }
            />

            <select
              value={
                selectedAd.type
              }

              onChange={(e) =>
                handleAdSaved({
                  ...selectedAd,

                  type:
                    e.target.value,
                })
              }

              style={
                inputStyle
              }
            >
              {adTypes.map(
                (
                  item
                ) => (

                  <option
                    key={
                      item.type
                    }

                    value={
                      item.type
                    }
                  >
                    {
                      item.label
                    }
                  </option>
                )
              )}
            </select>

            <select
              value={
                selectedAd.status
              }

              onChange={(e) =>
                handleAdSaved({
                  ...selectedAd,

                  status:
                    e.target.value,
                })
              }

              style={
                inputStyle
              }
            >
              <option>
                Ledig
              </option>

              <option>
                Reserveret
              </option>

              <option>
                Solgt
              </option>
            </select>

            <div
              style={{
                display:
                  "flex",

                justifyContent:
                  "flex-end",

                gap:
                  "12px",

                marginTop:
                  "10px",
              }}
            >
              <button
                onClick={() =>
                  setSelectedAdId(
                    null
                  )
                }

                style={{
                  background:
                    "#333",

                  border:
                    "none",

                  color:
                    "white",

                  padding:
                    "10px 16px",

                  borderRadius:
                    "10px",

                  cursor:
                    "pointer",
                }}
              >
                Luk
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

const inputStyle = {
  background:
    "#111",

  border:
    "1px solid #333",

  color:
    "white",

  padding:
    "12px",

  borderRadius:
    "10px",

  width:
    "100%",
};
