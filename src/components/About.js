import React, { useEffect } from 'react'
import {
    useRouteMatch,
} from "react-router-dom";


import Header from './Header'
import Footer from './Footer'
import HeroSection from './HeroSection';
import Subbody from './Subbody';


function About() {
    const match = useRouteMatch()

    return (
        <>
            <Header />
            <HeroSection>
                <center>

                    <div className="col-md-4 m-auto pb-5" style={{ color: "#fafafa" }}>
                        <h2 className="text-white pt-5 h1" data-aos="fade-up" data-aos-duration="3000">
                            {match.path}-us
                        </h2>
                        <h6 className="text-white pt-2" data-aos="fade-up" data-aos-duration="3000">
                            About Us At CentCoin.com
                        </h6><br></br>
                    </div>
                </center>
            </HeroSection>
            <Subbody>
                <div className="container">
                    <div className="row">
                        <div className="col-md-5 m-auto p-3" id="blur">
                            <center>
                                <h3 className="text-light mt-3 mb-4">About Www.CentCoin.Com</h3>
                            </center>
                            <p className="text-light mb-4">
                                Founded in 2015, the company aims to make Cryptocurrency investments available to more people around
                                the World Even to places such as africa and asia. ICOs are a great way to invest in innovative companies
                                that may turn out to be the next Google or Microsoft. Unfortunately, some governments around the world
                                are restricting their citizens' access to ICO investments. Our goal is to help these people, as well
                                as the average user who does not have enough experience in the field of cryptocurrency investments,
                                to benefit from the opportunities offered by Cryptocurrencies.
                            </p>
                        </div>
                    </div>
                </div>
            </Subbody>
            <Footer />
        </>
    )
}

export default About
