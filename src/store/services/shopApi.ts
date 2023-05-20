import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { IProducts, IProduct, IAuth } from './types';
export const shopApi = createApi({
	reducerPath: 'shopApi',
	baseQuery: fetchBaseQuery({ baseUrl: 'http://localhost:3000/' }),
	tagTypes: ['Product', 'User'],
	endpoints: (builder) => ({
		getProducts: builder.query<IProducts, string>({
			query: () => `products/`,
			providesTags: (result) => ['Product'],
		}),
		createProduct: builder.mutation<IProducts, Partial<IProducts>>({
			query: (body) => ({
				url: `products/`,
				method: 'POST',
				body: body,
			}),
			invalidatesTags: ['Product'],
		}),
		updateProduct: builder.mutation<IProduct, Partial<IProduct>>({
			query: (product) => ({
				url: `products/${product.id_tovara}`,
				method: 'PUT',
				body: product,
			}),
			invalidatesTags: ['Product'],
		}),
		removeProduct: builder.mutation<IProducts, number>({
			query: (id) => ({
				url: `products/${id}`,
				method: 'DELETE',
			}),
			invalidatesTags: ['Product'],
		}),
		register: builder.mutation<IAuth, IAuth>({
			query: (auth) => ({
				url: `/auth/register`,
				method: 'POST',
				body: auth,
			}),
		}),
		login: builder.mutation<IAuth, Partial<IAuth>>({
			query: (auth) => ({
				url: `/auth/login`,
				method: 'POST',
				body: auth,
			}),
		}),
		getUsers: builder.query<IAuth, Partial<IAuth>>({
			query: () => ({
				url: `/auth/users`,
				provideTags: ['User'],
			}),
		}),
	}),
});
export const {
	useGetProductsQuery,
	useCreateProductMutation,
	useRemoveProductMutation,
	useUpdateProductMutation,
	useRegisterMutation,
	useLoginMutation,
	useGetUsersQuery,
} = shopApi;
