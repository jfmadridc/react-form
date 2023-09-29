import { useState } from "react";
import { Button, TextField, Switch, FormControlLabel } from "@mui/material";

function FormSignUp() {
	const [firstName, setFirstName] = useState("");
	const [lastName, setLastName] = useState("");
	const [email, setEmail] = useState("");
	const [promotions, setPromotions] = useState(true);
	const [news, setNews] = useState(false);

	const [errorName, setErrorName] = useState({
		firstName: {
			error: false,
			message: "",
		},
	});

	const [errorLast, setErrorLast] = useState({
		lastName: {
			error: false,
			message: "",
		},
	});

	const [errorEmail, setErrorEmail] = useState({
		error: false,
		message: "",
	});

	function validateFirstName(firstName) {
		if (firstName.length < 2) {
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

	function validateLastName(lastName) {
		if (lastName.length < 3) {
			return {
				lastName: {
					error: true,
					message: "Last Name must be at least 3 characters",
				},
			};
		} else {
			return {
				lastName: { error: false, message: "" },
			};
		}
	}

	function validateEmail(email) {
		const re = /\S+@\S+\.\S+/;
		if (!re.test(email)) {
			return {
				error: true,
				message: "Please enter a valid email address",
			};
		}
		return {
			error: false,
			message: "",
		};
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
					setFirstName(e.target.value);
				}}
				error={errorName.firstName.error}
				helperText={
					errorName.firstName.error ? errorName.firstName.message : ""
				}
				onBlur={(e) => {
					setErrorName(validateFirstName(e.target.value));
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
				error={errorLast.lastName.error}
				helperText={errorLast.lastName.error ? errorLast.lastName.message : ""}
				onBlur={(e) => {
					setErrorLast(validateLastName(e.target.value));
				}}
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
				error={errorEmail.error}
				helperText={errorEmail.error ? errorEmail.message : ""}
				onBlur={(e) => {
					setErrorEmail(validateEmail(e.target.value));
				}}
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
