import React from 'react';

import { lazy } from 'react';

// project import
import Loadable from 'components/Loadable';
import MainLayout from 'layout/MainLayout';
const DefaultPage = Loadable(lazy(() => import('pages/DefaultPage')));

// ==============================|| MAIN ROUTING ||============================== //

const MainRoutes = {
	path: '/',
	element: <MainLayout />,
	children: [
		{
			path: '/',
			element: <DefaultPage />
		},
		// {
		//     path: 'dashboard',
		//     children: [
		//         {
		//             path: 'default',
		//             element: <DashboardDefault />
		//         }
		//     ]
		// },
	]
};

export default MainRoutes;
