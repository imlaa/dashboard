import React from 'react';
import classes from './auth.module.scss';

import { useForm, Controller } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import { IconButton, TextField } from '@mui/material';
import VisibilityIcon from '@mui/icons-material/Visibility';
import VisibilityOffIcon from '@mui/icons-material/VisibilityOff';

import { signInSchema } from '../../validation';

import {Card, Input} from '../../components';

interface ISignInData {
	email: string;
	password: string;
}

const defaultValues:ISignInData  = {
	email: '',
	password: '',
}

export const SignIn:React.FC = () => {
	const [isConfirmPasswordVisible, setIsConfirmPasswordVisible] = React.useState<boolean>(false);

	const { control, formState: {errors}, handleSubmit } = useForm({
		mode: 'onChange',
		defaultValues,
		resolver: yupResolver(signInSchema),
	});

	const handleSubmitCallback = (data:ISignInData) => {
		console.log('qq')
		console.log('sign in form data: ', data);
	}

	const changePasswordVisibilityCallback = React.useCallback(() => {
		setIsConfirmPasswordVisible(!isConfirmPasswordVisible);
	}, [isConfirmPasswordVisible]);

	const visibilityIcon = () => (
		isConfirmPasswordVisible ? <VisibilityOffIcon fontSize={"large"} /> : <VisibilityIcon fontSize={"large"} />
	);

	return (
		<Card>
			<div className={classes.auth__form}>
				<div className={classes.auth__title}>Sign up</div>
				<div className={classes.auth__subtitle}>Use any valid email and password</div>


				<form
					name="loginForm"
					noValidate
					onSubmit={handleSubmit(handleSubmitCallback)}
				>
					<Controller
						name="email"
						control={control}
						render={({ field }) => (
							<Input
								{...field}
								label="Email"
								autoFocus
								type="email"
								error={!!errors?.email}
								helperText={errors?.email?.message}
								variant="outlined"
								required
								fullWidth
								margin='normal'
							/>
						)}
					/>

					<Controller
						name="email"
						control={control}
						render={({ field }) => (
							<TextField
								{...field}
								label="Email"
								autoFocus
								type="email"
								error={!!errors?.email}
								helperText={errors?.email?.message}
								variant="outlined"
								required
								fullWidth
								margin='normal'
							/>
						)}
					/>

					<Controller
						name="password"
						control={control}
						render={({ field }) => (
							<TextField
								{...field}
								className="mb-24"
								label="Password (confirm)"
								type={isConfirmPasswordVisible ? 'text' : 'password'}
								error={!!errors?.password}
								helperText={errors?.password?.message}
								variant="outlined"
								required
								fullWidth
								margin='normal'
								InputProps={{
									endAdornment: (
										<IconButton
											aria-label="toggle password visibility"
											onClick={changePasswordVisibilityCallback}
											edge="end"
										>
											{visibilityIcon()}
										</IconButton>
									),
								}}
							/>
						)}
					/>
					<button type={"submit"} onClick={() => console.log('a')}>submit</button>
				</form>
			</div>
		</Card>
	);
};
