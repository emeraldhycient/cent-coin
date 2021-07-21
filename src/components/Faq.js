import React, { useState, useEffect } from 'react'
import {
    useRouteMatch,
} from "react-router-dom";


import Header from './Header'
import Footer from './Footer'
import HeroSection from './HeroSection'
import Subbody from './Subbody';
import Faqcon from './Faqcon';


function Faq() {
    const match = useRouteMatch()

    const [faqs, setFaqs] = useState([
        {
            question: 'who is centcoin 0',
            answer: 'we are ico first approach company 0',
            isOpen: false
        },
        {
            question: 'who is centcoin 1',
            answer: 'we are ico first approach company 1',
            isOpen: false
        },
        {
            question: 'who is centcoin 2',
            answer: 'we are ico first approach company 3',
            isOpen: false
        },])

    const toggleIsOpen = index => {
        setFaqs(faqs.map((item, i) => {
            if (i === index) {
                item.isOpen = !item.isOpen
            } else {
                item.isOpen = false
            }
            return item
        }))

    }




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
                            Frequently Asked Questions
                        </h6><br></br>
                    </div>
                </center>
            </HeroSection>
            <Subbody>
                <div className="container">
                    <div className="row">
                        <div className="col-md-8 m-auto p-5 bg-light">
                            {faqs.map((Faq, index) => (
                                <Faqcon key={index} index={index} Faq={Faq} toggleIsOpen={toggleIsOpen} />
                            ))}
                        </div>
                    </div>
                </div>

            </Subbody>
            <Footer />
        </>
    )
}

export default Faq
