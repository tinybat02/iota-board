import React from 'react'
import { Map as LeafletMap, TileLayer, Marker, Popup } from 'react-leaflet'

const TestMap = () => {
    return (
        <LeafletMap
            center={[48.263077, 11.667316]}
            zoom={14}
            maxZoom={22}
            attributionControl={true}
            zoomControl={true}
            doubleClickZoom={true}
            scrollWheelZoom={true}
            dragging={true}
            animate={true}
            easeLinearity={0.35}
            style={{height: 400, width: 800}}
        >
            <TileLayer
                url='http://{s}.tile.osm.org/{z}/{x}/{y}.png'
            />
            <Marker position={[48.263077, 11.667316]}>
                <Popup>
                    Popup for any custom information.
                </Popup>
            </Marker>
        </LeafletMap>
    )
}

export default TestMap
