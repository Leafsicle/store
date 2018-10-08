import React, { Component } from 'react'
// import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom'

class Header extends Component {
	render() {
		return (
			<div class="container header">
				<h1 class="title">
					For the Love of Coffee <i class="fas fa-crow" />
				</h1>
				<h2 class="subtitle"> Fuel for the Budding Developer</h2>
			</div>
		)
	}
}

export default Header
