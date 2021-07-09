import React, { useState } from 'react'
import { useAtom } from 'jotai'
import {
    useRouteMatch,
} from "react-router-dom"
import axios from 'axios'


import Sidebar from './Sidebar'
import Body from './Body'

import { sidebarData } from './sidebarData'


function Settings() {

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

    const match = useRouteMatch()

    const [username, setusername] = useState()
    const [email, setemail] = useState()
    const [phone, setphone] = useState()

    const submitForm = e => {
        e.preventDefault()

        const formdata = new FormData()
        formdata.append('username', username)
        formdata.append('email', email)
        formdata.append('phone', phone)

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
                        <h4><i className="fa fa-compass text-primary"></i> {match.path}</h4>
                        <div className="container mt-5">
                            <div className="row">
                                <div className="col-md-5 mt-auto ml-auto mr-auto mb-4 shadow bg-white p-3">
                                    <div className="d-flex">
                                        <div className="circle bg-danger mr-4">
                                            <i className="fa fa-user fa-2x text-white"></i>
                                        </div>
                                        <div className="">
                                            <h6 className="text-muted">hello,welcome !</h6>
                                            <h6><strong className="text-dark">emerald</strong></h6>
                                            <h6 className="text-muted"><i className="fa fa-phone text-primary mr-2 mr-md-3"></i>+2347088639675</h6>
                                            <h6><i className="fa fa-envelope text-primary mr-2 mr-md-3"></i><a href="mailto:example@gmail.com" className="text-muted">example@gmail.com</a></h6>
                                            <h6 className="text-muted"><i className="fa fa-money text-primary mr-2 mr-md-3"></i>Your currency (USD)</h6>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-md-5 mt-auto ml-auto mr-auto mb-4 shadow bg-white p-0">
                                    <h5 className="ml-2 text-dark">wallet</h5>
                                    <div style={{ width: '100%', height: '1px', backgroundColor: '#cacaca', marginBottom: '30px' }}></div>
                                    <h6 className="text-primary mb-5 ml-2">Registered on : 20/4/2021 8:45:23Am</h6>

                                    <div className="btn-group w-100 pl-2 pr-2">
                                        <button className="btn btn-primary col"><a href="/dashboard/deposit" className="text-white">Deposit</a></button>
                                        <button className="btn btn-danger col"><a href="/dashboard/withdraw" className="text-white">Withdraw</a></button>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="container">
                            <div className="row">
                                <div className="col-md-11 ml-auto mr-auto mt-4 mb-5 shadow bg-white pt-2">
                                    <h5 className="ml-2 text-dark">Update Details</h5>
                                    <div style={{ width: '100%', height: '1px', backgroundColor: '#cacaca' }}></div>
                                    <form action="" className="form-group">

                                        <div className="row ml-5 mt-5">
                                            <div className="col-md-4">
                                                <h6 className="text-muted">Username</h6>
                                                <small className="text-muted">update this information only if need *.</small>
                                            </div>
                                            <div className="col-md-7">
                                                <div className="input-group mb-4">
                                                    <div className="input-group-prepend">
                                                        <span className="input-group-text bg-dark" id="basic-addon1"><i className="fa fa-user text-white"></i></span>
                                                    </div>
                                                    <input type="text" onChange={e => setusername(e.target.value)} className="form-control" value={username} placeholder="update username" aria-label="update username" aria-describedby="basic-addon1" required />
                                                </div>
                                            </div>
                                        </div>

                                        <div className="row ml-5 mt-5">
                                            <div className="col-md-4">
                                                <h6 className="text-muted">Email</h6>
                                                <small className="text-muted">update this information only if need *.</small>
                                            </div>
                                            <div className="col-md-7">
                                                <div className="input-group mb-4">
                                                    <div className="input-group-prepend">
                                                        <span className="input-group-text bg-dark" id="basic-addon1"><i className="fa fa-envelope text-white"></i></span>
                                                    </div>
                                                    <input type="email" onChange={e => setemail(e.target.value)} value={email} className="form-control" placeholder="update email" aria-label="update email" aria-describedby="basic-addon1" required />
                                                </div>
                                            </div>
                                        </div>

                                        <div className="row ml-5 mt-5">
                                            <div className="col-md-4">
                                                <h6 className="text-muted">phone</h6>
                                                <small className="text-muted">update this information only if need *.</small>
                                            </div>
                                            <div className="col-md-7">
                                                <div className="input-group mb-4">
                                                    <div className="input-group-prepend">
                                                        <span className="input-group-text bg-dark" id="basic-addon1"><i className="fa fa-phone text-white"></i></span>
                                                    </div>
                                                    <input type="tel" onChange={e => setphone(e.target.value)} value={phone} className="form-control" placeholder="update phone" aria-label="update phone" aria-describedby="basic-addon1" required />
                                                </div>
                                            </div>
                                        </div>

                                        <button className="btn btn-dark btn-sm  mt-5 mb-3 float-right" onClick={submitForm}>Update</button>

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

export default Settings
