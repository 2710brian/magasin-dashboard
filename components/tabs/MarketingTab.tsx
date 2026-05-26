type MarketingTabProps = {
  ad: any;

  setAd: any;
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
  setAd,
}: MarketingTabProps) {

  function fieldKey(
    channel: string,
    field: string
  ) {

    return `${channel
      .toLowerCase()
      .replace(/\s/g, "")}_${field}`;
  }

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
        ) => {

          const activeKey =
            fieldKey(
              channel,
              "active"
            );

          const budgetKey =
            fieldKey(
              channel,
              "budget"
            );

          const startKey =
            fieldKey(
              channel,
              "start"
            );

          const endKey =
            fieldKey(
              channel,
              "end"
            );

          const managerKey =
            fieldKey(
              channel,
              "manager"
            );

          const commentKey =
            fieldKey(
              channel,
              "comment"
            );

          return (
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
                    value={
                      ad[
                        activeKey
                      ] || "Nej"
                    }

                    onChange={(
                      e
                    ) =>
                      setAd(
                        (
                          prev: any
                        ) => ({
                          ...prev,

                          [activeKey]:
                            e
                              .target
                              .value,
                        })
                      )
                    }

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
                    value={
                      ad[
                        budgetKey
                      ] || ""
                    }

                    onChange={(
                      e
                    ) =>
                      setAd(
                        (
                          prev: any
                        ) => ({
                          ...prev,

                          [budgetKey]:
                            e
                              .target
                              .value,
                        })
                      )
                    }

                    placeholder="2000€/md"

                    style={
                      inputStyle
                    }
                  />
                </Field>

                <Field label="Startdato">
                  <input
                    type="date"

                    value={
                      ad[
                        startKey
                      ] || ""
                    }

                    onChange={(
                      e
                    ) =>
                      setAd(
                        (
                          prev: any
                        ) => ({
                          ...prev,

                          [startKey]:
                            e
                              .target
                              .value,
                        })
                      )
                    }

                    style={
                      inputStyle
                    }
                  />
                </Field>

                <Field label="Udløbsdato">
                  <input
                    type="date"

                    value={
                      ad[
                        endKey
                      ] || ""
                    }

                    onChange={(
                      e
                    ) =>
                      setAd(
                        (
                          prev: any
                        ) => ({
                          ...prev,

                          [endKey]:
                            e
                              .target
                              .value,
                        })
                      )
                    }

                    style={
                      inputStyle
                    }
                  />
                </Field>

                <Field label="Ansvarlig">
                  <input
                    value={
                      ad[
                        managerKey
                      ] || ""
                    }

                    onChange={(
                      e
                    ) =>
                      setAd(
                        (
                          prev: any
                        ) => ({
                          ...prev,

                          [managerKey]:
                            e
                              .target
                              .value,
                        })
                      )
                    }

                    placeholder="Internt / Bureau"

                    style={
                      inputStyle
                    }
                  />
                </Field>

                <Field label="Kommentar">
                  <input
                    value={
                      ad[
                        commentKey
                      ] || ""
                    }

                    onChange={(
                      e
                    ) =>
                      setAd(
                        (
                          prev: any
                        ) => ({
                          ...prev,

                          [commentKey]:
                            e
                              .target
                              .value,
                        })
                      )
                    }

                    placeholder="Ekstra info"

                    style={
                      inputStyle
                    }
                  />
                </Field>
              </div>
            </div>
          );
        }
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
