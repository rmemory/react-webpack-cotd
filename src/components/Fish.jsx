/* eslint-disable
   react/destructuring-assignment,
   react/jsx-indent-props */
import React, { Component } from 'react';
import PropTypes from 'prop-types';

import Crab from './images/crab.jpg';
import Hali from './images/hali.jpg';
import Lobster from './images/lobster.jpg';
import Mahi from './images/mahi.jpg';
import Mussels from './images/mussels.jpg';
import Oysters from './images/oysters.jpg';
import Prawns from './images/prawns.jpg';
import Salmon from './images/salmon.jpg';
import Scallops from './images/scallops.jpg';

import { formatPrice } from '../helpers';

class Fish extends Component {
	handleButtonClick = (event) => {
		event.preventDefault();
	}

	render() {
		const {
			name, image, desc, status, price,
		} = this.props.fish;
		const isAvailable = status === 'available';

		let imageName;
		if (image === 'Crab') {
			imageName = Crab;
		} else if (image === 'Hali') {
			imageName = Hali;
		} else if (image === 'Lobster') {
			imageName = Lobster;
		} else if (image === 'Mahi') {
			imageName = Mahi;
		} else if (image === 'Mussels') {
			imageName = Mussels;
		} else if (image === 'Oysters') {
			imageName = Oysters;
		} else if (image === 'Prawns') {
			imageName = Prawns;
		} else if (image === 'Salmon') {
			imageName = Salmon;
		} else if (image === 'Scallops') {
			imageName = Scallops;
		}

		return (
			<li key={this.props.fishKey} className="menu-fish">
				<img src={imageName} alt={name} />
				<h3 className="fish-name">
					{name}
					<span className="price">
						{formatPrice(price)}
					</span>
				</h3>
				<p>
					{desc}
				</p>
				<button
					type="submit"
					onClick={this.handButtonClick}
					disabled={!isAvailable}
				>
					{isAvailable ? 'Add to Cart' : 'Sold Out'}
				</button>
			</li>
		);
	}
}

Fish.propTypes = {
	fishKey: PropTypes.string.isRequired,
	fish: PropTypes.shape({
		image: PropTypes.string,
		name: PropTypes.string,
		desc: PropTypes.string,
		status: PropTypes.string,
		price: PropTypes.number,
	}).isRequired,
};

export default Fish;
