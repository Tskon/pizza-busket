import React from 'react';

// logic
import '../../lib/basket-row';

export default class ProductRow extends React.Component {
  render() {
    return (
      <div className="basket-grid__row">
        <img src={this.props.product.preview} alt="pizza" title="pizza" className="basket-grid__product-img"/>
        <div className="basket-grid__product-name">{this.props.product.name}</div>
        <div className="basket-grid__product-description">{this.props.product.description}</div>
        <div className="basket-grid__product-buttons-wrapper">
          <div className="basket-grid__product-counter-wrapper">
            <div className="basket-grid__product-decr">&ndash;</div>
            <div className="basket-grid__product-count">{this.props.product.counter}</div>
            <div className="basket-grid__product-incr">+</div>
          </div>
          <input type="button" value="Удалить" className="basket-grid__product-toggle-btn"/>
        </div>
      </div>
    )
  }
}