import React, { Component } from 'react'
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom'
import Data from './Data.json'
import { createDecipher } from 'crypto'

class Item extends Component {
	render() {
		return (
			<div class="column is-mobile is-one-quarter">
				<div class="card ">
					<div class="card-image">
						<figure class="image is-4by3">
							<img src={this.props.image} alt=" " />
						</figure>
					</div>
					<div class="card-content">
						<div class="media" />
						<div class="media-content">
							<p class="title is-3"> {this.props.name}</p>
							<p class="subtitle is-6">{this.props.type}</p>
							<p class="subtitle is-6">{this.props.price} /lb</p>
						</div>
						<div class="content">{this.props.description}</div>
					</div>
				</div>
			</div>
		)
	}
}

export default Item
