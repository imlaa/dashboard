import React from 'react';
import { ThemeProvider } from '@mui/material';

import { AppRoutes } from './routes';

import { theme } from './theme';

// import { useAppDispatch, useAppSelector } from './hooks';
// import { setUser } from './store/user-slice';

export const App: React.FC = () => {
	// const dispatch = useAppDispatch();
	// const user = useAppSelector((state) => state.user);

	return (
		<ThemeProvider theme={theme}>
			<div className='app'>
				<AppRoutes/>
			</div>
		</ThemeProvider>
	);
}
