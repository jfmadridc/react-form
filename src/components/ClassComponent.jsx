import { Component } from "react";

class ClassComponent extends Component {
	constructor() {
		super();
		this.state = {
			i: 0,
		};
	}

	render() {
		return (
			<div>
				Class Component
				<p>
					<button onClick={() => this.setState({ i: this.state.i - 1 })}>-</button>
					<a>{this.state.i}</a>
					<button onClick={() => this.setState({ i: this.state.i + 1 })}>+</button>
				</p>
			</div>
		);
	}
}

export default ClassComponent;
