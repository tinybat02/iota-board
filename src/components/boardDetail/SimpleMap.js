import React from 'react'
import { Map as LeafletMap, TileLayer, Marker, Popup } from 'react-leaflet'
import { Grid } from 'semantic-ui-react'
import PropTypes from 'prop-types'

const SimpleMap = ({ coordination }) => {
    return (
        <LeafletMap
            center={coordination}
            zoom={14}
            maxZoom={22}
            attributionControl={true}
            zoomControl={true}
            doubleClickZoom={true}
            scrollWheelZoom={true}
            dragging={true}
            animate={true}
            easeLinearity={0.35}
            style={{height: 350, width: '400'}}
        >
            <TileLayer
                url='http://{s}.tile.osm.org/{z}/{x}/{y}.png'
            />
            <Marker position={coordination}>
                <Popup>
                    Popup for any custom information.
                </Popup>
            </Marker>
        </LeafletMap>       
    )
}

SimpleMap.propTypes = {
    coordination: PropTypes.arrayOf(PropTypes.number).isRequired
}

export default SimpleMap

/* <Grid celled>
            <div style={{height: 400}}>
                <LeafletMap
                    center={coordination}
                    zoom={14}
                    maxZoom={18}            
                >
                <TileLayer
                    url='http://{s}.tile.osm.org/{z}/{x}/{y}.png'
                />
                <Marker position={coordination}>
                <Popup>
                    Popup for any custom information.
                </Popup>
                </Marker>
            </LeafletMap>
            </div>
        </Grid> */