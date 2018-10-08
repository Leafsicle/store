import React, { Component } from 'react'
import Item from './Item'
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom'
import Data from './Data.json'

class Inventory extends Component {
	render() {
		let darkFilter = Data.filter(card => card.prodType === 'Dark Roast')

		return (
			<div class="columns is-flex is-multiline is-centered is-mobile featured">
				<h3 class="title is-3">Full Inventory</h3>
				<div class="columns is-flex is-multiline is-centered featured">
					{darkFilter.map(card => {
						return (
							<Item
								name={card.prodName}
								type={card.prodType}
								description={card.description}
								image={card.image}
								rating={card.rating}
								price={card.price}
							/>
						)
					})}
				</div>
			</div>
		)
	}
}

export default Inventory
