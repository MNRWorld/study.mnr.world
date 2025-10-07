import {
  allUniversities,
  getUniversityById,
} from "@/lib/data/universities";
import { notFound } from "next/navigation";
import FloatingMenu from "@/components/common/FloatingMenu";
import { acasData } from "@/lib/data/universities/acas";
import { bauData } from "@/lib/data/universities/bau";
import { bmuData } from "@/lib/data/universities/bmu";
import { brurData } from "@/lib/data/universities/brur";
import { bstuData } from "@/lib/data/universities/bstu";
import { buData } from "@/lib/data/universities/bu";
import { buetData } from "@/lib/data/universities/buet";
import { bupData } from "@/lib/data/universities/bup";
import { butexData } from "@/lib/data/universities/butex";
import { couData } from "@/lib/data/universities/cou";
import { cstuData } from "@/lib/data/universities/cstu";
import { cuData } from "@/lib/data/universities/cu";
import { cuetData } from "@/lib/data/universities/cuet";
import { cvasuData } from "@/lib/data/universities/cvasu";
import { duData } from "@/lib/data/universities/du";
import { duetData } from "@/lib/data/universities/duet";
import { gauData } from "@/lib/data/universities/gau";
import { gstuData } from "@/lib/data/universities/gstu";
import { hauData } from "@/lib/data/universities/hau";
import { hstuData } from "@/lib/data/universities/hstu";
import { iuData } from "@/lib/data/universities/iu";
import { jkkniuData } from "@/lib/data/universities/jkkniu";
import { jnuData } from "@/lib/data/universities/jnu";
import { jstuData } from "@/lib/data/universities/jstu";
import { juData } from "@/lib/data/universities/ju";
import { justData } from "@/lib/data/universities/just";
import { kauData } from "@/lib/data/universities/kau";
import { kiuData } from "@/lib/data/universities/kiu";
import { kuData } from "@/lib/data/universities/ku";
import { kuetData } from "@/lib/data/universities/kuet";
import { kuriauData } from "@/lib/data/universities/kuriau";
import { mbstuData } from "@/lib/data/universities/mbstu";
import { mistData } from "@/lib/data/universities/mist";
import { neuData } from "@/lib/data/universities/neu";
import { nstuData } from "@/lib/data/universities/nstu";
import { prstuData } from "@/lib/data/universities/prstu";
import { pstuData } from "@/lib/data/universities/pstu";
import { pustData } from "@/lib/data/universities/pust";
import { rmstuData } from "@/lib/data/universities/rmstu";
import { ruData } from "@/lib/data/universities/ru";
import { rubData } from "@/lib/data/universities/rub";
import { ruetData } from "@/lib/data/universities/ruet";
import { sauData } from "@/lib/data/universities/sau";
import { sbauData } from "@/lib/data/universities/sbau";
import { sstuData } from "@/lib/data/universities/sstu";
import { sustData } from "@/lib/data/universities/sust";
import DhakaMainInfoCard from "@/components/DhakaMainInfoCard";
import Circular from "@/components/common/Circular";
import DhakaQuestionBank from "@/components/DhakaQuestionBank";
import DhakaAdmissionInfo from "@/components/DhakaAdmissionInfo";
import DhakaSeatInfo from "@/components/DhakaSeatInfo";
import DhakaHistoryAndMap from "@/components/DhakaHistoryAndMap";
import LinkList from "@/components/common/LinkList";

// Mapping of university IDs to their corresponding data
const universityDataMap: { [key: string]: any } = {
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

export async function generateStaticParams() {
  return allUniversities.map((uni) => ({
    id: uni.id,
  }));
}

export default function UniversityPage({ params }: { params: { id: string } }) {
  const university = getUniversityById(params.id);

  if (!university) {
    notFound();
  }

  // Currently, only DU has a detailed page
  if (params.id !== "du") {
    return (
      <div className="container mx-auto px-4 py-8 text-center font-bengali">
        <h1 className="text-3xl font-bold">{university.nameBn}</h1>
        <p className="mt-4 text-lg text-muted-foreground">
          এই বিশ্ববিদ্যালয়ের বিস্তারিত তথ্য শীঘ্রই যোগ করা হবে।
        </p>
      </div>
    );
  }

  const { links } = universityDataMap[params.id];

  return (
    <div className="font-bengali bg-background">
      <FloatingMenu />
      <div className="container mx-auto px-4 lg:px-[170px] relative">
        <DhakaMainInfoCard />
        <div id="Links"></div>
        <div className="mt-4">
          <LinkList links={links} />
        </div>
        <Circular
          title="সম্পূর্ণ সার্কুলার"
          note="(⚠ নোট: সর্বশেষ সার্কুলার এখনও প্রকাশিত হয়নি। পূর্ববর্তী বছরের সার্কুলার দেখে আইডিয়া নিতে পারেন।)"
          downloadLink="#"
          showPreviousYears={true}
        />
        <DhakaQuestionBank />
        <DhakaAdmissionInfo />
        <DhakaSeatInfo />
        <DhakaHistoryAndMap />
      </div>
    </div>
  );
}
