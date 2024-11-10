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
    postProducts: builder.query({
      query: (data) => ({
        method: "POST",
        url: "/single/create-product",
        body: data,
      }),
      providesTags: ["products"],
    }),
    getProductById: builder.query({
      query: (_id) => ({
        method: "GET",
        url: `/single/get-product/${_id}`,
      }),

      providesTags: ["products"],
    }),
    DeleteProductById: builder.mutation({
      query: (_id) => ({
        url: `/single/delete-product/${_id}`,
        method: "DELETE",
      }),
      invalidatesTags: ["products"], // Invalidate the "products" tag to refetch the product list if needed
    }),
    UpdateProductById: builder.mutation({
      query: ({ _id, updatedData }) => ({
        url: `/single/update-product/${_id}`,
        method: "PUT",
        body: updatedData,
      }),
      invalidatesTags: ["products"],
    }),

    getProductsByCategory: builder.query({
      query: (category) => ({
        method: "GET",
        url: `/single/get-product?category=${category}`,
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
  useLazyPostProductsQuery,
  useGetProductsByCategoryQuery,
  useDeleteProductByIdMutation,
  useUpdateProductByIdMutation,
} = baseApi;
