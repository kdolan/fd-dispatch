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

    handleAddressSelect({address, location}){
        this.props.handleCallUpdated({address, location});
    }

    renderLeftCol() {
        return (<Col lg={6}>
            <CallInputs handleChange={(e) => this.handleChange(e)} call={this.props.call}/>
        </Col>);
    }

    renderRightCol() {
        return (<Col>
            <Address call={this.props.call} handleAddressSelect={({address, location}) => this.handleAddressSelect({address, location})}  />
        </Col>);
    }

    render() {
        return (
                <Form>
                    <Row>
                        {this.renderLeftCol()}
                        {this.renderRightCol()}
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
