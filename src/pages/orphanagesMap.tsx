import React from 'react';

import mapMarkerImg from '../images/map-marker.svg';

import { Link } from 'react-router-dom';
import { FiPlus } from 'react-icons/fi'  // Feather Icons

import '../styles/pages/orphanages-map.css'

function OrphanagesMap() {
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
            <div>
                mapa
            </div>

            <Link to="" className="create-orphanage">
                <FiPlus size={32} color="#FFFFFF"  />
            </Link>
        </div>
    );
}

export default OrphanagesMap;