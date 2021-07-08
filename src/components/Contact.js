import React from 'react'
import {
    useRouteMatch,
} from "react-router-dom";

import Header from './Header'
import Footer from './Footer'
import HeroSection from './HeroSection';
import Subbody from './Subbody';

function Contact() {
    const match = useRouteMatch()
    const placeName = 'Unit 4 Whickham Ind Est, Newcastle Upon Tyne, NE16 3DA '

    return (
        <>
            <Header />
            <HeroSection>
                <center>

                    <div className="col-md-4 m-auto pb-5" style={{ color: "#fafafa" }}>
                        <h2 className="text-white pt-5 h1" data-aos="fade-up" data-aos-duration="3000">
                            {match.path}
                        </h2>
                        <h6 className="text-white pt-2" data-aos="fade-up" data-aos-duration="3000">
                            Contact Us At CentCoin.com
                        </h6><br></br>
                    </div>
                </center>
            </HeroSection>
            <Subbody>
                <div className="container pt-5">
                    <div className="row">
                        <div className="col-md-5 mb-4">
                            <div className="bg-light pl-3 pr-3 pt-2 pb-5">
                                <center>
                                    <h4 className="text-danger mt-5 mb-4">OFFICE ADDRESS</h4>
                                </center>
                                <h6 className="text-muted mt-3"><i className="fa fa-home text-light mr-2 bg-dark p-2"></i> {placeName}</h6>
                                <h6 className="text-muted mt-3"><i className="fa fa-envelope-o text-light mr-2 bg-dark p-2"></i> support@centcoin.com</h6>
                            </div>
                        </div>
                        <div className="col-md-2"></div>
                        <div className="col-md-5" id="blur">
                            <center>
                                <h3 className="text-danger mt-3 mb-4">Contact Us</h3>
                            </center>
                            <form className="form-group ">
                                <div className="input-group mb-3">
                                    <div className="input-group-prepend">
                                        <span className="input-group-text" id="basic-addon1"><i className="fa fa-user"></i></span>
                                    </div>
                                    <input type="text" className="form-control" placeholder="your name" aria-label="your name" aria-describedby="basic-addon1"></input>
                                </div>
                                <div className="input-group mb-3">
                                    <div className="input-group-prepend">
                                        <span className="input-group-text" id="basic-addon2"><i className="fa fa-envelope"></i></span>
                                    </div>
                                    <input type="text" className="form-control" placeholder="your email" aria-label="your email" aria-describedby="basic-addon2"></input>
                                </div>
                                <div className="input-group">
                                    <div className="input-group-prepend">
                                        <span className="input-group-text"><i className="fa fa-comment"></i></span>
                                    </div>
                                    <textarea className="form-control" rows="10" aria-label="With textarea"></textarea>
                                </div>
                                <button className="btn btn-danger float-right m-3">Send</button>
                            </form>

                        </div>
                    </div>
                </div>
            </Subbody>
            <Footer />
        </>
    )
}

export default Contact
