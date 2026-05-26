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
    <div
      style={
        compactGridStyle
      }
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

          style={
            compactInputStyle
          }
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

          style={
            compactInputStyle
          }
        />
      </Field>

      <Field label="Pris">
        <input
          value={
            ad.price || ""
         
