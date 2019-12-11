import React from 'react';
import logo from './logo.svg';
import './App.css';
import {Form, Row, Col, FormGroup, Label, Input, Button} from "reactstrap";
import Address from "./Address";
import { MuiPickersUtilsProvider } from '@material-ui/pickers';
import MomentUtils from '@date-io/moment';
import {
    DatePicker,
    TimePicker,
    DateTimePicker,
} from '@material-ui/pickers';


class App extends React.Component {
    renderLeftCol() {
        return (<Col lg={6}>
            <Row>
                <Col>
                    <FormGroup>
                        <Label for="department">Department</Label>
                        <Input type="select" name="department" id="department">
                            <option>Windham</option>
                        </Input>
                    </FormGroup>
                </Col>

                <Col>
                    <FormGroup>
                        <Label for="type">Type</Label>
                        <Input type="select" name="type" id="type">
                            <option>Medical</option>
                            <option>Fire</option>
                            <option>Service</option>
                            <option>MVC</option>
                            <option>CO</option>
                            <option>Other - See Notes</option>
                        </Input>
                    </FormGroup>
                </Col>
            </Row>

            <Row>
                <Col>
                    <Label>Date/Time</Label>
                    <FormGroup>
                        <DateTimePicker value={() => 0} onChange={() => 0} />
                    </FormGroup>
                </Col>
                <Col>
                    <FormGroup>
                        <Label for="type">Determinant</Label>
                        <Input type="select" name="determinant" id="determinant">
                            <option>Alpha</option>
                            <option>Bravo</option>
                            <option>Charlie</option>
                            <option>Delta</option>
                            <option>Echo</option>
                            <option>N/A</option>
                        </Input>
                    </FormGroup>
                </Col>

            </Row>

            <FormGroup>
                <Label for="units">Units</Label>
                <Input type="select" name="units" id="units" multiple>
                    <option>WFD A1</option>
                    <option>WFD A2</option>
                    <option>WFD E1</option>
                    <option>WFD E2</option>
                    <option>WFD E3</option>
                    <option>WFD L1</option>
                    <option>WFD T1</option>
                    <option>WFD T2</option>
                    <option>WFD U1</option>
                    <option>WFD F1</option>
                    <option>WFD C1</option>
                    <option>WFD C2</option>
                    <option>WFD C3</option>
                </Input>
            </FormGroup>
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
