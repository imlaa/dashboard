import { IRoute } from '../models';

import { RouteNames } from './routes-enums';

import { SignIn, SignUp } from '../modules';

export const publicRoutes: IRoute[] = [
	{ path: RouteNames.SIGNIN, element: <SignIn /> },
	{ path: RouteNames.SIGNUP, element: <SignUp /> }
];
