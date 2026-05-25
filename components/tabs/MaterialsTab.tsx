type MaterialsTabProps = {
  ad: any;
};

export default function MaterialsTab({
  ad,
}: MaterialsTabProps) {
  return (
    <div
      style={{
        display: "grid",

        gridTemplateColumns:
          "1fr 1fr",

        gap: "24px",
      }}
    >
      <UploadBox
        title="Logo"
      />

      <UploadBox
        title="Annonce PDF"
      />

      <UploadBox
        title="Annonce billede"
      />

      <UploadBox
        title="AI / EPS filer"
      />

      <UploadBox
        title="Korrektur"
      />

      <UploadBox
        title="Backup filer"
      />
    </div>
  );
}

function UploadBox({
  title,
}: any) {
  return (
    <div
      style={{
        border:
          "2px dashed #ccc",

        borderRadius:
          "14px",

        padding: "30px",

        background:
          "#fafafa",

        textAlign: "center",
      }}
    >
      <div
        style={{
          fontWeight: "bold",

          marginBottom:
            "16px",
        }}
      >
        {title}
      </div>

      <div
        style={{
          width: "100%",

          height: "140px",

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
            "18px",

          color: "#777",
        }}
      >
        Preview
      </div>

      <button
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
        }}
      >
        Upload fil
      </button>
    </div>
  );
}
