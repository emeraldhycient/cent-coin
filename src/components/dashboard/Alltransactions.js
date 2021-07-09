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
                        <div className="mt-5">
                            <Transactions />
                            <Charts />
                        </div>
                    </Body>
                </div>
            </div>
        </>
    )
}

export default Alltransactions
