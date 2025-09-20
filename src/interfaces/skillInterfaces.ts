import type { BaseResponse } from "./commonInterfaces";

export interface skillData {
  id: string;
  name: string;
}

export interface skillResponse extends BaseResponse<skillData[]> {}
