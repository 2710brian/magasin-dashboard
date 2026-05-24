import AdBlock from "./AdBlock";

type PageEditorProps = {
  selectedPage: any;

  setSelectedPage: (
    page: any | null
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
            Side {
              selectedPage.side
            }
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

            gridAutoRows:
              "1fr",

            gap: "12px",

            height: "900px",
          }}
        >
          {selectedPage.ads.map(
            (
              ad: any,
              index: number
            ) => (
              <AdBlock
                key={index}
                title={
                  ad.title
                }
                status={
                  ad.status
                }
                price={
                  ad.price
                }
                color={
                  ad.color
                }
                type={
                  ad.type
                }
              />
            )
          )}
        </div>
      </div>
    </div>
  );
}
