import React, { useState, useEffect } from 'react'
import { useAtom } from 'jotai'
import {
    useRouteMatch, Link
} from 'react-router-dom'



import { Admin_sidebardata } from '../dashboard/sidebarData'
import Sidebar from './Sidebar'
import Body from './Body'
import axios from 'axios'


function Packages() {

    const match = useRouteMatch()

    const [plans, setplans] = useState('')

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


    useEffect(() => {
        axios.get('http://localhost/rald/cent-coin(btc_website)/centcoin-api/api/admin/packages.php?all=all')
            .then(res => {
                //console.log(res);
                let mod = Object.values(res.data.data)
                setplans(mod)
            })
            .catch(err => {
                // console.log(err);
            })
    }, [])

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
                                    <h5 className="ml-2 text-dark">Packages</h5>
                                    <div style={{ width: '100%', height: '1px', backgroundColor: '#cacaca' }}></div>
                                    <div className="table-responsive mt-3">
                                        <table className="table table-hover table-striped table-bordered">
                                            <thead>
                                                <tr>
                                                    <td className="text-dark"><h6>Plan</h6></td>
                                                    <td className="text-dark"><h6>Duration</h6></td>
                                                    <td className="text-dark"><h6>Percentage</h6></td>
                                                    <td className="text-dark"><h6>Minimum dep</h6></td>
                                                    <td className="text-dark"><h6>Maximum dep</h6></td>
                                                    <td></td>
                                                </tr>
                                            </thead>
                                            <tbody>
                                                {
                                                    plans ?
                                                        plans.map((plan, i) => (
                                                            <tr key={i}>
                                                                <td><h6>{plan.plan}</h6></td>
                                                                <td>{plan.duration}</td>
                                                                <td>{plan.percentage}</td>
                                                                <td>{plan.mindep}</td>
                                                                <td>{plan.maxdep}</td>
                                                                <td><Link to={`${match.path}/${i}`} className="badge text-success">Edit <i className="fa fa-eye"></i></Link> </td>
                                                            </tr>
                                                        ))
                                                        :
                                                        <tr>
                                                            <td>unable to display date</td>
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

export default Packages
