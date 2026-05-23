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
      <h1>SeniorGuiden dashboard</h1>

      <div
        style={{
          marginTop: "30px",
          background: "#1c1c1c",
          padding: "25px",
          borderRadius: "12px",
        }}
      >
        <h2>Aalborg kommune</h2>
        <p>62% fyldt</p>
      </div>
    </main>
  );
}
