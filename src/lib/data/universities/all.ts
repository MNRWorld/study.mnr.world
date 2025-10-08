// This file now acts as a simple re-exporter for the generated data.
// The data aggregation logic is handled by the build script.
import { allUniversityData as generatedData } from "./_generated";

export const allUniversityData = generatedData;
