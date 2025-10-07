import { notFound } from "next/navigation";
import { getUniversityById } from "@/lib/data/universities";
import UniversityPage from "@/components/UniversityPage";
import { allUniversityData } from "@/lib/data/universities/all";

export async function generateStaticParams() {
  return allUniversityData.map((uni) => ({
    id: uni.id,
  }));
}

export default function UniversityDetailsPage({
  params,
}: {
  params: { id: string };
}) {
  const university = getUniversityById(params.id);
  const universityData = allUniversityData.find((u) => u.id === params.id);

  if (!university || !universityData) {
    notFound();
  }

  return (
    <UniversityPage university={university} universityData={universityData} />
  );
}
