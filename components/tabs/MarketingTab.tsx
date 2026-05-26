import {
  compactCardStyle,
  compactGridStyle,
  compactInputStyle,
  compactLabelStyle,
} from "../styles/compactStyles";

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

        gap: "12px",
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

              style={
                compactCardStyle
              }
            >
              <div
                style={{
                  fontSize:
                    "14px",

                  fontWeight:
                    "bold",

                  marginBottom:
                    "10px",
                }}
              >
                {channel}
              </div>

              <div
                style={
                  compactGridStyle
                }
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
                      compactInputStyle
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
                      compactInputStyle
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
                      compactInputStyle
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
                      compactInputStyle
                    }
                  />
                </Field>

                <Field label="Ansvarlig">
                  <select
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

                    style={
                      compactInputStyle
                    }
                  >
                    <option value="">
                      Vælg
                    </option>

                    <option>
                      Brian
                    </option>

                    <option>
                      Kenneth
                    </option>

                    <option>
                      Kristian
                    </option>
                  </select>
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
                      compactInputStyle
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
        style={
          compactLabelStyle
        }
      >
        {label}
      </div>

      {children}
    </div>
  );
}
