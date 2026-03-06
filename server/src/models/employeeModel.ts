import mongoose, { Schema, Document } from "mongoose";
import { IEmployee } from "../interfaces/employeeInterface.js";

/*
  Extending Document allows mongoose to attach
  built-in document properties like _id and timestamps.
*/

export interface IEmployeeDocument extends IEmployee, Document {}

const employeeSchema: Schema = new Schema(
  {
    fullName: {
      type: String,
      required: true,
      trim: true,
    },

    department: {
      type: String,
      enum: ["QA", "DevOps", "Data Engineering", "MERN"],
      required: true,
    },

    primarySkill: {
      type: String,
      required: true,
    },

    experienceLevel: {
      type: String,
      enum: ["Junior", "Mid", "Senior"],
      required: true,
    },
  },
  {
    timestamps: true, // automatically add createdAt and updatedAt
  }
);

const Employee = mongoose.model<IEmployeeDocument>("Employee", employeeSchema);

export default Employee;