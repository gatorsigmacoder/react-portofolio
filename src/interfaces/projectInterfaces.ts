import type { BaseResponse } from "./commonInterfaces";

export interface projectInterface {
  id: string;
  name: string;
  image_base64: string;
  description: string;
  tags: string[];
  link: string;
}

export interface projectsResponse extends BaseResponse<projectInterface[]> {}
