import React from 'react';

import {lazy} from 'react';

// project import
import Loadable from 'components/Loadable';
import MainLayout from 'layout/MainLayout';
const DefaultPage = Loadable(lazy(() => import('pages/DefaultPage')));

// [1 게시판] 게시판(Board) 페이지 컴포넌트 등록
const Board = Loadable(lazy(() => import('pages/board/Board')));
// [2 게시글 작성] Todo: 게시글 작성(CreatePost) 페이지 컴포넌트 등록
// 작성해주세요.
// [3 게시글 상세] Todo: 게시글 상세(Post) 페이지 컴포넌트 등록
// 작성해주세요.
// [4 게시판 수정] Todo: 게시판 수정(UpdatePost) 페이지 컴포넌트 등록
// 작성해주세요.

// ==============================|| MAIN ROUTING ||============================== //

const MainRoutes = {
	path: '/',
	element: <MainLayout />,
	children: [
		{
			path: '',
			element: <DefaultPage />,
		},
		// [1 게시판] 게시판(Board) 페이지 라우팅
		{
			path: 'board',
			element: <Board />,
		},

		// [2 게시글 작성] Todo: 게시글 작성(CreatePost) 페이지 라우팅('post/write')
		// 작성해주세요.

		// [3 게시글 상세] 게시글 상세(Post) 페이지 라우팅
		{
			path: 'post/:id',
			//엘리먼트 매핑해주세요.
		},
		// [4 게시글 수정] Todo: 게시글 수정(UpdatePost) 페이지 라우팅('post/update')
		// 작성해주세요.
	],
};

export default MainRoutes;
