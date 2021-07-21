import React, { useState } from 'react'
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
import loading from '../../images/Ripple-1s-200px.gif'


function Withdrawal() {

    const match = useRouteMatch()

    const [isloading, setisloading] = useState(false)

    const toggleloading = () => {
        setisloading(e => !e);
    }

    const notify = (message) => toast(`🦄 ${message}`, {
        position: "top-center",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
    });


    const [wallet, setwallet] = useState('')
    const [accountname, setaccountname] = useState('')
    const [accountnumber, setaccountnumber] = useState('')
    const [routingnumber, setroutingnumber] = useState('')
    const [amount, setamount] = useState('')

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

    const Withdraw = e => {
        e.preventDefault()

        toggleloading();

        const formdata = new FormData();
        formdata.append('userid', sessionStorage.getItem('user'))
        formdata.append('wallet', wallet)
        formdata.append('amount', amount)

        axios({
            method: 'POST',
            url: 'https://cent-coin.com/api/user/withdrawal.php',
            data: formdata
        })
            .then(res => {
                notify(res.data.message)
            })
            .catch(err => {
                notify(err.response.data.message)
            })
            .finally(e => {
                setTimeout(() => {
                    toggleloading()
                }, 1000)
            })

        return false
    }


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
                                    <h5 className="ml-2 text-dark">Withdraw</h5>
                                    <div style={{ width: '100%', height: '1px', backgroundColor: '#cacaca' }}></div>
                                    <form action="" className="form-group" onSubmit={Withdraw}>
                                        <div className="row ml-md-5 mt-5">
                                            <div className="col-md-4">
                                                <h6 className="text-muted">Bitcoin wallet address</h6>
                                                <small className="text-muted">Bitcoin wallet address</small>
                                            </div>
                                            <div className="col-md-7">
                                                <div className="input-group mb-4">
                                                    <div className="input-group-prepend">
                                                        <span className="input-group-text bg-dark" id="basic-addon1"><i className="fa fa-university text-white"></i></span>
                                                    </div>
                                                    <input type="text" className="form-control" onChange={e => setwallet(e.target.value)} value={wallet} placeholder="Bitcoin wallet address" aria-label="Bank Name" aria-describedby="basic-addon1" required />
                                                </div>
                                            </div>
                                        </div>

                                        <div className="row ml-md-5 mt-2">
                                            <div className="col-md-4">
                                                <h6 className="text-muted">Amount </h6>
                                                <small className="text-muted">minimum amount withdrawable: 0</small>
                                            </div>
                                            <div className="col-md-7">
                                                <div className="input-group mb-4">
                                                    <div className="input-group-prepend">
                                                        <span className="input-group-text bg-dark" id="basic-addon1"><i className="fa fa-dollar text-white"></i></span>
                                                    </div>
                                                    <input type="text" className="form-control" onChange={e => setamount(e.target.value)} value={amount} placeholder="Amount to Withdraw" aria-label="amount" aria-describedby="basic-addon1" required />
                                                </div>
                                            </div>
                                        </div>
                                        {
                                            isloading ? <button className="btn btn-dark btn-sm  mt-5 mb-3 float-right" type="submit"><img src={loading} style={{ width: '30px', height: '30px' }} alt="" />Withdraw Now</button> : <button className="btn btn-dark btn-sm  mt-5 mb-3 float-right" type="submit">Withdraw Now</button>
                                        }
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

export default Withdrawal
