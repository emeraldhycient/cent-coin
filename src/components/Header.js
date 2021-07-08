import React from 'react'
import { Link } from 'react-router-dom'

import cover from '../images/cent-coin-logo (1)/vector/default-monochrome-white.svg'


export default function Header() {
    return (
        <header>
            <nav className="navbar navbar-expand-lg" style={{ backgroundColor: '#000' }}>
                { /*<h5 className="navbar-brand offset-md-2 offset-sm-2" href="#" style={{ fontFamily: 'Lucida Bright', color: "#fafafa" }}>
                    Cent Coin
                </h5>*/}
                <img src={cover} alt="" className="navbar-brand offset-md-2 offset-sm-2" style={{ width: '130px', height: '70px' }} />
                <button className="navbar-toggler text-dark bg-white" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse offset-md-5" id="navbarNav" style={{ backgroundColor: '#000' }}>
                    <ul className="navbar-nav">
                        <li className="nav-item">
                            <h6 className="nav-link"><Link to="./" className="text-white">Home <span className="sr-only">(current)</span></Link></h6>
                        </li>
                        <li className="nav-item">
                            <h6 className="nav-link"><Link to="./about" className="text-white">About</Link> </h6>
                        </li>
                        <li className="nav-item">
                            <h6 className="nav-link"><Link to="./contact" className="text-white">Contact</Link> </h6>
                        </li>
                        <li className="nav-item">
                            <h6 className="nav-link"><Link to="./faq" className="text-white" >Faq</Link></h6>
                        </li>
                        <li className="nav-item">
                            <h6 className="nav-link "><Link to="./signup" className=" btn btn-sm btn-warning text-white">signup</Link></h6>
                        </li>
                        <li className="nav-item">
                            <h6 className="nav-link "><Link to="./login" className=" btn btn-sm btn-danger text-white">Login</Link></h6>
                        </li>
                    </ul>
                </div>
            </nav>
        </header>
    )
}
