import React from 'react';
import './App.css';
import CreateCall from "./organisims/CreateCall";
import {MuiPickersUtilsProvider} from "@material-ui/pickers";
import MomentUtils from "@date-io/moment";
import {NotificationContainer} from 'react-notifications';
import RecentCalls from "./components/RecentCalls";
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
} from "react-router-dom";
import CallsRoute from "./routes/CallsRoute";

class App extends React.Component {

    render() {
        return (
            <Router>
                <div className="App">
                    <MuiPickersUtilsProvider utils={MomentUtils}>
                        <Switch>
                            <Route path="/calls">
                                <CallsRoute/>
                            </Route>
                            <Route path="/">
                                <li>
                                    <Link to="/calls">Calls</Link>
                                </li>
                            </Route>
                        </Switch>
                        <NotificationContainer/>
                    </MuiPickersUtilsProvider>
                </div>
            </Router>
        );
    }
}

export default App;
