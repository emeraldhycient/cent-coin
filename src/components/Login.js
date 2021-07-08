import React from 'react'
import {
    useRouteMatch,
} from "react-router-dom";

import Header from './Header'
import Subbody from './Subbody'
import HeroSection from './HeroSection';
import Footer from './Footer'

function Login() {
    const match = useRouteMatch()

    return (
        <>
            <Header />
            <HeroSection>
                <center>

                    <div className="col-md-4 m-auto pb-5" style={{ color: "#fafafa" }}>
                        <h2 className="text-white pt-5 h1" data-aos="fade-up" data-aos-duration="3000">
                            {match.url}
                        </h2>
                        <h6 className="text-white pt-2" data-aos="fade-up" data-aos-duration="3000">
                            Login to  your centcoin account
                        </h6><br></br>
                    </div>
                </center>
            </HeroSection>
            <Subbody>
                <div className="container">
                    <div className="row">
                        <div className="col-md-6 m-auto bg-light shadow pt-3">
                            <center>
                                <h2 className="text-primary">Login</h2>
                            </center>
                            <form action="" method="post" className="form-group mt-4">
                                <div className="input-group mb-3">
                                    <div className="input-group-prepend">
                                        <span className="input-group-text" id="basic-addon1"><i className="fa fa-envelope"></i></span>
                                    </div>
                                    <input type="text" className="form-control" placeholder="your email" aria-label="your email" aria-describedby="basic-addon1"></input>
                                </div>
                                <div className="input-group mb-3">
                                    <div className="input-group-prepend">
                                        <span className="input-group-text" id="basic-addon2"><i className="fa fa-lock"></i></span>
                                    </div>
                                    <input type="password" className="form-control" placeholder="password" aria-label="your password" aria-describedby="basic-addon2"></input>
                                </div>
                                <button className="btn btn-primary text-white float-right m-2"><a href="/dashboard/" className="text-white">Login</a></button>
                            </form>
                        </div>
                    </div>
                </div>
            </Subbody>
            <Footer />
        </>
    )
}

export default Login
