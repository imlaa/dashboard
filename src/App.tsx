import React from 'react';
import { ThemeProvider } from '@mui/material';

import { AppRoutes } from './routes';

import { themeConfig } from './theme';

// import { useAppDispatch, useAppSelector } from './hooks';
// import { setUser } from './store/user-slice';

export const App: React.FC = () => {
	// const dispatch = useAppDispatch();
	// const user = useAppSelector((state) => state.user);

	return (
		<ThemeProvider theme={themeConfig}>
			<div className='app'>
				<AppRoutes/>
			</div>
		</ThemeProvider>
	);
}
