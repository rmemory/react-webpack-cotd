/* eslint-disable react/jsx-one-expression-per-line, react/jsx-indent-props,
   implicit-arrow-linebreak, react/destructuring-assignment,
   react/prop-types */
import React, { Component } from 'react';
import { getFunName } from '../helpers';

class StorePicker extends Component {
	goToStore = (event) => {
		// Stop react from re-rendering the page on form submission.
		event.preventDefault();

		// Go to the store page, using push state, which doesn't cause a refresh
		this.props.history.push(`/store/${this.storeNameInputElement.value}`);
	};

	render() {
		return (
			<form className="store-selector" onSubmit={this.goToStore}>
				<h2>Please Enter a Store</h2>
				<input
					type="text"
					required
					placeholder="Store Name"
					defaultValue={getFunName()}
					ref={input => // eslint-disable-line no-return-assign
						this.storeNameInputElement = input}
				/>
				<button type="submit">Visit Store</button>
			</form>
		);
	}
}

export default StorePicker;
