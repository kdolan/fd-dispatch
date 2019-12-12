import {Map, GoogleApiWrapper, Marker} from 'google-maps-react';
import React from "react";
import LocationSearchInput from "./LocationSearchInput";
import PropTypes from 'prop-types';
import {Form, Row, Col, FormGroup, Label, Input} from "reactstrap";
import UnitsSelect from "./UnitsSelect";

const mapStyles = {
    width: '100%',
    height: '100%',
};

class Address extends React.Component {
    handleAddressSelect({address, location}){
        this.props.handleAddressSelect({address, location});
    }

    getMarker(){
        const call = this.props.call;
        if(!call.location)
            return null;
        return <Marker position={{lat: call.location.latitude, lng: call.location.longitude}} title={call.address}/>
    }

    render() {
        const call = this.props.call;
        return (
            <div>
                <Row>
                    <LocationSearchInput onSelect={({address, location}) => this.handleAddressSelect({address, location})}/>
                </Row>
                <Row>
                    Address: {call.address}
                </Row>
                <Row>
                    <div style={{height: "50px"}}>
                        <Map
                            google={this.props.google}
                            zoom={12}
                            initialCenter={{lat: 42.8006441, lng: -71.3042}}
                        >
                            {this.getMarker()}
                        </Map>
                    </div>
                </Row>
            </div>
        );
    }
}

Address.propTypes = {
    handleAddressSelect: PropTypes.func.isRequired,
    call: PropTypes.object.isRequired,
};

export default GoogleApiWrapper({
    apiKey: process.env.REACT_APP_GOOGLE_MAPS_API_KEY
})(Address);