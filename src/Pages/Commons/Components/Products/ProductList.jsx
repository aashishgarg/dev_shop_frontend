import React, { Component } from 'react'
import Items from './Items';
import Filters from './Filters';

class ProductList extends Component {
  render() {
    return (
        <div>
            <section className="banner_area">
                <div className="banner_inner d-flex align-items-center">
                    <div className="container">
                        <div className="banner_content d-md-flex justify-content-between align-items-center">
                            <div className="mb-3 mb-md-0">
                            <h2>Shop Category</h2>
                            <p>Very us move be blessed multiply night</p>
                            </div>
                            <div className="page_link">
                            <a href="index.html">Home</a>
                            <a href="category.html">Shop</a>
                            <a href="category.html">Women Fashion</a>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <section class="cat_product_area section_gap">
                <div class="container">
                    <div class="row flex-row-reverse">
                        < Items/>
                        < Filters />
                    </div>
                </div>
            </section>
        </div>
    )
  }
}

export default ProductList
