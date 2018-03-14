import React from 'react';

// logic
import '../../lib/basket-progress';

export default class Progress extends React.Component {
  render() {
    return (
      <div className="progress">
        <span className="progress__number">№3208957205790</span>
        <div>
        <progress max="100" data-progress={this.props.dataProgress}/>
        <div className="progress__val"/>
        </div>
      </div>
    )
  }
}