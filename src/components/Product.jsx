import React, { Component } from 'react';

class Product extends Component {
  render() {
    console.log('match.url = ', this.props.match.url)
    return (
      <div>
        <h3 style={{color: 'red'}}>Product</h3>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ut labore voluptas eveniet, quisquam nobis aut ea totam ex fuga animi delectus, omnis aliquam suscipit excepturi neque quod commodi dolore corrupti.</p>
      </div>
    );
  }
}

export default Product;