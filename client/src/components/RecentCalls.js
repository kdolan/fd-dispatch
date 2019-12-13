import React from "react";
import {Table} from "reactstrap";
import {DateTimePicker} from "@material-ui/pickers";
import PropTypes from 'prop-types';
import UnitsSelect from "./UnitsSelect";
import rp from "request-promise-native";
import {NotificationManager} from "react-notifications";
import {Link} from "react-router-dom";

class RecentCalls extends React.Component {
    state = {calls: []};

    getCalls(){
        const options = {
            method: 'GET',
            uri: `${process.env.REACT_APP_API_ENDPOINT}/v1/calls`,
            json: true // Automatically stringifies the body to JSON
        };

        rp(options)
            .then(calls => {
                this.setState({calls})
            })
            .catch(err => {
                console.error(err);
                NotificationManager.error('Cannot get recent calls', 'Error');
            })
    }

    componentDidMount() {
        this.getCalls();
    }

    render() {
        if(this.state.calls.length === 0)
            return "";
        return (
            <Table striped style={{"margin-top": "20px"}}>
                <thead>
                <tr>
                    <th width="40px">id</th>
                    <th>Department</th>
                    <th>Type</th>
                    <th>Determinant</th>
                    <th>Address</th>
                    <th>Date</th>
                </tr>
                </thead>
                <tbody>
                    {this.state.calls.map(call => {
                        return (
                            <tr>
                                <th><Link to={`/calls/${call.id}`}>{call.id}</Link></th>
                                <td>{call.department}</td>
                                <td>{call.type}</td>
                                <td>{call.determinant}</td>
                                <td>{call.location.address}</td>
                                <td>{new Date(call.dateTime).toLocaleDateString()}</td>
                            </tr>);
                    })}

                </tbody>
            </Table>
        );
    }
}

export default RecentCalls