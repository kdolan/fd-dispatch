import React from 'react';
import {Form, Row, Col, FormGroup, Label, Input, Button} from "reactstrap";
import Address from "../components/Address";
import rp from "request-promise-native"

import CallInputs from "../components/CallInputs";
import {NotificationManager} from 'react-notifications';
import CallForm from "../components/CallForm";

class EditCall extends React.Component {
    state = {};

    getCall(){
        const options = {
            method: 'GET',
            uri: `${process.env.REACT_APP_API_ENDPOINT}/v1/calls/${this.callId}`,
            json: true // Automatically stringifies the body to JSON
        };

        rp(options)
            .then(call => {
               this.setState(call)
            })
            .catch(err => {
                console.error(err);
                NotificationManager.error('Cannot get call', 'Error');
            })
    }

    componentDidMount() {
        this.getCall();
    }

    componentDidUpdate(prevProps) {
        if (this.callId !== prevProps.match.params.callId) {
            this.getCall();
        }
    }

    updateCall(){
        const call = this.state;
        const options = {
            method: 'PUT',
            uri: `${process.env.REACT_APP_API_ENDPOINT}/v1/calls/${this.callId}`,
            body: call,
            json: true // Automatically stringifies the body to JSON
        };

        rp(options)
            .then(call => {
                NotificationManager.success(`Update Call with ID ${call.id}`, 'Success');
            })
            .catch(err => {
                console.error(err);
                NotificationManager.error('Call Update Failed', 'Error');
            })
    }

    get callId(){
        return this.props.match.params.callId;
    }

    render() {
        if(!this.state.id)
            return <h1>Loading Call {this.callId}</h1>;
        return (
            <div>
                <h1>FD Dispatch - Edit Call {this.callId}</h1>
                {<CallForm call={this.state} handleCallUpdated={update => this.setState(update)} />}
                <Button color="primary" size="lg" onClick={() => this.updateCall()}>Update Call</Button>
            </div>
        );
    }
}

export default EditCall;
