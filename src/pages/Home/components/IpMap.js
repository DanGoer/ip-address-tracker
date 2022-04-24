import React, { useEffect } from "react";
import { MapContainer, TileLayer, useMap } from "react-leaflet";
import LeafMarker from "../../../components/elements/LeafMarker";

function MapLocation({ lng, lat }) {
  useEffect(() => {
    map.panTo([lat, lng]);
  }, [lat, lng]);

  const map = useMap();
  return null;
}

const IpMap = ({ lat, lng }) => {
  console.log(JSON.stringify(lat + lng));
  return lng ? (
    <MapContainer center={{ lat: "38.8951", lng: "-77.0364" }} zoom={13}>
      <MapLocation lat={lat} lng={lng} />
      <TileLayer
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />
      <LeafMarker lat={lat} lng={lng} />
    </MapContainer>
  ) : (
    <div></div>
  );
};

export default IpMap;
