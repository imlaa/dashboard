import React from 'react';
import { makeStyles, TextField } from '@mui/material';

interface IInput {
	label: string;
	error: boolean;
	type: string;
	helperText: string;
}

const useStyles = makeStyles({
	input: {

	}
});

export const Input:React.FC<IInput> = ({ label, error, type, helperText }) => {
	// @ts-ignore
	const classes = useStyles();

	return (
		<TextField
			label={label}
			type={type}
			error={error}
			helperText={helperText}
			variant="outlined"
			required
			fullWidth
			margin='normal'
			className={classes.input}
		/>
	);
};
