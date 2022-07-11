import React from 'react';
import { AppRoutes } from './routes';

// import { useAppDispatch, useAppSelector } from './hooks';
// import { setUser } from './store/user-slice';

export const App:React.FC = () =>  {
	// const dispatch = useAppDispatch();
	// const user = useAppSelector((state) => state.user);

	return (
		<div className='app'>
			<AppRoutes />
		</div>
	);
}
