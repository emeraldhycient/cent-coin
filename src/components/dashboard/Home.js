import React, { useState, useEffect } from 'react'
import { useAtom } from 'jotai'
import {
    useRouteMatch,
} from 'react-router-dom'
import axios from 'axios'

import Sidebar from './Sidebar'
import Body from './Body'
import Transactions from './Transactions'
import Charts from './Charts'

import { sidebarData } from './sidebarData'



function Home() {

    const match = useRouteMatch()


    const [user, setuser] = useState(sessionStorage.getItem('user'))
    const [hash, sethash] = useState(sessionStorage.getItem('hashuser'))
    const [userdetails, setuserdetails] = useState('')
    const [totaldeposit, settotaldeposit] = useState('')


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

    const fetchdetails = () => {
        let formdata = new FormData()
        formdata.append('hash', hash)
        formdata.append('userid', user)
        axios({
            method: 'POST',
            url: 'https://cent-coin.com/api/user/userdetails.php',
            data: formdata
        }).then(res => {
            setuserdetails(res.data.data.user)
        })
            .catch(err => console.log(err))
    }

    const getdeposit = () => {
        let formdata = new FormData()
        formdata.append('userid', user)
        axios({
            method: 'POST',
            url: 'https://cent-coin.com/api/user/totaldeposit.php',
            data: formdata
        }).then(res => {
            settotaldeposit(res.data.data.amount)
        })
            .catch(err => console.log(err))
    }

    useEffect(() => {
        fetchdetails()
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
                                            <h6><strong className="text-dark">{userdetails.username}</strong></h6>
                                            <h6 className="text-muted"><i className="fa fa-phone text-primary mr-2 mr-md-3"></i></h6>
                                            <h6><i className="fa fa-envelope text-primary mr-2 mr-md-3"></i><a href="mailto:example@gmail.com" className="text-muted">{userdetails.email}</a></h6>
                                            <h6 className="text-muted"><i className="fa fa-money text-primary mr-2 mr-md-3"></i>Your currency ({userdetails.currency})</h6>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-md-5 mt-auto ml-auto mr-auto mb-4 shadow bg-white p-0">
                                    <h5 className="ml-2 text-dark">wallet</h5>
                                    <div style={{ width: '100%', height: '1px', backgroundColor: '#cacaca', marginBottom: '30px' }}></div>
                                    <h6 className="text-primary mb-5 ml-2">Registered on : {userdetails.createdAt}</h6>
                                    <h6 className="text-dark mb-5 ml-2">referral link <span className="text-primary">https://cent-coin.com/signup/{user}</span></h6>
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
                                        <h5 className="pl-3 mt-4 text-muted"><i className="fa fa-dollar"></i> {userdetails.accountbalance ? userdetails.accountbalance : '00.00'}</h5>
                                    </div>
                                    <div className="bg-dark w-25" id="iconholder">
                                        <i className="fa fa-balance-scale fa-3x text-white"></i>
                                    </div>
                                </div>

                                <div className="col-md-5 mt-auto ml-auto mr-auto mb-4 shadow bg-white " id="box">
                                    <div className=" pb-3">
                                        <h4 className="pl-1 text-dark">Total Deposit</h4>
                                        <div style={{ width: '100%', height: '1px', backgroundColor: '#cacaca' }}></div>
                                        <h5 className="pl-3 mt-4 text-muted"><i className="fa fa-dollar mr-1"></i>{totaldeposit ? totaldeposit : '00.00'}</h5>
                                    </div>
                                    <div className="bg-dark w-25" id="iconholder">
                                        <i className="fa fa-puzzle-piece fa-3x text-white"></i>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <Charts />
                    </Body>
                </div>
            </div>
        </>
    )
}

export default Home
