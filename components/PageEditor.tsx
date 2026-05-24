import AdBlock from "./AdBlock";

type PageEditorProps = {
  selectedPage: number;

  setSelectedPage: (
    page: number | null
  ) => void;
};

export default function PageEditor({
  selectedPage,
  setSelectedPage,
}: PageEditorProps) {
  return (
    <div>
      {/* TOP */}

      <div
        style={{
          display: "flex",

          justifyContent:
            "space-between",

          alignItems: "center",

          marginBottom: "30px",
        }}
      >
        <div>
          <h1>
            Side {selectedPage}
          </h1>

          <p
            style={{
              color: "#888",
            }}
          >
            Side editor
          </p>
        </div>

        <button
          onClick={() =>
            setSelectedPage(
              null
            )
          }
          style={{
            background:
              "#1f1f1f",

            border:
              "1px solid #333",

            color: "white",

            padding:
              "12px 18px",

            borderRadius:
              "10px",

            cursor: "pointer",
          }}
        >
          Tilbage til sider
        </button>
      </div>

      {/* SIDE */}

      <div
        style={{
          display: "flex",
          justifyContent:
            "center",
        }}
      >
        <div
          style={{
            width: "500px",

            aspectRatio:
              "210 / 297",

            background:
              "#1b1b1b",

            borderRadius:
              "14px",

            padding: "20px",

            display: "grid",

            gridTemplateColumns:
              "1fr 1fr",

            gap: "12px",
          }}
        >
          <AdBlock
            title="Hansen VVS"
            status="Solgt"
            price="12.500 kr."
            color="#22c55e"
          />

          <AdBlock
            title="LEDIG"
            status="Ledig"
            color="#444"
          />

          <AdBlock
            title="XL Byg"
            status="Reserveret"
            price="8.000 kr."
            color="#eab308"
          />

          <AdBlock
            title="Café Nytorv"
            status="Solgt"
            price="6.500 kr."
            color="#22c55e"
          />
        </div>
      </div>
    </div>
  );
}
