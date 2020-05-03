import React from 'react';
import {Form, Row, Col, FormGroup, Label, Input, Button} from "reactstrap";
import Address from "./Address";
import rp from "request-promise-native"

import CallInputs from "./CallInputs";
import {NotificationManager} from 'react-notifications';
import PropTypes from "prop-types";
import UnitsSelect from "./UnitsSelect";

class CallForm extends React.Component {
    handleChange(e){
        const arg = {};
        arg[e.target.name] = e.target.value;
        this.props.handleCallUpdated(arg);
    }

    handleAddressSelect(locationObj){
        this.props.handleCallUpdated({location: locationObj});
    }

    renderLeftCol() {
        return (<Col lg={6}>
            <CallInputs handleChange={(e) => this.handleChange(e)} call={this.props.call}/>
        </Col>);
    }

    renderRightCol() {
        return (<Col>
            <Address call={this.props.call} handleAddressSelect={(locationObj) => this.handleAddressSelect(locationObj)}  />
        </Col>);
    }

    render() {
        return (
                <Form>
                    <Row >
                        {this.renderLeftCol()}
                        {this.renderRightCol()}
                    </Row>
                    <Row style={{"margin-left": 0}}>
                        {this.props.button}
                    </Row>
                </Form>
        );
    }
}

CallForm.propTypes = {
    handleCallUpdated: PropTypes.func.isRequired,
    call: PropTypes.object.isRequired,
};

export default CallForm;
