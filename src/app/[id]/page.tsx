import { notFound } from "next/navigation";
import { getUniversityById, allUniversities } from "@/lib/data/universities";
import UniversityPage from "@/components/UniversityPage";

export async function generateStaticParams() {
  return allUniversities.map((uni) => ({
    id: uni.id,
  }));
}

export default function UniversityDetailsPage({
  params,
}: {
  params: { id: string };
}) {
  const university = getUniversityById(params.id);

  if (!university) {
    notFound();
  }

  return <UniversityPage university={university} universityData={university} />;
}
