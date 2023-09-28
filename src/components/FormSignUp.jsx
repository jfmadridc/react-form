import { Button, TextField } from "@mui/material";

function FormSignUp() {
	return (
		<form>
			<TextField
				id="first-name"
				label="First Name"
				variant="outlined"
				required
				fullWidth
				margin="normal"
			/>

			<TextField
				id="last-name"
				label="Last Name"
				variant="outlined"
				required
				fullWidth
				margin="normal"
			/>

			<TextField
				id="email"
				label="email"
				variant="outlined"
				required
				fullWidth
				margin="normal"
			/>

			<label>Promotions</label>
			<input type="checkbox" />

			<label>News</label>
			<input type="checkbox" />

			<Button variant="contained">Sign Up</Button>
		</form>
	);
}

export default FormSignUp;
