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
    draggedAdId,
    setDraggedAdId,
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

  function getAdSize(
    type: string
  ) {

    switch (type) {

      case "helside":
        return {
          width: 760,
          height: 1080,
        };

      case "half-horizontal":
        return {
          width: 760,
          height: 520,
        };

      case "half-vertical":
        return {
          width: 370,
          height: 1080,
        };

      case "quarter":
        return {
          width: 370,
          height: 520,
        };

      case "quarter-horizontal":
        return {
          width: 760,
          height: 250,
        };

      case "business-card":
        return {
          width: 180,
          height: 120,
        };

      case "double-business-card":
        return {
          width: 380,
          height: 120,
        };

      case "double-page":
        return {
          width: 1560,
          height: 1080,
        };

      case "text":
        return {
          width: 370,
          height: 250,
        };

      default:
        return {
          width: 370,
          height: 250,
        };
    }
  }

  function createAd(
    label: string,
    type: string
  ) {

    const size =
      getAdSize(type);

    const newAd = {

      id:
        Date.now(),

      title:
        label,

      status:
        "Ledig",

      type,

      price: 0,

      seller: "",

      image: "",

      x: 20,

      y: 20,

      width:
        size.width,

      height:
        size.height,
    };

    setLocalPage({
      ...localPage,

      ads: [
        ...localPage.ads,
        newAd,
      ],
    });
  }

  function updateAd(
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

          marginBottom:
            "30px",
        }}
      >
        <div>

          <h1>
            Side {
              localPage.side
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
                "20px",
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

              onClick={() =>
                createAd(
                  item.label,
                  item.type
                )
              }

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
              "820px",

            height:
              "1120px",

            background:
              "#1b1b1b",

            border:
              "1px solid #333",

            borderRadius:
              "16px",

            position:
              "relative",

            overflow:
              "hidden",
          }}
        >
          {localPage.ads.map(
            (ad: any) => (

              <div
                key={
                  ad.id
                }

                draggable

                onDragStart={() =>
                  setDraggedAdId(
                    ad.id
                  )
                }

                onDragEnd={(e) => {

                  const rect =
                    e.currentTarget.parentElement?.getBoundingClientRect();

                  if (!rect) {
                    return;
                  }

                  const updatedAd = {

                    ...ad,

                    x:
                      e.clientX -
                      rect.left,

                    y:
                      e.clientY -
                      rect.top,
                  };

                  updateAd(
                    updatedAd
                  );
                }}

                onClick={() =>
                  setSelectedAdId(
                    ad.id
                  )
                }

                style={{
                  position:
                    "absolute",

                  left:
                    ad.x,

                  top:
                    ad.y,

                  width:
                    ad.width,

                  height:
                    ad.height,

                  cursor:
                    "move",
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

                  type={
                    ad.type
                  }

                  image={
                    ad.image
                  }

                  width={
                    ad.width
                  }

                  height={
                    ad.height
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

                    width: "28px",

                    height: "28px",

                    borderRadius:
                      "50%",

                    background:
                      "#ef4444",

                    border:
                      "none",

                    color:
                      "white",

                    cursor:
                      "pointer",

                    zIndex: 999,
                  }}
                >
                  ×
                </button>
              </div>
            )
          )}
        </div>
      </div>

      {/* POPUP */}

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
                updateAd({
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
                updateAd({
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
                updateAd({
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
                selectedAd.status
              }

              onChange={(e) =>
                updateAd({
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
                  "12px",

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
