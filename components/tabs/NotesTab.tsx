type NotesTabProps = {
  ad: any;
};

export default function NotesTab({
  ad,
}: NotesTabProps) {
  return (
    <div
      style={{
        display: "grid",

        gridTemplateColumns:
          "1.2fr 0.8fr",

        gap: "24px",
      }}
    >
      {/* LEFT */}

      <div>
        <div
          style={{
            fontSize: "18px",

            fontWeight: "bold",

            marginBottom:
              "18px",
          }}
        >
          Interne noter
        </div>

        <textarea
          placeholder="Skriv interne noter, artikel-idéer, kundebeskeder, korrektur-info osv..."
          style={{
            width: "100%",

            minHeight:
              "420px",

            background:
              "#f5f5f5",

            border:
              "1px solid #dcdcdc",

            borderRadius:
              "12px",

            padding: "18px",

            fontSize:
              "15px",

            resize: "vertical",

            boxSizing:
              "border-box",
          }}
        />
      </div>

      {/* RIGHT */}

      <div>
        <div
          style={{
            fontSize: "18px",

            fontWeight: "bold",

            marginBottom:
              "18px",
          }}
        >
          Materialer &
          dokumenter
        </div>

        <UploadCard
          title="Artikel materiale"
        />

        <UploadCard
          title="Word / PDF"
        />

        <UploadCard
          title="Billeder"
        />

        <UploadCard
          title="Kundemateriale"
        />
      </div>
    </div>
  );
}

function UploadCard({
  title,
}: any) {
  return (
    <div
      style={{
        background: "#fafafa",

        border:
          "2px dashed #ccc",

        borderRadius:
          "12px",

        padding: "18px",

        marginBottom:
          "18px",
      }}
    >
      <div
        style={{
          fontWeight: "bold",

          marginBottom:
            "12px",
        }}
      >
        {title}
      </div>

      <div
        style={{
          height: "80px",

          background:
            "#f1f1f1",

          borderRadius:
            "10px",

          display: "flex",

          alignItems:
            "center",

          justifyContent:
            "center",

          marginBottom:
            "12px",

          color: "#777",
        }}
      >
        Ingen filer endnu
      </div>

      <button
        style={{
          background:
            "#111",

          color: "white",

          border: "none",

          padding:
            "10px 14px",

          borderRadius:
            "10px",

          cursor: "pointer",
        }}
      >
        Upload fil
      </button>
    </div>
  );
}
