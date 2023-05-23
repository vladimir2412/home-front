import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { IProducts, IProduct, IAuth, ICart, ICartPost } from './types';
import Cookies from 'js-cookie';
export const shopApi = createApi({
	reducerPath: 'shopApi',
	baseQuery: fetchBaseQuery({ baseUrl: 'https://ecommerce-backend-vladimir2412.vercel.app/' }),
	tagTypes: ['Product', 'User', 'Cart', 'Order'],
	endpoints: (builder) => ({
		getProducts: builder.query<IProducts, string>({
			query: () => `products/`,
			providesTags: (result) => ['Product'],
		}),
		getProductById: builder.query<IProduct, number>({
			query: (id) => `products/${id}`,
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
				providesTags: (result) => ['User'],
			}),
		}),
		getCartById: builder.query<ICart, number>({
			query: (id) => ({
				url: `/cart/${id}`,
			}),
			providesTags: (result) => ['Cart'],
		}),
		addProductToCart: builder.mutation<ICartPost, ICartPost>({
			query: (body: ICartPost) => ({
				url: `/cart`,
				method: 'POST',
				body: body,
			}),
			invalidatesTags: ['Cart'],
		}),
		getOrders: builder.query<ICart, void>({
			query: () => ({
				url: `/orders`,
			}),
			providesTags: ['Order'],
		}),
		submitOrder: builder.mutation<void, void>({
			query: (id) => ({
				url: `/orders`,
				method: 'POST',
				body: id,
			}),
			invalidatesTags: ['Cart'],
		}),
		getRole: builder.query<string, void>({
			query: () => ({
				url: `/auth/user-role`,
				headers: {
					Authorization: `Bearer ${Cookies.get('accessToken')}`,
				},
			}),
		}),
		updateUser: builder.mutation<void, IAuth>({
			query: (user) => ({
				url: `auth/users/${user.id}`,
				method: 'PUT',
				body: user,
			}),
			invalidatesTags: ['User'],
		}),
		removeUser: builder.mutation<void, number>({
			query: (id) => ({
				url: `auth/users/${id}`,
				method: 'DELETE',
			}),
			invalidatesTags: ['User'],
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
	useGetCartByIdQuery,
	useGetProductByIdQuery,
	useAddProductToCartMutation,
	useGetOrdersQuery,
	useSubmitOrderMutation,
	useGetRoleQuery,
	useUpdateUserMutation,
	useRemoveUserMutation,
} = shopApi;
