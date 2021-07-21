import React, { useState, useEffect } from 'react'
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom"


import ProtectedRoutes from "./components/auth/ProtectedRoute";
import Protectadmin from "./components/auth/Protectadmin";

import Index from "./components/index";
import About from "./components/About";
import Faq from "./components/Faq";
import Contact from "./components/Contact"
import Login from "./components/Login";
import Signup from "./components/Signup";
import Four0Four from "./components/Four0Four"
/* user dashboard */
import Home from "./components/dashboard/Home";
import Deposit from "./components/dashboard/Deposit";
import Withdrawal from "./components/dashboard/Withdrawal";
import Settings from "./components/dashboard/Settings";
import Alltransactions from "./components/dashboard/Alltransactions";
/* user dashboard */

/* admin dashboard */
import Admin_index from './components/admin/Admin_index'
import Members from './components/admin/Members'
import Deposits from './components/admin/Deposits'
import Withdrawals from './components/admin/Withdrawals'
import Packages from './components/admin/Packages'
import Payment_settings from './components/admin/Payment_settings'
import Referrals from './components/admin/Referrals'
import Messages from './components/admin/Messages'
import Emails from './components/admin/Emails'
import Admin_settings from './components/admin/Admin_settings'
/* admin dashboard */


function App() {

  return (
    <Router>
      <Switch>
        <Route path="/" exact component={Index} />
        <Route path="/about" component={About} />
        <Route path="/faq" component={Faq} />
        <Route path="/contact" component={Contact} />
        <Route path="/login" component={Login} />
        <Route path="/signup" component={Signup} />
        {/* user dashboard */}
        <ProtectedRoutes path="/dashboard/" exact component={Home} />
        <ProtectedRoutes path="/dashboard/deposit" component={Deposit} />
        <ProtectedRoutes path="/dashboard/withdraw" component={Withdrawal} />
        <ProtectedRoutes path="/dashboard/All-transactions" component={Alltransactions} />
        <ProtectedRoutes path="/dashboard/settings" component={Settings} />
        {/* user dashboard */}

        {/* admin dashboard */}
        <Protectadmin path='/admin/' exact component={Admin_index} />
        <Protectadmin exact path='/admin/members' component={Members} />
        <Protectadmin exact path='/admin/members/:userid' component={Members} />
        <Protectadmin path='/admin/deposits' component={Deposits} />
        <Protectadmin path='/admin/withdrawals' component={Withdrawals} />
        <Protectadmin path='/admin/packages' component={Packages} />
        <Protectadmin path='/admin/payment_settings' component={Payment_settings} />
        <Protectadmin path='/admin/Referrals' component={Referrals} />
        <Protectadmin path='/admin/messages' component={Messages} />
        <Protectadmin path='/admin/Email' component={Emails} />
        <Protectadmin path='/admin/settings' component={Admin_settings} />

        {/* admin dashboard */}


        <Route path="*" exact component={Four0Four} />
      </Switch>
    </Router>
  );
}

export default App;
