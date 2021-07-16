import React, { useState } from 'react'
import { useAtom } from 'jotai'
import {
    useLocation
} from "react-router-dom"
import axios from 'axios'



import { Admin_sidebardata } from '../dashboard/sidebarData'
import Sidebar from './Sidebar'
import Body from './Body'


function Deposits() {

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

    const location = useLocation()

    const [userid, setuserid] = useState()
    const [packages, setpackages] = useState()
    const [amount, setamount] = useState()

    const submitForm = e => {
        e.preventDefault()

        const formdata = new FormData()
        formdata.append('userid', userid)
        formdata.append('packages', packages)
        formdata.append('amount', amount)

        axios({
            method: 'POST',
            url: '',
            data: formdata
        })
            .then(e => {
                console.log(e);
            })
            .catch(err => console.error(err))

        return false
    }


    return (
        <>
            <div className="dashboardContainer">
                <div className="sidebar">
                    <Sidebar sidebars={sidebars} isActive={isActive} />
                </div>
                <div className="maincontent">
                    <Body>
                        <h4><i className="fa fa-compass text-primary"></i> {location.pathname}</h4>
                        <div className="container">
                            <div className="row">
                                <div className="col-md-11 ml-auto mr-auto mt-4 mb-5 shadow bg-white pt-2 w-100">
                                    <h5 className="ml-2 text-dark">Make Deposit</h5>
                                    <div style={{ width: '100%', height: '1px', backgroundColor: '#cacaca' }}></div>
                                    <form action="" className="form-group">

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
                                                        <option value=''></option>
                                                        <option value=''></option>
                                                        <option value=''></option>
                                                        <option value=''></option>
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

                                        <button className="btn btn-dark btn-sm  mt-5 mb-3 float-right" onClick={submitForm}>Update</button>

                                    </form>
                                </div>
                            </div>
                        </div>
                        <div className="container">
                            <div className="row">
                                <div className="col-md-11 ml-auto mr-auto mt-4 mb-5 shadow bg-white pt-2">
                                    <h5 className="ml-2 text-dark">Deposit History</h5>
                                    <div style={{ width: '100%', height: '1px', backgroundColor: '#cacaca' }}></div>
                                    <div className="table-responsive">
                                        <table className="table table-striped">
                                            <tbody>
                                                <tr>
                                                    <th className="text-dark">Username</th>
                                                    <th className="text-dark">Package</th>
                                                    <th className="text-dark">Amount</th>
                                                    <th className="text-dark">Date</th>
                                                </tr>

                                                <tr>
                                                    <td>
                                                        <h5 className="mb-0">emerald</h5>
                                                        <small className="mt-0"><b>id: </b> j1f23se</small>
                                                    </td>
                                                    <td><small>basic plan 2 days</small></td>
                                                    <td><i className="fa fa-dollar mr-1"></i>2300.00</td>
                                                    <td><i className="fa fa-dollar mr-1"></i>2300.00</td>
                                                </tr>

                                                <tr>
                                                    <td>
                                                        <h5 className="mb-0">emerald</h5>
                                                        <small className="mt-0"><b>id: </b> j1f23se</small>
                                                    </td>
                                                    <td><small>basic plan 2 days</small></td>
                                                    <td><i className="fa fa-dollar mr-1"></i>2300.00</td>
                                                    <td><i className="fa fa-dollar mr-1"></i>2300.00</td>
                                                </tr>

                                                <tr>
                                                    <td>
                                                        <h5 className="mb-0">emerald</h5>
                                                        <small className="mt-0"><b>id: </b> j1f23se</small>
                                                    </td>
                                                    <td><small>basic plan 2 days</small></td>
                                                    <td><i className="fa fa-dollar mr-1"></i>2300.00</td>
                                                    <td><i className="fa fa-dollar mr-1"></i>2300.00</td>
                                                </tr>


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
