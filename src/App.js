import React, { Component } from 'react'
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom'
import Data from './Data.json'
import './App.css'
import Default from '././Default'
import Featured from './Featured'
import Inventory from './Inventory'
import DarkRoast from './DarkRoast'
import LightRoast from './LightRoast'
import Decaf from './Decaf'

class App extends Component {
	render() {
		return (
			<div className="container">
				{/* Your store should have categories that products are placed in.
        Your store should have a listing page of products in specific categories (this might be the same component as the previous requirement, think about how this would work) */}
				{/* shit I need on my page: featured items (in mockaroo) Landing page(this
				needs to show featured items and stuff like a categories section. maybe
        a nav bar) Store page>Listing page> Item details */}
				<Router>
					{/* This div is for a wrapper. No other purpose */}
					<div>
						<Default />
						<Switch>
							<Route exact path="/" component={Featured} />
							<Route path="/inventory" component={Inventory} />
							<Route path="/darkroast" component={DarkRoast} />
							<Route path="/lightroast" component={LightRoast} />
							<Route Path="/you_are_weak" component={Decaf} />
						</Switch>
					</div>
				</Router>
			</div>
		)
	}
}

export default App
