type AdModalProps = {
  ad: any;

  onClose: () => void;
};

export default function AdModal({
  ad,
  onClose,
}: AdModalProps) {
  return (
    <div
      style={{
        position: "fixed",

        inset: 0,

        background:
          "rgba(0,0,0,0.7)",

        display: "flex",

        justifyContent:
          "center",

        alignItems: "center",

        zIndex: 9999,
      }}
    >
      <div
        style={{
          width: "900px",

          maxHeight: "90vh",

          overflowY: "auto",

          background: "#1b1b1b",

          borderRadius: "16px",

          padding: "30px",

          color: "white",
        }}
      >
        {/* TOP */}

        <div
          style={{
            display: "flex",

            justifyContent:
              "space-between",

            alignItems: "center",

            marginBottom: "30px",
          }}
        >
          <h2>
            {ad.title}
          </h2>

          <button
            onClick={onClose}
            style={{
              background:
                "#333",

              color: "white",

              border: "none",

              padding:
                "10px 14px",

              borderRadius:
                "8px",

              cursor: "pointer",
            }}
          >
            Luk
          </button>
        </div>

        {/* TABS */}

        <div
          style={{
            display: "flex",

            gap: "20px",

            marginBottom: "30px",

            borderBottom:
              "1px solid #333",

            paddingBottom:
              "12px",
          }}
        >
          <div>
            Kontakt
          </div>

          <div>
            Annonce
          </div>

          <div>
            Materiale
          </div>

          <div>
            Produktion
          </div>

          <div>Noter</div>
        </div>

        {/* GRID */}

        <div
          style={{
            display: "grid",

            gridTemplateColumns:
              "1fr 1fr",

            gap: "20px",
          }}
        >
          <div>
            <label>
              Virksomhed
            </label>

            <input
              defaultValue={
                ad.title
              }
              style={inputStyle}
            />
          </div>

          <div>
            <label>
              Status
            </label>

            <select
              defaultValue={
                ad.status
              }
              style={inputStyle}
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
          </div>

          <div>
            <label>
              Pris
            </label>

            <input
              defaultValue={
                ad.price
              }
              style={inputStyle}
            />
          </div>

          <div>
            <label>
              Type
            </label>

            <input
              defaultValue={
                ad.type
              }
              style={inputStyle}
            />
          </div>

          <div>
            <label>
              Kontaktperson
            </label>

            <input
              style={inputStyle}
            />
          </div>

          <div>
            <label>Email</label>

            <input
              style={inputStyle}
            />
          </div>

          <div>
            <label>
              Telefon
            </label>

            <input
              style={inputStyle}
            />
          </div>

          <div>
            <label>
              Website
            </label>

            <input
              style={inputStyle}
            />
          </div>
        </div>
      </div>
    </div>
  );
}

const inputStyle = {
  width: "100%",

  background: "#111",

  border: "1px solid #333",

  color: "white",

  padding: "12px",

  borderRadius: "8px",

  marginTop: "8px",
};
