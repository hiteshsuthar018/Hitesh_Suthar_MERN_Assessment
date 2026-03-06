/*
  This interface describes the structure of an Employee document.

  Having a strict interface helps TypeScript enforce
  correct data usage throughout the application.
*/

export interface IEmployee {
  fullName: string;
  department: "QA" | "DevOps" | "Data Engineering" | "MERN";
  primarySkill: string;
  experienceLevel: "Junior" | "Mid" | "Senior";
}