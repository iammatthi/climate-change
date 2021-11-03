import React from 'react';
import { MapContainer, Tooltip, Popup, TileLayer, Marker } from 'react-leaflet'

export default function Map({ onClickMarker }) {
    var markers = [
        {
            name: "Lugano",
            position: [46.01008, 8.96004]
        },
        {
            name: "Locarno",
            position: [46.17086, 8.79953]
        },
        {
            name: "Zurich",
            position: [47.36667, 8.55]
        },
        {
            name: "Geneva",
            position: [46.20222, 6.14569]
        },
        {
            name: "Bern",
            position: [46.94809, 7.44744]
        },
    ];

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
            markers.map(marker => {
                return (
                    <Marker
                        key={marker.name}
                        position={marker.position}
                        eventHandlers={{
                            click: (e) => {
                                onClickMarker(e.latlng);
                            },
                        }}
                    >
                        <Tooltip>{marker.name}</Tooltip>
                    </Marker>
                );
            })
        }
    </MapContainer >;
}
