import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { IProducts, IProduct } from './types';
export const shopApi = createApi({
	reducerPath: 'shopApi',
	baseQuery: fetchBaseQuery({ baseUrl: 'http://localhost:3000/' }),
	endpoints: (builder) => ({
		getProducts: builder.query<IProducts, string>({
			query: () => `products/`,
		}),
		createProduct: builder.mutation<IProducts, Partial<IProducts>>({
			query: (body) => ({
				url: `products/`,
				method: 'POST',
				body: body,
			}),
		}),
		updateProduct: builder.mutation<IProduct, Partial<IProduct>>({
			query: (product) => ({
				url: `products/${product.id_tovara}`,
				method: 'PUT',
				body: product,
			}),
		}),
		removeProduct: builder.mutation<IProducts, Partial<IProducts>>({
			query: (id) => ({
				url: `products/${id}`,
				method: 'DELETE',
			}),
		}),
	}),
});
export const { useGetProductsQuery, useCreateProductMutation, useRemoveProductMutation } = shopApi;
