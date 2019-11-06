/*!

=========================================================
* Light Bootstrap Dashboard React - v1.3.0
=========================================================

* Product Page: https://www.creative-tim.com/product/light-bootstrap-dashboard-react
* Copyright 2019 Creative Tim (https://www.creative-tim.com)
* Licensed under MIT (https://github.com/creativetimofficial/light-bootstrap-dashboard-react/blob/master/LICENSE.md)

* Coded by Creative Tim

=========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

*/
import React from "react";
// react components used to create a google map
import {
  withScriptjs,
  withGoogleMap,
  GoogleMap,
  Marker
} from "react-google-maps";



const CustomMap = withScriptjs(
  withGoogleMap(props => (
    <GoogleMap
      defaultZoom={10}
      defaultCenter={{ lat: 25.579711, lng: -80.567601 }}
      defaultOptions={{
        scrollwheel: false,
        zoomControl: true
      }}      
    >
      <Marker position={{ lat: 25.579711, lng: -80.567601 }} />
    </GoogleMap>
  ))
);

function Maps({ ...prop }) {
  return (
    <CustomMap
      googleMapURL="https://maps.googleapis.com/maps/api/js?key=AIzaSyBcWBzl3X6tK3xHCBWkIceYQdUnHfmDWCY"
      loadingElement={<div style={{ height: `90%` }} />}
      containerElement={<div style={{ height: `90vh` }} />}
      mapElement={<div style={{ height: `90%` }} />}
    />
  );
}

export default Maps;
