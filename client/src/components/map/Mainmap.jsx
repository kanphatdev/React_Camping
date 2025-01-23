import {
  MapContainer,
  Marker,
  Popup,
  TileLayer,
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
    <div className="w-full">
      {/* Hidden Inputs for Lat and Lng */}
      {register && (
        <>
          <input hidden type="text" {...register("lat")} />
          <input hidden type="text" {...register("lng")} />
        </>
      )}

      {/* Label for Map */}
      <div className="mb-4">
        <Label>
          <h1 className="text-lg font-bold text-gray-800">
            Where Are You Located?
          </h1>
        </Label>
        {position && (
          <Label className="text-sm text-gray-500 mt-2 block">
            Coordinates: {position.lat.toFixed(6)}, {position.lng.toFixed(6)}
          </Label>
        )}
      </div>

      {/* Map Container */}
      <div className="relative w-full h-[50vh] sm:h-[60vh] lg:h-[70vh] rounded-lg overflow-hidden shadow-lg">
        <MapContainer
          center={location || DEFAULT_LOCATION}
          zoom={7}
          scrollWheelZoom={true}
          className="h-full w-full"
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
    </div>
  );
};

export default Mainmap;
