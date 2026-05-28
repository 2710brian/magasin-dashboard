type AdBlockProps = {
  title: string;

  status?: string;

  price?: string;

  color?: string;

  type?: string;

  image?: string;
};

export default function AdBlock({
  title,

  status = "Ledig",

  price = "0,00",

  color = "#444",

  type = "quarter",

  image,
}: AdBlockProps) {

  let gridColumn =
    "span 1";

  let gridRow =
    "span 1";

  if (type === "helside") {

    gridColumn =
      "span 2";

    gridRow =
      "span 2";
  }

  if (
    type ===
    "half-horizontal"
  ) {

    gridColumn =
      "span 2";

    gridRow =
      "span 1";
  }

  if (
    type ===
    "half-vertical"
  ) {

    gridColumn =
      "span 1";

    gridRow =
      "span 2";
  }

  if (
    type ===
    "banner-top"
  ) {

    gridColumn =
      "span 2";

    gridRow =
      "span 1";
  }

  const isPlaceholder =
    !image;

  return (
    <div
      style={{
        position:
          "relative",

        background:
          isPlaceholder
            ? "#2a2a2a"
            : "#111",

        borderRadius:
          "10px",

        overflow:
          "hidden",

        gridColumn,

        gridRow,

        width:
          "100%",

        minHeight:
          "140px",

        boxSizing:
          "border-box",

        border:
          "1px solid #333",
      }}
    >

      {/* IMAGE */}

      {image ? (

        <img
          src={image}

          alt={title}

          style={{
            width:
              "100%",

            height:
              "100%",

            objectFit:
              "cover",

            display:
              "block",
          }}
        />

      ) : (

        <div
          style={{
            width:
              "100%",

            height:
              "100%",

            display:
              "flex",

            alignItems:
              "center",

            justifyContent:
              "center",

            background:
              "#2f2f2f",

            color:
              "#999",

            fontSize:
              "14px",

            fontWeight:
              600,

            minHeight:
              "140px",
          }}
        >
          COMING SOON
        </div>
      )}

      {/* OVERLAY */}

      <div
        style={{
          position:
            "absolute",

          inset: 0,

          background:
            "linear-gradient(to top, rgba(0,0,0,0.85), rgba(0,0,0,0.1))",

          display:
            "flex",

          flexDirection:
            "column",

          justifyContent:
            "space-between",

          padding:
            "12px",
        }}
      >

        {/* TOP */}

        <div
          style={{
            display:
              "flex",

            justifyContent:
              "space-between",

            alignItems:
              "flex-start",

            gap:
              "10px",
          }}
        >
          <div
            style={{
              color:
                "white",

              fontWeight:
                700,

              fontSize:
                "14px",

              lineHeight:
                1.2,
            }}
          >
            {title}
          </div>

          <div
            style={{
              background:
                "rgba(0,0,0,0.7)",

              color:
                "white",

              padding:
                "4px 8px",

              borderRadius:
                "6px",

              fontSize:
                "12px",

              fontWeight:
                700,

              whiteSpace:
                "nowrap",
            }}
          >
            {price}
          </div>
        </div>

        {/* BOTTOM */}

        <div
          style={{
            display:
              "flex",

            justifyContent:
              "space-between",

            alignItems:
              "center",
          }}
        >
          <div
            style={{
              background:
                "rgba(0,0,0,0.65)",

              color:
                "#ddd",

              padding:
                "4px 8px",

              borderRadius:
                "6px",

              fontSize:
                "11px",

              textTransform:
                "uppercase",
            }}
          >
            {type}
          </div>

          <div
            style={{
              color:
                "#bbb",

              fontSize:
                "11px",
            }}
          >
            {status}
          </div>
        </div>
      </div>
    </div>
  );
}
