import React from "react";
import { MapContainer, Tooltip, TileLayer, Marker } from 'react-leaflet'

import cities from "../data/cities";

export default function Map({ onClickMarker }) {
  return <MapContainer
    style={{ height: "100%" }}
    center={[46.801111, 8.226667]}
    zoom={7.8}
    scrollWheelZoom={false}
    doubleClickZoom={false}
    closePopupOnClick={false}
    dragging={false}
    zoomSnap={false}
    zoomDelta={false}
    trackResize={false}
    touchZoom={false}
    zoomControl={false}
  >
    <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
    {
      cities.map(city => {
        return (
          <Marker
            key={city.name}
            position={[city.position.lat, city.position.lng]}
            eventHandlers={{
              click: (e) => {
                onClickMarker(city);
              },
            }}
          >
            <Tooltip>{city.name}</Tooltip>
          </Marker>
        );
      })
    }
  </MapContainer >;
}
