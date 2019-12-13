import React from 'react';
import './App.css';
import CreateCall from "./components/CreateCall";
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
import NewCallPage from "./pages/NewCallPage";

class App extends React.Component {

    render() {
        return (
            <Router>
                <div className="App">
                    <MuiPickersUtilsProvider utils={MomentUtils}>
                        <Switch>
                            <Route path="/">
                                <NewCallPage/>
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
