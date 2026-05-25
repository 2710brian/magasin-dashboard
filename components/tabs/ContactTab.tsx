type ContactTabProps = {
  ad: any;
};

export default function ContactTab({
  ad,
}: ContactTabProps) {
  return (
    <div
      style={{
        display: "grid",

        gridTemplateColumns:
          "1fr 1fr",

        gap: "24px",
      }}
    >
      <Field label="Virksomhed">
        <input
          defaultValue={
            ad.title
          }
          style={inputStyle}
        />
      </Field>

      <Field label="CIF / VAT">
        <input
          style={inputStyle}
        />
      </Field>

      <Field label="Kontaktperson">
        <input
          style={inputStyle}
        />
      </Field>

      <Field label="Email">
        <input
          style={inputStyle}
        />
      </Field>

      <Field label="Telefon">
        <input
          style={inputStyle}
        />
      </Field>

      <Field label="Website">
        <input
          style={inputStyle}
        />
      </Field>

      <Field label="Facebook">
        <input
          style={inputStyle}
        />
      </Field>

      <Field label="Instagram">
        <input
          style={inputStyle}
        />
      </Field>

      <Field label="LinkedIn">
        <input
          style={inputStyle}
        />
      </Field>

      <Field label="TikTok">
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
