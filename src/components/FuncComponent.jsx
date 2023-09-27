import { useState } from "react";

function FuncComponent() {
	const [i, setI] = useState(0);

	return (
		<div>
			Functional Component
			<p>
				<button onClick={() => setI(i - 1)}>-</button>
				<a>{i}</a>
				<button onClick={() => setI(i + 1)}>+</button>
			</p>
		</div>
	);
}

export default FuncComponent;
