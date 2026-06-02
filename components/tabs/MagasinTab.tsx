import { useEffect, useState } from "react";

export default function MagasinTab({
  ad,
}: any) {

  const [ads, setAds] =
    useState<any[]>([]);

  useEffect(() => {

    async function loadAds() {

      try {

        const response =
          await fetch(
            `/api/get-ads?clientid=${ad.id}`
          );

        const data =
          await response.json();

        if (data.success) {
          setAds(data.ads || []);
        }

      } catch (error) {
        console.error(error);
      }
    }

    if (ad?.id) {
      loadAds();
    }

  }, [ad?.id]);

  return (

    <div>

      <h3>
        Magasin annoncer
      </h3>

      {ads.length === 0 && (
        <div>
          Ingen annoncer fundet.
        </div>
      )}

      {ads.map((item) => (

        <div
          key={item.id}
          style={{
            border:
              "1px solid #ddd",
            padding:
              "10px",
            marginBottom:
              "10px",
            borderRadius:
              "8px",
          }}
        >
          <div>
            <strong>
              {item.title}
            </strong>
          </div>

          <div>
            Side: {item.page}
          </div>

          <div>
            Pris: {item.price}
          </div>

          <div>
            Status: {item.status}
          </div>

        </div>

      ))}

    </div>
  );
}
