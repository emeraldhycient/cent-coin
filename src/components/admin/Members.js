import React from 'react'
import { useAtom } from 'jotai'
import {
    useLocation, withRouter
} from "react-router-dom"


import { Admin_sidebardata } from '../dashboard/sidebarData'
import Sidebar from './Sidebar'
import Body from './Body'


function Members() {

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

    const handleDelete = id => {
        alert(id)
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
                                <div className="col-md-11 ml-auto mr-auto mt-4 mb-5 shadow bg-white pt-2">
                                    <h5 className="ml-2 text-dark">Members Details</h5>
                                    <div style={{ width: '100%', height: '1px', backgroundColor: '#cacaca' }}></div>
                                    <div className="table-responsive">
                                        <table className="table table-striped">
                                            <tbody>
                                                <tr>
                                                    <th className="text-dark">userid</th>
                                                    <th className="text-dark">Username</th>
                                                    <th className="text-dark">Reg.Date</th>
                                                    <th className="text-dark">status</th>
                                                    <th className="text-dark">Active Deposits</th>
                                                    <th className="text-dark">Earnings</th>
                                                    <th className="text-primary">Edit Status<i className="fa fa-edit ml-1"></i></th>
                                                    <th className="text-danger">Delete<i className="fa fa-trash"></i></th>
                                                </tr>
                                                <tr>
                                                    <td><h6>60edf1cf84988</h6></td>
                                                    <td>
                                                        <h5 className="mb-0">emerald</h5>
                                                        <small className="mt-0">emmanuel emma</small>
                                                    </td>
                                                    <td><h6>24/5/2021</h6></td>
                                                    <td>Active</td>
                                                    <td><i className="fa fa-dollar mr-1"></i>2300.00</td>
                                                    <td><i className="fa fa-dollar mr-1"></i>2300.00</td>
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
                                                    <td>
                                                        <button className=" btn badge badge-danger" onClick={e => handleDelete(1)}>Delete</button>
                                                    </td>
                                                </tr>

                                                <tr>
                                                    <td><h6>70edf1cf84989</h6></td>
                                                    <td>
                                                        <h5 className="mb-0">emerald</h5>
                                                        <small className="mt-0">emmanuel emma</small>
                                                    </td>
                                                    <td><h6>24/5/2021</h6></td>
                                                    <td>Active</td>
                                                    <td><i className="fa fa-dollar mr-1"></i>2300.00</td>
                                                    <td><i className="fa fa-dollar mr-1"></i>2300.00</td>
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
                                                    <td>
                                                        <button className=" btn badge badge-danger" onClick={e => handleDelete(2)}>Delete</button>
                                                    </td>
                                                </tr>


                                                <tr>
                                                    <td><h6>60edf1cf84988</h6></td>
                                                    <td>
                                                        <h5 className="mb-0">emerald</h5>
                                                        <small className="mt-0">emmanuel emma</small>
                                                    </td>
                                                    <td><h6>24/5/2021</h6></td>
                                                    <td>Active</td>
                                                    <td><i className="fa fa-dollar mr-1"></i>2300.00</td>
                                                    <td><i className="fa fa-dollar mr-1"></i>2300.00</td>
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
                                                    <td>
                                                        <button className=" btn badge badge-danger" onClick={e => handleDelete(3)}>Delete</button>
                                                    </td>
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

export default withRouter(Members)
