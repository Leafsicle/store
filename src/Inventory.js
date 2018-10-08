import React, { Component } from 'react'
import Data from './Data.json'
import Item from './Item'

class Inventory extends Component {
	render() {
		return (
			<div class="columns is-flex is-multiline is-centered is-mobile featured">
				<h3 class="title is-3">Full Inventory</h3>
				<div class="columns is-flex is-multiline is-centered featured">
					{Data.map(card => {
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
