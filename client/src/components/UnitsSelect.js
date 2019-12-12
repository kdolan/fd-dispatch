import React from "react";
import {Form, Row, Col, FormGroup, Label, Input} from "reactstrap";
import PropTypes from 'prop-types';
import CreatableSelect from 'react-select/creatable';

const DEFAULT_UNITS = [
    { value: 'WFD A1', label: 'WFD A1' },
    { value: 'WFD A2', label: 'WFD A2' },
    { value: 'WFD E1', label: 'WFD E1' },
    { value: 'WFD E2', label: 'WFD E2' },
    { value: 'WFD E3', label: 'WFD E3' },
    { value: 'WFD L1', label: 'WFD L1' },
    { value: 'WFD T1', label: 'WFD T1' },
    { value: 'WFD T2', label: 'WFD T2' },
    { value: 'WFD C1', label: 'WFD C1' },
    { value: 'WFD C2', label: 'WFD C2' },
    { value: 'WFD C3', label: 'WFD C3' },
    { value: 'WFD F1', label: 'WFD F1' },
    { value: 'WFD U1', label: 'WFD U1' },
];


class UnitsSelect extends React.Component {
    handleChange(newValue, actionMeta){
        this.props.handleChange({target: {name: "units", value: newValue}});
    }

    render() {
        return (<FormGroup>
            <Label for="units">Units</Label>
            <CreatableSelect
                isMulti
                onChange={(newValue, actionMeta) => this.handleChange(newValue, actionMeta)}
                options={DEFAULT_UNITS}
                value={this.props.call.units}
            />
        </FormGroup>
        );
    }
}

UnitsSelect.propTypes = {
    handleChange: PropTypes.func.isRequired,
    call: PropTypes.object.isRequired,
};

export default UnitsSelect