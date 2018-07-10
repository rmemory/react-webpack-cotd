/* eslint-disable
   react/jsx-one-expression-per-line,
   react/jsx-indent-props,
   implicit-arrow-linebreak,
   react/destructuring-assignment */
import React, { Component } from 'react';
import PropTypes from 'prop-types';

class AddFishForm extends Component {
	addFish = (event) => {
		event.preventDefault();

		const fish = {
			name: this.fishNameInputElement.value,
			price: parseFloat(this.fishPriceInputElement.value),
			status: this.fishStatusInputElement.value,
			description: this.fishDescriptionInputElement.value,
			image: this.fishImageInputElement.value,
		};

		this.props.addFishToState(fish);

		event.currentTarget.reset();
	}

	render() {
		return (
			<form className="fish-edit" onSubmit={this.addFish}>
				<input
					name="name"
					type="text"
					placeholder="Name"
					ref={input => // eslint-disable-line no-return-assign
						this.fishNameInputElement = input}
				/>
				<input
					name="price"
					type="text"
					placeholder="Price"
					ref={input => // eslint-disable-line no-return-assign
						this.fishPriceInputElement = input}
				/>
				<select
					name="status"
					ref={input => // eslint-disable-line no-return-assign
						this.fishStatusInputElement = input}
				>
					<option value="available">Fresh!</option>
					<option value="unavailable">Sold Out!</option>
				</select>
				<textarea
					name="description"
					placeholder="Description"
					ref={input => // eslint-disable-line no-return-assign
						this.fishDescriptionInputElement = input}
				/>
				<input
					name="image"
					type="text"
					placeholder="Image"
					ref={input => // eslint-disable-line no-return-assign
						this.fishImageInputElement = input}
				/>
				<button type="submit">+ Add Fish</button>
			</form>
		);
	}
}

AddFishForm.propTypes = {
	addFishToState: PropTypes.func.isRequired,
};

export default AddFishForm;
