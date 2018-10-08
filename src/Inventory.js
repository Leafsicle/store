import React, { Component } from 'react'
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom'
import Item from './Item'
import Data from './Data.json'

class Inventory extends Component {
	render() {
		return (
			<div class="columns is-multiline is-centered is-mobile featured">
				<Item />
				<Item />
				<Item />
				<Item />
				<Item />
				<Item />
				<Item />
				<Item />
				<Item />
				<Item />
				<Item />
				<Item />
				<Item />
				<Item />
				<Item />
				<Item />
				<Item />
				<Item />
				<Item />
				<Item />
				<Item />
				<Item />
				<Item />
				<Item />
				<Item />
			</div>
		)
	}
}

export default Inventory
