import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { post } from "../vite-env";

export const posts = createApi({
  reducerPath: "api",
  baseQuery: fetchBaseQuery({
    baseUrl: "http://localhost:3000",
  }),
  endpoints: (builder) => ({
    getPosts: builder.query<post[], string>({ query: () => "posts" }),
  }),
});

export const { useGetPostsQuery } = posts;
