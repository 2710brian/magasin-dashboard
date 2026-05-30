type AdBlockProps = {
  title: string;

  status?: string;

  price?: string | number;

  color?: string;

  type?: string;

  image?: string;

  customer?: string;

  seller?: string;

  width?: number;

  height?: number;
};

export default function AdBlock({
  title,

  status = "Ledig",

  price = "0,00",

  color = "#444",

  type = "quarter",

  image,

  customer,

  seller,

  width,

  height,
}: AdBlockProps) {

  let gridColumn =
    "span 1";

  let gridRow =
    "span 1";

  let minHeight =
    "120px";

  /*
    VISITKORT
  */

  if (
    type ===
    "business-card"
  ) {

    gridColumn =
      "span 1";

    gridRow =
      "span 1";

    minHeight =
      "90px";
  }

  /*
    DOBBELT VISITKORT
  */

  if (
    type ===
    "double-business-card"
  ) {

    gridColumn =
      "span 2";

    gridRow =
      "span 1";

    minHeight =
      "90px";
  }

  /*
    KVART HØJKANT
  */

  if (
    type ===
    "quarter"
  ) {

    gridColumn =
      "span 1";

    gridRow =
      "span 2";

    minHeight =
      "220px";
  }

  /*
    KVART VANDRET
  */

  if (
    type ===
    "quarter-horizontal"
  ) {

    gridColumn =
      "span 2";

    gridRow =
      "span 1";

    minHeight =
      "120px";
  }

  /*
    HALV VANDRET
  */

  if (
    type ===
    "half-horizontal"
  ) {

    gridColumn =
      "span 2";

    gridRow =
      "span 2";

    minHeight =
      "240px";
  }

  /*
    HALV LODRET
  */

  if (
    type ===
    "half-vertical"
  ) {

    gridColumn =
      "span 1";

    gridRow =
      "span 4";

    minHeight =
      "420px";
  }

  /*
    HELSIDE
  */

  if (
    type ===
    "helside"
  ) {

    gridColumn =
      "span 2";

    gridRow =
      "span 6";

    minHeight =
      "700px";
  }

  /*
    DOBBELT SIDE
  */

  if (
    type ===
    "double-page"
  ) {

    gridColumn =
      "span 4";

    gridRow =
      "span 6";

    minHeight =
      "700px";
  }

  /*
    TEKSTOMRÅDE
  */

  if (
    type ===
    "text"
  ) {

    gridColumn =
      "span 2";

    gridRow =
      "span 1";

    minHeight =
      "120px";
  }

  const isPlaceholder =
  !image &&
  (!price ||
    Number(price) === 0);

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

        minHeight,

        boxSizing:
          "border-box",

        border:
          "1px solid #333",
      }}
    >

      {/* IMAGE */}

      {!isPlaceholder ? (

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

            minHeight,
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
          <div>

            <div
              style={{
                color:
                  "white",

                fontWeight:
                  700,

                fontSize:
                  "15px",

                lineHeight:
                  1.2,
              }}
            >
              {title}
            </div>

            {customer && (

              <div
                style={{
                  color:
                    "#bbb",

                  fontSize:
                    "12px",

                  marginTop:
                    "4px",
                }}
              >
                {customer}
              </div>
            )}

            {seller && (

              <div
                style={{
                  color:
                    "#888",

                  fontSize:
                    "11px",
                }}
              >
                Sælger:
                {" "}
                {seller}
              </div>
            )}
          </div>

          <div
            style={{
              background:
                "rgba(0,0,0,0.75)",

              color:
                "white",

              padding:
                "5px 8px",

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
          
            {price} kr.
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
