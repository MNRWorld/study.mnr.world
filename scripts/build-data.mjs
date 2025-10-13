import fs from "fs/promises";
import path from "path";

// University data imports
import publicUniversities from "../src/lib/data/universities/public-universities.json" assert { type: "json" };
import privateUniversities from "../src/lib/data/universities/private-universities.json" assert { type: "json" };

import duInfo from "../src/lib/data/universities/du/info.json" assert { type: "json" };
import ruInfo from "../src/lib/data/universities/ru/info.json" assert { type: "json" };
import gstInfo from "../src/lib/data/universities/gst/info.json" assert { type: "json" };
import iuInfo from "../src/lib/data/universities/iu/info.json" assert { type: "json" };
import kuInfo from "../src/lib/data/universities/ku/info.json" assert { type: "json" };
import jnuInfo from "../src/lib/data/universities/jnu/info.json" assert { type: "json" };
import couInfo from "../src/lib/data/universities/cou/info.json" assert { type: "json" };
import jkkniuInfo from "../src/lib/data/universities/jkkniu/info.json" assert { type: "json" };
import brurInfo from "../src/lib/data/universities/brur/info.json" assert { type: "json" };
import buInfo from "../src/lib/data/universities/bu/info.json" assert { type: "json" };
import kiuInfo from "../src/lib/data/universities/kiu/info.json" assert { type: "json" };
import neuInfo from "../src/lib/data/universities/neu/info.json" assert { type: "json" };
import rubInfo from "../src/lib/data/universities/rub/info.json" assert { type: "json" };
import cuInfo from "../src/lib/data/universities/cu/info.json" assert { type: "json" };
import juInfo from "../src/lib/data/universities/ju/info.json" assert { type: "json" };
import bauInfo from "../src/lib/data/universities/bau/info.json" assert { type: "json" };
import cvasuInfo from "../src/lib/data/universities/cvasu/info.json" assert { type: "json" };
import gauInfo from "../src/lib/data/universities/gau/info.json" assert { type: "json" };
import hauInfo from "../src/lib/data/universities/hau/info.json" assert { type: "json" };
import kauInfo from "../src/lib/data/universities/kau/info.json" assert { type: "json" };
import kuriauInfo from "../src/lib/data/universities/kuriau/info.json" assert { type: "json" };
import sauInfo from "../src/lib/data/universities/sau/info.json" assert { type: "json" };
import sbauInfo from "../src/lib/data/universities/sbau/info.json" assert { type: "json" };
import buetInfo from "../src/lib/data/universities/buet/info.json" assert { type: "json" };
import kuetInfo from "../src/lib/data/universities/kuet/info.json" assert { type: "json" };
import ruetInfo from "../src/lib/data/universities/ruet/info.json" assert { type: "json" };
import cuetInfo from "../src/lib/data/universities/cuet/info.json" assert { type: "json" };
import duetInfo from "../src/lib/data/universities/duet/info.json" assert { type: "json" };
import mistInfo from "../src/lib/data/universities/mist/info.json" assert { type: "json" };
import sustInfo from "../src/lib/data/universities/sust/info.json" assert { type: "json" };
import justInfo from "../src/lib/data/universities/just/info.json" assert { type: "json" };
import mbstuInfo from "../src/lib/data/universities/mbstu/info.json" assert { type: "json" };
import hstuInfo from "../src/lib/data/universities/hstu/info.json" assert { type: "json" };
import nstuInfo from "../src/lib/data/universities/nstu/info.json" assert { type: "json" };
import pstuInfo from "../src/lib/data/universities/pstu/info.json" assert { type: "json" };
import pustInfo from "../src/lib/data/universities/pust/info.json" assert { type: "json" };
import rmstuInfo from "../src/lib/data/universities/rmstu/info.json" assert { type: "json" };
import bstuInfo from "../src/lib/data/universities/bstu/info.json" assert { type: "json" };
import cstuInfo from "../src/lib/data/universities/cstu/info.json" assert { type: "json" };
import gstuInfo from "../src/lib/data/universities/gstu/info.json" assert { type: "json" };
import jstuInfo from "../src/lib/data/universities/jstu/info.json" assert { type: "json" };
import prstuInfo from "../src/lib/data/universities/prstu/info.json" assert { type: "json" };
import sstuInfo from "../src/lib/data/universities/sstu/info.json" assert { type: "json" };
import butexInfo from "../src/lib/data/universities/butex/info.json" assert { type: "json" };
import bupInfo from "../src/lib/data/universities/bup/info.json" assert { type: "json" };

const universityDetails = {
  du: duInfo,
  ru: ruInfo,
  gst: gstInfo,
  iu: iuInfo,
  ku: kuInfo,
  jnu: jnuInfo,
  cou: couInfo,
  jkkniu: jkkniuInfo,
  brur: brurInfo,
  bu: buInfo,
  kiu: kiuInfo,
  neu: neuInfo,
  rub: rubInfo,
  cu: cuInfo,
  ju: juInfo,
  bau: bauInfo,
  cvasu: cvasuInfo,
  gau: gauInfo,
  hau: hauInfo,
  kau: kauInfo,
  kuriau: kuriauInfo,
  sau: sauInfo,
  sbau: sbauInfo,
  buet: buetInfo,
  kuet: kuetInfo,
  ruet: ruetInfo,
  cuet: cuetInfo,
  duet: duetInfo,
  mist: mistInfo,
  sust: sustInfo,
  just: justInfo,
  mbstu: mbstuInfo,
  hstu: hstuInfo,
  nstu: nstuInfo,
  pstu: pstuInfo,
  pust: pustInfo,
  rmstu: rmstuInfo,
  bstu: bstuInfo,
  cstu: cstuInfo,
  gstu: gstuInfo,
  jstu: jstuInfo,
  prstu: prstuInfo,
  sstu: sstuInfo,
  butex: butexInfo,
  bup: bupInfo,
};

async function buildData() {
  console.log("Starting data build process...");

  const allUniversities = [...publicUniversities, ...privateUniversities].map(
    (uni) => {
      const details = universityDetails[uni.id];
      if (details) {
        return { ...uni, ...details };
      }
      // Return a default structure if no specific data is found
      return {
        ...uni,
        admissionInfo: {},
        historyAndMap: {},
        links: [],
        questionBanks: {},
        subjects: {},
      };
    },
  );

  const dataToExport = {
    // ... your other data imports
    universities: allUniversities,
  };

  const content = `// This file is auto-generated by scripts/build-data.mjs
// Do not edit this file directly.

export const allData = ${JSON.stringify(dataToExport, null, 2)};
`;

  const outputPath = path.join(
    process.cwd(),
    "src",
    "lib",
    "data",
    "_generated.ts",
  );

  try {
    await fs.writeFile(outputPath, content, "utf-8");
    console.log("Successfully built data file at:", outputPath);
  } catch (error) {
    console.error("Error writing data file:", error);
    process.exit(1);
  }
}

buildData();
