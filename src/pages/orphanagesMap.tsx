import React from 'react';

import mapMarkerImg from '../images/map-marker.svg';

import { Link } from 'react-router-dom';
import { FiArrowRight, FiPlus } from 'react-icons/fi';  // Feather Icons

import { Map, Marker, Popup, TileLayer } from 'react-leaflet';
import Leaflet from 'leaflet';

import 'leaflet/dist/leaflet.css';

import '../styles/pages/orphanages-map.css'
import Sidebar from '../components/Sidebar';

const mapIcon = Leaflet.icon( { 
    iconUrl: mapMarkerImg,
    iconSize: [58, 68],
    iconAnchor: [29, 68],
    popupAnchor: [0, -60]
});

interface Orphanage {
    id: number;
    latitude: number;
    longitude: number;
    name: string;
  }

function OrphanagesMap() {
    return ( 
        <div id="page-map">
            <Sidebar /> 
            <Map 
                center= {[-3.0955915,-60.0606396]}
                zoom= {15}
                style = { { width:'100%', height:'100%' } }
            >
                <TileLayer url="https://a.tile.openstreetmap.org/{z}/{x}/{y}.png" />

                <Marker 
                    icon={ mapIcon} 
                    position={ [-3.0955915,-60.0606396]} >
                        
                    <Popup closeButton={false} minWidth={240} maxWidth={240} className="map-popup">
                        Lar das meninas
                        <Link to="/orphanages/1" >
                            <FiArrowRight size={20} color="#FFFFFF" />
                        </Link> 
                    </Popup>


                </Marker>

                
                
            </Map>

            <Link to="/orphanages/create" className="create-orphanage">
                <FiPlus size={32} color="#FFFFFF"  />
            </Link>
        </div>
    );
}

export default OrphanagesMap;