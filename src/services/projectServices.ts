import type { projectsResponse } from "@/interfaces/projectInterfaces";
import { BASE_URL_API } from "@/utils/baseUrl";
import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const projectApi = createApi({
  reducerPath: "projectApi",
  baseQuery: fetchBaseQuery({ baseUrl: BASE_URL_API }),
  endpoints: (builder) => ({
    getAllProjects: builder.query<projectsResponse, void>({
      query: () => ({
        url: "projects.json",
        method: "GET",
      }),
    }),
  }),
});

export const { useGetAllProjectsQuery } = projectApi;
