import React from "react";
import GoogleMapReact from "google-map-react";
const AnyReactComponent = ({ text }) => <div>{text}</div>;
export const Map = () => {
  const defaultProps = {
    center: {
      lat: 26.548064,
      lng: 86.757911,
    },
    zoom: 11,
  };

  return (
    // Important! Always set the container height explicitly
    <div style={{ height: "100vh", width: "100%" }}>
      <GoogleMapReact
        bootstrapURLKeys={{ key: "" }}
        defaultCenter={defaultProps.center}
        defaultZoom={defaultProps.zoom}
      >
        <AnyReactComponent lat={26.548064} lng={86.757911} text="My Marker" />
      </GoogleMapReact>
    </div>
  );
};
