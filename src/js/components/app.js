import React from 'react';
import AppActions from '../action/app-actions'
import Catalog from './app-catalog'

export default class App extends React.Component {
	render(){
		return (
			<div className="container">
				<Catalog />
			</div>
		)
	}
}