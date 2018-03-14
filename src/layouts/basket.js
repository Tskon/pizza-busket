import React from 'react';

// components
import ProductsGrid from '../components/basket/products-grid';
import Progress from '../components/basket/progress';

//data
import data from '../data/data';

export default class Blog extends React.Component {
  constructor() {
    super(...arguments);
  }
  render() {
    return (
      <div className="basket">
        <ProductsGrid basket={data.basket}/>
        <Progress dataProgress={data.basketProgress}/>
      </div>
    )
  }
}