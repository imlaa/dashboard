import React from 'react';
import { Routes, Route } from 'react-router-dom';

import { IRoute } from '../models';
import { publicRoutes } from './public-routes';
import { privateRoutes } from './private-routes';

export const AppRoutes:React.FC = () => {
	const renderRoutesCallback = (routesArray:IRoute[]) => routesArray.map((route) => (
		<Route key={route.path} path={route.path} element={route.element} />
	));

	return (
		<Routes>
			{renderRoutesCallback(publicRoutes)}
		</Routes>
	);
};
