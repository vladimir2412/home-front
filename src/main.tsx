import React from 'react';
import ReactDOM from 'react-dom/client';
import { store } from './store/store.ts';
import { Provider } from 'react-redux';
import './styles/index.scss';
import AppLoader from './AppLoader.tsx';
import { BrowserRouter } from 'react-router-dom';
import AuthWrapper from './wrappers/AuthWrapper.tsx';
ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
	<React.StrictMode>
		<Provider store={store}>
			<BrowserRouter>
				<AppLoader />
			</BrowserRouter>
		</Provider>
	</React.StrictMode>,
);
