import {Map, GoogleApiWrapper, Marker} from 'google-maps-react';
import PlacesAutocomplete from 'react-places-autocomplete';
import {
    geocodeByAddress,
    geocodeByPlaceId,
    getLatLng,
} from 'react-places-autocomplete';
import React from "react";
import LocationSearchInput from "./LocationSearchInput";
import {Form, Row, Col, FormGroup, Label, Input} from "reactstrap";

const mapStyles = {
    width: '100%',
    height: '100%',
};

class Address extends React.Component {
    state = {
        address: "",
        location: null
    };

    getMarket(){
        if(!this.state.location)
            return null;
        return <Marker position={{lat: this.state.location.latitude, lng: this.state.location.longitude}} title={this.state.address}/>
    }

    render() {
        return (
            <div>
                <Row>
                    <LocationSearchInput onSelect={({address, location}) => this.setState({address, location})}/>
                </Row>
                <Row>
                    Address: {this.state.address}
                </Row>
                <Row>
                    <div style={{height: "50px"}}>
                        <Map
                            google={this.props.google}
                            zoom={12}
                            initialCenter={{lat: 42.8006441, lng: -71.3042}}
                        >
                            {this.getMarket()}
                        </Map>
                    </div>
                </Row>
            </div>
        );
    }
}

export default GoogleApiWrapper({
    apiKey: process.env.REACT_APP_GOOGLE_MAPS_API_KEY
})(Address);