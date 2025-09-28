import coursesData from "./courses.json";

export const courses = coursesData.map((course) => ({
  ...course,
}));
