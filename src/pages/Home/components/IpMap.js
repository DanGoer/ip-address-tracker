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

const IpMap = ({ data }) => {
  console.log(JSON.stringify(data.data.location.lat));
  return data ? (
    <MapContainer
      center={{ lat: data.data.location.lat, lng: data.data.location.lng }}
      zoom={13}
    >
      <MapLocation lat={data.data.location.lat} lng={data.data.location.lng} />
      <TileLayer
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />
      <LeafMarker lat={data.data.location.lng} lng={data.data.location.lng} />
    </MapContainer>
  ) : (
    <div></div>
  );
};

export default IpMap;
