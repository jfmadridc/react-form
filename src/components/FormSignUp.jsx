import { useState } from "react";
import {
	Button,
	TextField,
	Switch,
	FormGroup,
	FormControlLabel,
} from "@mui/material";

function FormSignUp() {
	const [firstName, setfirstName] = useState("");
	const [lastName, setLastName] = useState("");
	const [email, setEmail] = useState("");
	const [promotions, setPromotions] = useState(true);
	const [news, setNews] = useState(false);

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
