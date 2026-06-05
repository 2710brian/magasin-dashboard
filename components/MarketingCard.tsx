type MarketingCardProps = {
  kommune: {
    navn: string;
    region: string;
    fyldning: number;
    deadline: string;
  };

  dbAds: any[];
};

export default function MarketingCard({
  kommune,
  dbAds,
}: MarketingCardProps) {

  return (
    <div
      style={{
        background:
          "#1b1b1b",

        padding:
          "20px",

        borderRadius:
          "14px",

        border:
          "1px solid #2a2a2a",

        display:
          "flex",

        flexDirection:
          "column",

        gap:
          "14px",
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
        }}
      >
        <div>

          <h3
            style={{
              margin: 0,

              marginBottom:
                "6px",
            }}
          >
            {kommune.navn}
          </h3>

          <div
            style={{
              color:
                "#888",

              fontSize:
                "14px",
            }}
          >
            {kommune.region}
          </div>
        </div>

        <div
          style={{
            width:
              "12px",

            height:
              "12px",

            borderRadius:
              "50%",

            background:
              "#22c55e",
          }}
        />
      </div>

     <div
  style={{
    display: "grid",
    gridTemplateColumns: "1fr 1fr",
    gap: "12px",
  }}
>

  <div>
    <strong>Prompts</strong>
    <div>0</div>
  </div>

  <div>
    <strong>Noter</strong>
    <div>0</div>
  </div>

  <div>
    <strong>Pitch</strong>
    <div>0</div>
  </div>

  <div>
    <strong>Emails</strong>
    <div>0</div>
  </div>

  <div>
    <strong>PDF</strong>
    <div>0</div>
  </div>

  <div>
    <strong>Billeder</strong>
    <div>0</div>
  </div>

  <div>
    <strong>Lyd</strong>
    <div>0</div>
  </div>

  <div>
    <strong>Video</strong>
    <div>0</div>
   </div>
       
  </div>
   </div>   
  );
}
