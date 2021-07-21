import React, { useState, useEffect } from 'react'
import { useAtom } from 'jotai'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


import { Admin_sidebardata } from '../dashboard/sidebarData'
import Sidebar from './Sidebar'
import Body from './Body'
import loading from '../../images/Ripple-1s-200px.gif'
import axios from 'axios';



function Withdrawal() {

    const [withdrawals, setwithdrawals] = useState('')
    const [unprocessed, setunprocessed] = useState('')
    const [sidebars, setsidebar] = useAtom(Admin_sidebardata)

    const notify = (message) => toast(`🦄 ${message}`, {
        position: "top-center",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
    });

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

    const [isloading, setisloading] = useState(false)

    const toggleloading = () => {
        setisloading(e => !e);
    }


    const processWithdrawal = (i, amount) => {
        let formdata = new FormData();
        formdata.append('update', 'update')
        formdata.append('userid', i)
        formdata.append('amount', amount)
        formdata.append('status', 'processed')
        axios({
            method: 'POST',
            url: 'https://cent-coin.com/api/admin/withdrawal.php',
            data: formdata
        })
            .then(res => {
                notify(res.data.message)
            })
            .catch(err => {
                notify(err.response.data.message)
            })
    }

    useEffect(() => {
        axios.get('https://cent-coin.com/api/admin/withdrawal.php?all=all')
            .then(res => {
                let mod = Object.values(res.data.data.withdrawal)
                setwithdrawals(mod)
            })
            .catch(err => notify(err.response.data.message))

        axios.get('https://cent-coin.com/api/admin/withdrawal.php?unprocessed=all')
            .then(res => {
                let mod = Object.values(res.data.data.withdrawal)
                setunprocessed(mod)
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

                        <div className="container">
                            <div className="row">
                                <div className="col-md-11 ml-auto mr-auto mt-4 mb-5 shadow bg-white pt-2">
                                    <h5 className="ml-2 text-dark">Withdrawal Request</h5>
                                    <div style={{ width: '100%', height: '1px', backgroundColor: '#cacaca' }}></div>
                                    <div className="table-responsive mt-3">
                                        <table className="table table-striped table-hover">
                                            <tbody>
                                                <tr>
                                                    <th className="text-dark">userid</th>
                                                    <th className="text-dark">wallet</th>
                                                    <th className="text-dark">amount</th>
                                                    <th className="text-dark">date</th>
                                                    <th className="text-dark">action</th>
                                                </tr>

                                                {
                                                    unprocessed ?
                                                        unprocessed.map((withdrawal, i) => (
                                                            <tr key={i}>
                                                                <td>
                                                                    <h5 className="mb-0">{withdrawal.userid}</h5>
                                                                </td>
                                                                <td>{withdrawal.wallet}</td>
                                                                <td><i className="fa fa-dollar mr-1"></i>{withdrawal.amount}</td>
                                                                <td>{withdrawal.createdAt}</td>
                                                                <td><span className="badge badge-success" onClick={e => processWithdrawal(withdrawal.userid, withdrawal.amount)}>Process</span></td>
                                                            </tr>
                                                        ))
                                                        :
                                                        <tr>
                                                            <td>no data to be displayed</td>
                                                        </tr>
                                                }

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
                                    <div className="table-responsive mt-3">
                                        <table className="table table-striped table-hover">
                                            <tbody>
                                                <tr>
                                                    <th className="text-dark">userid</th>
                                                    <th className="text-dark">wallet</th>
                                                    <th className="text-dark">amount</th>
                                                    <th className="text-dark">status</th>
                                                    <th className="text-dark">date</th>
                                                </tr>
                                                {
                                                    withdrawals ?
                                                        withdrawals.map((withdrawal, i) => (
                                                            <tr key={i}>
                                                                <td>
                                                                    <h5 className="mb-0">{withdrawal.userid}</h5>
                                                                </td>
                                                                <td>{withdrawal.wallet}</td>
                                                                <td>{withdrawal.routing}</td>
                                                                <td>{withdrawal.accountname}</td>
                                                                <td>{withdrawal.accountnumber}</td>
                                                                <td><i className="fa fa-dollar mr-1"></i>{withdrawal.amount}</td>
                                                                <td><span className="badge badge-primary">{withdrawal.status}</span></td>
                                                                <td>{withdrawal.createdAt}</td>
                                                            </tr>
                                                        ))
                                                        :
                                                        <tr>
                                                            <td>no data to be displayed</td>
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

export default Withdrawal
