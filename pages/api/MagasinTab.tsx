import { useEffect, useState } from "react";

export default function MagasinTab({
  ad,
}: any) {

  const [ads, setAds] =
    useState<any[]>([]);

  const [loading, setLoading] =
    useState(true);

  useEffect(() => {

    async function loadAds() {

      try {

        const response =
          await fetch(
            `/api/get-ads?clientid=${ad.id}`
          );

        const data =
          await response.json();

        if (
          data.success
        ) {

          setAds(
            data.ads || []
          );
        }

      } catch (error) {

        console.error(error);

      } finally {

        setLoading(false);
      }
    }

    if (ad?.id) {
      loadAds();
    }

  }, [ad?.id]);

  if (loading) {

    return (
      <div>
        Henter annoncer...
      </div>
    );
  }

  return (
    <div>

      <h3
        style={{
          marginTop: 0,
        }}
      >
        Magasin annoncer
      </h3>

      {!ads.length && (

        <div
          style={{
            padding: "20px",
            background: "#f5f5f5",
            borderRadius: "8px",
          }}
        >
          Ingen annoncer fundet.
        </div>
      )}

      {ads.map((item) => (

        <div
          key={item.id}
          style={{
            border:
              "1px solid #ddd",

            borderRadius:
              "8px",

            padding:
              "12px",

            marginBottom:
              "10px",
          }}
        >
          <div>
            <strong>
              {item.title || "Annonce"}
            </strong>
          </div>

          <div>
            Side:
            {" "}
            {item.page || "-"}
          </div>

          <div>
            Pris:
            {" "}
            {item.price || "-"}
          </div>

          <div>
            Status:
            {" "}
            {item.status || "-"}
          </div>

          <div>
            Type:
            {" "}
            {item.type || "-"}
          </div>
        </div>
      ))}
    </div>
  );
}
