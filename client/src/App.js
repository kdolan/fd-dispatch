import React from 'react';
import './App.css';
import CreateCall from "./components/CreateCall";
import {MuiPickersUtilsProvider} from "@material-ui/pickers";
import MomentUtils from "@date-io/moment";
import {NotificationContainer} from 'react-notifications';


class App extends React.Component {

    render() {
        return (
            <div className="App">
                <MuiPickersUtilsProvider utils={MomentUtils}>
                    <CreateCall/>
                    <NotificationContainer/>
                </MuiPickersUtilsProvider>
            </div>
        );
    }
}

export default App;
