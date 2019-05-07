import React from 'react';

function Filters() {
    return(
        <div className="col-lg-3">
            <div className="left_sidebar_area">
                <aside className="left_widgets p_filter_widgets">
                <div className="l_w_title">
                    <h3>Browse Categories</h3>
                </div>
                <div className="widgets_inner">
                    <ul className="list">
                    <li>
                        <a href="#">Frozen Fish</a>
                    </li>
                    <li>
                        <a href="#">Dried Fish</a>
                    </li>
                    <li>
                        <a href="#">Fresh Fish</a>
                    </li>
                    <li>
                        <a href="#">Meat Alternatives</a>
                    </li>
                    <li>
                        <a href="#">Fresh Fish</a>
                    </li>
                    <li>
                        <a href="#">Meat Alternatives</a>
                    </li>
                    <li>
                        <a href="#">Meat</a>
                    </li>
                    </ul>
                </div>
                </aside>
                <aside className="left_widgets p_filter_widgets">
                <div className="l_w_title">
                    <h3>Product Brand</h3>
                </div>
                <div className="widgets_inner">
                    <ul className="list">
                    <li>
                        <a href="#">Apple</a>
                    </li>
                    <li>
                        <a href="#">Asus</a>
                    </li>
                    <li className="active">
                        <a href="#">Gionee</a>
                    </li>
                    <li>
                        <a href="#">Micromax</a>
                    </li>
                    <li>
                        <a href="#">Samsung</a>
                    </li>
                    </ul>
                </div>
                </aside>
                <aside className="left_widgets p_filter_widgets">
                <div className="l_w_title">
                    <h3>Color Filter</h3>
                </div>
                <div className="widgets_inner">
                    <ul className="list">
                    <li>
                        <a href="#">Black</a>
                    </li>
                    <li>
                        <a href="#">Black Leather</a>
                    </li>
                    <li className="active">
                        <a href="#">Black with red</a>
                    </li>
                    <li>
                        <a href="#">Gold</a>
                    </li>
                    <li>
                        <a href="#">Spacegrey</a>
                    </li>
                    </ul>
                </div>
                </aside>
                <aside className="left_widgets p_filter_widgets">
                <div className="l_w_title">
                    <h3>Price Filter</h3>
                </div>
                <div className="widgets_inner">
                    <div className="range_item">
                    <div id="slider-range" />
                    <div className>
                        <label htmlFor="amount">Price : </label>
                        <input type="text" id="amount" readOnly />
                    </div>
                    </div>
                </div>
                </aside>
            </div>
        </div>

    )
}
export default Filters