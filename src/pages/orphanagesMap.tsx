import React, {useEffect, useState} from 'react';
import api from '../services/api';

import { Link } from 'react-router-dom';
import { FiArrowRight, FiPlus } from 'react-icons/fi';  // Feather Icons

import { Map, Marker, Popup, TileLayer } from 'react-leaflet';

import 'leaflet/dist/leaflet.css';
import mapMarkerImg from '../images/map-marker.svg';

import '../styles/pages/orphanages-map.css'
import mapIcon from '../utils/mapIcon';

interface Orphanage {
    id: number;
    latitude: number;
    longitude: number;
    name: string;
}

function OrphanagesMap() {

    const [orphanages, setOrphanages] = useState<Orphanage[]>([]);

    console.log(orphanages);

    useEffect( () => {
        api.get('orphanages').then( response => {
            setOrphanages(response.data);
        })
    } , []
    )
    return ( 
        <div id="page-map">
            <aside>
                <header>
                    <img src={mapMarkerImg} alt="Happy"></img>

                    <h2>Escolha um orfanato no mapa</h2>
                    <p>Muitas crianças estão esperando a sua visita :)</p>
                </header>

                <footer>
                    <strong>Manaus</strong>
                    <span>Amazonas</span>
                </footer>
            </aside>
            <Map 
                center= {[-3.0955915,-60.0606396]}
                zoom= {15}
                style = { { width:'100%', height:'100%' } }
            >
                <TileLayer url="https://a.tile.openstreetmap.org/{z}/{x}/{y}.png" />

                { orphanages.map( orphanage => {
                    return(
                        <Marker 
                            icon={ mapIcon} 
                            position={ [orphanage.latitude,orphanage.longitude]}
                            key = {orphanage.id} 
                            >

                            <Popup closeButton={false} minWidth={240} maxWidth={240} className="map-popup">
                                {orphanage.name}
                                <Link to={`/orphanages/${orphanage.id}`} >
                                    <FiArrowRight size={20} color="#FFFFFF" />
                                </Link> 
                            </Popup>
                        </Marker>
                    )
                })}

            </Map>

            <Link to="/orphanages/create" className="create-orphanage">
                <FiPlus size={32} color="#FFFFFF"  />
            </Link>
        </div>
    );
}

export default OrphanagesMap;