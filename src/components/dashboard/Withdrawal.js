import React from 'react'
import { useAtom } from 'jotai'
import {
    useRouteMatch,
} from 'react-router-dom'

import { sidebarData } from './sidebarData'


import Sidebar from './Sidebar'
import Body from './Body'

function Withdrawal() {

    const match = useRouteMatch()


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
                                    <h5 className="ml-2 text-dark">Withdraw</h5>
                                    <div style={{ width: '100%', height: '1px', backgroundColor: '#cacaca' }}></div>
                                    <form action="" className="form-group">
                                        <div className="row ml-5 mt-5">
                                            <div className="col-md-4">
                                                <h6 className="text-muted">Bank Name</h6>
                                                <small className="text-muted">Please input the correct bank name</small>
                                            </div>
                                            <div className="col-md-7">
                                                <div className="input-group mb-4">
                                                    <div className="input-group-prepend">
                                                        <span className="input-group-text bg-dark" id="basic-addon1"><i className="fa fa-university text-white"></i></span>
                                                    </div>
                                                    <input type="text" className="form-control" placeholder="Bank Name" aria-label="Bank Name" aria-describedby="basic-addon1" required />
                                                </div>
                                            </div>
                                        </div>

                                        <div className="row ml-5 mt-2">
                                            <div className="col-md-4">
                                                <h6 className="text-muted">Account Name</h6>
                                                <small className="text-muted">Please double check account name</small>
                                            </div>
                                            <div className="col-md-7">
                                                <div className="input-group mb-4">
                                                    <div className="input-group-prepend">
                                                        <span className="input-group-text bg-dark" id="basic-addon1"><i className="fa fa-user text-white"></i></span>
                                                    </div>
                                                    <input type="text" className="form-control" placeholder="Bank Account Name" aria-label="Bank Account Name" aria-describedby="basic-addon1" required />
                                                </div>
                                            </div>
                                        </div>

                                        <div className="row ml-5 mt-2">
                                            <div className="col-md-4">
                                                <h6 className="text-muted">Account Number</h6>
                                                <small className="text-muted">Please double check this account number</small>
                                            </div>
                                            <div className="col-md-7">
                                                <div className="input-group mb-4">
                                                    <div className="input-group-prepend">
                                                        <span className="input-group-text bg-dark" id="basic-addon1"><i className="fa fa-credit-card text-white"></i></span>
                                                    </div>
                                                    <input type="text" className="form-control" placeholder="Bank Account Number" aria-label="Bank Account Number" aria-describedby="basic-addon1" required />
                                                </div>
                                            </div>
                                        </div>

                                        <div className="row ml-5 mt-2">
                                            <div className="col-md-4">
                                                <h6 className="text-muted">Amount </h6>
                                                <small className="text-muted">Maximum amount withdrawable: 0</small>
                                            </div>
                                            <div className="col-md-7">
                                                <div className="input-group mb-4">
                                                    <div className="input-group-prepend">
                                                        <span className="input-group-text bg-dark" id="basic-addon1"><i className="fa fa-dollar text-white"></i></span>
                                                    </div>
                                                    <input type="text" className="form-control" placeholder="Amount to Withdraw" aria-label="amount" aria-describedby="basic-addon1" required />
                                                </div>
                                            </div>
                                        </div>
                                        <button className="btn btn-dark btn-sm  mt-5 mb-3 float-right">Withdraw Now</button>
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
