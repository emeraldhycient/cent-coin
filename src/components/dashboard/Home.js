import React from 'react'
import { useAtom } from 'jotai'
import {
    useRouteMatch,
} from 'react-router-dom'

import Sidebar from './Sidebar'
import Body from './Body'
import Transactions from './Transactions'
import Charts from './Charts'

import { sidebarData } from './sidebarData'


function Home() {

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
                        <div className="container mt-5">
                            <div className="row mb-5">
                                <div className="col-md-5 mt-auto ml-auto mr-auto mb-4 shadow bg-white " id="box">
                                    <div className=" pb-3">
                                        <h4 className="pl-1 text-dark">Account balance</h4>
                                        <div style={{ width: '100%', height: '1px', backgroundColor: '#cacaca' }}></div>
                                        <h5 className="pl-3 mt-4 text-muted"><i className="fa fa-dollar"></i> 00.00</h5>
                                    </div>
                                    <div className="bg-dark w-25" id="iconholder">
                                        <i className="fa fa-balance-scale fa-3x text-white"></i>
                                    </div>
                                </div>
                                <div className="col-md-5 mt-auto ml-auto mr-auto mb-4 shadow bg-white " id="box">
                                    <div className=" pb-3">
                                        <h4 className="pl-1 text-dark">Total Earnings</h4>
                                        <div style={{ width: '100%', height: '1px', backgroundColor: '#cacaca' }}></div>
                                        <h5 className="pl-3 mt-4 text-muted"><i className="fa fa-dollar"></i> 00.00</h5>
                                    </div>
                                    <div className="bg-dark w-25" id="iconholder">
                                        <i className="fa fa-briefcase fa-3x text-white"></i>
                                    </div>
                                </div>

                                <div className="col-md-5 mt-auto ml-auto mr-auto mb-4 shadow bg-white " id="box">
                                    <div className=" pb-3">
                                        <h4 className="pl-1 text-dark">Active Deposit</h4>
                                        <div style={{ width: '100%', height: '1px', backgroundColor: '#cacaca' }}></div>
                                        <h5 className="pl-3 mt-4 text-muted"><i className="fa fa-dollar"></i> 00.00</h5>
                                    </div>
                                    <div className="bg-dark w-25" id="iconholder">
                                        <i className="fa fa-calculator fa-3x text-white"></i>
                                    </div>
                                </div>
                                <div className="col-md-5 mt-auto ml-auto mr-auto mb-4 shadow bg-white " id="box">
                                    <div className=" pb-3">
                                        <h4 className="pl-1 text-dark">Total Deposit</h4>
                                        <div style={{ width: '100%', height: '1px', backgroundColor: '#cacaca' }}></div>
                                        <h5 className="pl-3 mt-4 text-muted"><i className="fa fa-dollar"></i> 00.00</h5>
                                    </div>
                                    <div className="bg-dark w-25" id="iconholder">
                                        <i className="fa fa-puzzle-piece fa-3x text-white"></i>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <Charts />
                        <>
                            <Transactions />
                        </>
                    </Body>
                </div>
            </div>
        </>
    )
}

export default Home
