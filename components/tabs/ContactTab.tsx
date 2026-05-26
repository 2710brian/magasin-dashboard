import {
  compactGridStyle,
  compactInputStyle,
  compactLabelStyle,
} from "../styles/compactStyles";

type ContactTabProps = {
  ad: any;

  setAd: any;
};

export default function ContactTab({
  ad,
  setAd,
}: ContactTabProps) {

  return (
    <div
      style={
        compactGridStyle
      }
    >
      <Field label="Virksomhed">
        <input
          value={
            ad.title || ""
          }

          onChange={(e) =>
            setAd(
              (
                prev: any
              ) => ({
                ...prev,

                title:
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

      <Field label="CIF / VAT">
        <input
          value={
            ad.vat || ""
          }

          onChange={(e) =>
            setAd(
              (
                prev: any
              ) => ({
                ...prev,

                vat: e
                  .target
                  .value,
              })
            )
          }

          style={
            compactInputStyle
          }
        />
      </Field>

      <Field label="Kontaktperson">
        <input
          value={
            ad.contactPerson ||
            ""
          }

          onChange={(e) =>
            setAd(
              (
                prev: any
              ) => ({
                ...prev,

                contactPerson:
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

      <Field label="Email">
        <input
          value={
            ad.email || ""
          }

          onChange={(e) =>
            setAd(
              (
                prev: any
              ) => ({
                ...prev,

                email:
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

      <Field label="Telefon">
        <input
          value={
            ad.phone || ""
          }

          onChange={(e) =>
            setAd(
              (
                prev: any
              ) => ({
                ...prev,

                phone:
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

      <Field label="Website">
        <input
          value={
            ad.website || ""
          }

          onChange={(e) =>
            setAd(
              (
                prev: any
              ) => ({
                ...prev,

                website:
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

      <Field label="Facebook">
        <input
          value={
            ad.facebook ||
            ""
          }

          onChange={(e) =>
            setAd(
              (
                prev: any
              ) => ({
                ...prev,

                facebook:
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

      <Field label="Instagram">
        <input
          value={
            ad.instagram ||
            ""
          }

          onChange={(e) =>
            setAd(
              (
                prev: any
              ) => ({
                ...prev,

                instagram:
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

      <Field label="LinkedIn">
        <input
          value={
            ad.linkedin ||
            ""
          }

          onChange={(e) =>
            setAd(
              (
                prev: any
              ) => ({
                ...prev,

                linkedin:
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

      <Field label="TikTok">
        <input
          value={
            ad.tiktok || ""
          }

          onChange={(e) =>
            setAd(
              (
                prev: any
              ) => ({
                ...prev,

                tiktok:
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
