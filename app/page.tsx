"use client";

import { useState } from "react";

export default function Home() {
  const [loggedIn, setLoggedIn] = useState(false);

  if (loggedIn) {
    return (
      <main
        style={{
          background: "#111",
          color: "white",
          minHeight: "100vh",
          padding: "30px",
          fontFamily: "Arial",
        }}
      >
        <h1 style={{ marginBottom: "30px" }}>
          Magasin Dashboard
        </h1>

        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(4, 1fr)",
            gap: "20px",
            marginBottom: "40px",
          }}
        >
          <div
            style={{
              background: "#1c1c1c",
              padding: "20px",
              borderRadius: "12px",
            }}
          >
            <h3>Kommuner</h3>
            <p>98</p>
          </div>

          <div
            style={{
              background: "#1c1c1c",
              padding: "20px",
              borderRadius: "12px",
            }}
          >
            <h3>Solgte sider</h3>
            <p>124</p>
          </div>

          <div
            style={{
              background: "#1c1c1c",
              padding: "20px",
              borderRadius: "12px",
            }}
          >
            <h3>Omsætning</h3>
            <p>245.000 kr.</p>
          </div>

          <div
            style={{
              background: "#1c1c1c",
              padding: "20px",
              borderRadius: "12px",
            }}
          >
            <h3>Deadlines</h3>
            <p>12 aktive</p>
          </div>
        </div>

        <div
          style={{
            background: "#1c1c1c",
            padding: "20px",
            borderRadius: "12px",
          }}
        >
          <h2 style={{ marginBottom: "20px" }}>
            Kommuner
          </h2>

          <table style={{ width: "100%" }}>
            <thead>
              <tr>
                <th align="left">Kommune</th>
                <th align="left">Status</th>
                <th align="left">Fyldning</th>
                <th align="left">Deadline</th>
              </tr>
            </thead>

            <tbody>
              <tr>
                <td>Aalborg</td>
                <td>I salg</td>
                <td>72%</td>
                <td>14 maj</td>
              </tr>

              <tr>
                <td>Aarhus</td>
                <td>Under produktion</td>
                <td>91%</td>
                <td>18 maj</td>
              </tr>

              <tr>
                <td>Odense</td>
                <td>Ikke startet</td>
                <td>12%</td>
                <td>22 maj</td>
              </tr>
            </tbody>
          </table>
        </div>
      </main>
    );
  }

  return (
    <main
      style={{
        background: "#111",
        color: "white",
        minHeight: "100vh",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        fontFamily: "Arial",
      }}
    >
      <div
        style={{
          background: "#1c1c1c",
          padding: "40px",
          borderRadius: "12px",
          width: "350px",
        }}
      >
        <h1 style={{ marginBottom: "30px" }}>
          SeniorGuiden login
        </h1>

        <input
          type="email"
          placeholder="Email"
          style={{
            width: "100%",
            padding: "12px",
            marginBottom: "15px",
            borderRadius: "8px",
            border: "none",
            background: "#333",
            color: "white",
          }}
        />

        <input
          type="password"
          placeholder="Password"
          style={{
            width: "100%",
            padding: "12px",
            marginBottom: "20px",
            borderRadius: "8px",
            border: "none",
            background: "#333",
            color: "white",
          }}
        />

        <button
          onClick={() => setLoggedIn(true)}
          style={{
            width: "100%",
            padding: "12px",
            borderRadius: "8px",
            border: "none",
            background: "#fff",
            color: "#111",
            fontWeight: "bold",
            cursor: "pointer",
          }}
        >
          Login
        </button>
      </div>
    </main>
  );
}
