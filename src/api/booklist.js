import {default as axios} from 'utils/axiosHandler';

const BOOK_URL = '/api/v1/books';

// [1 도서 목록] 도서 리스트 읽기(get)
export const getBooklist = async (params) => axios.get(BOOK_URL, params);

// [2 도서 등록] Todo: 도서 생성(book)
// export const createBook = 작성해주세요.
export const createBook = async (params) => axios.post(BOOK_URL, params);

// [3 도서 상세] 도서 정보 가져오기(get)
export const getBook = async ({id}) => axios.get(`${BOOK_URL}/${id}`);

// [3 도서 상세] Todo: 도서 지우기(delete)
// export const deleteBook = 작성해주세요.
export const deleteBook = async ({id}) => axios.delete(`${BOOK_URL}/${id}`);

// [4 도서 수정] Todo: 도서 수정(put)
// export const updateBook = 작성해주세요.
export const updateBook = async ({id}, param) =>
	axios.put(`${BOOK_URL}/${id}`, param);
