import React, { useEffect } from 'react'
import { Link } from 'react-router-dom'


function Footer() {
    const d = new Date()
    const year = d.getFullYear()
    const placeName = 'Route 344 Wisconsin Avenue, Washington Dc, USA'


    useEffect(() => {

        var Tawk_API = Tawk_API || {}, Tawk_LoadStart = new Date();
        (function () {
            var s1 = document.createElement("script"), s0 = document.getElementsByTagName("script")[0];
            s1.async = true;
            s1.src = 'https://embed.tawk.to/60f82758649e0a0a5ccd4761/1fb4ljdaa';
            s1.charset = 'UTF-8';
            s1.setAttribute('crossorigin', '*');
            s0.parentNode.insertBefore(s1, s0);
        })();
    }, [])

    return (
        <footer style={{ backgroundColor: '', marginTop: '100px' }} id="blur">
            <div className="container mt-5 ">
                <div className="row mb-5 text-center">
                    <div className="col-md-4" style={{ fontFamily: 'Rockwell', fontSize: 'larger' }}>
                        <h4 style={{ fontWeight: 'bolder', fontFamily: 'Lucida Bright' }} className="mb-4 text-white">Quick Links</h4>
                        <h6 className="m-3"><Link to="./" className="text-muted">Home <span className="sr-only">(current)</span></Link></h6>
                        <h6 className="m-3"><Link to="./about" className="text-muted">About</Link> </h6>
                        <h6 className="m-3"><Link to="./contact" className="text-muted" >Contact</Link></h6>
                        <h6 className="m-3"><Link to="./faq" className="text-muted" >Faq</Link></h6>

                    </div>
                    <div className="col-md-4" style={{ fontFamily: 'Rockwell', fontWeight: 'bolder' }}>
                        <h4 style={{ fontWeight: 'bolder', fontFamily: 'Lucida Bright' }} className="mb-4 text-white">Access Links</h4>
                        <h6 className="m-3"><a href="/signup" className="text-primary text-decoration-none">Register</a></h6>
                        <h6 className="m-3"><a href="/login" className="text-success text-decoration-none">Login</a></h6>
                    </div>
                    <div className="col-md-4" style={{ fontFamily: 'Rockwell' }}>
                        <h4 style={{ fontWeight: 'bolder', fontFamily: 'Lucida Bright' }} className="mb-4 text-white">Contact</h4>
                        <div className="text-muted">
                            <h6><i className="fa fa-envelope mr-1"></i><a href="mailto:support@centcoin.com" className="text-muted text-decoration-none">support@centcoin.com</a></h6>
                            <h6><i className="fa fa-phone mt-3"></i><a href="tel:++15612408167" className="text-muted text-decoration-none">+1(561)240-8167</a></h6>
                            <h6 className="text-muted mt-3"><i className="fa fa-home text-light mr-2 bg-dark p-2"></i> {placeName}</h6>
                        </div>
                    </div>
                </div>
                <div className="text-center mt-5 pt-5">
                    <center>
                        <div className="col-md-4 d-flex align-items-center">
                            <i className="fa fa-copyright text-dark mr-1"></i>
                            <h6 className="text-muted">  copyright {year} www.centcoin.com</h6>
                        </div>
                    </center>
                </div>
            </div>
        </footer >
    )
}

export default Footer
