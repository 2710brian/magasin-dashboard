type SalesTabProps = {
  ad: any;
};

export default function SalesTab({
  ad,
}: SalesTabProps) {
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
          defaultValue={
            ad.status
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
          defaultValue={
            ad.type
          }
          style={inputStyle}
        />
      </Field>

      <Field label="Pris">
        <input
          defaultValue={
            ad.price
          }
          style={inputStyle}
        />
      </Field>

      <Field label="Premium placering">
        <select
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
          style={inputStyle}
        />
      </Field>

      <Field label="Pipeline">
        <select
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
          style={inputStyle}
        />
      </Field>

      <Field label="QR URL">
        <input
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
