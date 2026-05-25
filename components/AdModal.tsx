import { useState } from "react";

import ContactTab from "./tabs/ContactTab";

import SalesTab from "./tabs/SalesTab";

import GeographyTab from "./tabs/GeographyTab";

import MaterialsTab from "./tabs/MaterialsTab";

import NotesTab from "./tabs/NotesTab";

import ProductionTab from "./tabs/ProductionTab";

import MarketingTab from "./tabs/MarketingTab";

type AdModalProps = {
  ad: any;

  onClose: () => void;
};

const tabs = [
  {
    id: "contact",
    label: "Kontakt", 
  },

  {
    id: "geography",
    label: "Geografi",
  },

  {
    id: "sales",
    label: "Salg",
  },

  {
    id: "marketing",
    label: "Marketing",
  },

  {
    id: "materials",
    label: "Materialer",
  },

  {
    id: "production",
    label: "Produktion",
  },

  {
    id: "notes",
    label: "Noter",
  },
];

const tabComponents: any = {
  contact: ContactTab,

  geography:
    GeographyTab,

  sales: SalesTab,

  marketing:
    MarketingTab,

  materials:
    MaterialsTab,

  production:
    ProductionTab,

  notes: NotesTab,
};

export default function AdModal({
  ad,
  onClose,
}: AdModalProps) {

  const [activeTab, setActiveTab] =
    useState("contact");

  const ActiveComponent =
    tabComponents[
      activeTab
    ];

  return (
    <div
      style={{
        position: "fixed",

        inset: 0,

        background:
          "rgba(0,0,0,0.7)",

        display: "flex",

        justifyContent:
          "center",

        alignItems: "center",

        zIndex: 9999,

        padding: "30px",
      }}
    >
      <div
        style={{
          width: "1200px",

          maxHeight: "92vh",

          overflowY: "auto",

          background: "#ffffff",

          borderRadius: "18px",

          padding: "30px",

          color: "#111",

          border:
            "4px solid #111",
        }}
      >
        {/* TOP */}

        <div
          style={{
            display: "flex",

            justifyContent:
              "space-between",

            alignItems:
              "flex-start",

            marginBottom: "30px",
          }}
        >
          <div>
            <div
              style={{
                fontSize: "13px",

                color: "#666",

                marginBottom:
                  "10px",
              }}
            >
              Client ID:
              1001
            </div>

            <div
              style={{
                fontSize: "13px",

                color: "#666",

                marginBottom:
                  "20px",
              }}
            >
              Annonce ID:
              AD-2044
            </div>

            <h1
              style={{
                margin: 0,

                fontSize:
                  "42px",
              }}
            >
              {ad.title}
            </h1>
          </div>

          <div
            style={{
              textAlign: "center",
            }}
          >
            <div
              style={{
                width: "120px",

                height:
                  "120px",

                background:
                  "#f2f2f2",

                border:
                  "2px dashed #ccc",

                borderRadius:
                  "14px",

                display: "flex",

                alignItems:
                  "center",

                justifyContent:
                  "center",

                marginBottom:
                  "10px",

                overflow:
                  "hidden",
              }}
            >
              LOGO
            </div>

            <button
              style={{
                background:
                  "#111",

                color: "white",

                border: "none",

                padding:
                  "10px 16px",

                borderRadius:
                  "10px",

                cursor: "pointer",
              }}
            >
              Upload logo
            </button>
          </div>
        </div>

        {/* TABS */}

        <div
          style={{
            display: "flex",

            gap: "30px",

            borderBottom:
              "1px solid #ddd",

            paddingBottom:
              "14px",

            marginBottom:
              "30px",

            fontWeight: 600,

            flexWrap: "wrap",
          }}
        >
          {tabs.map((tab) => (
            <TabButton
              key={tab.id}

              active={
                activeTab ===
                tab.id
              }

              onClick={() =>
                setActiveTab(
                  tab.id
                )
              }
            >
              {tab.label}
            </TabButton>
          ))}
        </div>

        {/* CONTENT */}

        <ActiveComponent
          ad={ad}
        />

        {/* BOTTOM */}

        <div
          style={{
            marginTop: "40px",

            display: "flex",

            gap: "20px",
          }}
        >
          <button
            style={{
              flex: 1,

              background:
                "#ff4d4d",

              color: "white",

              border: "none",

              padding:
                "18px",

              borderRadius:
                "12px",

              fontSize:
                "16px",

              fontWeight:
                "bold",

              cursor: "pointer",
            }}
          >
            GEM KLIENT
          </button>

          <button
            style={{
              width: "220px",

              background:
                "#f1f1f1",

              border:
                "1px solid #ccc",

              padding:
                "18px",

              borderRadius:
                "12px",

              cursor: "pointer",
            }}
          >
            SLET
          </button>

          <button
            onClick={onClose}
            style={{
              width: "180px",

              background:
                "#111",

              color: "white",

              border: "none",

              padding:
                "18px",

              borderRadius:
                "12px",

              cursor: "pointer",
            }}
          >
            LUK
          </button>
        </div>
      </div>
    </div>
  );
}

function TabButton({
  children,
  active = false,
  onClick,
}: any) {
  return (
    <div
      onClick={onClick}
      style={{
        cursor: "pointer",

        paddingBottom:
          "12px",

        borderBottom:
          active
            ? "3px solid black"
            : "3px solid transparent",
      }}
    >
      {children}
    </div>
  );
}
