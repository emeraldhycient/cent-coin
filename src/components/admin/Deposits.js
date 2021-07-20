import React, { useState, useEffect } from 'react'
import { useAtom } from 'jotai'
import {
    useLocation
} from "react-router-dom"
import axios from 'axios'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';




import { Admin_sidebardata } from '../dashboard/sidebarData'
import Sidebar from './Sidebar'
import Body from './Body'
import loading from '../../images/Ripple-1s-200px.gif'



function Deposits() {

    const [sidebars, setsidebar] = useAtom(Admin_sidebardata)

    const notify = (message) => toast(`🦄 ${message}`, {
        position: "top-center",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
    });

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

    const [deposits, setdeposits] = useState('')

    const [plans, setplans] = useState(false)

    const [isloading, setisloading] = useState(false)

    const toggleloading = () => {
        setisloading(e => !e);
    }


    const location = useLocation()

    const [userid, setuserid] = useState()
    const [packages, setpackages] = useState()
    const [amount, setamount] = useState()

    const submitForm = e => {
        e.preventDefault()

        toggleloading()

        const formdata = new FormData()
        formdata.append('userid', userid)
        formdata.append('packages', packages)
        formdata.append('amount', amount)

        axios({
            method: 'POST',
            url: 'http://localhost/rald/cent-coin(btc_website)/centcoin-api/api/admin/makedeposit.php',
            data: formdata
        })
            .then(res => {
                notify(res.data.message)
                //console.log(res);
            })
            .catch(err => notify(err.response.data.message))
            .finally(e => {
                setTimeout(() => {
                    toggleloading()
                }, 1000)
            })

        return false
    }

    useEffect(() => {
        axios.get('http://localhost/rald/cent-coin(btc_website)/centcoin-api/api/admin/packages.php?all=all')
            .then(res => {
                //console.log(res);
                let mod = Object.values(res.data.data)
                setplans(mod)
            })
            .catch(err => notify(err.response.data.message))


        axios.get('http://localhost/rald/cent-coin(btc_website)/centcoin-api/api/admin/deposits.php')
            .then(res => {
                //console.log(res);
                let mod = Object.values(res.data.data.deposits)
                setdeposits(mod)
            })
            .catch(err => notify(err.response.data.message))

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
                        <h4><i className="fa fa-compass text-primary"></i> {location.pathname}</h4>
                        <div className="container">
                            <div className="row">
                                <div className="col-md-11 ml-auto mr-auto mt-4 mb-5 shadow bg-white pt-2 w-100">
                                    <h5 className="ml-2 text-dark">Make Deposit</h5>
                                    <div style={{ width: '100%', height: '1px', backgroundColor: '#cacaca' }}></div>
                                    <form action="" className="form-group" onSubmit={submitForm}>

                                        <div className="row ml-md-5 mt-5">
                                            <div className="col-md-4">
                                                <h6 className="text-muted">userid</h6>
                                                <small className="text-muted">This is the user identification character *.</small>
                                            </div>
                                            <div className="col-md-7">
                                                <div className="input-group mb-4">
                                                    <div className="input-group-prepend">
                                                        <span className="input-group-text bg-dark" id="basic-addon1"><i className="fa fa-user text-white"></i></span>
                                                    </div>
                                                    <input type="text" onChange={e => setuserid(e.target.value)} className="form-control" value={userid} placeholder=" userid" aria-label="update userid" aria-describedby="basic-addon1" required />
                                                </div>
                                            </div>
                                        </div>

                                        <div className="row ml-md-5 mt-5">
                                            <div className="col-md-4">
                                                <h6 className="text-muted">Package</h6>
                                                <small className="text-muted">Select a package which  payment falls into *.</small>
                                            </div>
                                            <div className="col-md-7">
                                                <div className="input-group mb-4">
                                                    <div className="input-group-prepend">
                                                        <span className="input-group-text bg-dark" id="basic-addon1"><i className="fa fa-gift text-white"></i></span>
                                                    </div>
                                                    <select className="form-control" onChange={e => setpackages(e.target.value)} value={packages}>
                                                        {
                                                            plans ?
                                                                plans.map((item, i) => (
                                                                    <option value={item.plan} key={i}>{item.plan}</option>
                                                                ))
                                                                : <>
                                                                    <option value="basic plan">Basic plan</option>
                                                                    <option value="silver plan">Silver plan</option>
                                                                    <option value="deposit plan"> Deposit plan</option>
                                                                    <option value="promo plan">Promo plan</option>
                                                                </>
                                                        }
                                                    </select>
                                                </div>
                                            </div>
                                        </div>

                                        <div className="row ml-md-5 mt-5">
                                            <div className="col-md-4">
                                                <h6 className="text-muted">Amount</h6>
                                                <small className="text-muted">This the amount paid by the user *.</small>
                                            </div>
                                            <div className="col-md-7">
                                                <div className="input-group mb-4">
                                                    <div className="input-group-prepend">
                                                        <span className="input-group-text bg-dark" id="basic-addon1"><i className="fa fa-paypal text-white"></i></span>
                                                    </div>
                                                    <input type="tel" onChange={e => setamount(e.target.value)} value={amount} className="form-control" placeholder="amount" aria-label="update amount" aria-describedby="basic-addon1" required />
                                                </div>
                                            </div>
                                        </div>
                                        {
                                            isloading ? <button className="btn btn-dark btn-sm  mt-5 mb-3 float-right"><img src={loading} style={{ width: '30px', height: '30px' }} alt="" />Deposit</button> : <button className="btn btn-dark btn-sm  mt-5 mb-3 float-right" type='submit'>Deposit</button>
                                        }


                                    </form>
                                </div>
                            </div>
                        </div>
                        <div className="container">
                            <div className="row">
                                <div className="col-md-11 ml-auto mr-auto mt-4 mb-5 shadow bg-white pt-2">
                                    <h5 className="ml-2 text-dark">Deposit History</h5>
                                    <div style={{ width: '100%', height: '1px', backgroundColor: '#cacaca' }}></div>
                                    <div className="table-responsive mt-3">
                                        <table className="table table-hover table-striped table-bordered">
                                            <tbody>
                                                <tr>
                                                    <th className="text-dark">userid</th>
                                                    <th className="text-dark">Package</th>
                                                    <th className="text-dark">Amount</th>
                                                    <th className="text-dark">status</th>
                                                    <th className="text-dark">Date</th>
                                                    <th className="text-primary">Edit Status<i className="fa fa-edit ml-1"></i></th>
                                                </tr>
                                                {
                                                    deposits ?
                                                        deposits.map((item, i) => (
                                                            <tr key={i}>
                                                                <td>
                                                                    <h5 className="mb-0">{item.userid}</h5>
                                                                </td>
                                                                <td><small>{item.package}</small></td>
                                                                <td><i className="fa fa-dollar mr-1"></i>{item.amount}</td>
                                                                <td>{item.status}</td>
                                                                <td><i className="fa fa-hourglass-half mr-1"></i>{item.createdAt}</td>
                                                                <td>
                                                                    <form action="" className="form-group">
                                                                        <input type="hidden" id="memberid" value='1' />
                                                                        <select name="" id="" className="opt-group">
                                                                            <option value="suspened">Suspend</option>
                                                                            <option value="Active">Activate</option>
                                                                        </select>
                                                                        <button className="btn badge badge-primary ml-1"> Update</button>
                                                                    </form>
                                                                </td>
                                                            </tr>
                                                        ))
                                                        :
                                                        <tr>
                                                            <td>no data found</td>
                                                        </tr>
                                                }
                                            </tbody>
                                        </table>
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

export default Deposits
