import { useState } from "react";
import { Button, TextField, Switch, FormControlLabel } from "@mui/material";

function FormSignUp() {
	const [firstName, setfirstName] = useState("");
	const [lastName, setLastName] = useState("");
	const [email, setEmail] = useState("");
	const [promotions, setPromotions] = useState(true);
	const [news, setNews] = useState(false);

	const [errors, setErrors] = useState({
		firstName: {
			error: false,
			message: "",
		},
	});

	function validateFirstName(firstName) {
		if (firstName.length <= 1) {
			return {
				firstName: {
					error: true,
					message: "First Name must be at least 2 characters",
				},
			};
		} else {
			return {
				firstName: { error: false, message: "" },
			};
		}
	}

	return (
		<form
			onSubmit={(e) => {
				e.preventDefault();
				console.log(firstName, lastName, email, promotions, news);
			}}
		>
			<TextField
				id="first-name"
				label="First Name"
				variant="outlined"
				required
				fullWidth
				margin="normal"
				value={firstName}
				onChange={(e) => {
					setfirstName(e.target.value);
					// console.log("useState: ", firstName);
				}}
				error={errors.firstName.error}
				helperText={errors.firstName.error ? errors.firstName.message : ""}
				onBlur={(e) => {
					setErrors(validateFirstName(e.target.value));
				}}
			/>

			<TextField
				id="last-name"
				label="Last Name"
				variant="outlined"
				required
				fullWidth
				margin="normal"
				value={lastName}
				onChange={(e) => setLastName(e.target.value)}
			/>

			<TextField
				id="email"
				label="email"
				variant="outlined"
				required
				fullWidth
				margin="normal"
				value={email}
				onChange={(e) => setEmail(e.target.value)}
			/>

			<FormControlLabel
				control={<Switch />}
				label="Promotions"
				checked={promotions}
				onChange={() => setPromotions(!promotions)}
			/>
			<FormControlLabel
				control={<Switch />}
				label="News"
				checked={news}
				onChange={(e) => setNews(e.target.checked)}
			/>

			<Button variant="contained" type="submit" fullWidth>
				Sign Up
			</Button>
		</form>
	);
}

export default FormSignUp;
