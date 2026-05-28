"use client";

import {
  useEffect,
  useState,
} from "react";

import { Rnd } from "react-rnd";

import AdBlock from "./AdBlock";

type PageEditorProps = {
  selectedPage: any;

  setSelectedPage: (
    page: any | null
  ) => void;
};

const SCALE = 4;

const MAGAZINE = {
  width:
    227 * SCALE,

  height:
    295 * SCALE,
};

const adSizes: any = {

  "business-card": {
    width:
      60 * SCALE,

    height:
      60 * SCALE,
  },

  "double-business-card": {
    width:
      125 * SCALE,

    height:
      60 * SCALE,
  },

  quarter: {
    width:
      60 * SCALE,

    height:
      90 * SCALE,
  },

  "quarter-horizontal": {
    width:
      90 * SCALE,

    height:
      60 * SCALE,
  },

  "half-horizontal": {
    width:
      190 * SCALE,

    height:
      125 * SCALE,
  },

  "half-vertical": {
    width:
      125 * SCALE,

    height:
      190 * SCALE,
  },

  helside: {
    width:
      190 * SCALE,

    height:
      227 * SCALE,
  },

  "double-page": {
    width:
      380 * SCALE,

    height:
      227 * SCALE,
  },

  text: {
    width:
      190 * SCALE,

    height:
      60 * SCALE,
  },
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

  useEffect(() => {

    setLocalPage(
      selectedPage
    );

  }, [selectedPage]);

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

  function createAd(
    label: string,
    type: string
  ) {

    const size =
      adSizes[type];

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

  const selectedAd =
    localPage.ads.find(
      (ad: any) =>
        ad.id ===
        selectedAdId
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
          Tilbage
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
              MAGAZINE.width,

            height:
              MAGAZINE.height,

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

              <Rnd
                key={
                  ad.id
                }

                size={{
                  width:
                    ad.width,

                  height:
                    ad.height,
                }}

                position={{
                  x: ad.x,

                  y: ad.y,
                }}

                bounds="parent"

                onDragStop={(
                  e,
                  d
                ) => {

                  updateAd({
                    ...ad,

                    x: d.x,

                    y: d.y,
                  });
                }}

                onResizeStop={(
                  e,
                  direction,
                  ref,
                  delta,
                  position
                ) => {

                  updateAd({
                    ...ad,

                    width:
                      parseInt(
                        ref.style.width
                      ),

                    height:
                      parseInt(
                        ref.style.height
                      ),

                    ...position,
                  });
                }}

                onClick={() =>
                  setSelectedAdId(
                    ad.id
                  )
                }
              >
                <div
                  style={{
                    width:
                      "100%",

                    height:
                      "100%",

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

                    type={
                      ad.type
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

                      width:
                        "28px",

                      height:
                        "28px",

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

                      zIndex:
                        999,
                    }}
                  >
                    ×
                  </button>
                </div>
              </Rnd>
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

            <input
              type="file"

              accept="image/png,image/jpeg"

              onChange={(
                e: any
              ) => {

                const file =
                  e.target.files?.[0];

                if (!file) {
                  return;
                }

                const reader =
                  new FileReader();

                reader.onload =
                  () => {

                    updateAd({
                      ...selectedAd,

                      image:
                        reader.result,
                    });
                  };

                reader.readAsDataURL(
                  file
                );
              }}
            />

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
