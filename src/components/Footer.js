import React from 'react'
import { Link } from 'react-router-dom'


function Footer() {
    const d = new Date()
    const year = d.getFullYear()

    return (
        <footer className="bg-dark">
            <div className="container">
                <div className="row">
                    <div className="col-md-4 d-flex align-items-center">
                        <i className="fa fa-copyright text-white mr-1"></i>
                        <h6 className="text-white">  copyright {year} www.centcoin.com</h6>
                    </div>
                    <div className="col-md-6 d-flex flex-wrap mt-sm-3 mt-xs-3">

                        <h6 className="nav-link"><Link to="./" className="text-white">Home <span className="sr-only">(current)</span></Link></h6>
                        <h6 className="nav-link"><Link to="./about" className="text-white">About</Link> </h6>
                        <h6 className="nav-link"><Link to="./contact" className="text-white" >Contact</Link></h6>
                        <h6 className="nav-link"><Link to="./faq" className="text-white" >Faq</Link></h6>
                        <h6 className="nav-link "><Link to="./signup" className=" btn btn-sm btn-warning text-white">signup</Link></h6>
                        <h6 className="nav-link "><Link to="./login" className=" btn btn-sm btn-danger text-white">Login</Link></h6>

                    </div>
                    <div className="col-md-2">

                    </div>
                </div>
            </div>
        </footer>
    )
}

export default Footer
