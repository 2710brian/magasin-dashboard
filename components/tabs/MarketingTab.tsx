type MarketingTabProps = {
  ad: any;
};

const marketingChannels = [
  "Google Ads",
  "SEO",
  "Email Marketing",
  "Affiliate",
  "Meta Ads",
  "TikTok Ads",
  "LinkedIn",
  "Radio",
  "TV",
  "Print",
];

export default function MarketingTab({
  ad,
}: MarketingTabProps) {
  return (
    <div
      style={{
        display: "flex",

        flexDirection:
          "column",

        gap: "24px",
      }}
    >
      {marketingChannels.map(
        (
          channel,
          index
        ) => (
          <div
            key={index}
            style={{
              border:
                "1px solid #ddd",

              borderRadius:
                "14px",

              padding:
                "24px",

              background:
                "#fafafa",
            }}
          >
            <div
              style={{
                fontSize:
                  "20px",

                fontWeight:
                  "bold",

                marginBottom:
                  "20px",
              }}
            >
              {channel}
            </div>

            <div
              style={{
                display:
                  "grid",

                gridTemplateColumns:
                  "1fr 1fr",

                gap: "20px",
              }}
            >
              <Field label="Aktiv">
                <select
                  style={
                    inputStyle
                  }
                >
                  <option>
                    Nej
                  </option>

                  <option>
                    Ja
                  </option>
                </select>
              </Field>

              <Field label="Budget">
                <input
                  placeholder="2000€/md"
                  style={
                    inputStyle
                  }
                />
              </Field>

              <Field label="Startdato">
                <input
                  type="date"
                  style={
                    inputStyle
                  }
                />
              </Field>

              <Field label="Udløbsdato">
                <input
                  type="date"
                  style={
                    inputStyle
                  }
                />
              </Field>

              <Field label="Ansvarlig">
                <input
                  placeholder="Internt / Bureau"
                  style={
                    inputStyle
                  }
                />
              </Field>

              <Field label="Kommentar">
                <input
                  placeholder="Ekstra info"
                  style={
                    inputStyle
                  }
                />
              </Field>
            </div>
          </div>
        )
      )}
    </div>
  );
}

function Field({
  label,
  children,
}: any) {
  return (
    <div>
      <div
        style={{
          marginBottom:
            "8px",

          fontWeight: 600,
        }}
      >
        {label}
      </div>

      {children}
    </div>
  );
}

const inputStyle = {
  width: "100%",

  background: "#f5f5f5",

  border:
    "1px solid #dcdcdc",

  color: "#111",

  padding: "14px",

  borderRadius:
    "10px",

  boxSizing:
    "border-box" as const,
};
