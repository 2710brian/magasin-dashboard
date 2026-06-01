import { useEffect, useState } from "react";

import ContactTab from "./tabs/ContactTab";
import SalesTab from "./tabs/SalesTab";
import GeographyTab from "./tabs/GeographyTab";
import MaterialsTab from "./tabs/MaterialsTab";
import NotesTab from "./tabs/NotesTab";
import ProductionTab from "./tabs/ProductionTab";
import MarketingTab from "./tabs/MarketingTab";
import AffiliateTab from "./tabs/AffiliateTab";

type ClientModalProps = {
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
    id: "affiliate",
    label: "Affiliate",
    component: AffiliateTab,
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

export default function ClientModal({
  ad,
  onClose,
  refreshAds,
  onSaved,
}: ClientModalProps) {

  const [activeTab, setActiveTab] =
    useState("contact");

  const [editedAd, setEditedAd] =
    useState({
      ...ad,

      contactPerson:
        ad.contactperson ||
        ad.contactPerson ||
        "",

      premiumPlacement:
        ad.premiumplacement ||
        ad.premiumPlacement ||
        "Nej",
    });

  const [saving, setSaving] =
    useState(false);

  useEffect(() => {

    setEditedAd({
      ...ad,

      contactPerson:
        ad.contactperson ||
        ad.contactPerson ||
        "",

      premiumPlacement:
        ad.premiumplacement ||
        ad.premiumPlacement ||
        "Nej",
    });

  }, [ad]);

  const ActiveTab =
    tabs.find(
      (tab) =>
        tab.id ===
        activeTab
    );

  const ActiveComponent =
    ActiveTab?.component;

  async function saveClient() {

    try {

      setSaving(true);

      const payload = {
        ...editedAd,

        contactperson:
          editedAd.contactPerson,

        premiumplacement:
          editedAd.premiumPlacement,
      };

      const response =
        await fetch(
          "/api/save-client",
          {
            method: "POST",

            headers: {
              "Content-Type":
                "application/json",
            },

            body: JSON.stringify(
              payload
            ),
          }
        );

      const data =
        await response.json();

      console.log(
        "SAVE RESPONSE:",
        data
      );

      if (
        !data.success
      ) {

        alert(
          "Fejl ved gem"
        );

        return;
      }

      if (onSaved) {

        onSaved(
          payload
        );
      }

      if (refreshAds) {

        await refreshAds();
      }

      alert(
        "Gemt"
      );

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
          "rgba(0,0,0,0.72)",

        display: "flex",

        justifyContent:
          "center",

        alignItems: "center",

        zIndex: 9999,

        padding: "14px",
      }}
    >
      <div
        style={{
          width: "1120px",

          maxHeight: "92vh",

          overflowY: "auto",

          background: "#fff",

          borderRadius: "14px",

          padding: "18px",

          border:
            "2px solid #111",

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
              "center",

            marginBottom: "8px",
          }}
        >
          <div>

            <div
              style={{
                display: "flex",

                gap: "12px",

                flexWrap: "wrap",

                color: "#777",

                fontSize: "11px",

                marginBottom:
                  "6px",
              }}
            >
              <div>
                Client ID:
                {" "}
                {
                  editedAd.clientId ||
                  "1001"
                }
              </div>

              <div>
                Annonce ID:
                {" "}
                {
                  editedAd.adId ||
                  "AD-2044"
                }
              </div>

              <div>
                Oprettet:
                {" "}
                {
                  editedAd.createdAt ||
                  ""
                }
              </div>
            </div>

            <h1
              style={{
                fontSize: "22px",

                margin: 0,

                lineHeight: 1.1,
              }}
            >
              {
                editedAd.title
              }
            </h1>
          </div>

          <div
            style={{
              display: "flex",

              alignItems:
                "center",

              gap: "8px",
            }}
          >
            <div
              style={{
                width: "52px",

                height: "52px",

                border:
                  "1px dashed #ccc",

                borderRadius:
                  "8px",

                display: "flex",

                alignItems:
                  "center",

                justifyContent:
                  "center",

                background:
                  "#fafafa",

                overflow:
                  "hidden",

                fontSize:
                  "10px",
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

                color:
                  "white",

                padding:
                  "7px 10px",

                borderRadius:
                  "6px",

                cursor:
                  "pointer",

                fontWeight:
                  600,

                fontSize:
                  "11px",

                display:
                  "inline-block",
              }}
            >
              Upload

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

            gap: "14px",

            borderBottom:
              "1px solid #ddd",

            paddingBottom:
              "8px",

            marginBottom:
              "14px",

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
                  600,

                fontSize:
                  "13px",

                paddingBottom:
                  "5px",

                borderBottom:
                  activeTab ===
                  tab.id
                    ? "2px solid black"
                    : "2px solid transparent",
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
            marginTop: "14px",

            display: "flex",

            justifyContent:
              "flex-end",

            gap: "8px",
          }}
        >
          <button
            onClick={
              saveClient
            }

            disabled={
              saving
            }

            style={{
              width: "170px",

              background:
                "#ff4d4d",

              color:
                "white",

              border:
                "none",

              padding:
                "10px",

              borderRadius:
                "7px",

              fontSize:
                "13px",

              fontWeight:
                "bold",

              cursor:
                "pointer",

              opacity:
                saving
                  ? 0.7
                  : 1,
            }}
          >
            {saving
              ? "GEMMER..."
              : "GEM"}
          </button>

          <button
            style={{
              width: "90px",

              background:
                "#f1f1f1",

              border:
                "1px solid #ccc",

              padding:
                "10px",

              borderRadius:
                "7px",

              cursor:
                "pointer",

              fontWeight:
                600,

              fontSize:
                "13px",
            }}
          >
            SLET
          </button>

          <button
            onClick={onClose}

            style={{
              width: "90px",

              background:
                "#111",

              color:
                "white",

              border:
                "none",

              padding:
                "10px",

              borderRadius:
                "7px",

              cursor:
                "pointer",

              fontWeight:
                600,

              fontSize:
                "13px",
            }}
          >
            LUK
          </button>
        </div>
      </div>
    </div>
  );
}

