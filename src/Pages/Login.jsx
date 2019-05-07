import React from 'react';

function Login() {
    return(
        <section className="feature_product_area section_gap_bottom_custom">
            <div className="container">
                <div class="section-top-border">
                    <div className="row">
                        <div className="col-lg-8 col-md-8 offset-md-2">
                            <h3 className="mb-30 title_color">Login Form</h3>
                            <form action="#">
                                <div className="mt-10">
                                    <input type="email" name="email" placeholder="Email" onfocus="this.placeholder = ''" onblur="this.placeholder = 'First Name'" required className="single-input" />
                                </div>
                                <div className="mt-10">
                                    <input type="password" name="password" placeholder="Password" onfocus="this.placeholder = ''" onblur="this.placeholder = 'Last Name'" required className="single-input" />
                                </div>
                                <div className="mt-10 col-md-4 offset-md-4">
                                    <input type="submit" name="submit" style={{width:'100%'}} className="btn submit_btn" />
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>              
        </section>
    )
}
export default Login