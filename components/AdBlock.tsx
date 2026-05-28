type AdBlockProps = {
  title: string;

  status?: string;

  price?: string | number;

  color?: string;

  type?: string;

  image?: string;

  customer?: string;

  seller?: string;
};

export default function AdBlock({
  title,

  status = "Ledig",

  price = "0,00",

  color = "#444",

  type = "quarter",

  image,

  customer,

  seller,
}: AdBlockProps) {

  let gridColumn =
    "span 1";

  let gridRow =
    "span 1";

  let minHeight =
    "120px";

  /*
    RIGTIGE STØRRELSER
  */

  if (
    type ===
    "business-card"
  ) {

    gridColumn =
      "span 1";

    gridRow =
      "span 1";

    minHeight =
      "90px";
  }

  if (
    type ===
    "double-business-card"
  ) {

    gridColumn =
      "span 2";

    gridRow =
      "span 1";

    minHeight =
      "90px";
  }

  if (
    type ===
    "quarter"
  ) {

    gridColumn =
      "span 1";

    gridRow =
      "span 2";

    minHeight =
      "220px";
  }

  if (
    type ===
    "half-horizontal"
  ) {

    gridColumn =
      "span 2";

    gridRow =
      "span 2";

    minHeight =
      "220px";
  }

  if (
    type ===
    "half-vertical"
  ) {

    gridColumn =
      "span 1";

    gridRow =
      "span 4";

   
