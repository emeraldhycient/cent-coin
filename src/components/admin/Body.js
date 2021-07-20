import React from 'react'

import cover from '../../images/cent-coin-logo (1)/vector/default-monochrome-black.svg'
import { logout } from '../auth/auth'


function Body(props) {
    return (
        <>
            <header>
                <nav className="navbar bg-white shadow">
                    <img src={cover} alt="" className="navbar-brand offset-md-2 offset-sm-2" style={{ width: '130px', height: '70px' }} />
                    <div className='text-right'>
                        <i className="fa fa-power-off fa-2x text-danger" onClick={logout}></i>
                    </div>
                </nav>
            </header>
            <div className="container pt-3">
                {props.children}
            </div>
        </>
    )
}

export default Body
