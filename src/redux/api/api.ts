import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
export const baseApi = createApi({
  reducerPath: "baseApi",
  baseQuery: fetchBaseQuery({
    baseUrl: "http://localhost:5000/api/v1",
  }),
  tagTypes: ["products", "verify", "Aboutes"],
  endpoints: (builder) => ({
    getProducts: builder.query({
      query: () => ({
        method: "GET",
        url: "/single/get-product",
      }),
      providesTags: ["products"],
    }),
    getProductById: builder.query({
      query: (id) => ({
        method: "GET",
        url: `/single/get-product/${id}`,
      }),

      providesTags: ["products"],
    }),
    getAboutdata: builder.query({
      query: () => ({
        method: "GET",
        url: "/aboute/aboute-details",
      }),

      providesTags: ["Aboutes"],
    }),

    creteOrder: builder.mutation({
      query: (data) => {
        return {
          method: "POST",
          url: `/order/create`,
          body: data,
        };
      },
    }),
  }),
});
export const {
  useGetProductsQuery,
  useCreteOrderMutation,
  useGetProductByIdQuery,
  useGetAboutdataQuery,
} = baseApi;
