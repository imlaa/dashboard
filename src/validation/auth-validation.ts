import * as yup from 'yup';

export const signInSchema = yup.object().shape({
	email: yup
		.string()
		.email('You must enter a valid email')
		.required('You must enter a email'),
	password: yup
		.string()
		.required('Please enter your password.')
		.min(8, 'Password is too short - must be at least 8 chars.'),
});

export const signUpSchema = yup.object().shape({
	email: yup
		.string()
		.email('You must enter a valid email')
		.required('You must enter a email'),
	password: yup
		.string()
		.required('Please enter your password.')
		.min(8, 'Password is too short - must be at least 8 chars.'),
	passwordConfirmed: yup.string(),
});
