import { bindActionCreators } from '@reduxjs/toolkit';
import { useDispatch } from 'react-redux';
import { actions } from '../store/cart/cart.slice';
import { useMemo } from 'react';

const rootActions = {
	...actions,
};

export const useActions = () => {
	const dispatch = useDispatch();
	return useMemo(() => bindActionCreators(rootActions, dispatch), [dispatch]);
};
