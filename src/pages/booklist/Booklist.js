import React, {useEffect, useState} from 'react';
import {Button, Grid} from '@mui/material';
import DataTable from 'components/@extended/DataTable';
import {useNavigate} from 'react-router-dom';
import {getBooklist} from 'api/booklist';

const Booklist = () => {
	// [이벤트 매핑] useNavigate에서 navigate 가져오기
	const navigate = useNavigate();

	//[api 연결] data(기본값 : []), isLoading(기본값 : false)을 컴포넌트 State로 선언(useState)
	const [data, setData] = useState([]);
	const [isLoading, setLoading] = useState(false);

	//
	useEffect(() => {
		// [api 연결] 로딩 시 도서 리스트 api 호출 함수 실행
		findBooklist();
	}, []);

	const findBooklist = async () => {
		// [api 연결] isLoading의 상태값 변경(로딩중이면 true, 아니면 false)
		setLoading(true);

		// [api 연결] Todo: api/booklist.js에서 도서 리스트 api 호출 후 결과 받기
		// 작성해주세요.
		const response = await getBooklist();

		// [api 연결] Todo: data에 결과 매핑하기
		// 작성해주세요.
		setData(response);

		setLoading(false);
	};

	const moveCreateBookPage = () => {
		// [이벤트 매핑] Todo: 도서등록 페이지로 이동(/book/write)
		// 작성해주세요.
		navigate('/book/write');
	};

	const rowClick = (e, row) => {
		// [이벤트 매핑] Todo: row 에서 도서 id 받아오기(row.id)
		// 작성해주세요.
		const bookId = row.id;
		// [이벤트 매핑] Todo: 도서 상세 페이지(/book/:id) 로 이동
		// 작성해주세요.
		navigate(`/book/${bookId}`);
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
					<Button variant='contained' onClick={moveCreateBookPage}>
						도서등록
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
export default Booklist;

// [이벤트 매핑] DataTable에 들어갈 columns 설정
const columns = [
	{
		id: 'title',
		label: '도서명',
		width: 100,
		align: 'left',
	},
	{
		id: 'content',
		label: '주요내용',
		width: 210,
		align: 'left',
	},
	{
		id: 'category',
		label: '카테고리',
		width: 100,
		align: 'left',
	},
	{
		id: 'rentStatus',
		label: '대여상태',
		width: 110,
		align: 'left',
	},
	{
		id: 'author',
		label: '제공자',
		width: 60,
		align: 'left',
	},
];
