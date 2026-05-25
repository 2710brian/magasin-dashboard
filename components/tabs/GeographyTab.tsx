type GeographyTabProps = {
  ad: any;
};

export default function GeographyTab({
  ad,
}: GeographyTabProps) {
  return (
    <div
      style={{
        display: "grid",

        gridTemplateColumns:
          "1fr 1fr",

        gap: "24px",
      }}
    >
      <Field label="Land">
        <select
          style={inputStyle}
        >
          <option>
            Spanien
          </option>

          <option>
            Danmark
          </option>

          <option>
            Sverige
          </option>

          <option>
            Tyskland
          </option>

          <option>
            Portugal
          </option>
        </select>
      </Field>

      <Field label="Region">
        <input
          placeholder="Andalusia"
          style={inputStyle}
        />
      </Field>

      <Field label="Provins">
        <input
          placeholder="Málaga"
          style={inputStyle}
        />
      </Field>

      <Field label="Kommune">
        <input
          placeholder="Mijas"
          style={inputStyle}
        />
      </Field>

      <Field label="By">
        <input
          placeholder="Fuengirola"
          style={inputStyle}
        />
      </Field>

      <Field label="Postnummer">
        <input
          style={inputStyle}
        />
      </Field>

      <Field label="Adresse">
        <input
          style={inputStyle}
        />
      </Field>

      <Field label="Område">
        <input
          placeholder="Costa del Sol"
          style={inputStyle}
        />
      </Field>

      <Field label="Branche">
        <input
          placeholder="Restaurant"
          style={inputStyle}
        />
      </Field>

      <Field label="Underbranche">
        <input
          placeholder="Tapas"
          style={inputStyle}
        />
      </Field>

      <Field label="Sprog">
        <input
          placeholder="Dansk, Engelsk"
          style={inputStyle}
        />
      </Field>

      <Field label="Tidszone">
        <input
          placeholder="Europe/Madrid"
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
