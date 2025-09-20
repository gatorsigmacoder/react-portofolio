import type { BaseResponse } from "./commonInterfaces";

export interface educationData {
  institution: string;
  degree: string;
  major: string;
  duration: string;
  gpa: string;
  location: string;
  achievements?: string[];
  courses?: string[];
}

export interface educationResponse extends BaseResponse<educationData[]> {}
