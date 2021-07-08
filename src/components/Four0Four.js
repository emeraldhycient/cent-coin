import React from 'react'

import Header from './Header'
import HeroSection from './HeroSection'

import Pagenotfound from "../images/undraw_page_not_found_su7k.svg"
import Roadlost from '../images/undraw_By_the_road_re_vvs7.svg'

function Four0Four() {
    return (
        <>
            <Header />
            <HeroSection>
                <section className="text-center pt-5">
                    <img src={Pagenotfound} alt="page not found" style={{ height: '300px', width: '100%' }} />
                </section>
            </HeroSection>
            <section>
                <div className="container mt-5">
                    <div className="row">

                        <div className="col-md-4 m-auto">
                            <h1 className="text-dark">Page Not Found</h1>
                            <p className='text-muted'>You might have been lost or the page you are looking for doesn't exist</p>
                            <p><a href="/" className="text-success">Go Home</a></p>
                        </div>
                        <div className="col-md-4 m-auto">
                            <img src={Roadlost} alt="page not found" style={{ height: '300px', width: '100%' }} />

                        </div>
                    </div>
                </div>
            </section>

        </>
    )
}

export default Four0Four
