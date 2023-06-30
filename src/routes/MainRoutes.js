import React from 'react';

import {lazy} from 'react';

// project import
import Loadable from 'components/Loadable';
import MainLayout from 'layout/MainLayout';
const DefaultPage = Loadable(lazy(() => import('pages/DefaultPage')));

// [1 도서목록] 도서목록(Booklist) 페이지 컴포넌트 등록
const Booklist = Loadable(lazy(() => import('pages/booklist/Booklist')));
// [2 도서 등록] Todo: 도서 등록(CreateBook) 페이지 컴포넌트 등록
// 작성해주세요.
const CreateBook = Loadable(lazy(() => import('pages/booklist/CreateBook')));
// [3 도서 상세] Todo: 도서 상세(Book) 페이지 컴포넌트 등록
// 작성해주세요.
const Book = Loadable(lazy(() => import('pages/booklist/Book')));
// [4 도서목록 수정] Todo: 도서목록 수정(UpdateBook) 페이지 컴포넌트 등록
// 작성해주세요.
const UpdateBook = Loadable(lazy(() => import('pages/booklist/UpdateBook')));
// ==============================|| MAIN ROUTING ||============================== //

const MainRoutes = {
	path: '/',
	element: <MainLayout />,
	children: [
		{
			path: '',
			element: <DefaultPage />,
		},
		// [1 도서목록] 도서목록(Booklist) 페이지 라우팅
		{
			path: 'booklist',
			element: <Booklist />,
		},

		// [2 도서 등록] Todo: 도서 등록(CreateBook) 페이지 라우팅('book/write')
		// 작성해주세요.
		{
			path: 'book/write',
			element: <CreateBook />,
		},
		// [3 도서 상세] 도서 상세(Book) 페이지 라우팅
		{
			path: 'book/:id',
			//엘리먼트 매핑해주세요.
			element: <Book />,
		},
		// [4 도서 수정] Todo: 도서 수정(UpdateBook) 페이지 라우팅('book/update')
		// 작성해주세요.
		{
			path: 'book/update',
			//엘리먼트 매핑해주세요.
			element: <UpdateBook />,
		},
	],
};

export default MainRoutes;
