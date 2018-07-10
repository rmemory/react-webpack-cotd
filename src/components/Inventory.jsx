import React, { Component } from 'react';
import PropTypes from 'prop-types';

import AddFishForm from './AddFishForm.jsx';

class Inventory extends Component {
	render() {
		return (
			<div className="inventory">
				<h2>Inventory</h2>
				<AddFishForm addFishToState={this.props.addFishToState}/>
				<button onClick={this.props.loadSampleFishesIntoState}>Load Sample Finishes</button>
			</div>
		);
	}
}

Inventory.propTypes = {
	addFishToState: PropTypes.func.isRequired,
	loadSampleFishesIntoState: PropTypes.func.isRequired,
};

export default Inventory;
