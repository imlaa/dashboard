import React from 'react';
import { TextField, styled } from '@mui/material';

export const Input = styled(TextField)({
	'& input': {
		fontSize: '20px',
	},
	'& input:valid + fieldset': {
		borderColor: 'green',
		borderWidth: 2,
	},
	'& input:invalid + fieldset': {
		borderColor: 'red',
		borderWidth: 2,
	},
	'& input:valid:focus + fieldset': {
		borderLeftWidth: 6,
		padding: '4px !important', // override inline-style
	},
});
