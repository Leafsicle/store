import React, { Component } from 'react'
import Item from './Item'
import Data from './Data.json'

class Featured extends Component {
	render() {
		let bigFilter = Data.filter(card => card.featured === 'true')
		// console.log(bigFilter)

		return (
			<div class="columns is-flex is-multiline is-centered is-mobile featured">
				<h3 class="title is-3">Best Sellers</h3>
				<div class="columns is-flex is-multiline is-centered featured">
					{bigFilter.map(card => {
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

export default Featured
