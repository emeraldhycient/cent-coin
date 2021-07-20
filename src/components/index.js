import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import CountUp from 'react-countup';
import axios from 'axios'


import Header from "./Header"
import HeroSection from "./HeroSection"
import Footer from './Footer'

import bitcoin from "../images/bitcoin.png"
import key from "../images/key.png"
import moneyex from "../images/money-exchange.png"
import trade from "../images/trade.png"

function Index() {
    const [plans, setplans] = useState([])
    let modplan = Object.values(plans)


    const Packages = () => {
        return (modplan.map((item, i) => (
            <div className="col-md-3 mb-4" key={i}>
                <center>
                    <img src={moneyex} alt="" className="planimg mb-4" />
                    <div className="text-white">
                        <h2>{item.plan}</h2>
                        <h4>{item.duration} DAYS ({item.percentage}%)</h4>
                        <hr />
                    </div>
                    <div className="text-white mt-5">
                        <h6>Min Dep : ${item.mindep}</h6>
                        <h6>Max Dep : ${item.maxdep}</h6>
                    </div>
                </center>
            </div>
        ))
        )
    }

    useEffect(() => {
        axios.get('http://localhost/rald/cent-coin(btc_website)/centcoin-api/api/admin/packages.php?all=all')
            .then(res => {
                setplans(res.data.data)
            })
            .catch(err => {
                console.log(err);
            })

    }, [])

    return (
        <>
            <Header />
            <HeroSection>
                <div className="container-fluid pt-5 mb-5">
                    <div className="col-md-8 m-auto pb-5" style={{ color: "#fafafa" }}>
                        <h1 className="text-white pt-5 h1" data-aos="fade-up" data-aos-duration="3000">
                            Invest <span className="text-warning">Today,</span> So Your Tomorrow would be proud of Your <span className="text-primary">Today.</span>
                        </h1><br></br>
                        <div className="col-md-9 m-auto reduced" data-aos="fade-down"
                            data-aos-duration="3000">
                            <p>Take Your Global Investment journey By The Hand,
                                At Cent Coin We Don't Just Trade For You, We Bear the Risks For You.
                            </p>
                        </div>
                        <center>
                            <button className="btn  btn-warning mt-5" data-aos="zoom-out-right" data-aos-duration="3000"><Link to="./login" className="text-white">Start Investing Now !</Link></button>
                        </center>
                    </div>
                </div>
                <div style={{ height: '62px', backgroundColor: '#FFFFFF', overflow: 'hidden', boxSizing: 'border-box', border: '1px solid #56667F', borderRadius: '4px', textAlign: 'right', lineHeight: '14px', blockSize: '62px', fontSize: '12px', fontFeatureSettings: 'normal', textSizeAdjust: '100%', boxShadow: 'inset 0 -20px 0 0 #56667F', padding: '1px', margin: '0px', width: '100%' }}><div style={{ height: '40px', padding: '0px', margin: '0px', width: '100%' }}><iframe src="https://widget.coinlib.io/widget?type=horizontal_v2&theme=light&pref_coin_id=1505&invert_hover=" title="coinlib widget" width="100%" height="36px" scrolling="auto" marginWidth="0" marginHeight="0" frameBorder="0" border="0" style={{ border: 0, margin: 0, padding: 0 }}></iframe></div><div style={{ color: '#FFFFFF', lineHeight: '14px', fontWeight: 400, fontSize: '11px', boxSizing: 'border-box', padding: '2px 6px', width: '100%', fontFamily: ' Verdana, Tahoma, Arial, sans-serif' }}><a href="https://coinlib.io" target="_blank" rel='noreferrer' style={{ fontWeight: 500, color: '#FFFFFF', textDecoration: 'none', fontSize: '11px' }}>Cryptocurrency Prices</a></div></div>
            </HeroSection><br></br><br></br>
            <section className="container mt-5 mb-5" id="empower">
                <center>
                    <h2 style={{ fontFamily: 'Lucida Bright' }} data-aos="fade-down"
                        data-aos-duration="3000">How We Empower Our Investor's</h2>
                    <hr></hr>
                </center>
                <div className="row" style={{ marginTop: '100px', marginBottom: '100px' }}>
                    <div className="col-md-3 mb-5">
                        <center>
                            <i className="fa fa-exclamation-triangle fa-2x text-danger" data-aos="zoom-out-right" data-aos-duration="3000"></i>
                            <h4 data-aos="fade-down" data-aos-duration="3000">Risk Free</h4>
                            <h6 className="text-muted mt-3" data-aos="zoom-out-right" data-aos-duration="3000">We Bear All Risks Upto 90%,For Every Investment Made With Us.</h6>
                        </center>
                    </div>
                    <div className="col-md-3 mb-5">
                        <center>
                            <i className="fa fa-calendar fa-2x text-warning" data-aos="zoom-out-right" data-aos-duration="3000"></i>
                            <h4 data-aos="fade-down" data-aos-duration="3000">Trading</h4>
                            <h6 className="text-muted mt-3" data-aos="zoom-out-right" data-aos-duration="3000">Our Professionally Trained Season Traders Are Always Analyzing The market To Help Maximize Our Profit And Reduce Loss.</h6>
                        </center>
                    </div>
                    <div className="col-md-3 mb-5">
                        <center>
                            <i className="fa fa-history fa-2x text-success" data-aos="zoom-out-right" data-aos-duration="3000"></i>
                            <h4 data-aos="fade-down" data-aos-duration="3000">24/7 Support</h4>
                            <h6 className="text-muted mt-3" data-aos="zoom-out-right" data-aos-duration="3000"> You Have a Question You want To Ask ?. The support team are active 24/7 everyday to assist you.</h6>
                        </center>
                    </div>
                    <div className="col-md-3 mb-5">
                        <center>
                            <i className="fa fa-credit-card fa-2x text-info" data-aos="zoom-out-right" data-aos-duration="3000"></i>
                            <h4 data-aos="fade-down" data-aos-duration="3000">Weekly Payout</h4>
                            <h6 className="text-muted mt-3" data-aos="zoom-out-right" data-aos-duration="3000">After Our Weekly trading, we pay out the deemed percentage to every due investor</h6>
                        </center>
                    </div>
                </div>
                <div className="m-auto">
                    <div style={{ width: '340px', height: '335px', backgroundColor: '#FAFAFA', overflow: 'hidden', boxSizing: ' border-box', border: '1px solid #56667F', borderRadius: '4px', textAlign: 'right', lineHeight: '14px', blockSize: '335px', fontSize: '12px', fontFeatureSettings: 'normal', textSizeAdjust: '100%', boxShadow: 'inset 0 -20px 0 0 #56667F', margin: 0, padding: '1px' }}><div style={{ height: '315px', padding: '0px', margin: '0px', width: '100%' }}><iframe src="https://widget.coinlib.io/widget?type=converter&theme=light" width="340" height="310px" scrolling="auto" marginWidth="0" marginHeight="0" frameBorder="0" border="0" style={{ border: 0, margin: 0, padding: 0 }} title="coinlib price converter"></iframe></div><div style={{ color: '#FFFFFF', lineHeight: '14px', fontWeight: 400, fontSize: '11px', boxSizing: 'border-box', padding: '2px 6px', width: '100%', fontFamily: 'Verdana, Tahoma, Arial, sans-serif' }}><a href="https://coinlib.io" target="_blank" rel="noreferrer" style={{ fontWeight: 500, color: '#FFFFFF', textDecoration: 'none', fontSize: '11px' }}>Cryptocurrency Prices</a></div></div>
                </div>
            </section><br></br><br></br><br></br><br></br><br></br>
            <section className="mt-5 pt-5  plans">
                <center>
                    <h3 data-aos="zoom-in-right"
                        data-aos-duration="3000" className="text-white">Our Investment Plans</h3>
                    <hr></hr>
                </center>
                <div className="container pt-5 " data-aos="flip-down" data-aos-duration="3000" id="blur" style={{ borderRadius: '7px' }}>
                    <div className="row">
                        <Packages />
                    </div>
                </div>
            </section>
            <section id='counters'>
                <div className="container">
                    <div className="row">
                        <div className="col-md-2 pt-5 m-auto">
                            <h4 className="text-dark text-center"><strong>Running Days</strong> </h4>
                            <div className="text-center mt-4 p-5">
                                <i className="fa fa-dashboard fa fa-3x text-primary"></i>
                            </div>
                            <h1 className="text-center"><strong><CountUp end={2380} delay={7} /></strong></h1>
                        </div>

                        <div className="col-md-3 pt-5 m-auto">
                            <h4 className="text-dark text-center"><strong>Total Members</strong> </h4>
                            <div className="text-center mt-4 p-5">
                                <i className="fa fa-users fa fa-3x text-danger"></i>
                            </div>
                            <h1 className="text-center"><strong><CountUp end={45670} delay={8} /></strong></h1>
                        </div>

                        <div className="col-md-3 pt-5 m-auto">
                            <h4 className="text-dark text-center"><strong>Total Deposit</strong> </h4>
                            <div className="text-center mt-4 p-5">
                                <i className="fa fa-credit-card fa fa-3x text-warning"></i>
                            </div>
                            <h1 className="text-center"><small><i className='fa fa-dollar'></i> </small><strong><CountUp end={432667335} delay={9} /></strong></h1>
                        </div>

                        <div className="col-md-4 pt-5 m-auto">
                            <h4 className="text-dark text-center"><strong>Total Withdrawn</strong> </h4>
                            <div className="text-center mt-4 p-5">
                                <i className="fa fa-university fa fa-3x text-success"></i>
                            </div>
                            <h1 className="text-center"><small><i className='fa fa-dollar'></i> </small><strong><CountUp end={52030853123} delay={10} /></strong></h1>
                        </div>
                    </div>
                </div>
            </section>
            <section id="whyus" className="mb-5">
                <div className="pt-5" id="blur">
                    <center>
                        <h3 data-aos="zoom-in-right"
                            data-aos-duration="3000" className="text-white">Why Most Investors Choose Us</h3>
                        <hr></hr>
                        <div className="col-md-6 text-white">
                            <h6>Take advantage of ICO investment opportunities through our platform.
                                It doesn't matter where you are located, through our system you can invest in ICOs and automatically get profit every hour.</h6>
                        </div>
                    </center>
                    <center>

                        <div className="container mt-5">
                            <div className="row">
                                <div className="col-md-4 mb-5" data-aos="zoom-in-up" data-aos-duration="1000">
                                    <div className="row">
                                        <div className="col-md-4">
                                            <div className="circle bg-success">
                                                <i className="fa fa-lock fa-2x text-white"></i>
                                            </div>
                                        </div>
                                        <div className="col-md-6">
                                            <h5 className="text-white">High Security </h5>
                                            <h6 className="text-muted">We secure all user data by using 256-bit EV SSL security certificate.</h6>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-md-4"></div>
                                <div className="col-md-4 mb-5" data-aos="zoom-in-up" data-aos-duration="1400">
                                    <div className="row">
                                        <div className="col-md-4">
                                            <div className="circle bg-primary">
                                                <i className="fa fa-object-group fa-2x text-white"></i>
                                            </div>
                                        </div>
                                        <div className="col-md-6">
                                            <h5 className="text-white">High Profitability</h5>
                                            <h6 className="text-muted">ICOs tend to be the cryptocurrency investments with highest ROI in 2017.</h6>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className="row">
                                <div className="col-md-5  mb-5" data-aos="zoom-in-up" data-aos-duration="1800">
                                    <div className="row">
                                        <div className="col-md-4">
                                            <div className="circle bg-warning">
                                                <i className="fa fa-balance-scale fa-2x text-white"></i>
                                            </div>
                                        </div>
                                        <div className="col-md-6">
                                            <h5 className="text-white">Registered Legal Company</h5>
                                            <h6 className="text-muted">We are registered investment company in the United Kingdom under #AB210001.</h6>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-md-2"></div>
                                <div className="col-md-5  mb-5" data-aos="zoom-in-up" data-aos-duration="2200">
                                    <div className="row">
                                        <div className="col-md-4">
                                            <div className="circle bg-danger">
                                                <i className="fa fa-question fa-2x text-white"></i>
                                            </div>
                                        </div>
                                        <div className="col-md-6">
                                            <h5 className="text-white">Online Support </h5>
                                            <h6 className="text-muted">Our support will answer your questions in shortest time possible.</h6>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className="row">
                                <div className="col-md-4 mb-5" data-aos="zoom-in-up" data-aos-duration="2600">
                                    <div className="row">
                                        <div className="col-md-4">
                                            <div className="circle bg-light">
                                                <i className="fa fa-bitcoin fa-2x text-dark"></i>
                                            </div>
                                        </div>
                                        <div className="col-md-6">
                                            <h5 className="text-white">Worldwide Access </h5>
                                            <h6 className="text-muted">Invest with us no matter where you are located. No restrictions even for users from Africa or USA.</h6>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-md-4"></div>
                                <div className="col-md-4 mb-5" data-aos="zoom-in-up" data-aos-duration="3000">
                                    <div className="row">
                                        <div className="col-md-4">
                                            <div className="circle bg-success">
                                                <i className="fa fa-credit-card fa-2x text-white"></i>
                                            </div>
                                        </div>
                                        <div className="col-md-6">
                                            <h5 className="text-white">Instant Payments </h5>
                                            <h6 className="text-muted">Your bitcoins are sent to your address as soon as you submit your request.</h6>
                                        </div>
                                    </div>
                                </div>
                            </div>

                        </div>
                    </center>
                </div>
            </section>
            <Footer />
        </>
    )
}

export default Index
