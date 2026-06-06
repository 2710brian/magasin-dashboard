"use client";

import { useState } from "react";


type SidebarProps = {
  regions: {
    [key: string]: string[];
  };

  marketingCategories: any[];

setMarketingCategories: any;

  selectedKommune: string;

  setSelectedKommune: (
    kommune: string
  ) => void;
};

export default function MarketingSidebar({
  regions,
  marketingCategories,
  setMarketingCategories,
  selectedKommune,
  setSelectedKommune,
}: SidebarProps) {

  const [
    showCreateModal,
    setShowCreateModal,
  ] = useState(false);

  const [
    newCategoryName,
    setNewCategoryName,
  ] = useState("");

  const handleClick = (
    kommune: string
  ) => {

    setSelectedKommune(
      kommune
    );
  };

  async function createCategory() {

  if (!newCategoryName) {
    return;
  }

  try {

    const response =
      await fetch(
        "/api/save-marketing-category",
        {
          method: "POST",

          headers: {
            "Content-Type":
              "application/json",
          },

          body:
            JSON.stringify({
              name:
                newCategoryName,
            }),
        }
      );

    const data =
      await response.json();

    if (
      data.success
    ) {

      setMarketingCategories([
        ...marketingCategories,

        {
          navn:
            data.category.name,

          region:
            "Marketing",
        },
      ]);
    }

    setShowCreateModal(
      false
    );

    setNewCategoryName(
      ""
    );

  } catch (
    error
  ) {

    console.error(
      error
    );
  }
}

  return (
    <>
      <div
        style={{
          width: "320px",

          background: "#161616",

          padding: "25px",

          borderRight:
            "1px solid #222",

          overflowY:
            "scroll",

          height:
            "calc(100vh - 40px)",

          maxHeight:
            "calc(100vh - 40px)",
        }}
      >
        <h2
          style={{
            marginBottom:
              "20px",
          }}
        >
          Marketing Guide
        </h2>

        <button
          onClick={() =>
            setShowCreateModal(
              true
            )
          }

          style={{
            width:
              "100%",

            background:
              "#22c55e",

            color:
              "white",

            border:
              "none",

            borderRadius:
              "10px",

            padding:
              "12px",

            marginBottom:
              "30px",

            cursor:
              "pointer",

            fontWeight:
              700,
          }}
        >
          + Opret branche
        </button>

        {marketingCategories.map(
  (branche) => (

    <div
      key={
        branche.navn
      }

      onClick={() =>
        handleClick(
          branche.navn
        )
      }

      style={{
        padding:
          "10px",

        marginBottom:
          "8px",

        background:
          selectedKommune ===
          branche.navn
            ? "#2a2a2a"
            : "#1f1f1f",

        borderRadius:
          "8px",

        cursor:
          "pointer",

        display:
          "flex",

        alignItems:
          "center",

        justifyContent:
          "space-between",
      }}
    >
      <span>
        {branche.navn}
      </span>

      <div
        style={{
          width:
            "10px",

          height:
            "10px",

          borderRadius:
            "50%",

          background:
            "#22c55e",
        }}
      />
    </div>
  )
)}
        </div>

      {showCreateModal && (

        <div
          style={{
            position:
              "fixed",

            inset: 0,

            background:
              "rgba(0,0,0,0.7)",

            display:
              "flex",

            alignItems:
              "center",

            justifyContent:
              "center",

            zIndex: 9999,
          }}
        >

          <div
            style={{
              width:
                "420px",

              background:
                "#1b1b1b",

              borderRadius:
                "14px",

              padding:
                "24px",

              border:
                "1px solid #333",
            }}
          >

            <h2
              style={{
                marginBottom:
                  "24px",
              }}
            >
              Opret branche
            </h2>

            <div
              style={{
                marginBottom:
                  "16px",
              }}
            >
              <div
                style={{
                  marginBottom:
                    "8px",
                }}
              >
                Branche navn
              </div>

              <input
  value={
    newCategoryName
  }

  onChange={(
    e
  ) =>
    setNewCategoryName(
      e.target.value
    )
  }

               style={{
  width:
    "100%",

  padding:
    "12px",

  borderRadius:
    "10px",

  border:
    "1px solid #333",

  background:
    "#111",

  color:
    "white",
}}
/>
</div>

<div
  style={{
    display:
      "flex",

    gap:
      "12px",
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
      createCategory
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
</>
);
}
