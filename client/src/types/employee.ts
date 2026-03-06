export interface Employee {
  _id?: string;
  fullName: string;
  department: "QA" | "DevOps" | "Data Engineering" | "MERN";
  primarySkill: string;
  experienceLevel: "Junior" | "Mid" | "Senior";
}