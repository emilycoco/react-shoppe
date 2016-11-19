import React, { PureComponent, PropTypes } from 'react';

const propTypes = {
	id: PropTypes.string,
	name: PropTypes.string,
	description: PropTypes.string,
	image: PropTypes.string
};

export default class Product extends PureComponent {
	render() {
		const {
			name,
			description,
			image
		} = this.props;
		return (
			<div className="products-item">
				<div className="products-item-stock-photo">
					<img src={`images/products/${image}`} />
				</div>
				<div className="products-item-name">{name}</div>
				<div className="products-item-description">{description}</div>
				<div className="products-item-footer">
					<button className="products-item-favorite">
						<img src='/images/AddToCartUnselected.png' />
					</button>
					<button className="products-item-cart">
						<img src="/images/HeartItemUnselected.png" />
					</button>
				</div>
			</div>
		)
	}
}

Product.displayName = 'Products';
Product.propTypes = propTypes;
