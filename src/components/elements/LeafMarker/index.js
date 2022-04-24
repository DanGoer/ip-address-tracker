import { Marker } from "react-leaflet";

function LeafMarker({ lat, lng }) {
  return <Marker position={{ lat: lat, lng: lng }}></Marker>;
}

export default LeafMarker;
