type GeographyTabProps = {
  ad: any;

  setAd: any;
};

export default function GeographyTab({
  ad,
  setAd,
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
          value={
            ad.country ||
            "Spanien"
          }

          onChange={(e) =>
            setAd(
              (
                prev: any
              ) => ({
                ...prev,

                country:
                  e.target
                    .value,
              })
            )
          }

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
          value={
            ad.region || ""
          }

          onChange={(e) =>
            setAd(
              (
                prev: any
              ) => ({
                ...prev,

                region:
                  e.target
                    .value,
              })
            )
          }

          placeholder="Andalusia"

          style={inputStyle}
        />
      </Field>

      <Field label="Provins">
        <input
          value={
            ad.province || ""
          }

          onChange={(e) =>
            setAd(
              (
                prev: any
              ) => ({
                ...prev,

                province:
                  e.target
                    .value,
              })
            )
          }

          placeholder="Málaga"

          style={inputStyle}
        />
      </Field>

      <Field label="Kommune">
        <input
          value={
            ad.municipality ||
            ""
          }

          onChange={(e) =>
            setAd(
              (
                prev: any
              ) => ({
                ...prev,

                municipality:
                  e.target
                    .value,
              })
            )
          }

          placeholder="Mijas"

          style={inputStyle}
        />
      </Field>

      <Field label="By">
        <input
          value={
            ad.city || ""
          }

          onChange={(e) =>
            setAd(
              (
                prev: any
              ) => ({
                ...prev,

                city:
                  e.target
                    .value,
              })
            )
          }

          placeholder="Fuengirola"

          style={inputStyle}
        />
      </Field>

      <Field label="Postnummer">
        <input
          value={
            ad.zipcode || ""
          }

          onChange={(e) =>
            setAd(
              (
                prev: any
              ) => ({
                ...prev,

                zipcode:
                  e.target
                    .value,
              })
            )
          }

          style={inputStyle}
        />
      </Field>

      <Field label="Adresse">
        <input
          value={
            ad.address || ""
          }

          onChange={(e) =>
            setAd(
              (
                prev: any
              ) => ({
                ...prev,

                address:
                  e.target
                    .value,
              })
            )
          }

          style={inputStyle}
        />
      </Field>

      <Field label="Område">
        <input
          value={
            ad.area || ""
          }

          onChange={(e) =>
            setAd(
              (
                prev: any
              ) => ({
                ...prev,

                area:
                  e.target
                    .value,
              })
            )
          }

          placeholder="Costa del Sol"

          style={inputStyle}
        />
      </Field>

      <Field label="Branche">
        <input
          value={
            ad.industry || ""
          }

          onChange={(e) =>
            setAd(
              (
                prev: any
              ) => ({
                ...prev,

                industry:
                  e.target
                    .value,
              })
            )
          }

          placeholder="Restaurant"

          style={inputStyle}
        />
      </Field>

      <Field label="Underbranche">
        <input
          value={
            ad.subindustry || ""
          }

          onChange={(e) =>
            setAd(
              (
                prev: any
              ) => ({
                ...prev,

                subindustry:
                  e.target
                    .value,
              })
            )
          }

          placeholder="Tapas"

          style={inputStyle}
        />
      </Field>

      <Field label="Sprog">
        <input
          value={
            ad.languages || ""
          }

          onChange={(e) =>
            setAd(
              (
                prev: any
              ) => ({
                ...prev,

                languages:
                  e.target
                    .value,
              })
            )
          }

          placeholder="Dansk, Engelsk"

          style={inputStyle}
        />
      </Field>

      <Field label="Tidszone">
        <input
          value={
            ad.timezone || ""
          }

          onChange={(e) =>
            setAd(
              (
                prev: any
              ) => ({
                ...prev,

                timezone:
                  e.target
                    .value,
              })
            )
          }

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
