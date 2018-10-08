import React, { Component } from 'react'
import Item from './Item'
import Data from './Data.json'

class Decaf extends Component {
	render() {
		let weakFilter = Data.filter(card => card.prodType === 'Decaf')

		return (
			<div class="columns is-flex is-multiline is-centered is-mobile featured">
				<h3 class="title is-3">Decaf</h3>
				<div class="columns is-flex is-multiline is-centered featured">
					{weakFilter.map(card => {
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

export default Decaf
