import {
  compactGridStyle,
  compactInputStyle,
  compactLabelStyle,
  compactTextareaStyle,
} from "../styles/compactStyles";

type ProductionTabProps = {
  ad: any;
};

export default function ProductionTab({
  ad,
}: ProductionTabProps) {

  return (
    <div
      style={
        compactGridStyle
      }
    >
      <Field label="Materiale modtaget">
        <select
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

      <Field label="Korrektur sendt">
        <select
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

      <Field label="Godkendt af kunde">
        <select
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

      <Field label="Klar til print">
        <select
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

      <Field label="Produktionsstatus">
        <select
          style={
            compactInputStyle
          }
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
        <select
          style={
            compactInputStyle
          }
        >
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

      <Field label="Deadline">
        <input
          type="date"

          style={
            compactInputStyle
          }
        />
      </Field>

      <Field label="Print dato">
        <input
          type="date"

          style={
            compactInputStyle
          }
        />
      </Field>

      <Field label="Distribueres">
        <input
          type="date"

          style={
            compactInputStyle
          }
        />
      </Field>

      <Field label="Intern kommentar">
        <textarea
          style={{
            ...compactTextareaStyle,

            minHeight:
              "90px",
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
