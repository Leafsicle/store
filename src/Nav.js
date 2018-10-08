import React, { Component } from 'react'
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom'

class Nav extends Component {
	render() {
		return (
			//  This nav bar was made using Bulma and the tabs
			<div className="tabs is-boxed is-toggle is-flex-mobile is-centered is-fullwidth">
				<ul>
					<li>
						<Link to="/">
							<i class="fas fa-home" />
							Home
						</Link>
					</li>
					<li>
						<Link to="/darkroast">
							<i class="fas fa-moon" />
							Dark Roast
						</Link>
					</li>
					<li>
						<Link to="/lightroast">
							<i class="fas fa-sun " />
							Light Roast
						</Link>
					</li>
					<li>
						<Link to="/you_are_weak">
							<i class="fas fa-skull" />
							Decaf
						</Link>
					</li>
					<li>
						<Link to="/inventory">
							<i class="fas fa-coffee" />
							All Items
						</Link>
					</li>
				</ul>
			</div>
		)
	}
}
export default Nav
