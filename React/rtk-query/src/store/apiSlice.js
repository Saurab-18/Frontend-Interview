import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const apiSlice = createApi({
  reducerPath: "getTodo",
  tagTypes: ["getAllTodosTag"],
  refetchOnFocus: true,
  refetchOnReconnect: true,
  baseQuery: fetchBaseQuery({
    baseUrl: `https://dummyjson.com/`,
  }),
  endpoints: function (builder) {
    return {
      getAllTodos: builder.query({
        query: () => {
          return `todos`;
        },
        providesTags: ["getAllTodosTag"],
        transformResponse: function (data) {
          const todos = data?.todos;
          return todos || [];
        },
      }),
      getTodo: (id) => {
        return `todos/${id}`;
      },
      addTodo: builder.mutation({
        query: (params) => {
          return {
            url: `todos/add`,
            method: "POST",
            body: params,
          };
        },
        invalidatesTags: ["getAllTodosTag"],
      }),
    };
  },
});

export const { useGetAllTodosQuery, useLazyGetTodoQuery, useAddTodoMutation } =
  apiSlice;
