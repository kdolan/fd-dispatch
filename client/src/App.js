import React from 'react';
import logo from './logo.svg';
import './App.css';
import {Form, Row, Col, FormGroup, Label, Input, Button} from "reactstrap";
import Address from "./components/Address";
import { MuiPickersUtilsProvider } from '@material-ui/pickers';
import MomentUtils from '@date-io/moment';
import {
    DatePicker,
    TimePicker,
    DateTimePicker,
} from '@material-ui/pickers';
import CallInputs from "./components/CallInputs";

const DEFAULTS = {
    department: "Windham",
    type: "Medical",
    dateTime: new Date(),
    determinant: "N/A",
    units: [],
    lat: null,
    long: null,
    address: ""
};

class App extends React.Component {
    state = DEFAULTS;

    handleChange(e){
        console.log(e);
        const arg = {};
        arg[e.target.name] = e.target.value;
        console.log(arg);
        this.setState(arg)
    }

    renderLeftCol() {
        return (<Col lg={6}>
            <CallInputs handleChange={(e) => this.handleChange(e)} call={this.state}/>
        </Col>);
    }

    renderRightCol() {
        return (<Col>
            <Address/>
        </Col>);
    }

    render() {
        return (
            <MuiPickersUtilsProvider utils={MomentUtils}>
                <div className="App">
                    <h1>FD Dispatch - Create Call</h1>
                    <Form>
                        <Row>
                            {this.renderLeftCol()}
                            {this.renderRightCol()}
                        </Row>
                    </Form>
                    <Button color="primary" size="lg">Create Call</Button>
                </div>
            </MuiPickersUtilsProvider>
        );
    }
}

export default App;
