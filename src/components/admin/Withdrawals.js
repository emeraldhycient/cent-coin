import React from 'react'
import { useAtom } from 'jotai'


import { Admin_sidebardata } from '../dashboard/sidebarData'
import Sidebar from './Sidebar'
import Body from './Body'


function Withdrawal() {

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

    const processWithdrawal = i => {
        alert(i)
    }

    return (
        <>
            <div className="dashboardContainer">
                <div className="sidebar">
                    <Sidebar sidebars={sidebars} isActive={isActive} />
                </div>
                <div className="maincontent">
                    <Body>

                        <div className="container">
                            <div className="row">
                                <div className="col-md-11 ml-auto mr-auto mt-4 mb-5 shadow bg-white pt-2">
                                    <h5 className="ml-2 text-dark">Withdrawal Request</h5>
                                    <div style={{ width: '100%', height: '1px', backgroundColor: '#cacaca' }}></div>
                                    <div className="table-responsive">
                                        <table className="table table-striped">
                                            <tbody>
                                                <tr>
                                                    <th className="text-dark">Username</th>
                                                    <th className="text-dark">Amount</th>
                                                    <th className="text-dark">Date</th>
                                                    <th className="text-dark">Action</th>
                                                </tr>

                                                <tr>
                                                    <td>
                                                        <h5 className="mb-0">emerald</h5>
                                                        <small className="mt-0"><b>id: </b> j1f23se</small>
                                                    </td>
                                                    <td><i className="fa fa-dollar mr-1"></i>2300.00</td>
                                                    <td>42/12/2021</td>
                                                    <td><button className="btn btn-sm btn-success text-white" onClick={e => processWithdrawal(1)}>Process</button></td>
                                                </tr>

                                                <tr>
                                                    <td>
                                                        <h5 className="mb-0">emerald</h5>
                                                        <small className="mt-0"><b>id: </b> j1f23se</small>
                                                    </td>
                                                    <td><i className="fa fa-dollar mr-1"></i>2300.00</td>
                                                    <td>42/12/2021</td>
                                                    <td><button className="btn btn-sm btn-success text-white" onClick={e => processWithdrawal(2)}>Process</button></td>
                                                </tr>

                                                <tr>
                                                    <td>
                                                        <h5 className="mb-0">emerald</h5>
                                                        <small className="mt-0"><b>id: </b> j1f23se</small>
                                                    </td>
                                                    <td><i className="fa fa-dollar mr-1"></i>2300.00</td>
                                                    <td>42/12/2021</td>
                                                    <td><button className="btn btn-sm btn-success text-white" onClick={e => processWithdrawal(3)}>Process</button></td>
                                                </tr>


                                            </tbody>
                                        </table>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="container">
                            <div className="row">
                                <div className="col-md-11 ml-auto mr-auto mt-4 mb-5 shadow bg-white pt-2">
                                    <h5 className="ml-2 text-dark">Withdrawal History</h5>
                                    <div style={{ width: '100%', height: '1px', backgroundColor: '#cacaca' }}></div>
                                    <div className="table-responsive">
                                        <table className="table table-striped">
                                            <tbody>
                                                <tr>
                                                    <th className="text-dark">Username</th>
                                                    <th className="text-dark">Amount</th>
                                                    <th className="text-dark">Date</th>
                                                    <th className="text-dark">Status</th>
                                                </tr>

                                                <tr>
                                                    <td>
                                                        <h5 className="mb-0">emerald</h5>
                                                        <small className="mt-0"><b>id: </b> j1f23se</small>
                                                    </td>
                                                    <td><i className="fa fa-dollar mr-1"></i>2300.00</td>
                                                    <td>23/12/2033</td>
                                                    <td><span className="badge badge-primary">Proccessed</span></td>
                                                </tr>

                                                <tr>
                                                    <td>
                                                        <h5 className="mb-0">emerald</h5>
                                                        <small className="mt-0"><b>id: </b> j1f23se</small>
                                                    </td>
                                                    <td><i className="fa fa-dollar mr-1"></i>2300.00</td>
                                                    <td>23/12/2033</td>
                                                    <td><span className="badge badge-warning text-white">pending</span></td>
                                                </tr>

                                                <tr>
                                                    <td>
                                                        <h5 className="mb-0">emerald</h5>
                                                        <small className="mt-0"><b>id: </b> j1f23se</small>
                                                    </td>
                                                    <td><i className="fa fa-dollar mr-1"></i>2300.00</td>
                                                    <td>23/12/2033</td>
                                                    <td><span className="badge badge-primary">Proccessed</span></td>
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

export default Withdrawal
