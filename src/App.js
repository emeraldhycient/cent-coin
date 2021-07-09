import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom"

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
        <Route path="/dashboard/" exact component={Home} />
        <Route path="/dashboard/deposit" component={Deposit} />
        <Route path="/dashboard/withdraw" component={Withdrawal} />
        <Route path="/dashboard/All-transactions" component={Alltransactions} />
        <Route path="/dashboard/settings" component={Settings} />
        {/* user dashboard */}

        {/* admin dashboard */}
        <Route path='/admin/' exact component={Admin_index} />

        {/* admin dashboard */}


        <Route path="*" exact component={Four0Four} />
      </Switch>
    </Router>
  );
}

export default App;
