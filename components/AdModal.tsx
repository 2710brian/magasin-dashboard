import { useEffect, useState } from "react";

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

  refreshAds?: () => Promise<void>;

  onSaved?: (
    updatedAd: any
  ) => void;
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
  refreshAds,
  onSaved,
}: AdModalProps) {

  const [activeTab, setActiveTab] =
    useState("contact");

  const [editedAd, setEditedAd] =
    useState({
      ...ad,
    });

  const [saving, setSaving] =
    useState(false);

  useEffect(() => {

    setEditedAd(ad);

  }, [ad]);

  const ActiveTab =
    tabs.find(
      (tab) =>
        tab.id ===
        activeTab
    );

  const ActiveComponent =
    ActiveTab?.component;

  async function saveAd() {

    try {

      setSaving(true);

      const response =
        await fetch(
          "/api/save-ad",
          {
            method: "POST",

            headers: {
              "Content-Type":
                "application/json",
            },

            body: JSON.stringify(
              editedAd
            ),
          }
        );

      const data =
        await response.json();

      console.log(data);

      if (onSaved) {

        onSaved(
          data.ad
        );
      }

      if (refreshAds) {

        await refreshAds();
      }

      alert(
        "Annonce gemt!"
      );

      onClose();

    } catch (error) {

      console.error(error);

      alert(
        "Fejl ved gem"
      );

    } finally {

      setSaving(false);
    }
  }

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
          width: "1280px",

          maxHeight: "92vh",

          overflowY: "auto",

          background: "#fff",

          borderRadius: "20px",

          padding: "34px",

          border:
            "4px solid #111",

          color: "#111",
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
                color: "#777",

                fontSize: "14px",

                marginBottom:
                  "8px",
              }}
            >
              Client ID:
              {" "}
              {
                editedAd.clientId ||
                "1001"
              }
            </div>

            <div
              style={{
                color: "#777",

                fontSize: "14px",

                marginBottom:
                  "16px",
              }}
            >
              Annonce ID:
              {" "}
              {
                editedAd.adId ||
                "AD-2044"
              }
            </div>

            <div
              style={{
                color: "#777",

                fontSize: "14px",

                marginBottom:
                  "16px",
              }}
            >
              Oprettet:
              {" "}
              {
                editedAd.createdAt ||
                ""
              }
            </div>

            <h1
              style={{
                fontSize: "48px",

                margin: 0,
              }}
            >
              {
                editedAd.title
              }
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

                border:
                  "2px dashed #ccc",

                borderRadius:
                  "16px",

                display: "flex",

                alignItems:
                  "center",

                justifyContent:
                  "center",

                marginBottom:
                  "12px",

                background:
                  "#fafafa",

                overflow:
                  "hidden",
              }}
            >
              {editedAd.logo ? (
                <img
                  src={
                    editedAd.logo
                  }
                  alt="logo"
                  style={{
                    width:
                      "100%",

                    height:
                      "100%",

                    objectFit:
                      "contain",
                  }}
                />
              ) : (
                "LOGO"
              )}
            </div>

            <label
              style={{
                background:
                  "#111",

                color: "white",

                border: "none",

                padding:
                  "12px 18px",

                borderRadius:
                  "10px",

                cursor: "pointer",

                fontWeight:
                  600,

                display:
                  "inline-block",
              }}
            >
              Upload logo

              <input
                type="file"

                accept="image/*"

                style={{
                  display:
                    "none",
                }}

                onChange={(
                  e: any
                ) => {

                  const file =
                    e.target
                      .files?.[0];

                  if (
                    !file
                  )
                    return;

                  const reader =
                    new FileReader();

                  reader.onload =
                    () => {

                      setEditedAd(
                        (
                          prev: any
                        ) => ({
                          ...prev,

                          logo:
                            reader.result,
                        })
                      );
                    };

                  reader.readAsDataURL(
                    file
                  );
                }}
              />
            </label>
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
              "16px",

            marginBottom:
              "30px",

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

                fontWeight:
                  700,

                paddingBottom:
                  "10px",

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

        {/* CONTENT */}

        {ActiveComponent && (
          <ActiveComponent
            ad={editedAd}
            setAd={
              setEditedAd
            }
          />
        )}

        {/* BOTTOM */}

        <div
          style={{
            marginTop: "40px",

            display: "flex",

            gap: "20px",
          }}
        >
          <button
            onClick={
              saveAd
            }

            disabled={
              saving
            }

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

              opacity:
                saving
                  ? 0.7
                  : 1,
            }}
          >
            {saving
              ? "GEMMER..."
              : "GEM ANNONCE"}
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

              fontWeight:
                700,
            }}
          >
            LUK
          </button>
        </div>
      </div>
    </div>
  );
}
