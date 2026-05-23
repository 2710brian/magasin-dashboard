export default function Home() {
  return (
    <main style={{
      background: "#111",
      color: "white",
      minHeight: "100vh",
      padding: "40px",
      fontFamily: "Arial"
    }}>
      <h1>SeniorGuiden dashboard</h1>

      <div style={{
        marginTop: "30px",
        background: "#222",
        padding: "20px",
        borderRadius: "10px"
      }}>
        <h2>Aalborg</h2>
        <p>62% fyldt</p>

        <div style={{
          background: "#333",
          padding: "15px",
          borderRadius: "8px",
          marginTop: "15px"
        }}>
          Side 3 – Premium bagside – Solgt
        </div>

        <div style={{
          background: "#333",
          padding: "15px",
          borderRadius: "8px",
          marginTop: "15px"
        }}>
          Side 5 – 1/1 side – Ledig
        </div> 

      </div>
    </main>
  );
}
