import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { IProducts, IProduct } from './types';
export const shopApi = createApi({
	reducerPath: 'shopApi',
	baseQuery: fetchBaseQuery({
		baseUrl: 'https://ecommerce-backend-vladimir2412.vercel.app/testTask',
	}),
	tagTypes: ['Product', 'User', 'Cart', 'Order'],
	endpoints: (builder) => ({
		getProducts: builder.query<IProducts, number>({
			query: (id: number) => `products/${id}`,
			providesTags: (result) => ['Product'],
		}),
		getProductById: builder.query<IProduct, number>({
			query: (id) => `products/${id}`,
			providesTags: (result) => ['Product'],
		}),

		submitOrder: builder.mutation<void, unknown>({
			query: (body) => ({
				url: `/cart`,
				method: 'POST',
				body: body,
			}),
			invalidatesTags: ['Cart'],
		}),
	}),
});
export const { useGetProductsQuery, useGetProductByIdQuery, useSubmitOrderMutation } = shopApi;
