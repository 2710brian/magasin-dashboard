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

  const [
  selectedItem,
  setSelectedItem,
] = useState<any>(null);

const [
  editTitle,
  setEditTitle,
] = useState("");

const [
  editContent,
  setEditContent,
] = useState("");

const [
  editDate,
  setEditDate,
] = useState("");

  function createContent() {

  const newItem = {
    id: Date.now(),

    type:
      contentType,

    title: "",

    content: "",

    date:
      new Date()
        .toISOString()
        .split("T")[0],
  };

  setContentItems([
    ...contentItems,
    newItem,
  ]);

  setShowCreateModal(
    false
  );

  setSelectedItem(
    newItem
  );

  setEditTitle("");

  setEditContent("");

  setEditDate(
    newItem.date
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
    "repeat(3, minmax(350px, 1fr))",
  gap: "30px",
  alignItems: "stretch",
}}
>

  {contentItems.length === 0 ? (

  <div
    style={{
      background: "#1b1b1b",
      border: "1px solid #2a2a2a",
      borderRadius: "14px",
      padding: "20px",
      minHeight: "180px",
    }}
  >
    <h3>
      Ingen indhold endnu
    </h3>

    <p
      style={{
        color: "#888",
      }}
    >
      Klik på "Opret indhold"
      for at oprette Prompt,
      Pitch, Email, PDF,
      Billede, Lyd eller Video.
    </p>
  </div>

) : (

  contentItems.map(
  (item) => (

    <div
      key={item.id}

      onClick={() => {

        setSelectedItem(
          item
        );

        setEditTitle(
          item.title || ""
        );

        setEditContent(
          item.content || ""
        );

        setEditDate(
          item.date || ""
        );
      }}

      style={{
        background: "#1b1b1b",
        border: "1px solid #2a2a2a",
        borderRadius: "14px",
        padding: "20px",
        minHeight: "220px",
        cursor: "pointer",
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",
      }}
    >

      <div>

        <h3>
          {item.type}
        </h3>

        <p
          style={{
            color: "#888",
          }}
        >
          {item.title ||
            "Ikke udfyldt endnu"}
        </p>

      </div>

      <div
        style={{
          display: "flex",
          gap: "10px",
        }}
      >

        <button
          onClick={(e) => {

            e.stopPropagation();

            setSelectedItem(
              item
            );

            setEditTitle(
              item.title || ""
            );

            setEditContent(
              item.content || ""
            );

            setEditDate(
              item.date || ""
            );
          }}
        >
          Rediger
        </button>

        <button
          onClick={(e) => {

            e.stopPropagation();

            setContentItems(
              contentItems.filter(
                (x) =>
                  x.id !==
                  item.id
              )
            );
          }}
        >
          Slet
        </button>

      </div>

    </div>

  )
)

)}
</div>

{showCreateModal && (

  <div
    style={{
      position: "fixed",
      inset: 0,
      background:
        "rgba(0,0,0,0.8)",
      display: "flex",
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
        background: "#111",
        padding: "25px",
        borderRadius: "14px",
        border:
          "1px solid #333",
      }}
    >

      <h2>
        Opret indhold
      </h2>

      <select
        value={contentType}
        onChange={(e) =>
          setContentType(
            e.target.value
          )
        }
        style={{
          width: "100%",
          padding: "12px",
          marginTop: "20px",
          background:
            "#1b1b1b",
          color: "white",
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
          display: "flex",
          gap: "12px",
          marginTop: "25px",
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

{selectedItem && (

  <div
    style={{
      position: "fixed",
      inset: 0,
      background:
        "rgba(0,0,0,0.85)",
      display: "flex",
      justifyContent:
        "center",
      alignItems:
        "center",
      zIndex: 10000,
    }}
  >

    <div
      style={{
        width: "900px",
        maxWidth: "95%",
        background:
          "#111",
        border:
          "1px solid #333",
        borderRadius:
          "14px",
        padding:
          "25px",
      }}
    >

      <h2>
        {selectedItem.type}
      </h2>

      <input
        value={editTitle}
        onChange={(e) =>
          setEditTitle(
            e.target.value
          )
        }
        placeholder="Titel"
        style={{
          width: "100%",
          padding: "12px",
          marginTop: "20px",
          background:
            "#1b1b1b",
          color: "white",
          border:
            "1px solid #333",
          borderRadius:
            "10px",
        }}
      />

      <input
        type="date"
        value={editDate}
        onChange={(e) =>
          setEditDate(
            e.target.value
          )
        }
        style={{
          width: "100%",
          padding: "12px",
          marginTop: "15px",
          background:
            "#1b1b1b",
          color: "white",
          border:
            "1px solid #333",
          borderRadius:
            "10px",
        }}
      />

      <textarea
        value={editContent}
        onChange={(e) =>
          setEditContent(
            e.target.value
          )
        }
        placeholder="Indhold"
        style={{
          width: "100%",
          minHeight:
            "350px",
          padding: "12px",
          marginTop: "15px",
          background:
            "#1b1b1b",
          color: "white",
          border:
            "1px solid #333",
          borderRadius:
            "10px",
        }}
      />

      <div
        style={{
          display: "flex",
          gap: "12px",
          marginTop: "20px",
        }}
      >

        <button
          onClick={() =>
            setSelectedItem(
              null
            )
          }
        >
          Luk
        </button>

        <button
         onClick={async () => {

  try {

    const response =
      await fetch(
        "/api/save-marketing-note",
        {
          method: "POST",

          headers: {
            "Content-Type":
              "application/json",
          },

          body:
            JSON.stringify({
              categoryId: 1,

              title:
                editTitle,

              content:
                editContent,
            }),
        }
      );

    const data =
      await response.json();

    if (
      data.success
    ) {

      setContentItems(
        contentItems.map(
          (item) =>
            item.id ===
            selectedItem.id
              ? {
                  ...item,
                  title:
                    editTitle,

                  content:
                    editContent,

                  date:
                    editDate,
                }
              : item
        )
      );

      setSelectedItem(
        null
      );
    }

} catch (
  error
) {

  console.error(
    error
  );
}
}}
>
  Gem
</button>

        <button
          onClick={() => {

            setContentItems(
              contentItems.filter(
                (item) =>
                  item.id !==
                  selectedItem.id
              )
            );

            setSelectedItem(
              null
            );
          }}
        >
          Slet
        </button>

      </div>

    </div>

  </div>

)}

</div>
  );
}
