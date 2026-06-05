import { useState } from "react";

type MarketingViewProps = {
  selectedMagazine: any;

  setSelectedKommune: (
    value: string | null
  ) => void;
};

export default function MarketingView({
  selectedMagazine,
  setSelectedKommune,
}: MarketingViewProps) {

  const [
    showCreateModal,
    setShowCreateModal,
  ] = useState(false);

  const [
    contentType,
    setContentType,
  ] = useState("Prompt");

  const [
  contentItems,
  setContentItems,
] = useState<any[]>([]);

  function createContent() {

  setContentItems([
    ...contentItems,

    {
      id: Date.now(),

      type:
        contentType,

      title: "",

      content: "",
    },
  ]);

  setShowCreateModal(
    false
  );
}
  

  return (
    <div
      style={{
        padding: "30px",
        height: "100%",
        overflowY: "auto",
      }}
    >

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
            {selectedMagazine?.navn}
          </h1>

          <p
            style={{
              color: "#888",
            }}
          >
            Marketing Guide
          </p>
        </div>

        <div
          style={{
            display: "flex",
            gap: "12px",
          }}
        >

          <button
            onClick={() =>
              setSelectedKommune(
                null
              )
            }
            style={{
              background:
                "#333",
              color:
                "white",
              border:
                "none",
              padding:
                "12px 20px",
              borderRadius:
                "10px",
              cursor:
                "pointer",
            }}
          >
            Tilbage
          </button>

          <button
            onClick={() =>
              setShowCreateModal(
                true
              )
            }
            style={{
              background:
                "#22c55e",
              color:
                "white",
              border:
                "none",
              padding:
                "12px 20px",
              borderRadius:
                "10px",
              cursor:
                "pointer",
              fontWeight:
                700,
            }}
          >
            + Opret indhold
          </button>

        </div>

      </div>

      <div
        style={{
          display: "grid",
          gridTemplateColumns:
            "repeat(auto-fill,minmax(350px,1fr))",
          gap: "20px",
        }}
      >

        <div
          style={{
            background:
              "#1b1b1b",
            border:
              "1px solid #2a2a2a",
            borderRadius:
              "14px",
            padding:
              "20px",
          }}
        >
         {contentItems.length === 0 ? (

  <div
    style={{
      background:
        "#1b1b1b",

      border:
        "1px solid #2a2a2a",

      borderRadius:
        "14px",

      padding:
        "20px",
    }}
  >
    Ingen indhold endnu
  </div>

) : (

  contentItems.map(
    (item) => (

      <div
        key={
          item.id
        }

        style={{
          background:
            "#1b1b1b",

          border:
            "1px solid #2a2a2a",

          borderRadius:
            "14px",

          padding:
            "20px",

          minHeight:
            "180px",

          cursor:
            "pointer",
        }}
      >

        <h3>
          {item.type}
        </h3>

        <p>
          Ikke udfyldt endnu
        </p>

        <div
          style={{
            display:
              "flex",

            gap:
              "10px",

            marginTop:
              "20px",
          }}
        >

          <button>
            Rediger
          </button>

          <button>
            Slet
          </button>

        </div>

      </div>
    )
  )

)}

          <p
            style={{
              color: "#888",
            }}
          >
            Klik på
            "Opret indhold"
            for at oprette
            Prompt,
            Pitch,
            Email,
            PDF,
            Billede,
            Lyd eller Video.
          </p>
        </div>

      </div>

      {showCreateModal && (

        <div
          style={{
            position:
              "fixed",
            inset: 0,
            background:
              "rgba(0,0,0,0.8)",
            display:
              "flex",
            justifyContent:
              "center",
            alignItems:
              "center",
            zIndex: 9999,
          }}
        >

          <div
            style={{
              width: "500px",
              background:
                "#111",
              padding:
                "25px",
              borderRadius:
                "14px",
              border:
                "1px solid #333",
            }}
          >

            <h2>
              Opret indhold
            </h2>

            <select
              value={
                contentType
              }
              onChange={(
                e
              ) =>
                setContentType(
                  e.target.value
                )
              }
              style={{
                width:
                  "100%",
                padding:
                  "12px",
                marginTop:
                  "20px",
                background:
                  "#1b1b1b",
                color:
                  "white",
                border:
                  "1px solid #333",
                borderRadius:
                  "10px",
              }}
            >

              <option>
                Prompt
              </option>

              <option>
                Telefonpitch
              </option>

              <option>
                Emailskabelon
              </option>

              <option>
                Note
              </option>

              <option>
                PDF
              </option>

              <option>
                Billede
              </option>

              <option>
                Lydfil
              </option>

              <option>
                Video
              </option>

            </select>

            <div
              style={{
                display:
                  "flex",
                gap:
                  "12px",
                marginTop:
                  "25px",
              }}
            >

              <button
                onClick={() =>
                  setShowCreateModal(
                    false
                  )
                }
                style={{
                  flex: 1,
                  background:
                    "#333",
                  color:
                    "white",
                  border:
                    "none",
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

              <button
  onClick={
    createContent
  }

  style={{
    flex: 1,

    background:
      "#22c55e",

    color:
      "white",

    border:
      "none",

    padding:
      "12px",

    borderRadius:
      "10px",

    cursor:
      "pointer",

    fontWeight:
      700,
  }}
>
  Opret
</button>

            </div>

          </div>

        </div>

      )}

    </div>
  );
}
