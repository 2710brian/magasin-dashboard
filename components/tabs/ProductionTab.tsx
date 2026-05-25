type ProductionTabProps = {
  ad: any;
};

export default function ProductionTab({
  ad,
}: ProductionTabProps) {
  return (
    <div
      style={{
        display: "grid",

        gridTemplateColumns:
          "1fr 1fr",

        gap: "24px",
      }}
    >
      <Field label="Materiale modtaget">
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

      <Field label="Korrektur sendt">
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

      <Field label="Godkendt af kunde">
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

      <Field label="Klar til print">
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

      <Field label="Produktionsstatus">
        <select
          style={inputStyle}
        >
          <option>
            Afventer
          </option>

          <option>
            Under produktion
          </option>

          <option>
            Klar
          </option>

          <option>
            Sendt til print
          </option>
        </select>
      </Field>

      <Field label="Ansvarlig">
        <input
          style={inputStyle}
        />
      </Field>

      <Field label="Deadline">
        <input
          type="date"
          style={inputStyle}
        />
      </Field>

      <Field label="Print dato">
        <input
          type="date"
          style={inputStyle}
        />
      </Field>

      <Field label="Distribueres">
        <input
          type="date"
          style={inputStyle}
        />
      </Field>

      <Field label="Intern kommentar">
        <textarea
          style={{
            ...inputStyle,

            minHeight:
              "120px",

            resize:
              "vertical",
          }}
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
