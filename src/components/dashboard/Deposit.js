import React, { useState, useEffect } from 'react'
import { useAtom } from 'jotai'
import {
    useRouteMatch,
} from 'react-router-dom'
import axios from 'axios'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import { sidebarData } from './sidebarData'


import Sidebar from './Sidebar'
import Body from './Body'
import LineCharts from './LineCharts'
import Piechart from './Piechart'

function Deposit() {

    const notify = (message) => toast(`🦄 ${message}`, {
        position: "top-center",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
    });

    const match = useRouteMatch()
    const [paymentmethods, setpaymentmethods] = useState('')

    const [sidebars, setsidebar] = useAtom(sidebarData)

    const isActive = index => {
        setsidebar(
            sidebars.map((sidebar, i) => {
                if (index === i) {
                    sidebar.isActive = !sidebar.isActive
                } else {
                    sidebar.isActive = false
                }
                return sidebar
            })
        )
    }

    const copyText = (e) => {
        let item = document.getElementById(e).value
        if (navigator.clipboard.writeText(item)) {
            notify(`item copied : ${item}`)
        }

    }

    axios.get('http://localhost/rald/cent-coin(btc_website)/centcoin-api/api/user/paymentmethods.php')
        .then(res => {
            //console.log(res);
            setpaymentmethods(res.data.data)
        })
        .catch(err => {

        })


    return (
        <>
            <div className="dashboardContainer">
                <div className="sidebar">
                    <Sidebar sidebars={sidebars} isActive={isActive} />
                </div>
                <ToastContainer
                    position="top-center"
                    autoClose={5000}
                    hideProgressBar={false}
                    newestOnTop={false}
                    closeOnClick
                    rtl={false}
                    pauseOnFocusLoss
                    draggable
                    pauseOnHover
                />
                <div className="maincontent">
                    <Body>
                        <h4><i className="fa fa-compass text-primary"></i> {match.path}</h4>
                        <div className="container mt-4">
                            <div className="row">
                                <div className="col-md-6 mb-5 shadow bg-white d-flex justify-content-center align-items-center table-responsive">
                                    <LineCharts />
                                </div>
                                <div className="col-md-1"></div>
                                <div className="col-md-5 mb-5  shadow bg-white d-flex justify-content-center align-items-center table-responsive">
                                    <Piechart />
                                </div>
                            </div>
                        </div>
                        <div className="container">
                            <div className="row">
                                <div className="col-md-11 ml-auto mr-auto mt-4 mb-5 shadow bg-white pt-2">
                                    <h5 className="ml-2 text-dark">Deposit</h5>
                                    <div style={{ width: '100%', height: '1px', backgroundColor: '#cacaca' }}></div>
                                    <form action="" className="form-group">
                                        <h6 className="text-center text-dark mt-3 ">Choose a payment method that works for you</h6>
                                        <div className="mt-2 text-center">
                                            <small className="text-warning">after making payment, send proof to the support email your username,fullname  and your balance would reflect</small>
                                        </div>
                                        <div className="row ml-md-5 mt-5">
                                            <div className="col-md-4">
                                                <h6 className="text-muted">BitCoin</h6>
                                                <small className="text-muted">click copy to copy the value of the field</small>
                                            </div>
                                            <div className="col-md-7">
                                                <div className="input-group mb-4">
                                                    <div className="input-group-prepend">
                                                        <span className="input-group-text bg-dark text-white" id="basic-addon1" onClick={() => copyText(`btc`)}><i className="fa fa-copy mr-1 text-white"></i>copy</span>
                                                    </div>
                                                    <input type="text" className="form-control" id="btc" value={paymentmethods.bitcoin} aria-label="btc wallet" aria-describedby="basic-addon1" required />
                                                </div>
                                            </div>
                                        </div>

                                        <div className="row ml-md-5 mt-5">
                                            <div className="col-md-4">
                                                <h6 className="text-muted">Ethereum</h6>
                                                <small className="text-muted">click copy to copy the value of the field</small>
                                            </div>
                                            <div className="col-md-7">
                                                <div className="input-group mb-4">
                                                    <div className="input-group-prepend">
                                                        <span className="input-group-text bg-dark text-white" id="basic-addon1" onClick={() => copyText(`eth`)}><i className="fa fa-copy mr-1 text-white"></i>copy</span>
                                                    </div>
                                                    <input type="text" className="form-control" id="eth" value={paymentmethods.ethereum} aria-label="eth wallet" aria-describedby="basic-addon1" required />
                                                </div>
                                            </div>
                                        </div>

                                        <div className="row ml-md-5 mt-5">
                                            <div className="col-md-4">
                                                <h6 className="text-muted">LiteCoin</h6>
                                                <small className="text-muted">click copy to copy the value of the field</small>
                                            </div>
                                            <div className="col-md-7">
                                                <div className="input-group mb-4">
                                                    <div className="input-group-prepend">
                                                        <span className="input-group-text bg-dark text-white" id="basic-addon1" onClick={() => copyText(`ltc`)}><i className="fa fa-copy mr-1 text-white"></i>copy</span>
                                                    </div>
                                                    <input type="text" className="form-control" id="ltc" value={paymentmethods.litecoin} aria-label="ltc wallet" aria-describedby="basic-addon1" required />
                                                </div>
                                            </div>
                                        </div>

                                        <div className="row ml-md-5 mt-5">
                                            <div className="col-md-4">
                                                <h6 className="text-muted">paypal</h6>
                                                <small className="text-muted">click copy to copy the value of the field</small>
                                            </div>
                                            <div className="col-md-7">
                                                <div className="input-group mb-4">
                                                    <div className="input-group-prepend">
                                                        <span className="input-group-text bg-dark text-white" id="basic-addon1" onClick={() => copyText(`paypal`)}><i className="fa fa-copy mr-1 text-white"></i>copy</span>
                                                    </div>
                                                    <input type="text" className="form-control" id="paypal" value={paymentmethods.paypal} aria-label="paypal address" aria-describedby="basic-addon1" required />
                                                </div>
                                            </div>
                                        </div>

                                        <div className="row ml-md-5 mt-5">
                                            <div className="col-md-4">
                                                <h6 className="text-muted">venmo</h6>
                                                <small className="text-muted">click copy to copy the value of the field</small>
                                            </div>
                                            <div className="col-md-7">
                                                <div className="input-group mb-4">
                                                    <div className="input-group-prepend">
                                                        <span className="input-group-text bg-dark text-white" id="basic-addon1" onClick={() => copyText(`venmo`)}><i className="fa fa-copy mr-1 text-white"></i>copy</span>
                                                    </div>
                                                    <input type="text" className="form-control" id="venmo" value={paymentmethods.venmo} aria-label="venmo address" aria-describedby="basic-addon1" required />
                                                </div>
                                            </div>
                                        </div>

                                        <div className="row ml-md-5 mt-5">
                                            <div className="col-md-4">
                                                <h6 className="text-muted">Zelle</h6>
                                                <small className="text-muted">click copy to copy the value of the field</small>
                                            </div>
                                            <div className="col-md-7">
                                                <div className="input-group mb-4">
                                                    <div className="input-group-prepend">
                                                        <span className="input-group-text bg-dark text-white" id="basic-addon1" onClick={() => copyText(`zelle`)}><i className="fa fa-copy mr-1 text-white"></i>copy</span>
                                                    </div>
                                                    <input type="text" className="form-control" id="zelle" value={paymentmethods.zelle} aria-label="venmo address" aria-describedby="basic-addon1" required />
                                                </div>
                                            </div>
                                        </div>
                                    </form>
                                    <div className="mt-3 text-center">
                                        <small className="text-danger">after making payment, send proof to the support email with your username,fullname and your balance would reflect</small>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </Body>
                </div>
            </div>
        </>
    )
}

export default Deposit
