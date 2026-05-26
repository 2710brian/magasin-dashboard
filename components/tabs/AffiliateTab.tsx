"use client";

type AffiliateTabProps = {
  ad: any;

  setAd: any;
};

const dialogStatuses = [
  "Følg op 3 mdr",
  "Følg op 6 mdr",
  "Ikke kontakte",
  "Infomail sendt",
  "Kontaktet",
  "Mediebureau",
  "Nystartet",
  "Oplæg sendt",
  "Tabt",
  "Vundet",
];

const affiliateStatuses = [
  "Afventer",
  "Afvist",
  "Godkendt",
  "Ikke ansøgt",
  "Lukket ned",
  "Pause",
];

const trafficLevels = [
  "Lav",
  "Mellem",
  "Høj",
];

const networks = [
  "Adtraction",
  "Awin",
  "Daisycon",
  "GJ",
  "Partner-ads",
  "Shopnello",
  "TradeDoubler",
  "Tradetracker",
  "Webigans",
  "addrevenue",
];

const countries = [
  "DK",
  "SE",
  "NO",
  "FI",
  "DE",
  "ES",
];

const feedStatuses = [
  "Ja",
  "Nej",
  "Under udvikling",
  "Giv et tilbud",
];

export default function AffiliateTab({
  ad,
  setAd,
}: AffiliateTabProps) {

  function toggleMultiValue(
    field: string,
    value: string
  ) {

    const current =
      ad[field]
        ? ad[field]
            .split(",")
            .filter(Boolean)
        : [];

    const exists =
      current.includes(
        value
      );

    const updated =
      exists
        ? current.filter(
            (
              item: string
            ) =>
              item !== value
          )
        : [
            ...current,
            value,
          ];

    setAd(
      (
        prev: any
      ) => ({
        ...prev,

        [field]:
          updated.join(
            ","
          ),
      })
    );
  }

  function isSelected(
    field: string,
    value: string
  ) {

    if (
      !ad[field]
    ) {
      return false;
    }

    return ad[
      field
    ]
      .split(",")
      .includes(value);
  }

  return (
    <div
      style={{
        display: "flex",

        flexDirection:
          "column",

        gap: "32px",
      }}
    >
      {/* WEBSHOPS */}

      <Section title="Webshops">

        <Field label="Webshops">
          <textarea
            value={
              ad.affiliate_webshops ||
              ""
            }

            onChange={(
              e
            ) =>
              setAd(
                (
                  prev: any
                ) => ({
                  ...prev,

                  affiliate_webshops:
                    e.target
                      .value,
                })
              )
            }

            placeholder="Én webshop pr linje"

            style={{
              ...inputStyle,

              minHeight:
                "120px",
            }}
          />
        </Field>

      </Section>

      {/* PIPELINE */}

      <Section title="Pipeline">

        <Grid>

          <Field label="Dialog status">
            <select
              value={
                ad.affiliate_dialogstatus ||
                ""
              }

              onChange={(
                e
              ) =>
                setAd(
                  (
                    prev: any
                  ) => ({
                    ...prev,

                    affiliate_dialogstatus:
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
              <option value="">
                Vælg
              </option>

              {dialogStatuses.map(
                (
                  item
                ) => (
                  <option
                    key={
                      item
                    }
                  >
                    {item}
                  </option>
                )
              )}
            </select>
          </Field>

          <Field label="Aff. status">
            <select
              value={
                ad.affiliate_status ||
                ""
              }

              onChange={(
                e
              ) =>
                setAd(
                  (
                    prev: any
                  ) => ({
                    ...prev,

                    affiliate_status:
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
              <option value="">
                Vælg
              </option>

              {affiliateStatuses.map(
                (
                  item
                ) => (
                  <option
                    key={
                      item
                    }
                  >
                    {item}
                  </option>
                )
              )}
            </select>
          </Field>

          <Field label="Ticket #">
            <input
              value={
                ad.affiliate_ticket ||
                ""
              }

              onChange={(
                e
              ) =>
                setAd(
                  (
                    prev: any
                  ) => ({
                    ...prev,

                    affiliate_ticket:
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

          <Field label="Næste opfølgning">
            <input
              type="date"

              value={
                ad.affiliate_nextfollowup ||
                ""
              }

              onChange={(
                e
              ) =>
                setAd(
                  (
                    prev: any
                  ) => ({
                    ...prev,

                    affiliate_nextfollowup:
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

          <Field label="Kontakt dato">
            <input
              type="date"

              value={
                ad.affiliate_contactdate ||
                ""
              }

              onChange={(
                e
              ) =>
                setAd(
                  (
                    prev: any
                  ) => ({
                    ...prev,

                    affiliate_contactdate:
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

        </Grid>

      </Section>

      {/* INFO */}

      <Section title="Info">

        <Grid>

          <Field label="Hovedkategori">
            <input
              value={
                ad.affiliate_maincategory ||
                ""
              }

              onChange={(
                e
              ) =>
                setAd(
                  (
                    prev: any
                  ) => ({
                    ...prev,

                    affiliate_maincategory:
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

          <Field label="Produkter">
            <input
              value={
                ad.affiliate_products ||
                ""
              }

              onChange={(
                e
              ) =>
                setAd(
                  (
                    prev: any
                  ) => ({
                    ...prev,

                    affiliate_products:
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

          <Field label="EPC">
            <input
              value={
                ad.affiliate_epc ||
                ""
              }

              onChange={(
                e
              ) =>
                setAd(
                  (
                    prev: any
                  ) => ({
                    ...prev,

                    affiliate_epc:
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

        </Grid>

      </Section>

      {/* TEKNISK */}

      <Section title="Tekniske systemdata">

        <Grid>

          <Field label="Dato tilføjet">
            <input
              type="date"

              value={
                ad.affiliate_addeddate ||
                ""
              }

              onChange={(
                e
              ) =>
                setAd(
                  (
                    prev: any
                  ) => ({
                    ...prev,

                    affiliate_addeddate:
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

          <Field label="Programnavn">
            <input
              value={
                ad.affiliate_programname ||
                ""
              }

              onChange={(
                e
              ) =>
                setAd(
                  (
                    prev: any
                  ) => ({
                    ...prev,

                    affiliate_programname:
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

          <Field label="Segment">
            <input
              value={
                ad.affiliate_segment ||
                ""
              }

              onChange={(
                e
              ) =>
                setAd(
                  (
                    prev: any
                  ) => ({
                    ...prev,

                    affiliate_segment:
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

          <Field label="Salgs %">
            <input
              value={
                ad.affiliate_salespercent ||
                ""
              }

              onChange={(
                e
              ) =>
                setAd(
                  (
                    prev: any
                  ) => ({
                    ...prev,

                    affiliate_salespercent:
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

          <Field label="Lead/Fast">
            <input
              value={
                ad.affiliate_leadprice ||
                ""
              }

              onChange={(
                e
              ) =>
                setAd(
                  (
                    prev: any
                  ) => ({
                    ...prev,

                    affiliate_leadprice:
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

        </Grid>

      </Section>

      {/* TRAFIK */}

      <Section title="Trafik & Netværk">

        <Grid>

          <Field label="Trafik">
            <select
              value={
                ad.affiliate_traffic ||
                ""
              }

              onChange={(
                e
              ) =>
                setAd(
                  (
                    prev: any
                  ) => ({
                    ...prev,

                    affiliate_traffic:
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
              <option value="">
                Vælg
              </option>

              {trafficLevels.map(
                (
                  item
                ) => (
                  <option
                    key={
                      item
                    }
                  >
                    {item}
                  </option>
                )
              )}
            </select>
          </Field>

          <Field label="Feed">
            <select
              value={
                ad.affiliate_feed ||
                ""
              }

              onChange={(
                e
              ) =>
                setAd(
                  (
                    prev: any
                  ) => ({
                    ...prev,

                    affiliate_feed:
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
              <option value="">
                Vælg
              </option>

              {feedStatuses.map(
                (
                  item
                ) => (
                  <option
                    key={
                      item
                    }
                  >
                    {item}
                  </option>
                )
              )}
            </select>
          </Field>

        </Grid>

        {/* NETWORKS */}

        <div
          style={{
            marginTop:
              "24px",
          }}
        >
          <Label>
            Netværk
          </Label>

          <MultiWrap>
            {networks.map(
              (
                network
              ) => (

                <MultiItem
                  key={
                    network
                  }

                  active={isSelected(
                    "affiliate_networks",
                    network
                  )}

                  onClick={() =>
                    toggleMultiValue(
                      "affiliate_networks",
                      network
                    )
                  }
                >
                  {network}
                </MultiItem>
              )
            )}
          </MultiWrap>
        </div>

        {/* COUNTRIES */}

        <div
          style={{
            marginTop:
              "24px",
          }}
        >
          <Label>
            Lande
          </Label>

          <MultiWrap>
            {countries.map(
              (
                country
              ) => (

                <MultiItem
                  key={
                    country
                  }

                  active={isSelected(
                    "affiliate_countries",
                    country
                  )}

                  onClick={() =>
                    toggleMultiValue(
                      "affiliate_countries",
                      country
                    )
                  }
                >
                  {country}
                </MultiItem>
              )
            )}
          </MultiWrap>
        </div>

      </Section>
    </div>
  );
}

function Section({
  title,
  children,
}: any) {

  return (
    <div
      style={{
        border:
          "1px solid #ddd",

        borderRadius:
          "16px",

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
            "24px",
        }}
      >
        {title}
      </div>

      {children}
    </div>
  );
}

function Grid({
  children,
}: any) {

  return (
    <div
      style={{
        display:
          "grid",

        gridTemplateColumns:
          "1fr 1fr",

        gap:
          "24px",
      }}
    >
      {children}
    </div>
  );
}

function Field({
  label,
  children,
}: any) {

  return (
    <div>
      <Label>
        {label}
      </Label>

      {children}
    </div>
  );
}

function Label({
  children,
}: any) {

  return (
    <div
      style={{
        marginBottom:
          "8px",

        fontWeight:
          600,
      }}
    >
      {children}
    </div>
  );
}

function MultiWrap({
  children,
}: any) {

  return (
    <div
      style={{
        display:
          "flex",

        flexWrap:
          "wrap",

        gap:
          "12px",
      }}
    >
      {children}
    </div>
  );
}

function MultiItem({
  active,
  onClick,
  children,
}: any) {

  return (
    <div
      onClick={onClick}

      style={{
        padding:
          "10px 14px",

        borderRadius:
          "999px",

        cursor:
          "pointer",

        background:
          active
            ? "#111"
            : "#e5e5e5",

        color:
          active
            ? "white"
            : "#111",

        fontSize:
          "14px",
      }}
    >
      {children}
    </div>
  );
}

const inputStyle = {
  width: "100%",

  background:
    "#f5f5f5",

  border:
    "1px solid #dcdcdc",

  color:
    "#111",

  padding:
    "14px",

  borderRadius:
    "10px",

  boxSizing:
    "border-box" as const,
};
