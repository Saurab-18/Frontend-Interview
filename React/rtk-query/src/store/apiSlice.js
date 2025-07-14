import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const apiSlice = createApi({
  reducerPath: "getTodo",
  baseQuery: fetchBaseQuery({
    baseUrl: `https://dummyjson.com/`,
  }),
  endpoints: function (builder) {
    return {
      getAllTodos: builder.query({
        query: () => {
          return `todos`;
        },
        transformResponse: function (data) {
          const todos = data?.todos;
          return todos || [];
        },
      }),
      getTodo: (id) => {
        return `todos/${id}`;
      },
    };
  },
});

export const { useGetAllTodosQuery, useLazyGetTodoQuery } = apiSlice;
