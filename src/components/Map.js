import React from 'react';
import { MapContainer, Tooltip, TileLayer, Marker } from 'react-leaflet'

import cities from "../data/cities";

export default function Map({ onClickMarker }) {
  return <MapContainer
    center={[46.801111, 8.226667]}
    zoom={7.8}
    scrollWheelZoom={false}
    doubleClickZoom={false}
    closePopupOnClick={false}
    dragging={true}
    zoomSnap={false}
    zoomDelta={false}
    trackResize={false}
    touchZoom={false}
    zoomControl={false}
  >
    <TileLayer
      attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
      url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
    />
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
