import React from 'react';
import AppActions from '../action/app-actions';
import CartButton from './app-cartButton';


export default (props) => {
	return (
		<div className="col-xs-6 col-sm-4 col-md-3">
			<h4>{props.item.title}</h4>
			<img src="https://placehold.it/250x250" width="100%" className="img-responsive"/>
			<p> {props.item.summary} </p>
			<p> ${props.item.cost} </p>
			<CartButton handler={
				AppActions.addItem.bind(null,props.item)
			}	
			txt="Add to Cart"
			/>
		</div>

	)
}