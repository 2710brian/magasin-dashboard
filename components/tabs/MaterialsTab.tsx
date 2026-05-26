import {
  compactButtonStyle,
  compactCardStyle,
} from "../styles/compactStyles";

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

        gap: "12px",
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
        ...compactCardStyle,

        border:
          "1px dashed #ccc",

        textAlign:
          "center",
      }}
    >
      <div
        style={{
          fontWeight:
            "bold",

          marginBottom:
            "10px",

          fontSize:
            "13px",
        }}
      >
        {title}
      </div>

      <div
        style={{
          width: "100%",

          height: "70px",

          background:
            "#f1f1f1",

          borderRadius:
            "8px",

          display: "flex",

          alignItems:
            "center",

          justifyContent:
            "center",

          marginBottom:
            "10px",

          color:
            "#777",

          fontSize:
            "12px",
        }}
      >
        Preview
      </div>

      <button
        style={
          compactButtonStyle
        }
      >
        Upload fil
      </button>
    </div>
  );
}
