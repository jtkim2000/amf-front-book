import React, {useEffect, useState} from 'react';
import {Button, Grid} from '@mui/material';
import DataTable from 'components/@extended/DataTable';
import {useNavigate} from 'react-router-dom';
import {getPostList} from 'api/board';

const Board = () => {
	// [이벤트 매핑] useNavigate에서 navigate 가져오기
	const navigate = useNavigate();

	//[api 연결] data(기본값 : []), isLoading(기본값 : false)을 컴포넌트 State로 선언(useState)
	const [data, setData] = useState([]);
	const [isLoading, setLoading] = useState(false);

	//
	useEffect(() =>{
		// [api 연결] 로딩 시 게시글 리스트 api 호출 함수 실행
		findPostList();
	}, []);

	const findPostList = async () =>{
		// [api 연결] isLoading의 상태값 변경(로딩중이면 true, 아니면 false)
		setLoading(true);

		// [api 연결] Todo: api/board.js에서 게시글 리스트 api 호출 후 결과 받기
		// 작성해주세요.

		// [api 연결] Todo: data에 결과 매핑하기
		// 작성해주세요.

		setLoading(false);
	}

	const moveCreatePostPage = () => {
		// [이벤트 매핑] Todo: 글쓰기 페이지로 이동(/post/write)
		// 작성해주세요.
	};

	const rowClick = (e, row) => {
		// [이벤트 매핑] Todo: row 에서 게시글 id 받아오기(row.id)
		// 작성해주세요.
		// [이벤트 매핑] Todo: 게시글 상세 페이지(/post/:id) 로 이동
		// 작성해주세요.
	};

	return (
		<>
			<Grid
				container
				direction='row'
				justifyContent='flex-end'
				spacing={2}
			>
				<Grid item>
					<Button variant='contained' onClick={moveCreatePostPage}>
						글쓰기
					</Button>
				</Grid>
			</Grid>
			<DataTable
				columns={columns}
				rows={data}
				rowsPerPageOptions={[10, 20, 30]}
				isLoading={isLoading}
				rowClick={rowClick}
			/>
		</>
	);
};
export default Board;

// [이벤트 매핑] DataTable에 들어갈 columns 설정
const columns = [
	{
		id: 'title',
		label: '제목',
		width: 290,
		align: 'left',
	},
	{
		id: 'author',
		label: '작성자',
		width: 60,
		align: 'left',
	},
];
