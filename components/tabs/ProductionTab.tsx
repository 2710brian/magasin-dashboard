import {
  compactGridStyle,
  compactInputStyle,
  compactLabelStyle,
  compactTextareaStyle,
} from "../styles/compactStyles";

type ProductionTabProps = {
  ad: any;

  setAd: any;
};

export default function ProductionTab({
  ad,
  setAd,
}: ProductionTabProps) {

  return (
    <div
      style={
        compactGridStyle
      }
    >
      <Field label="Materiale modtaget">
        <select
          value={
            ad.production_materialreceived ||
            "Nej"
          }

          onChange={(e) =>
            setAd(
              (
                prev: any
              ) => ({
                ...prev,

                production_materialreceived:
                  e.target
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

      <Field label="Korrektur sendt">
        <select
          value={
            ad.production_proofsent ||
            "Nej"
          }

          onChange={(e) =>
            setAd(
              (
                prev: any
              ) => ({
                ...prev,

                production_proofsent:
                  e.target
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

      <Field label="Godkendt af kunde">
        <select
          value={
            ad.production_approved ||
            "Nej"
          }

          onChange={(e) =>
            setAd(
              (
                prev: any
              ) => ({
                ...prev,

                production_approved:
                  e.target
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

      <Field label="Klar til print">
        <select
          value={
            ad.production_readyforprint ||
            "Nej"
          }

          onChange={(e) =>
            setAd(
              (
                prev: any
              ) => ({
                ...prev,

                production_readyforprint:
                  e.target
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

      <Field label="Produktionsstatus">
        <select
          value={
            ad.production_status ||
            "Afventer"
          }

          onChange={(e) =>
            setAd(
              (
                prev: any
              ) => ({
                ...prev,

                production_status:
                  e.target
                    .value,
              })
            )
          }

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
          value={
            ad.production_manager ||
            ""
          }

          onChange={(e) =>
            setAd(
              (
                prev: any
              ) => ({
                ...prev,

                production_manager:
                  e.target
                    .value,
              })
            )
          }

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

          value={
            ad.production_deadline ||
            ""
          }

          onChange={(e) =>
            setAd(
              (
                prev: any
              ) => ({
                ...prev,

                production_deadline:
                  e.target
                    .value,
              })
            )
          }

          style={
            compactInputStyle
          }
        />
      </Field>

      <Field label="Print dato">
        <input
          type="date"

          value={
            ad.production_printdate ||
            ""
          }

          onChange={(e) =>
            setAd(
              (
                prev: any
              ) => ({
                ...prev,

                production_printdate:
                  e.target
                    .value,
              })
            )
          }

          style={
            compactInputStyle
          }
        />
      </Field>

      <Field label="Distribueres">
        <input
          type="date"

          value={
            ad.production_distributiondate ||
            ""
          }

          onChange={(e) =>
            setAd(
              (
                prev: any
              ) => ({
                ...prev,

                production_distributiondate:
                  e.target
                    .value,
              })
            )
          }

          style={
            compactInputStyle
          }
        />
      </Field>

      <Field label="Intern kommentar">
        <textarea
          value={
            ad.production_comment ||
            ""
          }

          onChange={(e) =>
            setAd(
              (
                prev: any
              ) => ({
                ...prev,

                production_comment:
                  e.target
                    .value,
              })
            )
          }

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
