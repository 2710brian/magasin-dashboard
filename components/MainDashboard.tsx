"use client";

import { useState } from "react";

import CRMView from "./CRMView";
import MagazineView from "./MagazineView";

export default function MainDashboard() {

  const [
    activeView,
    setActiveView,
  ] = useState("crm");

  return (
    <div
      style={{
        display: "flex",

        minHeight:
          "100vh",

        background:
          "#111",

        color:
          "white",
      }}
    >
      {/* SIDEBAR */}

      <div
        style={{
          width: "260px",

          background:
            "#1a1a1a",

          borderRight:
            "1px solid #2d2d2d",

          padding: "24px",

          display: "flex",

          flexDirection:
            "column",

          gap: "14px",
        }}
      >
        <div
          style={{
            fontSize: "28px",

            fontWeight:
              "bold",

            marginBottom:
              "30px",
          }}
        >
          CRM AI
        </div>

        <MenuButton
          active={
            activeView ===
            "crm"
          }

          onClick={() =>
            setActiveView(
              "crm"
            )
          }
        >
          CRM
        </MenuButton>

        <MenuButton
          active={
            activeView ===
            "magazines"
          }

          onClick={() =>
            setActiveView(
              "magazines"
            )
          }
        >
          Magasiner
        </MenuButton>

        <MenuButton
          active={
            activeView ===
            "affiliate"
          }

          onClick={() =>
            setActiveView(
              "affiliate"
            )
          }
        >
          Affiliate
        </MenuButton>

        <MenuButton
          active={
            activeView ===
            "marketing"
          }

          onClick={() =>
            setActiveView(
              "marketing"
            )
          }
        >
          Marketing
        </MenuButton>

        <MenuButton
          active={
            activeView ===
            "ai"
          }

          onClick={() =>
            setActiveView(
              "ai"
            )
          }
        >
          AI Tools
        </MenuButton>

        <MenuButton
          active={
            activeView ===
            "settings"
          }

          onClick={() =>
            setActiveView(
              "settings"
            )
          }
        >
          Settings
        </MenuButton>
      </div>

      {/* CONTENT */}

      <div
        style={{
          flex: 1,

          padding: "40px",

          overflow:
            "auto",
        }}
      >
        {activeView ===
          "crm" && (
          <CRMView />
        )}

        {activeView ===
          "magazines" && (
          <MagazineView />
        )}

        {activeView ===
          "affiliate" && (
          <div>
            <h1>
              Affiliate
            </h1>
          </div>
        )}

        {activeView ===
          "marketing" && (
          <div>
            <h1>
              Marketing
            </h1>
          </div>
        )}

        {activeView ===
          "ai" && (
          <div>
            <h1>
              AI Tools
            </h1>
          </div>
        )}

        {activeView ===
          "settings" && (
          <div>
            <h1>
              Settings
            </h1>
          </div>
        )}
      </div>
    </div>
  );
}

function MenuButton({
  children,
  active,
  onClick,
}: any) {

  return (
    <button
      onClick={onClick}

      style={{
        background:
          active
            ? "#2d2d2d"
            : "transparent",

        border:
          active
            ? "1px solid #444"
            : "1px solid transparent",

        color:
          "white",

        padding:
          "14px 16px",

        borderRadius:
          "12px",

        textAlign:
          "left",

        cursor:
          "pointer",

        fontWeight:
          600,

        fontSize:
          "15px",
      }}
    >
      {children}
    </button>
  );
}
