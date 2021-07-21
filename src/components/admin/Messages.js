import React, { useState, useEffect } from 'react'
import { useAtom } from 'jotai'
import {
    useRouteMatch, Link
} from 'react-router-dom'
import axios from 'axios'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


import { Admin_sidebardata } from '../dashboard/sidebarData'
import Sidebar from './Sidebar'
import Body from './Body'


function Messages() {

    const [messages, setmessages] = useState('')
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

    const notify = (message) => toast(`🦄 ${message}`, {
        position: "top-center",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
    });


    useEffect(() => {
        axios.get('https://cent-coin.com/api/admin/messages.php')
            .then(res => {
                // console.log(res);
                let mod = Object.values(res.data.data)
                setmessages(mod)
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
                        <h4><i className="fa fa-compass text-primary"></i> {match.path}</h4>
                        <div className="container">
                            <div className="row">
                                <div className="col-md-11 ml-auto mr-auto mt-4 mb-5 shadow bg-white pt-2">
                                    <h5 className="ml-2 text-dark">Messages</h5>
                                    <div style={{ width: '100%', height: '1px', backgroundColor: '#cacaca' }}></div>
                                    <div className="table-responsive mt-3">
                                        <table className="table table-hover table-striped table-bordered">
                                            <thead>
                                                <tr>
                                                    <td className="text-dark"><h6>Message</h6></td>
                                                    <td className="text-dark"><h6>From</h6></td>
                                                    <td className="text-dark"><h6>Email</h6></td>
                                                    <td className="text-dark"><h6>sent on</h6></td>
                                                </tr>
                                            </thead>
                                            <tbody>
                                                {
                                                    messages ?

                                                        messages.map((message, i) => (
                                                            <tr key={i}>
                                                                <td><h6>{message.message}</h6></td>
                                                                <td>{message.name}</td>
                                                                <td>{message.email}</td>
                                                                <td>{message.createdAt}</td>
                                                            </tr>
                                                        ))
                                                        :
                                                        <tr>
                                                            <td>no messages found</td>
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

export default Messages
