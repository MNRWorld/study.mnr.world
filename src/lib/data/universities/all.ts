import { duData } from "./du";
import { ruData } from "./ru";
import { cuData } from "./cu";
import { juData } from "./ju";
import { sustData } from "./sust";
import { justData } from "./just";
import { mbstuData } from "./mbstu";
import { hstuData } from "./hstu";
import { nstuData } from "./nstu";
import { pstuData } from "./pstu";
import { pustData } from "./pust";
import { rmstuData } from "./rmstu";
import { bstuData } from "./bstu";
import { cstuData } from "./cstu";
import { gstuData } from "./gstu";
import { jstuData } from "./jstu";
import { prstuData } from "./prstu";
import { sstuData } from "./sstu";
import { iuData } from "./iu";
import { kuData } from "./ku";
import { jnuData } from "./jnu";
import { couData } from "./cou";
import { jkkniuData } from "./jkkniu";
import { brurData } from "./brur";
import { buData } from "./bu";
import { kiuData } from "./kiu";
import { neuData } from "./neu";
import { rubData } from "./rub";
import { acasData } from "./acas";
import { bauData } from "./bau";
import { cvasuData } from "./cvasu";
import { gauData } from "./gau";
import { hauData } from "./hau";
import { kauData } from "./kau";
import { kuriauData } from "./kuriau";
import { sauData } from "./sau";
import { sbauData } from "./sbau";
import { buetData } from "./buet";
import { kuetData } from "./kuet";
import { ruetData } from "./ruet";
import { cuetData } from "./cuet";
import { duetData } from "./duet";
import { mistData } from "./mist";
import { butexData } from "./butex";
import { bupData } from "./bup";
import { bmuData } from "./bmu";

import publicUniversities from "./public-universities.json";
import privateUniversities from "./private-universities.json";

const allUnis = [...publicUniversities, ...privateUniversities];

const dataMap: { [key: string]: any } = {
  du: duData,
  ru: ruData,
  cu: cuData,
  ju: juData,
  sust: sustData,
  just: justData,
  mbstu: mbstuData,
  hstu: hstuData,
  nstu: nstuData,
  pstu: pstuData,
  pust: pustData,
  rmstu: rmstuData,
  bstu: bstuData,
  cstu: cstuData,
  gstu: gstuData,
  jstu: jstuData,
  prstu: prstuData,
  sstu: sstuData,
  iu: iuData,
  ku: kuData,
  jnu: jnuData,
  cou: couData,
  jkkniu: jkkniuData,
  brur: brurData,
  bu: buData,
  kiu: kiuData,
  neu: neuData,
  rub: rubData,
  acas: acasData,
  bau: bauData,
  cvasu: cvasuData,
  gau: gauData,
  hau: hauData,
  kau: kauData,
  kuriau: kuriauData,
  sau: sauData,
  sbau: sbauData,
  buet: buetData,
  kuet: kuetData,
  ruet: ruetData,
  cuet: cuetData,
  duet: duetData,
  mist: mistData,
  butex: butexData,
  bup: bupData,
  bmu: bmuData,
};

export const allUniversityData = allUnis.map((uni) => {
  const data = dataMap[uni.id] || {};
  return {
    ...uni,
    ...data,
  };
});
