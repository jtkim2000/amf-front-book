import React from 'react';
import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

// material-ui
import {
	Box,
	Button,
	FormControl,
	FormHelperText,
	Grid,
	IconButton,
	InputAdornment,
	InputLabel,
	OutlinedInput,
	Stack,
	Typography
} from '@mui/material';

// third party
import * as Yup from 'yup';
import { Formik } from 'formik';

// project import
import AnimateButton from 'components/@extended/AnimateButton';
import { strengthColor, strengthIndicator } from 'utils/password-strength';

// assets
import { EyeOutlined, EyeInvisibleOutlined } from '@ant-design/icons';
import { createMember } from 'api/authentication';
import { useSnackbar } from 'notistack';

// ============================|| FIREBASE - REGISTER ||============================ //

const AuthRegister = () => {
	const [level, setLevel] = useState();
	const [showPassword, setShowPassword] = useState(false);

	const { enqueueSnackbar } = useSnackbar();
	const navigate = useNavigate();

	const handleClickShowPassword = () => {
		setShowPassword(!showPassword);
	};

	const handleMouseDownPassword = (event) => {
		event.preventDefault();
	};

	const changePassword = (value) => {
		const temp = strengthIndicator(value);
		setLevel(strengthColor(temp));
	};

	useEffect(async () => {
		console.log('url:', process.env.REACT_APP_MEMBER_API_SERVER);
		changePassword('');
	}, []);

	return (
		<>
			<Formik
				initialValues={{
					username: '',
					nickname: '',
					email: '',
					password: '',
					passwordCheck: '',
					submit: null
				}}
				validationSchema={Yup.object().shape({
					username: Yup.string().max(10).required('이름은 필수입니다.'),
					nickname: Yup.string().max(10).required('닉네임은 필수입니다.'),
					email: Yup.string().email('이메일 형식으로 입력해주세요.').max(255).required('이메일은 필수입니다.'),
					password: Yup.string().min(8, '비밀번호는 최소 8자리이상 필요합니다.').max(255).required('비밀번호는 필수입니다.'),
					passwordCheck: Yup.string()
						.required('비밀번호 확인은 필수입니다.')
						.oneOf([Yup.ref('password')], '비밀번호가 일치하지 않습니다.')
				})}
				onSubmit={async (values, { setErrors, setStatus, setSubmitting }) => {
					const response = await createMember(values);
					if (response == false ) {
						enqueueSnackbar(response.message, { variant: 'error' });
						setStatus({ success: false });
						setErrors({ submit: response.message });
						return;
					}

					setStatus({ success: false });
					setSubmitting(false);

					enqueueSnackbar('회원가입에 성공하였습니다.', { variant: 'success' });
					navigate('/auth/login');
				}}
			>
				{({ errors, handleBlur, handleChange, handleSubmit, isSubmitting, touched, values }) => (
					<form noValidate onSubmit={handleSubmit}>
						<Grid container spacing={3}>
							<Grid item xs={24} md={12}>
								<Stack spacing={1}>
									<InputLabel htmlFor="username-signup"> 이름 *</InputLabel>
									<OutlinedInput
										fullWidth
										error={Boolean(touched.username && errors.username)}
										id="username-signup"
										type="username"
										value={values.username}
										name="username"
										onBlur={handleBlur}
										onChange={handleChange}
										placeholder="이름을 입력하세요"
										inputProps={{}}
									/>
									{touched.username && errors.username && (
										<FormHelperText error id="helper-text-name-signup">
											{errors.username}
										</FormHelperText>
									)}
								</Stack>
							</Grid>
							<Grid item xs={12}>
								<Stack spacing={1}>
									<InputLabel htmlFor="nickname-signup">닉네임 *</InputLabel>
									<OutlinedInput
										fullWidth
										error={Boolean(touched.nickname && errors.nickname)}
										id="nickname-login"
										type="nickname"
										value={values.nickname}
										name="nickname"
										onBlur={handleBlur}
										onChange={handleChange}
										placeholder="닉네임을 입력하세요."
										inputProps={{}}
									/>
									{touched.nickname && errors.nickname && (
										<FormHelperText error id="helper-text-nickname-signup">
											{errors.nickname}
										</FormHelperText>
									)}
								</Stack>
							</Grid>
							<Grid item xs={12}>
								<Stack spacing={1}>
									<InputLabel htmlFor="email-signup">이메일 *</InputLabel>
									<OutlinedInput
										fullWidth
										error={Boolean(touched.email && errors.email)}
										id="email-login"
										type="email"
										value={values.email}
										name="email"
										onBlur={handleBlur}
										onChange={handleChange}
										placeholder="이메일을 입력하세요."
										inputProps={{}}
									/>
									{touched.email && errors.email && (
										<FormHelperText error id="helper-text-email-signup">
											{errors.email}
										</FormHelperText>
									)}
								</Stack>
							</Grid>
							<Grid item xs={12}>
								<Stack spacing={1}>
									<InputLabel htmlFor="password-signup">비밀번호 *</InputLabel>
									<OutlinedInput
										fullWidth
										error={Boolean(touched.password && errors.password)}
										id="password-signup"
										type={showPassword ? 'text' : 'password'}
										value={values.password}
										name="password"
										onBlur={handleBlur}
										onChange={(e) => {
											handleChange(e);
											changePassword(e.target.value);
										}}
										endAdornment={
											<InputAdornment position="end">
												<IconButton
													aria-label="toggle password visibility"
													onClick={handleClickShowPassword}
													onMouseDown={handleMouseDownPassword}
													edge="end"
													size="large"
												>
													{showPassword ? <EyeOutlined /> : <EyeInvisibleOutlined />}
												</IconButton>
											</InputAdornment>
										}
										placeholder="8자 이상의 비밀번호를 입력하세요."
										inputProps={{}}
									/>
									{touched.password && errors.password && (
										<FormHelperText error id="helper-text-password-signup">
											{errors.password}
										</FormHelperText>
									)}
								</Stack>
								<FormControl fullWidth sx={{ mt: 2 }}>
									<Grid container spacing={2} alignItems="center">
										<Grid item>
											<Box sx={{ bgcolor: level?.color, width: 85, height: 8, borderRadius: '7px' }} />
										</Grid>
										<Grid item>
											<Typography variant="subtitle1" fontSize="0.75rem">
												{level?.label}
											</Typography>
										</Grid>
									</Grid>
								</FormControl>
							</Grid>
							<Grid item xs={12}>
								<Stack spacing={1}>
									<InputLabel htmlFor="password-check-signup">비밀번호 확인 *</InputLabel>
									<OutlinedInput
										fullWidth
										error={Boolean(touched.passwordCheck && errors.passwordCheck)}
										// error={Boolean(values.password != values.passwordCheck)}
										id="password-check-signup"
										type={showPassword ? 'text' : 'password'}
										value={values.passwordCheck}
										name="passwordCheck"
										onBlur={handleBlur}
										onChange={handleChange}
										endAdornment={
											<InputAdornment position="end">
												<IconButton
													aria-label="toggle password check visibility"
													onClick={handleClickShowPassword}
													onMouseDown={handleMouseDownPassword}
													edge="end"
													size="large"
												>
													{showPassword ? <EyeOutlined /> : <EyeInvisibleOutlined />}
												</IconButton>
											</InputAdornment>
										}
										placeholder="비밀번호를 확인해주세요."
										inputProps={{}}
									/>
									{touched.passwordCheck && errors.passwordCheck && (
										<FormHelperText error id="helper-text-password-check-signup">
											{errors.passwordCheck}
										</FormHelperText>
									)}
								</Stack>
							</Grid>
							{errors.submit && (
								<Grid item xs={12}>
									<FormHelperText error>{errors.submit}</FormHelperText>
								</Grid>
							)}
							<Grid item xs={12}>
								<AnimateButton>
									<Button
										disableElevation
										disabled={isSubmitting}
										fullWidth
										size="large"
										type="submit"
										variant="contained"
										color="primary"
									>
										가입
									</Button>
								</AnimateButton>
							</Grid>
						</Grid>
					</form>
				)}
			</Formik>
		</>
	);
};

export default AuthRegister;
