/* eslint-disable
   react/destructuring-assignment,
   react/no-access-state-in-setstate,
   react/jsx-indent-props */

import React, { Component } from 'react';

import Header from './Header.jsx';
import Order from './Order.jsx';
import Inventory from './Inventory.jsx';
import Fish from './Fish.jsx';

import sampleFishes from '../sampleFishes';

class App extends Component {
	state = {
		fishes: {},
		order: {},
	};

	addFishToState = (fish) => {
		const copyOfFishState = { ...this.state.fishes };
		copyOfFishState[`fish-${Date.now()}`] = fish;
		this.setState({
			fishes: copyOfFishState,
		});
	}

	loadSampleFishesIntoState = () => {
		this.setState({
			fishes: sampleFishes,
		});
	}

	render() {
		return (
			<div className="catch-of-the-day">
				<div className="menu">
					<Header
						tagline="Fresh Seafood Market"
					/>
					<ul className="fishes">
						{Object.keys(this.state.fishes).map(fishKey => (
							<Fish
								key={fishKey}
								fishKey={fishKey}
								fish={this.state.fishes[fishKey]}
							/>),
						)}
					</ul>
				</div>
				<Order />
				<Inventory
					addFishToState={this.addFishToState}
					loadSampleFishesIntoState={this.loadSampleFishesIntoState}
				/>
			</div>
		);
	}
}

export default App;
