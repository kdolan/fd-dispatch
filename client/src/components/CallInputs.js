import React from "react";
import {Form, Row, Col, FormGroup, Label, Input} from "reactstrap";
import {DateTimePicker} from "@material-ui/pickers";
import PropTypes from 'prop-types';
import UnitsSelect from "./UnitsSelect";

class CallInputs extends React.Component {
    handleMultiSelectChange(e){
        let options = e.target.options;
        let value = [];
        for (let i = 0, l = options.length; i < l; i++) {
            if (options[i].selected) {
                value.push(options[i].value);
            }
        }
        this.props.handleChange({target: {name: "units", value}});
    }

    render() {
        const call = this.props.call;
        const handleChange = this.props.handleChange;
        return (
            <div>
                <Row>
                    <Col>
                        <FormGroup>
                            <Label for="department">Department</Label>
                            <Input type="select" name="department" id="department" value={call.department} onChange={handleChange}>
                                <option>Windham</option>
                            </Input>
                        </FormGroup>
                    </Col>

                    <Col>
                        <FormGroup>
                            <Label for="type">Type</Label>
                            <Input type="select" name="type" id="type" value={call.type} onChange={handleChange}>
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
                            <DateTimePicker name="dateTime" value={call.dateTime} onChange={moment => handleChange({target: {name: "dateTime", value: moment.toDate()}})} />
                        </FormGroup>
                    </Col>
                    <Col>
                        <FormGroup>
                            <Label for="type">Determinant</Label>
                            <Input type="select" name="determinant" id="determinant" value={call.determinant} onChange={handleChange}>
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

                <UnitsSelect call={call} handleChange={handleChange}/>

                <FormGroup>
                    <Label for="notes">Text Area</Label>
                    <Input type="textarea" name="notes" id="notes" value={call.notes} onChange={handleChange}/>
                </FormGroup>
            </div>
        );
    }
}

CallInputs.propTypes = {
    handleChange: PropTypes.func.isRequired,
    call: PropTypes.object.isRequired,
};

export default CallInputs