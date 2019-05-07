import React from 'react'
import {Link} from 'react-router-dom';

function OfferArea() {
    return (
        <section className="offer_area">
            <div className="container">
                <div className="row justify-content-center">
                    <div className="offset-lg-4 col-lg-6 text-center">
                        <div className="offer_content">
                            <h3 className="text-uppercase mb-40">all men’s collection</h3>
                            <h2 className="text-uppercase">50% off</h2>
                            <Link to='#' className="main_btn mb-20 mt-5">Discover Now</Link>
                            <p>Limited Time Offer</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default OfferArea
