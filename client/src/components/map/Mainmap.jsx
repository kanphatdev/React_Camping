import {
  MapContainer,
  Marker,
  Popup,
  TileLayer,
  useMap,
  useMapEvents,
} from "react-leaflet";
import "leaflet/dist/leaflet.css";
import { useState } from "react";
import { Label } from "../ui/label";
function LocationMarker({ position, setPosition, setValue }) {
  const map = useMapEvents({
    click(e) {
      setPosition(e.latlng);
      map.flyTo(e.latlng, map.getZoom());
      if (setValue) {
        setValue("lat", e.latlng.lat);
        setValue("lng", e.latlng.lng);
      }
    },
  });

  return position === null ? null : (
    <Marker position={position}>
      <Popup>You are here</Popup>
    </Marker>
  );
}
const Mainmap = ({ register, location, setValue }) => {
  const DEFAULT_LOCATION = [12.678934, 101.133118];
  const [position, setPosition] = useState(null);
  return (
    <div>
      {register && (
        <>
          <input hidden type="text" {...register("lat")} />
          <input hidden type="text" {...register("lng")} />
        </>
      )}

      <Label className="my-4">
        <h1 className="capitalize font-bold ">where are you</h1>
      </Label>
      {position && (
        <Label className="capitalize text-sm text-gray-500">
          coordinates:{position.lat.toFixed(6)} ,{position.lng.toFixed(6)}
        </Label>
      )}

      <MapContainer
        center={location || DEFAULT_LOCATION}
        zoom={7}
        scrollWheelZoom={true}
        className="h-[50vh] rounded-md z-0"
      >
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        <LocationMarker
          position={position}
          setPosition={setPosition}
          setValue={setValue}
        />
      </MapContainer>
    </div>
  );
};
export default Mainmap;
