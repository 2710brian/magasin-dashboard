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
    component: ContactTab,
  },

  {
    id: "geography",
    label: "Geografi",
    component: GeographyTab,
  },

  {
    id: "sales",
    label: "Salg",
    component: SalesTab,
  },

  {
    id: "marketing",
    label: "Marketing",
    component: MarketingTab,
  },

  {
    id: "materials",
    label: "Materialer",
    component: MaterialsTab,
  },

  {
    id: "production",
    label: "Produktion",
    component: ProductionTab,
  },

  {
    id: "notes",
    label: "Noter",
    component: NotesTab,
  },
];

export default function AdModal({
  ad,
  onClose,
}: AdModalProps) {

  const [activeTab, setActiveTab] =
    useState("contact");

  const [editedAd, setEditedAd] =
    useState({
      ...ad,
    });

  const ActiveTab =
    tabs.find(
      (tab) =>
        tab.id ===
        activeTab
    );

  const ActiveComponent =
    ActiveTab?.component;

  return (
    <div>
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
          <h1>
            {editedAd.title}
          </h1>

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
              <div
                key={tab.id}
                onClick={() =>
                  setActiveTab(
                    tab.id
                  )
                }
                style={{
                  cursor:
                    "pointer",
                  paddingBottom:
                    "12px",
                  borderBottom:
                    activeTab ===
                    tab.id
                      ? "3px solid black"
                      : "3px solid transparent",
                }}
              >
                {tab.label}
              </div>
            ))}
          </div>

          {ActiveComponent && (
            <ActiveComponent
              ad={editedAd}
              setAd={
                setEditedAd
              }
            />
          )}

          <div
            style={{
              marginTop: "40px",
              display: "flex",
              gap: "20px",
            }}
          >
            <button
              onClick={() =>
                console.log(
                  editedAd
                )
              }
            >
              GEM KLIENT
            </button>

            <button
              onClick={onClose}
            >
              LUK
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
