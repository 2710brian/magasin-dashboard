export const pages = Array.from(
  { length: 56 },
  (_, i) => {

    const side = i + 1;

    let layout = "full";

    let slots = 1;

    if (side % 5 === 0) {

      layout = "quarter";

      slots = 4;

    } else if (
      side % 3 === 0
    ) {

      layout =
        "half-horizontal";

      slots = 2;
    }

    return {

      side,

      premium:
        side === 3 ||
        side === 28 ||
        side === 29 ||
        side === 56,

      layout,

      slots,
    };
  }
);
