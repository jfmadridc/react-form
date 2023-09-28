import "./App.css";
import FormSignUp from "./components/FormSignUp";
import Container from "@mui/material/Container";

function App() {
	return (
		<Container component="section" maxWidth="sm">
			<h1>Sign Up Form</h1>
			<FormSignUp />
		</Container>
	);
}

export default App;
