import { Marker, Popup } from "react-leaflet";

function LeafMarker({ lat, lng }) {
  return (
    <Marker position={{ lat: lat, lng: lng }}>
      <Popup>Your IP coordinates!</Popup>
    </Marker>
  );
}

export default LeafMarker;
