"use client";

import {
  useEffect,
  useState,
} from "react";

import ClientModal from "./ClientModal";

export default function CRMView() {

  const [
  clients,
  setClients,
] = useState<any[]>([]);

const [
  selectedClient,
  setSelectedClient,
] = useState<any | null>(
  null
);

const [
  search,
  setSearch,
] = useState("");

  async function loadClients() {

  try {

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

  } catch (error) {

    console.error(
      error
    );
  }
}

  useEffect(() => {

    loadClients();

  }, []);

  const filteredClients =
  clients.filter(
    (ad) => {

        const text = `
          ${ad.title || ""}
          ${ad.email || ""}
          ${ad.website || ""}
          ${ad.phone || ""}
          ${ad.city || ""}
          ${ad.country || ""}
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

          <h1
            style={{
              marginBottom:
                "8px",
            }}
          >
            CRM
          </h1>

          <div
            style={{
              color:
                "#777",
            }}
          >
            Kundedatabase
          </div>

        </div>

        <div style={{display:"flex",gap:"10px"}}>
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
        <button
          onClick={() =>
            setSelectedClient({
              title: "",
              contactperson: "",
              email: "",
              status: "Lead",
            })
          }
          style={{
            background:"#2f6fed",
            color:"white",
            border:"none",
            padding:"14px",
            borderRadius:"10px",
            cursor:"pointer",
            fontWeight:600,
          }}
        >
          + Kunde
        </button>
        </div>
      </div>

      {/* TABLE */}

      <div
        style={{
          background:
            "#181818",

          border:
            "1px solid #2a2a2a",

          borderRadius:
            "16px",

          overflow:
            "hidden",
        }}
      >

        {/* HEADER */}

        <div
          style={{
            display:
              "grid",

            gridTemplateColumns:
  "80px 2fr 2fr 1fr 1fr 1fr 1fr 1fr",

            background:
              "#202020",

            padding:
              "16px",

            fontWeight:
              "bold",

            borderBottom:
              "1px solid #2d2d2d",
          }}
        >
          <div>ID</div>

<div>Virksomhed</div>

<div>Mail</div>

<div>Kontaktperson</div>

<div>Oprettet</div>

<div>Opfølgning</div>

<div>Land</div>

<div>Status</div>
        </div>

        {/* ROWS */}

        {filteredClients.map(
          (ad) => (

            <div
              key={ad.id}

              onClick={() =>
  setSelectedClient(
    ad
  )
}

              style={{
                display:
                  "grid",

                gridTemplateColumns:
                  "80px 2fr 1.5fr 1fr 1fr 1fr 1fr",

                padding:
                  "18px 16px",

                borderBottom:
                  "1px solid #252525",

                cursor:
                  "pointer",

                alignItems:
                  "center",

                transition:
                  "0.2s",
              }}

              onMouseEnter={(
                e
              ) => {

                (
                  e.currentTarget
                    .style
                ).background =
                  "#202020";
              }}

              onMouseLeave={(
                e
              ) => {

                (
                  e.currentTarget
                    .style
                ).background =
                  "transparent";
              }}
            >
              <div>
  {ad.id}
</div>

<div
  style={{
    fontWeight: 600,
  }}
>
  {ad.title || "-"}
</div>

<div
  style={{
    color: "#888",
  }}
>
  {ad.email || "-"}
</div>

<div>
  {ad.contactperson || "-"}
</div>

<div>
  {ad.createdat
    ? new Date(ad.createdat).toLocaleDateString()
    : "-"}
</div>

<div>
  {ad.followup_date || "-"}
</div>

<div>
  {ad.country || "-"}
</div>

<div>
  <Badge>
    {ad.status || "-"}
  </Badge>
</div>

            <div>
  <Badge>
    {ad.affiliate_status || "-"}
  </Badge>
</div>

<div>
  <Badge>
    {ad.pipeline || "-"}
  </Badge>
</div>
            </div>
          )
        )}
      </div>

     {/* MODAL */}

      {selectedClient && (

        <ClientModal
          ad={selectedClient}

          refreshAds={
            loadClients
          }

          onSaved={(
            updatedClient
          ) => {

            setClients(
              (
                prev
              ) =>
                prev.map(
                  (
                    item
                  ) => {

                    if (
                      item.id ===
                      updatedClient.id
                    ) {

                      return updatedClient;
                    }

                    return item;
                  }
                )
            );

                        setSelectedClient(
              updatedClient
            );
          }}

          onClose={() =>
            setSelectedClient(
              null
            )
          }
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
        display:
          "inline-flex",

        alignItems:
          "center",

        justifyContent:
          "center",

        background:
          "#2d2d2d",

        color:
          "#ddd",

        padding:
          "8px 12px",

        borderRadius:
          "999px",

        fontSize:
          "13px",

        minWidth:
          "90px",
      }}
    >
      {children}
    </div>
  );
}

