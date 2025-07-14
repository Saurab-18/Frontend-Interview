// This is not the recommended way while dealiing with multiple slice

// import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

// export const deleteApiSlice = createApi({
//   reducerPath: "deleteTodod",
//   baseQuery: fetchBaseQuery({
//     baseUrl: `https://dummyjson.com/`,
//   }),
//   endpoints: function (builder) {
//     return {
//       deleteTodo: builder.mutation({
//         query: (id) => {
//           return {
//             url: `todos/${id}`,
//             method: "DELETE",
//           };
//         },
//       }),
//     };
//   },
// });

// export const { useDeleteTodoMutation } = deleteApiSlice;
