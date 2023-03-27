import React, { useState } from "react";
import ReactMapGL, { Marker, Popup, NavigationControl } from "react-map-gl";
import { FaMapMarkerAlt } from "react-icons/fa";
import "mapbox-gl/dist/mapbox-gl.css";
function Map() {
  const [viewport, setViewport] = useState({
    width: "100vw",
    height: "100vh",
    latitude: -7.1683,
    longitude: 112.23462,
    zoom: 15,
  });
  const markerCoordinates = {
    latitude: -7.1683,
    longitude: 112.23462,
  };
  return (
    <ReactMapGL
      mapStyle={"mapbox://styles/baguscodes/clfklbgib001k01pl6qj25yh6"}
      mapboxAccessToken={process.env.mapbox_key}
      {...viewport}
      onMove={(evt) => setViewport(evt.viewport)}
    >
      <Marker
        latitude={markerCoordinates.latitude}
        longitude={markerCoordinates.longitude}
        anchor="bottom"
      >
        <FaMapMarkerAlt size={42} />
        MI Muhammadiyah 2 Sidomlangean
      </Marker>
    </ReactMapGL>
  );
}

export default Map;
