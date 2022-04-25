import React, { useEffect } from "react";
import { MapContainer, Marker, Popup, TileLayer, useMap } from "react-leaflet";
import LeafMarker from "../../../components/elements/LeafMarker";
import "../../../App.css";

function MapLocation({ lng, lat }) {
  useEffect(() => {
    map.panTo([lat, lng]);
  }, []);

  const map = useMap();
  return null;
}

const IpMap = ({ data }) => {
  console.log(JSON.stringify(data.data.location.lat));
  return data ? (
    <MapContainer
      className="h-[65vh] relative"
      center={[data.data.location.lat, data.data.location.lng]}
      zoom={13}
      scrollWheelZoom={false}
    >
      <TileLayer
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />
      <Marker position={[data.data.location.lat, data.data.location.lng]}>
        <Popup>
          A pretty CSS3 popup. <br /> Easily customizable.
        </Popup>
      </Marker>
    </MapContainer>
  ) : (
    <div className="w-full h-full">hallo</div>
  );
};

export default IpMap;

// className="w-full absolute items-center bg-center flex justify-center"

// <MapLocation lat={data.data.location.lat} lng={data.data.location.lng} />

// <LeafMarker lat={data.data.location.lng} lng={data.data.location.lng} />
