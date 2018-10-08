import React, { Component } from 'react'
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom'
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
				<Router>
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
