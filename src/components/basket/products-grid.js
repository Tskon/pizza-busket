import React from 'react';

import ProductRow from './product-row';

export default class ProductsGrid extends React.Component {
  render() {
    const basket = this.props.basket;
    let rows;

    if (basket){
      rows = basket.map((product, i) => {
        return (
          <ProductRow product={product} key={i}/>
        );
      });
    }

    return (
      <div className='basket-grid'>
        {rows}
      </div>
    )
  }
}