type SalesTabProps = {
  ad: any;

  setAd: any;
};

export default function SalesTab({
  ad,
  setAd,
}: SalesTabProps) {

  const premiumValue =
    ad.premiumPlacement ||
    ad.premiumplacement ||
    "Nej";

  return (
    <div
      style={{
        display: "grid",

        gridTemplateColumns:
          "1fr 1fr",

        gap: "24px",
      }}
    >
      <Field label="Status">
        <select
          value={
            ad.status || ""
          }

          onChange={(e) =>
            setAd(
              (
                prev: any
              ) => ({
                ...prev,

                status:
                  e.target
                    .value,
              })
            )
          }

          style={inputStyle}
        >
          <option>
            Solgt
          </option>

          <option>
            Reserveret
          </option>

          <option>
            Ledig
          </option>
        </select>
      </Field>

      <Field label="Annonce type">
        <input
          value={
            ad.type || ""
          }

          onChange={(e) =>
            setAd(
              (
                prev: any
              ) => ({
                ...prev,

                type:
                  e.target
                    .value,
              })
            )
          }

          style={inputStyle}
        />
      </Field>

      <Field label="Pris">
        <input
          value={
            ad.price || ""
          }

          onChange={(e) =>
            setAd(
              (
                prev: any
              ) => ({
                ...prev,

                price:
                  e.target
                    .value,
              })
            )
          }

          style={inputStyle}
        />
      </Field>

      <Field label="Premium placering">
        <select
          value={
            premiumValue
          }

          onChange={(e) =>
            setAd(
              (
                prev: any
              ) => ({
                ...prev,

                premiumPlacement:
                  e.target
                    .value,
              })
            )
          }

          style={inputStyle}
        >
          <option>
            Nej
          </option>

          <option>
            Ja
          </option>
        </select>
      </Field>

      <Field label="Sælger">
        <input
          value={
            ad.seller || ""
          }

          onChange={(e) =>
            setAd(
              (
                prev: any
              ) => ({
                ...prev,

                seller:
                  e.target
                    .value,
              })
            )
          }

          style={inputStyle}
        />
      </Field>

      <Field label="Pipeline">
        <select
          value={
            ad.pipeline ||
            "Lead"
          }

          onChange={(e) =>
            setAd(
              (
                prev: any
              ) => ({
                ...prev,

                pipeline:
                  e.target
                    .value,
              })
            )
          }

          style={inputStyle}
        >
          <option>
            Lead
          </option>

          <option>
            Kontaktet
          </option>

          <option>
            Tilbud sendt
          </option>

          <option>
            Solgt
          </option>
        </select>
      </Field>

      <Field label="Deadline">
        <input
          type="date"

          value={
            ad.deadline || ""
          }

          onChange={(e) =>
            setAd(
              (
                prev: any
              ) => ({
                ...prev,

                deadline:
                  e.target
                    .value,
              })
            )
          }

          style={inputStyle}
        />
      </Field>

      <Field label="QR URL">
        <input
          value={
            ad.qrurl || ""
          }

          onChange={(e) =>
            setAd(
              (
                prev: any
              ) => ({
                ...prev,

                qrurl:
                  e.target
                    .value,
              })
            )
          }

          style={inputStyle}
        />
      </Field>
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
          marginBottom: "8px",

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

  border: "1px solid #dcdcdc",

  color: "#111",

  padding: "14px",

  borderRadius: "10px",

  boxSizing:
    "border-box" as const,
};
