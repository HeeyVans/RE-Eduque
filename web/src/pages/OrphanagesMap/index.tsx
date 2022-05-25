import React, { useEffect, useState } from 'react';
import { FiPlus, FiArrowRight } from 'react-icons/fi';
import { Link } from 'react-router-dom';
import { Map, TileLayer, Marker, Popup } from 'react-leaflet'

import api from '../../services/api';
import MapIcon from '../../utils/mapIcon';
import mapMarkerImg from '../../images/Local.svg'  

import './styles.css'

interface OrphanageProps {
  id: number;
  name: string;
  latitude: number;
  longitude: number;
}


const OrphanagesMap: React.FC = () => {
  const [orphanages, setOrphanages] = useState<OrphanageProps[]>([])

  useEffect(() => {
    api.get('orphanages').then(response => {
      setOrphanages(response.data)
    })

  }, [])


  return (
    <div id="page-map">
      <aside>
        <header>
          <img src={mapMarkerImg} alt=""/>

          <h2>Escolha um ponto de coleta no mapa</h2>
          <p>O meio ambiente está esperando sua ajuda!</p>
        </header>

        <footer>
          <strong>Recife</strong>
          <span>Pernambuco</span>
        </footer>
      </aside>

      <Map
        center={[-8.051354, -34.898966]}
        zoom={15}
        style={{ width: '100%', height: '100%' }}
      >
        <TileLayer 
          // url={`https://api.mapbox.com/styles/v1/mapbox/light-v10/tiles/256/{z}/{x}/{y}@2x?access_token=${process.env.REACT_APP_MAPBOX_TOKEN}`} 
          url="https://a.tile.openstreetmap.org/{z}/{x}/{y}.png"

        />

        {orphanages.map(orphanage => {
          return (
            <Marker 
              key={orphanage.id}
              icon={MapIcon}
              position={[orphanage.latitude, orphanage.longitude]}
            >
              <Popup 
                className="map-popup"
                closeButton={false} 
                minWidth={240} maxWidth={240} 
              >
                {orphanage.name}
                <Link to={`/orphanages/${orphanage.id}`}>
                  <FiArrowRight size={20} color="#fff" />
                </Link>
              </Popup>
            </Marker>
          )
        })}
      </Map>

      <Link to="/orphanages/create" className="create-orphanage">
        <FiPlus size={32} color="#fff" />
      </Link>
    </div>
  )
}
export default OrphanagesMap;