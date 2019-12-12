import React from 'react';
import {Form, Row, Col, FormGroup, Label, Input, Button} from "reactstrap";
import Address from "./Address";
import rp from "request-promise-native"

import CallInputs from "./CallInputs";
import {NotificationManager} from 'react-notifications';

const DEFAULTS = {
    department: "Windham",
    type: "Medical",
    dateTime: new Date(),
    determinant: "N/A",
    units: [],
    location: null,
    address: "",
    notes: ""
};

class CreateCall extends React.Component {
    state = DEFAULTS;

    createCall(){
        const options = {
            method: 'POST',
            uri: `${process.env.REACT_APP_API_ENDPOINT}/v1/calls`,
            body: this.state,
            json: true // Automatically stringifies the body to JSON
        };

        rp(options)
            .then(call => {
                NotificationManager.success(`Call Created with ID ${call.id}`, 'Success');
                this.setState(DEFAULTS)
            })
            .catch(err => {
                console.error(err);
                NotificationManager.error('Call Create Failed', 'Error');
            })
    }

    handleChange(e){
        const arg = {};
        arg[e.target.name] = e.target.value;
        this.setState(arg)
    }

    handleAddressSelect({address, location}){
        console.log(address, location);
        this.setState({address, location});
    }

    renderLeftCol() {
        return (<Col lg={6}>
            <CallInputs handleChange={(e) => this.handleChange(e)} call={this.state}/>
        </Col>);
    }

    renderRightCol() {
        return (<Col>
            <Address call={this.state} handleAddressSelect={({address, location}) => this.handleAddressSelect({address, location})}  />
        </Col>);
    }

    render() {
        return (
            <div>
                <h1>FD Dispatch - Create Call</h1>
                <Form>
                    <Row>
                        {this.renderLeftCol()}
                        {this.renderRightCol()}
                    </Row>
                </Form>
                <Button color="primary" size="lg" onClick={() => this.createCall()}>Create Call</Button>
            </div>
        );
    }
}

export default CreateCall;
