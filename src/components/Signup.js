import React from 'react'
import {
    useRouteMatch,
} from "react-router-dom";

import Header from './Header'
import Subbody from './Subbody'
import HeroSection from './HeroSection';
import Footer from './Footer'

function Signup() {
    const match = useRouteMatch()

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
                            Rgister for a  centcoin account
                        </h6><br></br>
                    </div>
                </center>
            </HeroSection>
            <Subbody>
                <div className="container">
                    <div className="row">
                        <div className="col-md-9 m-auto bg-light shadow pt-3">
                            <center>
                                <h2 className="text-primary">{match.url}</h2>
                            </center>
                            <form action="" method="post" className="form-group mt-4">
                                <div className="row">
                                    <div className="col-md-5">
                                        <div className="input-group mb-3">
                                            <div className="input-group-prepend">
                                                <span className="input-group-text" id="basic-addon1"><i className="fa fa-trophy"></i></span>
                                            </div>
                                            <input type="text" className="form-control" placeholder="your Full name" aria-label="your fullname" aria-describedby="basic-addon1"></input>
                                        </div>
                                    </div>
                                    <div className="col-md-5">
                                        <div className="input-group mb-3">
                                            <div className="input-group-prepend">
                                                <span className="input-group-text" id="basic-addon2"><i className="fa fa-user"></i></span>
                                            </div>
                                            <input type="text" className="form-control" placeholder="username" aria-label="your username" aria-describedby="basic-addon2"></input>
                                        </div>
                                    </div>
                                </div>
                                <div className="row">
                                    <div className="col-md-5">
                                        <div className="input-group mb-3">
                                            <div className="input-group-prepend">
                                                <span className="input-group-text" id="basic-addon1"><i className="fa fa-lock"></i></span>
                                            </div>
                                            <input type="password" className="form-control" placeholder="Password" aria-label="your password" aria-describedby="basic-addon1"></input>
                                        </div>
                                    </div>
                                    <div className="col-md-5">
                                        <div className="input-group mb-3">
                                            <div className="input-group-prepend">
                                                <span className="input-group-text" id="basic-addon2"><i className="fa fa-lock"></i></span>
                                            </div>
                                            <input type="password" className="form-control" placeholder="Confirm password" aria-label="your password" aria-describedby="basic-addon2"></input>
                                        </div>
                                    </div>
                                </div>
                                <div className="row">
                                    <div className="col-md-5">
                                        <div className="input-group mb-3">
                                            <div className="input-group-prepend">
                                                <span className="input-group-text" id="basic-addon1"><i className="fa fa-envelope"></i></span>
                                            </div>
                                            <input type="text" className="form-control" placeholder="your email" aria-label="your email" aria-describedby="basic-addon1"></input>
                                        </div>
                                    </div>
                                    <div className="col-md-5">
                                        <div className="input-group mb-3">
                                            <div className="input-group-prepend">
                                                <span className="input-group-text" id="basic-addon1"><i className="fa fa-envelope"></i></span>
                                            </div>
                                            <input type="text" className="form-control" placeholder="confirm email" aria-label="your email" aria-describedby="basic-addon1"></input>
                                        </div>
                                    </div>
                                </div>
                                <div className="row">
                                    <div className="col-md-5">
                                        <div className="input-group mb-3">
                                            <div className="input-group-prepend">
                                                <span className="input-group-text" id="basic-addon1"><i className="fa fa-flag"></i></span>
                                            </div>
                                            <input type="text" className="form-control" placeholder="Enter Country" aria-label="enter country" aria-describedby="basic-addon1"></input>
                                        </div>
                                    </div>
                                    <div className="col-md-5">
                                        <select className="form-control">
                                            <option>Select Investment Plan</option>
                                            <option value="basic">Basic plan</option>
                                            <option value="silver ">Silver plan</option>
                                            <option value="deposit"> Deposit plan</option>
                                            <option value="promo ">Promo plan</option>
                                        </select>
                                    </div>
                                </div>
                                <div className="row">
                                    <div className="col-md-5">
                                        <select className="form-control">
                                            <option>Select Your Currency</option>
                                            <option value="usd">&#36; Usd</option>
                                            <option value="euro ">&euro; Eur</option>
                                            <option value="pound">&#163; Gbp</option>
                                            <option value="bitcoin ">&#8383; Bitcoin</option>
                                        </select>
                                    </div>
                                </div>
                                <button className="btn btn-primary text-white float-right m-2"><a href="/dashboard/" className="text-white">Register</a></button>
                            </form>
                        </div>
                    </div>
                </div>
            </Subbody>
            <Footer />
        </>
    )
}

export default Signup
