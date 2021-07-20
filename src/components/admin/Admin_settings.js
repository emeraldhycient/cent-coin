import React, { useState, useEffect } from 'react'
import { useAtom } from 'jotai'
import {
    useRouteMatch,
} from "react-router-dom"
import axios from 'axios'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import { Admin_sidebardata } from '../dashboard/sidebarData'
import Sidebar from './Sidebar'
import Body from './Body'
import loading from '../../images/Ripple-1s-200px.gif'



function Admin_settings() {

    const [sidebars, setsidebar] = useAtom(Admin_sidebardata)

    const [isloading, setisloading] = useState(false)

    const toggleloading = () => {
        setisloading(e => !e);
    }

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

    const [username, setusername] = useState()
    const [email, setemail] = useState()
    const [phone, setphone] = useState()
    const [userid, setuserid] = useState()


    const submitForm = e => {
        e.preventDefault()

        const formdata = new FormData()
        formdata.append('userid', userid)
        formdata.append('username', username)
        formdata.append('email', email)
        formdata.append('password', phone)

        axios({
            method: 'POST',
            url: ' http://localhost/rald/cent-coin(btc_website)/centcoin-api/api/auth/updatesettings.php',
            data: formdata
        })
            .then(e => {
                //console.log(e);
                notify(e.data.message)
            })
            .catch(err => notify(err.response.data.message))
            .finally(() => {
                setTimeout(() => {
                    toggleloading()
                }, 1000)
            })


        return false
    }

    useEffect(() => {
        setemail(sessionStorage.getItem('email'))
        setusername(sessionStorage.getItem('username'))
        setuserid(sessionStorage.getItem('admin'))

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
                                    <h5 className="ml-2 text-dark">Update Details</h5>
                                    <div style={{ width: '100%', height: '1px', backgroundColor: '#cacaca' }}></div>
                                    <form action="" className="form-group" onSubmit={submitForm}>

                                        <div className="row ml-md-5 mt-5">
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

                                        <div className="row ml-md-5 mt-5">
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

                                        <div className="row ml-md-5 mt-5">
                                            <div className="col-md-4">
                                                <h6 className="text-muted">password</h6>
                                                <small className="text-muted">update this information only if need *.</small>
                                            </div>
                                            <div className="col-md-7">
                                                <div className="input-group mb-4">
                                                    <div className="input-group-prepend">
                                                        <span className="input-group-text bg-dark" id="basic-addon1"><i className="fa fa-lock text-white"></i></span>
                                                    </div>
                                                    <input type="password" onChange={e => setphone(e.target.value)} value={phone} className="form-control" placeholder="update password" aria-label="update phone" aria-describedby="basic-addon1" required />
                                                </div>
                                            </div>
                                        </div>
                                        {
                                            isloading ? <button className="btn btn-dark btn-sm  mt-5 mb-3 float-right"><img src={loading} style={{ width: '30px', height: '30px' }} alt="" />Update</button> : <button className="btn btn-dark btn-sm  mt-5 mb-3 float-right" type='submit'>Update</button>
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

export default Admin_settings
