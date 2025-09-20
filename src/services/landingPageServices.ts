import type { educationResponse } from "@/interfaces/educationInterfaces";
import type { skillResponse } from "@/interfaces/skillInterfaces";
import { BASE_URL_API } from "@/utils/baseUrl";
import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const landingPageApi = createApi({
  reducerPath: "landingPageApi",
  baseQuery: fetchBaseQuery({ baseUrl: BASE_URL_API }),
  endpoints: (builder) => ({
    getAllSkills: builder.query<skillResponse, void>({
      query: () => ({
        url: "skills.json",
        method: "GET",
      }),
    }),
    getAllEducations: builder.query<educationResponse, void>({
      query: () => ({
        url: "educations.json",
        method: "GET",
      }),
    }),
  }),
});

export const { useGetAllSkillsQuery, useGetAllEducationsQuery } =
  landingPageApi;
