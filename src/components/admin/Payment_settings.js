import React, { useState, useEffect } from 'react'
import { useAtom } from 'jotai'
import {
    useRouteMatch,
} from 'react-router-dom'
import axios from 'axios'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';



import { Admin_sidebardata } from '../dashboard/sidebarData'
import Sidebar from './Sidebar'
import Body from './Body'


function Payment_settings() {

    const match = useRouteMatch()

    const notify = (message) => toast(`🦄 ${message}`, {
        position: "top-center",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
    });

    const [id, setid] = useState('')
    const [bitcoin, setbitcoin] = useState('')
    const [ethereum, setethereum] = useState('')
    const [litecoin, setlitecoin] = useState('')
    const [paypal, setpaypal] = useState('')
    const [venmo, setvenmo] = useState('')
    const [zelle, setzelle] = useState('')

    const [sidebars, setsidebar] = useAtom(Admin_sidebardata)

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
            alert(`item copied : ${item}`)
        }

    }

    const paymentmethods = () => {

        axios.get('http://localhost/rald/cent-coin(btc_website)/centcoin-api/api/admin/paymentmethods.php?all=all')
            .then(res => {
                if (res.data.status === 'success') {
                    let data = res.data.data
                    setid(data.id)
                    setbitcoin(data.bitcoin)
                    setethereum(data.ethereum)
                    setlitecoin(data.litecoin)
                    setpaypal(data.paypal)
                    setvenmo(data.venmo)
                    setzelle(data.zelle)
                }
            })
            .catch(err => {
                console.log(err);
            })
    }

    const handlesubmit = (e) => {
        e.preventDefault();

        const formdata = new FormData();
        formdata.append('update', 'update')
        formdata.append('id', id)
        formdata.append('bitcoin', bitcoin)
        formdata.append('ethereum', ethereum)
        formdata.append('litecoin', litecoin)
        formdata.append('paypal', paypal)
        formdata.append('venmo', venmo)
        formdata.append('zelle', zelle)

        axios({
            method: 'POST',
            url: 'http://localhost/rald/cent-coin(btc_website)/centcoin-api/api/admin/paymentmethods.php',
            data: formdata
        }).then((res) => {
            notify(res.data.message)
            console.log(res.data.message);
        })
            .catch(err => notify(err.response.data.message))
        return false
    }

    useEffect(() => {

        paymentmethods()

    }, [])

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
                        <div className="container">
                            <div className="row">
                                <div className="col-md-11 ml-auto mr-auto mt-4 mb-5 shadow bg-white pt-2">
                                    <h5 className="ml-2 text-dark">Payment methods</h5>
                                    <div style={{ width: '100%', height: '1px', backgroundColor: '#cacaca' }}></div>
                                    <form action="" className="form-group" onSubmit={handlesubmit}>
                                        <h6 className="text-center text-dark mt-3 ">Edit Settings to your taste</h6>
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
                                                    <input type="text" className="form-control" id="btc" value={bitcoin} onChange={e => setbitcoin(e.target.value)} aria-label="btc wallet" aria-describedby="basic-addon1" required />
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
                                                    <input type="text" className="form-control" id="eth" value={ethereum} onChange={e => setethereum(e.target.value)} aria-label="eth wallet" aria-describedby="basic-addon1" required />
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
                                                    <input type="text" className="form-control" id="ltc" value={litecoin} onChange={e => setlitecoin(e.target.value)} aria-label="ltc wallet" aria-describedby="basic-addon1" required />
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
                                                    <input type="text" className="form-control" id="paypal" value={paypal} onChange={e => setpaypal(e.target.value)} aria-label="paypal address" aria-describedby="basic-addon1" required />
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
                                                    <input type="text" className="form-control" id="venmo" value={venmo} onChange={e => setvenmo(e.target.value)} aria-label="venmo address" aria-describedby="basic-addon1" required />
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
                                                    <input type="text" className="form-control" id="zelle" value={zelle} onChange={e => setzelle(e.target.value)} aria-label="venmo address" aria-describedby="basic-addon1" required />
                                                </div>
                                            </div>
                                        </div>
                                        <button className="btn btn-dark btn-sm  mt-5 mb-3 float-right" type='submit'>Update</button>
                                    </form>
                                </div>
                            </div>
                        </div>
                    </Body>
                </div>
            </div>
        </>
    )
}

export default Payment_settings
