import React, { useState, useEffect } from 'react'
import { useAtom } from 'jotai'
import {
    useLocation, withRouter, Link, useParams
} from "react-router-dom"
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import axios from 'axios'



import { Admin_sidebardata } from '../dashboard/sidebarData'
import Sidebar from './Sidebar'
import Body from './Body'
import Edituser from './Edituser';


function Members() {

    const location = useLocation()

    const { userid } = useParams()

    const [sidebars, setsidebar] = useAtom(Admin_sidebardata)

    const [users, setusers] = useState()
    const [updatestatus, setupdatestatus] = useState('')

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


    const handleDelete = id => {
        axios.get(`http://localhost/rald/cent-coin(btc_website)/centcoin-api/api/admin/deleteuser.php?userid=${id}`)
            .then((res) => {
                notify(res.data.message)
                setTimeout(() => {
                    window.location.reload()
                }, 1000);
            }).catch((err) => {
                notify(err.response.data.message)
            })
    }

    useEffect(() => {
        axios.get('https://cent-coin.com/api/admin/users.php')
            .then(res => {
                let mod = Object.values(res.data.data.users)
                setusers(mod)
            })
            .catch(err => {
                console.log(err);
            })
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
                        {
                            userid ?
                                <div className="container">
                                    <div className="row">
                                        <div className="col-md-7 ml-auto mr-auto mt-4 mb-5 shadow bg-white pt-2">
                                            <Edituser userid={userid} />
                                        </div>
                                    </div>
                                    {notify('make sure to go back one bit before trying to edit another user')}
                                </div> : ''
                        }
                        <div className="container">
                            <div className="row">
                                <div className="col-md-12 ml-auto mr-auto mt-4 mb-5 shadow bg-white pt-2">
                                    <h5 className="ml-2 text-dark">Members Details</h5>
                                    <div style={{ width: '100%', height: '1px', backgroundColor: '#cacaca' }}></div>
                                    <div className="table-responsive mt-5">
                                        <table className="table table-hover table-striped table-bordered">
                                            <tbody>
                                                <tr>
                                                    <th className="text-dark">userid</th>
                                                    <th className="text-dark">Username</th>
                                                    <th className="text-dark">email</th>
                                                    <th className="text-dark">password</th>
                                                    <th className="text-dark">plans</th>
                                                    <th className="text-dark">currency</th>
                                                    <th className="text-dark">Reg.Date</th>
                                                    <th className="text-dark">Earnings</th>
                                                    <th className="text-dark">status</th>
                                                    <th className="text-dark">referredby</th>
                                                    <th className="text-primary">Edit user<i className="fa fa-edit ml-1"></i></th>
                                                    <th className="text-danger">Delete<i className="fa fa-trash"></i></th>
                                                </tr>
                                                {
                                                    users ?
                                                        users.map((item, i) => (
                                                            <tr key={i}>
                                                                <td><h6>{item.userid}</h6></td>
                                                                <td>
                                                                    <h5 className="mb-0">{item.username}</h5>
                                                                    <small className="mt-0">{item.fullname}</small>
                                                                </td>
                                                                <td>{item.email}</td>
                                                                {
                                                                    item.isadmin ? <td>admin password hidden</td> : <td>{item.password}</td>
                                                                }

                                                                <td>{item.plan}</td>
                                                                <td>{item.currency}</td>

                                                                <td><i className="fa fa-hourglass-half mr-1"></i><h6>{item.createdAt}</h6></td>
                                                                <td><i className="fa fa-dollar mr-1"></i>{item.accountbalance}</td>
                                                                <td>{item.status}</td>
                                                                <td>{item.referredby}</td>
                                                                <td>
                                                                    <button className=" btn badge badge-primary"><Link to={`${location.pathname}/${item.userid}`} className="text-white">Edit</Link></button>
                                                                </td>
                                                                <td>
                                                                    <button className=" btn badge badge-danger" onClick={e => handleDelete(item.userid)}>Delete</button>
                                                                </td>
                                                            </tr>

                                                        )) :
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

export default withRouter(Members)
