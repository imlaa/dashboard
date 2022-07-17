import {createTheme} from "@mui/material";

export const theme = createTheme({
	components: {
		MuiInputLabel: {
			styleOverrides: {
				root: {
					fontSize: '1.5rem',
				},
			},
		},
		MuiFormHelperText: {
			styleOverrides: {
				root: {
					fontSize: '1.2rem',
					margin: 0,
				},
			},
		}
	}
});
