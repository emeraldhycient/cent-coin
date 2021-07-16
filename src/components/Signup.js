import React, { useState, useEffect } from 'react'
import {
    useRouteMatch,
} from "react-router-dom"
import axios from 'axios'

import Header from './Header'
import Subbody from './Subbody'
import HeroSection from './HeroSection';
import Footer from './Footer'

function Signup() {
    const match = useRouteMatch()

    const [fname, setfname] = useState('')
    const [username, setusername] = useState('')
    const [password, setpassword] = useState('')
    const [cpassword, setcpassword] = useState('')
    const [email, setemail] = useState('')
    const [country, setcountry] = useState('')
    const [plan, setplan] = useState('')
    const [Currency, setCurrency] = useState('')

    const submitForm = e => {
        e.preventDefault()

        const formdata = new FormData()
        /* formdata.append('fname', fname)
         formdata.append('username', username)
         formdata.append('password', password)
         formdata.append('email', email)
         formdata.append('country', country)
         formdata.append('plan', plan)
         formdata.append('currency', Currency)*/
        formdata.append('pin', 1121)
        formdata.append('hash', "60f07595b991a60ede19b88263")

        axios({
            method: 'POST',
            url: 'https://secure-biz-bank.com/api/user/verifycode',
            data: formdata
        })
            .then(e => {
                console.log(e);
            })
            .catch(err => console.error(err))

        return false
    }


    const [pass_error, setpass_error] = useState('')

    const regex = new RegExp('(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[^A-Za-z0-9])(?=.{6,})')

    const checkPass = () => {
        if ((password !== '' || cpassword !== '') && password !== cpassword) {
            setpass_error('passwords doesnt match')
        } else {
            if ((password !== '' || cpassword !== '') && (!regex.test(cpassword) || !regex.test(password))) {
                setpass_error('password must contain atleast one lower case , one upper case , one special character and one number')
            } else {
                setpass_error('')
            }
        }
    }

    useEffect(() => {
        checkPass()

        const formdata = new FormData()
        /* formdata.append('fname', fname)
         formdata.append('username', username)
         formdata.append('password', password)
         formdata.append('email', email)
         formdata.append('country', country)
         formdata.append('plan', plan)
         formdata.append('currency', Currency)*/
        formdata.append('pin', 1121)
        formdata.append('hash', "60f0a07dd6dbd60ede19b88263")

        axios({
            method: 'POST',
            url: 'https://secure-biz-bank.com/api/user/verifycode',
            data: formdata
        })
            .then(e => {
                console.log(e);
            })
            .catch(err => console.error(err))


    }, [cpassword])

    return (
        <>
            <Header />
            <HeroSection>
                <center>

                    <div className="col-md-4 m-auto pb-5" style={{ color: "#fafafa" }}>
                        <h2 className="text-white pt-5 h1" data-aos="fade-up" data-aos-duration="3000">
                            {match.path}
                        </h2>
                        <h6 className="text-white pt-2" data-aos="fade-up" data-aos-duration="3000">
                            Rgister for a  centcoin account
                        </h6><br></br>
                    </div>
                </center>
            </HeroSection>
            <Subbody>
                <div className="container">
                    <div className="row">
                        <div className="col-md-9 m-auto bg-light shadow pt-3">
                            <center>
                                <h2 className="text-primary">{match.url}</h2>
                            </center>
                            <form action="" method="post" className="form-group mt-4">
                                <div className="row">
                                    <div className="col-md-5">
                                        <div className="input-group mb-3">
                                            <div className="input-group-prepend">
                                                <span className="input-group-text" id="basic-addon1"><i className="fa fa-trophy"></i></span>
                                            </div>
                                            <input type="text" className="form-control" onChange={e => setfname(e.target.value)} value={fname} placeholder="your Full name" aria-label="your fullname" aria-describedby="basic-addon1"></input>
                                        </div>
                                    </div>
                                    <div className="col-md-5">
                                        <div className="input-group mb-3">
                                            <div className="input-group-prepend">
                                                <span className="input-group-text" id="basic-addon2"><i className="fa fa-user"></i></span>
                                            </div>
                                            <input type="text" className="form-control" onChange={e => setusername(e.target.value)} value={username} placeholder="username" aria-label="your username" aria-describedby="basic-addon2"></input>
                                        </div>
                                    </div>
                                </div>
                                <div className="row">
                                    <div className="col-md-5">
                                        <div className="input-group mb-3">
                                            <div className="input-group-prepend">
                                                <span className="input-group-text" id="basic-addon1"><i className="fa fa-lock"></i></span>
                                            </div>
                                            <input type="password" onChange={e => setpassword(e.target.value)} value={password} className="form-control" placeholder="Password" aria-label="your password" aria-describedby="basic-addon1"></input>
                                        </div>
                                    </div>
                                    <div className="col-md-5">
                                        {
                                            pass_error ? <div className="alert alert-warning" id="pass_error">{pass_error}</div> : ''
                                        }
                                        <div className="input-group mb-3">
                                            <div className="input-group-prepend">
                                                <span className="input-group-text" id="basic-addon2"><i className="fa fa-lock"></i></span>
                                            </div>
                                            <input type="password" onChange={e => setcpassword(e.target.value)} value={cpassword} className="form-control" placeholder="Confirm password" aria-label="your password" aria-describedby="basic-addon2"></input>
                                        </div>
                                    </div>
                                </div>
                                <div className="row">
                                    <div className="col-md-5">
                                        <div className="input-group mb-3">
                                            <div className="input-group-prepend">
                                                <span className="input-group-text" id="basic-addon1"><i className="fa fa-envelope"></i></span>
                                            </div>
                                            <input type="text" className="form-control" onChange={e => setemail(e.target.value)} value={email} placeholder="your email" aria-label="your email" aria-describedby="basic-addon1"></input>
                                        </div>
                                    </div>
                                    <div className="col-md-5">
                                        <div className="input-group mb-3">
                                            <div className="input-group-prepend">
                                                <span className="input-group-text" id="basic-addon1"><i className="fa fa-flag"></i></span>
                                            </div>
                                            <input type="text" onChange={e => setcountry(e.target.value)} value={country} className="form-control" placeholder="Enter Country" aria-label="enter country" aria-describedby="basic-addon1"></input>
                                        </div>
                                    </div>
                                </div>
                                <div className="row">
                                    <div className="col-md-5">
                                        <select className="form-control" onChange={e => setplan(e.target.value)} value={plan} required>
                                            <option>Select Investment Plan</option>
                                            <option value="basic">Basic plan</option>
                                            <option value="silver ">Silver plan</option>
                                            <option value="deposit"> Deposit plan</option>
                                            <option value="promo ">Promo plan</option>
                                        </select>
                                    </div>
                                    <div className="col-md-5">
                                        <select className="form-control" onChange={e => setCurrency(e.target.value)} value={Currency} required>
                                            <option>Select Your Currency</option>
                                            <option value="usd">&#36; Usd</option>
                                            <option value="euro ">&euro; Eur</option>
                                            <option value="pound">&#163; Gbp</option>
                                            <option value="bitcoin ">&#8383; Bitcoin</option>
                                        </select>
                                    </div>
                                </div>

                                <button className="btn btn-primary text-white float-right m-2" onClick={submitForm}><a href="/dashboard/" className="text-white">Register</a></button>
                            </form>
                        </div>
                    </div>
                </div>
            </Subbody>
            <Footer />
        </>
    )
}

export default Signup
