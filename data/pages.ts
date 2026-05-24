export const pages = Array.from(
  { length: 56 },
  (_, i) => {
    const side = i + 1;

    return {
      side,

      premium:
        side === 3 ||
        side === 28 ||
        side === 29 ||
        side === 56,

      ads:
        side % 5 === 0
          ? [
              {
                title:
                  "Frisør Hansen",

                status:
                  "Solgt",

                price:
                  "4.500 kr.",

                color:
                  "#22c55e",

                type:
                  "quarter",
              },

              {
                title:
                  "Reserveret",

                status:
                  "Reserveret",

                price:
                  "",

                color:
                  "#eab308",

                type:
                  "quarter",
              },

              {
                title:
                  "LEDIG",

                status:
                  "Ledig",

                price:
                  "",

                color:
                  "#444",

                type:
                  "quarter",
              },

              {
                title:
                  "Café Nytorv",

                status:
                  "Solgt",

                price:
                  "5.000 kr.",

                color:
                  "#22c55e",

                type:
                  "quarter",
              },
            ]
          : side % 3 === 0
          ? [
              {
                title:
                  "XL Byg",

                status:
                  "Solgt",

                price:
                  "8.000 kr.",

                color:
                  "#22c55e",

                type:
                  "half-horizontal",
              },

              {
                title:
                  "LEDIG",

                status:
                  "Ledig",

                price:
                  "",

                color:
                  "#444",

                type:
                  "half-horizontal",
              },
            ]
          : [
              {
                title:
                  "Hansen VVS",

                status:
                  "Solgt",

                price:
                  "12.500 kr.",

                color:
                  "#22c55e",

                type:
                  "helside",
              },
            ],
    };
  }
);
