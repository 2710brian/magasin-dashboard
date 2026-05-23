export default function Dashboard() {
  return (
    <main
      style={{
        background: "#111",
        color: "white",
        minHeight: "100vh",
        padding: "40px",
        fontFamily: "Arial",
      }}
    >
      <h1
        style={{
          fontSize: "42px",
          marginBottom: "30px",
        }}
      >
        SeniorGuiden dashboard
      </h1>

      <div
        style={{
          background: "#1c1c1c",
          padding: "25px",
          borderRadius: "12px",
          marginBottom: "20px",
        }}
      >
        <h2>Aalborg kommune</h2>
        <p>62% fyldt</p>
      </div>

      <div
        style={{
          background: "#1c1c1c",
          padding: "25px",
          borderRadius: "12px",
        }}
      >
        <h2>Roskilde kommune</h2>
        <p>48% fyldt</p>
      </div>
    </main>
  );
}
