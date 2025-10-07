import { acasData } from "./acas";
import { bauData } from "./bau";
import { bmuData } from "./bmu";
import { brurData } from "./brur";
import { bstuData } from "./bstu";
import { buData } from "./bu";
import { buetData } from "./buet";
import { bupData } from "./bup";
import { butexData } from "./butex";
import { couData } from "./cou";
import { cstuData } from "./cstu";
import { cuData } from "./cu";
import { cuetData } from "./cuet";
import { cvasuData } from "./cvasu";
import { duData } from "./du";
import { duetData } from "./duet";
import { gauData } from "./gau";
import { gstuData } from "./gstu";
import { hauData } from "./hau";
import { hstuData } from "./hstu";
import { iuData } from "./iu";
import { jkkniuData } from "./jkkniu";
import { jnuData } from "./jnu";
import { jstuData } from "./jstu";
import { juData } from "./ju";
import { justData } from "./just";
import { kauData } from "./kau";
import { kiuData } from "./kiu";
import { kuData } from "./ku";
import { kuetData } from "./kuet";
import { kuriauData } from "./kuriau";
import { mbstuData } from "./mbstu";
import { mistData } from "./mist";
import { neuData } from "./neu";
import { nstuData } from "./nstu";
import { prstuData } from "./prstu";
import { pstuData } from "./pstu";
import { pustData } from "./pust";
import { rmstuData } from "./rmstu";
import { ruData } from "./ru";
import { rubData } from "./rub";
import { ruetData } from "./ruet";
import { sauData } from "./sau";
import { sbauData } from "./sbau";
import { sstuData } from "./sstu";
import { sustData } from "./sust";

import publicUniversities from "./public-universities.json";
import privateUniversities from "./private-universities.json";

const allUnis = [...publicUniversities, ...privateUniversities];

const dataMap: { [key: string]: any } = {
  acas: acasData,
  bau: bauData,
  bmu: bmuData,
  brur: brurData,
  bstu: bstuData,
  bu: buData,
  buet: buetData,
  bup: bupData,
  butex: butexData,
  cou: couData,
  cstu: cstuData,
  cu: cuData,
  cuet: cuetData,
  cvasu: cvasuData,
  du: duData,
  duet: duetData,
  gau: gauData,
  gstu: gstuData,
  hau: hauData,
  hstu: hstuData,
  iu: iuData,
  jkkniu: jkkniuData,
  jnu: jnuData,
  jstu: jstuData,
  ju: juData,
  just: justData,
  kau: kauData,
  kiu: kiuData,
  ku: kuData,
  kuet: kuetData,
  kuriau: kuriauData,
  mbstu: mbstuData,
  mist: mistData,
  neu: neuData,
  nstu: nstuData,
  prstu: prstuData,
  pstu: pstuData,
  pust: pustData,
  rmstu: rmstuData,
  ru: ruData,
  rub: rubData,
  ruet: ruetData,
  sau: sauData,
  sbau: sbauData,
  sstu: sstuData,
  sust: sustData,
};

export const allUniversityData = allUnis.map((uni) => {
  return {
    ...uni,
    ...dataMap[uni.id],
  };
});
