import React, { useState } from 'react'
import {
    useRouteMatch, useHistory
} from "react-router-dom";
import axios from 'axios'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';



import Header from './Header'
import Subbody from './Subbody'
import HeroSection from './HeroSection';
import Footer from './Footer'

import loading from './../images/Ripple-1s-200px.gif'


function Login() {
    const match = useRouteMatch()

    let history = useHistory();

    const notify = (message) => toast(`🦄 ${message}`, {
        position: "top-center",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
    });


    const [isloading, setisloading] = useState(false)

    const toggleloading = () => {
        setisloading(e => !e);
    }

    const [email, setemail] = useState('')
    const [password, setpassword] = useState('')

    const submitForm = e => {
        e.preventDefault()

        const formdata = new FormData()
        formdata.append('email', email)
        formdata.append('password', password)

        toggleloading()

        axios({
            method: 'POST',
            url: ' http://localhost/rald/cent-coin(btc_website)/centcoin-api/api/auth/login.php',
            data: formdata
        })
            .then(res => {
                if (res.data.data.user.isadmin) {
                    notify(res.data.message)
                    sessionStorage.setItem('admindata', res.data.data.user)
                    sessionStorage.setItem('admin', res.data.data.user.userid)
                    sessionStorage.setItem('username', res.data.data.user.username)
                    sessionStorage.setItem('email', res.data.data.user.email)
                    sessionStorage.setItem('hashadmin', res.data.data.hash)
                    setTimeout(() => {
                        history.push('/admin/')
                    }, 600);
                } else {
                    notify(res.data.message)
                    sessionStorage.setItem('userdata', res.data.data.user)
                    sessionStorage.setItem('user', res.data.data.user.userid)
                    sessionStorage.setItem('username', res.data.data.user.username)
                    sessionStorage.setItem('hashuser', res.data.data.hash)
                    setTimeout(() => {
                        history.push('/dashboard/')
                    }, 600);
                }
            })
            .catch(err => {
                notify(err.response.data.message)
            })
            .finally(e => {
                setTimeout(() => {
                    toggleloading()
                }, 1000)
            })

        return false
    }

    return (
        <>
            <Header />
            <HeroSection>
                <center>

                    <div className="col-md-4 m-auto pb-5" style={{ color: "#fafafa" }}>
                        <h2 className="text-white pt-5 h1" data-aos="fade-up" data-aos-duration="3000">
                            {match.url}
                        </h2>
                        <h6 className="text-white pt-2" data-aos="fade-up" data-aos-duration="3000">
                            Login to  your centcoin account
                        </h6><br></br>
                    </div>
                </center>
            </HeroSection>
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
            <Subbody>
                <div className="container">
                    <div className="row m-3">
                        <div className="col-md-6 m-auto bg-light shadow pt-3">
                            <center>
                                <h2 className="text-primary">Login</h2>
                            </center>
                            <form action="" method="post" className="form-group mt-4">
                                <div className="input-group mb-3">
                                    <div className="input-group-prepend">
                                        <span className="input-group-text" id="basic-addon1"><i className="fa fa-envelope"></i></span>
                                    </div>
                                    <input type="text" onChange={e => setemail(e.target.value)} value={email} className="form-control" placeholder="your email" aria-label="your email" aria-describedby="basic-addon1" required />
                                </div>
                                <div className="input-group mb-3">
                                    <div className="input-group-prepend">
                                        <span className="input-group-text" id="basic-addon2"><i className="fa fa-lock"></i></span>
                                    </div>
                                    <input type="password" onChange={e => setpassword(e.target.value)} value={password} className="form-control" placeholder="password" aria-label="your password" aria-describedby="basic-addon2" required />
                                </div>
                                {
                                    isloading ? <button className="btn btn-primary text-white float-right m-2"><img src={loading} style={{ width: '30px', height: '30px' }} alt="" /> Login</button> : <button onClick={submitForm} className="btn btn-primary text-white float-right m-2">Login</button>
                                }
                            </form>
                            <a href="./signup">not a member yet , signup</a>
                        </div>
                    </div>
                </div>
            </Subbody>
            <Footer />
        </>
    )
}

export default Login
