import React from 'react';
import {Form, Row, Col, FormGroup, Label, Input, Button} from "reactstrap";
import Address from "../components/Address";
import rp from "request-promise-native"

import CallInputs from "../components/CallInputs";
import {NotificationManager} from 'react-notifications';
import CallForm from "../components/CallForm";

const DEFAULTS = {
    department: "Windham",
    type: "Medical",
    dateTime: new Date(),
    determinant: "N/A",
    units: [],
    location: {address: "", geoJson: null},
    notes: ""
};

class CreateCall extends React.Component {
    state = DEFAULTS;

    createCall(){
        const call = this.state;
        const options = {
            method: 'POST',
            uri: `${process.env.REACT_APP_API_ENDPOINT}/v1/calls`,
            body: call,
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

    render() {
        const button = <Button color="success" size="lg" onClick={() => this.createCall()}>Create Call</Button>;

        return (
            <div>
                <h1>FD Dispatch - Create Call</h1>
                <CallForm call={this.state} handleCallUpdated={update => this.setState(update)} button={button} />
            </div>
        );
    }
}

export default CreateCall;
