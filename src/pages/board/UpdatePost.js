import React from 'react';
import {Formik} from 'formik';
import * as Yup from 'yup';
import {updatePost} from 'api/board';
import {
	Button,
	FormHelperText,
	Grid,
	Stack,
	TextareaAutosize,
	TextField,
} from '@mui/material';
import {useNavigate} from 'react-router-dom';
import {useSnackbar} from 'notistack';
import {useLocation} from 'react-router';

// 다른 페이지를 참고해서 페이지를 완성해주세요.
// Todo: 게시글 수정 페이지 기능
// 1. 이전페이지로부터 게시글 데이터 받아오기 (제공)
// 2. 취소 버튼 클릭 시 게시글 상세 페이지로 이동
// 3. 게시글 title validation : string 타입, 최대 255자, 필수(작성 안하면 '제목은 필수입니다.')
// 4. 수정 버튼 클릭 시 게시글 수정 api 호출
// 5. 정상적으로 호출 후에는 게시글 페이지로 이동
const UpdatePost = () => {
	const navigate = useNavigate();
	const {enqueueSnackbar} = useSnackbar();

	// 1. 이전페이지로부터 게시글 데이터 받아오기 (제공)
	const location = useLocation();
	const id = location.state ? location.state.id : '';
	const title = location.state ? location.state.title : '';
	const content = location.state ? location.state.content : '';

	// Todo: [2] 게시글 상세 페이지로 이동 함수 선언
	// 작성해주세요.

	return (
		<>
			{title && (
				<Formik
					//초기값 셋팅
					initialValues={{
						title: title,
						content: content,
						submit: null,
					}}
					validationSchema={Yup.object().shape({
						// Todo: [3] 게시글 title validation : string 타입, 최대 255자, 필수(작성 안하면 '제목은 필수입니다.')
						// 작성해주세요.
					})}
					onSubmit={async (values, {setSubmitting}) => {
						setSubmitting(true);

						// Todo: [4] api 호출
						// 작성해주세요.

						setSubmitting(false);
						enqueueSnackbar('게시글을 수정하였습니다.', {
							variant: 'success',
						});
						// Todo: [5] 상세 페이지로 이동
						// 작성해주세요.
					}}
				>
					{({
						errors,
						handleBlur,
						handleChange,
						handleSubmit,
						isSubmitting,
						touched,
						values,
					}) => (
						<form noValidate onSubmit={handleSubmit}>
							<Grid container spacing={3}>
								<Grid item xs={24} md={12}>
									<Stack spacing={1}>
										<TextField
											fullWidth
											error={Boolean(
												touched.title && errors.title,
											)}
											id='title'
											value={values.title}
											name='title'
											onChange={handleChange}
											placeholder='제목을 입력하세요'
											style={{backgroundColor: 'white'}}
										/>
										{touched.title && errors.title && (
											<FormHelperText
												error
												id='helper-text-title-signup'
											>
												{errors.title}
											</FormHelperText>
										)}
									</Stack>
								</Grid>
								<Grid item xs={12}>
									<Stack spacing={1}>
										<TextareaAutosize
											id='content'
											name='content'
											minRows={5}
											aria-label='maximum height'
											placeholder='내용을 입력하세요'
											value={values.content}
											style={customStyle}
											onBlur={handleBlur}
											onChange={handleChange}
										/>
									</Stack>
								</Grid>
								{errors.submit && (
									<Grid item xs={12}>
										<FormHelperText error>
											{errors.submit}
										</FormHelperText>
									</Grid>
								)}
								<Grid
									container
									justifyContent='flex-end'
									style={{marginTop: 10}}
									spacing={2}
								>
									<Grid item>
										<Button
											disableElevation
											disabled={isSubmitting}
											size='large'
											//Todo: [4] 클릭시 수정 api 호출 (클릭 시 onSubmit 실행)
											// 작성해주세요.
											variant='contained'
											color='primary'
										>
											수정
										</Button>
									</Grid>
									<Grid item>
										<Button
											disableElevation
											size='large'
											variant='contained'
											//Todo: [2] 클릭시 게시글 상세 페이지로 이동
											// 작성해주세요.
											color='error'
										>
											취소
										</Button>
									</Grid>
								</Grid>
							</Grid>
						</form>
					)}
				</Formik>
			)}
		</>
	);
};

export default UpdatePost;

const customStyle = {
	padding: '10.5px 14px 10.5px 12px',
	font: 'inherit',
	borderRadius: '4px',
	borderColor: '#d9d9d9',
};
