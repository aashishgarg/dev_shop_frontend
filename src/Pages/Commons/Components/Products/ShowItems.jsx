import React from 'react';
import ItemDetails from './ShowPages/ItemDetails';
import Review from './ShowPages/Reviews';

function ShowItems() {
    return(
        <div>
            <section className="banner_area">
                <div className="banner_inner d-flex align-items-center">
                    <div className="container">
                    <div className="banner_content d-md-flex justify-content-between align-items-center">
                        <div className="mb-3 mb-md-0">
                        <h2>Product Details</h2>
                        <p>Very us move be blessed multiply night</p>
                        </div>
                        <div className="page_link">
                        <a href="index.html">Home</a>
                        <a href="single-product.html">Product Details</a>
                        </div>
                    </div>
                    </div>
                </div>
            </section>
            < ItemDetails/>
            < Review />
        </div>
    )
}

export default ShowItems