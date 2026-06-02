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

const MAGAZINE = {
  width: 580,
  height: 751,
};

/*
  Annonceområdet i magasinet er 190 mm bredt.
  Den gamle helside var 720 px bred og passede visuelt bedre.
*/

const AD_AREA_WIDTH = 720;

const MM_SCALE =
  AD_AREA_WIDTH / 190;

const mmToPx = (mm: number) =>
  Math.round(mm * MM_SCALE);
const adSizes: any = {
  "business-card": {
    width: mmToPx(60),
    height: mmToPx(60),
  },

  "double-business-card": {
    width: mmToPx(125),
    height: mmToPx(60),
  },

  quarter: {
    width: mmToPx(60),
    height: mmToPx(90),
  },

  "quarter-horizontal": {
    width: mmToPx(90),
    height: mmToPx(60),
  },

  "half-horizontal": {
    width: mmToPx(190),
    height: mmToPx(125),
  },

  "half-vertical": {
    width: mmToPx(125),
    height: mmToPx(190),
  },

  helside: {
    width: mmToPx(190),
    height: mmToPx(277),
  },

  "double-page": {
    width: mmToPx(380),
    height: mmToPx(277),
  },

  text: {
    width: mmToPx(190),
    height: mmToPx(45),
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

const [
  clients,
  setClients,
] = useState<any[]>([]);

  const [
  clientSearch,
  setClientSearch,
] = useState("");

useEffect(() => {

  setLocalPage(
    selectedPage
  );

}, [selectedPage]);

  useEffect(() => {

  async function loadClients() {

    const response =
      await fetch(
        "/api/get-clients"
      );

    const data =
      await response.json();

    if (
      data.success
    ) {

      setClients(
        data.clients
      );
    }
  }

  loadClients();

}, []);

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
      ads: updatedAds,
    });
  }

  function createAd(
    label: string,
    type: string
  ) {

    const size =
      adSizes[type];

    const newAd = {
page:
  localPage.side,
      id:
  Date.now() +
  Math.floor(
    Math.random() * 10000
  ),

      title:
        label,

      status:
        "Ledig",

      type,

      price: 0,

seller: "",

clientid: null,

clientname: "",

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
          Tilbage til sider
        </button>
      </div>

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

                dragGrid={[
                  5,
                  5,
                ]}

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

            <select
  value={
    selectedAd.clientid || ""
  }

  onChange={(e) => {

    const selectedClient =
      clients.find(
        (client) =>
          String(client.id) ===
          e.target.value
      );

    updateAd({
      ...selectedAd,

      clientid:
        selectedClient?.id,

      clientname:
        selectedClient?.title ||
        "",
    });
  }}

  style={
    inputStyle
  }
>
  <option value="">
    Vælg kunde
  </option>

  {clients.map(
    (client) => (

      <option
        key={client.id}
        value={client.id}
      >
        {client.title}
      </option>
    )
  )}
</select>

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

<div
  style={{
    display: "flex",
    gap: "10px",
  }}
>
  <button
   onClick={async () => {

  console.log(
    "SELECTED AD BEFORE SAVE",
    selectedAd
  );

  const response =
    await fetch(
      "/api/save-ad",
      {
        method: "POST",

        headers: {
          "Content-Type":
            "application/json",
        },

        body:
          JSON.stringify(
            selectedAd
          ),
      }
    );

  const data =
    await response.json();

  console.log(
    "SAVE RESPONSE",
    data
  );

  setSelectedAdId(
    null
  );
}}

    style={{
      background:
        "#22c55e",

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
    Gem
  </button>

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
