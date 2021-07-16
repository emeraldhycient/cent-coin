import React, { useState } from 'react'
import { useAtom } from 'jotai'
import {
    useRouteMatch,
} from "react-router-dom"
import axios from 'axios'


import { Admin_sidebardata } from '../dashboard/sidebarData'
import Sidebar from './Sidebar'
import Body from './Body'


function Admin_settings() {

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

export default Admin_settings
