import React from 'react'
import { useAtom } from 'jotai'
import {
    useRouteMatch,
} from 'react-router-dom'

import Sidebar from './Sidebar'
import Body from './Body'
import Transactions from './Transactions'


import { sidebarData } from './sidebarData'
import LineCharts from './LineCharts'
import Piechart from './Piechart'


function Alltransactions() {

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
                        <div className="container mt-4">
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
                        <div className="mt-5">
                            <Transactions />
                        </div>
                    </Body>
                </div>
            </div>
        </>
    )
}

export default Alltransactions
