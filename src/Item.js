import React, { Component } from 'react'

class Item extends Component {
	render() {
		return (
			<div class="column is-mobile is-one-quarter">
				<div class="card ">
					<div class="card-image">
						<figure class="image is-4by3">
							<img
								src="https://www.johnsonfitness.com/blog/app/uploads/2015/01/coffee-before-workouts.jpg"
								alt="Placeholder image"
							/>
						</figure>
					</div>
					<div class="card-content">
						<div class="media" />
						<div class="media-content">
							<p class="title is-3">Coffee</p>
							<p class="subtitle is-6">type of coffee</p>
						</div>
						<div class="content">
							this will be a description about the product
						</div>

						{/* <div key={card.id} className="column is-one-quarter">
		 				<div className="card">
		 					<div className="card-image">
		 						<figure className="image is-4by4">
		 							<Link></div>
		 								to={`/${card.category}/${card.product}/${card.id}`}
		 							>
		 								<img src={card.image} alt="Placeholder image" />
		 							</Link>
		 						</figure>
		 					</div>
		 					<div className="card-content">
		 						<div className="content">{card.description}</div>
		 						<div className="content">
		 							Rating: {card.rating} */}
					</div>
				</div>
			</div>
		)
	}
}

export default Item
