import {
  compactGridStyle,
  compactInputStyle,
  compactLabelStyle,
} from "../styles/compactStyles";

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
    <div style={compactGridStyle}>

      <Field label="Status">
        <select
          value={ad.status || ""}

          onChange={(e) =>
            setAd((prev: any) => ({
              ...prev,
              status:
                e.target.value,
            }))
          }

          style={compactInputStyle}
        >
          <option>Solgt</option>
          <option>Reserveret</option>
          <option>Ledig</option>
        </select>
      </Field>

      <Field label="Annonce type">
        <input
          value={ad.type || ""}

          onChange={(e) =>
            setAd((prev: any) => ({
              ...prev,
              type:
                e.target.value,
            }))
          }

          style={compactInputStyle}
        />
      </Field>

      <Field label="Pris">
        <input
          value={ad.price || ""}

          onChange={(e) =>
            setAd((prev: any) => ({
              ...prev,
              price:
                e.target.value,
            }))
          }

          style={compactInputStyle}
        />
      </Field>

      <Field label="Premium placering">
        <select
          value={premiumValue}

          onChange={(e) =>
            setAd((prev: any) => ({
              ...prev,
              premiumPlacement:
                e.target.value,
            }))
          }

          style={compactInputStyle}
        >
          <option>Nej</option>
          <option>Ja</option>
        </select>
      </Field>

      <Field label="Sælger">
        <select
          value={
            ad.seller || ""
          }

          onChange={(e) =>
            setAd((prev: any) => ({
              ...prev,
              seller:
                e.target.value,
            }))
          }

          style={compactInputStyle}
        >
          <option value="">
            Vælg sælger
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

      <Field label="Pipeline">
        <select
          value={
            ad.pipeline ||
            "Lead"
          }

          onChange={(e) =>
            setAd((prev: any) => ({
              ...prev,
              pipeline:
                e.target.value,
            }))
          }

          style={compactInputStyle}
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
            setAd((prev: any) => ({
              ...prev,
              deadline:
                e.target.value,
            }))
          }

          style={compactInputStyle}
        />
      </Field>

      <Field label="QR URL">
        <input
          value={
            ad.qrurl || ""
          }

          onChange={(e) =>
            setAd((prev: any) => ({
              ...prev,
              qrurl:
                e.target.value,
            }))
          }

          style={compactInputStyle}
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
