import { useState, useEffect } from "react";
import {
	Button,
	TextField,
	Switch,
	FormGroup,
	FormControlLabel,
} from "@mui/material";

function FormSignUp() {
	const [firstName, setfirstName] = useState("");
	useEffect(() => {
		console.log("useEffect: ", firstName);
	}, [firstName]);

	return (
		<FormGroup>
			<TextField
				id="first-name"
				label="First Name"
				variant="outlined"
				required
				fullWidth
				margin="normal"
				onChange={(e) => {
					setfirstName(e.target.value);
					console.log("useState: ", firstName);
				}}
				value={firstName}
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

			<FormControlLabel
				control={<Switch defaultChecked />}
				label="Promotions"
			/>
			<FormControlLabel control={<Switch />} label="News" />

			<Button variant="contained">Sign Up</Button>
		</FormGroup>
	);
}

export default FormSignUp;
