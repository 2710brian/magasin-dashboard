"use client";

import { useState } from "react";

import Sidebar from "./Sidebar";
import MagazineCard from "./MagazineCard";
import MagazineView from "./MagazineView";

const regions = {
  Nordjylland: [
    "Aalborg",
    "Hjørring",
    "Frederikshavn",
  ],

  Midtjylland: [
    "Aarhus",
    "Randers",
    "Herning",
  ],

  Syddanmark: [
    "Odense",
    "Esbjerg",
    "Kolding",
  ],

  Sjælland: [
    "Roskilde",
    "Næstved",
    "Slagelse",
  ],

  Hovedstaden: [
    "
