import { Button } from "@mui/material";

function FormSignUp() {
	return (
		<form>
			<label>First Name</label>
			<input type="text" />

			<label>Last name</label>
			<input type="text" />

			<label>Email</label>
			<input type="email" />

			<label>Promotions</label>
			<input type="checkbox" />

			<label>News</label>
			<input type="checkbox" />

			<Button variant="contained">Sign Up</Button>
		</form>
	);
}

export default FormSignUp;
