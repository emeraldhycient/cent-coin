import React, { useState, useEffect } from 'react'
import { useAtom } from 'jotai'
import {
    useRouteMatch,
} from 'react-router-dom'
import axios from 'axios'

import { Admin_sidebardata } from '../dashboard/sidebarData'
import Sidebar from './Sidebar'
import Body from './Body'

import LineCharts from './LineCharts'
import Piechart from './Piechart'


function Admin_index() {

    const [sidebars, setsidebar] = useAtom(Admin_sidebardata)
    const [totaldeposit, settotaldeposit] = useState('')
    const [totaluser, settotaluser] = useState('')


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

    const gettotalusers = () => {

        axios.get('https://cent-coin.com/api/admin/totalusers.php')
            .then(res => {
                //console.log(res);
                settotaluser(res.data.data.users)
            })
            .catch(err => console.log(err))
    }

    const getdeposit = () => {

        axios.get('https://cent-coin.com/api/admin/totaldeposits.php')
            .then(res => {
                //console.log(res);
                settotaldeposit(res.data.data.amount)
            })
            .catch(err => console.log(err))
    }

    useEffect(() => {
        gettotalusers()
        getdeposit()
    }, [])

    return (
        <>
            <div className="dashboardContainer">
                <div className="sidebar">
                    <Sidebar sidebars={sidebars} isActive={isActive} />
                </div>
                <div className="maincontent">
                    <Body>
                        <div className="container mt-5">
                            <div className="row mb-5">
                                <div className="col-md-5 mt-auto ml-auto mr-auto mb-4 shadow bg-white " id="box">
                                    <div className=" pb-3">
                                        <h4 className="pl-1 text-dark">Total Members</h4>
                                        <div style={{ width: '100%', height: '1px', backgroundColor: '#cacaca' }}></div>
                                        <h5 className="pl-3 mt-4 text-muted"><i className="fa fa-user mr-1"></i>{
                                            totaluser ?
                                                totaluser :
                                                '00.00'
                                        }</h5>
                                    </div>
                                    <div className="bg-dark w-25" id="iconholder">
                                        <i className="fa fa-users fa-3x text-white"></i>
                                    </div>
                                </div>
                                <div className="col-md-5 mt-auto ml-auto mr-auto mb-4 shadow bg-white " id="box">
                                    <div className=" pb-3">
                                        <h4 className="pl-1 text-dark">Total Deposit</h4>
                                        <div style={{ width: '100%', height: '1px', backgroundColor: '#cacaca' }}></div>
                                        <h5 className="pl-3 mt-4 text-muted"><i className="fa fa-dollar mr-1"></i>{
                                            totaldeposit ?
                                                totaldeposit
                                                :
                                                '00.00'

                                        }</h5>
                                    </div>
                                    <div className="bg-dark w-25" id="iconholder">
                                        <i className="fa fa-puzzle-piece fa-3x text-white"></i>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="container">
                            <div className="row">
                                <div className="col-md-6 mb-5 shadow bg-white d-flex justify-content-center align-items-center table-responsive">
                                    <LineCharts />
                                </div>
                                <div className="col-md-1"></div>
                                <div className="col-md-5 mb-5  shadow bg-white d-flex justify-content-center align-items-center table-responsive">
                                    <Piechart />
                                </div>
                            </div>
                        </div>
                    </Body>
                </div>
            </div>
        </>
    )
}

export default Admin_index
