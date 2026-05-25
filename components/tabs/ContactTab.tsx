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
      style={{
        display: "grid",

        gridTemplateColumns:
          "1fr 1fr",

        gap: "24px",
      }}
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

          style={inputStyle}
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

          style={inputStyle}
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

          style={inputStyle}
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

          style={inputStyle}
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

          style={inputStyle}
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

          style={inputStyle}
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

          style={inputStyle}
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

          style={inputStyle}
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

          style={inputStyle}
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
