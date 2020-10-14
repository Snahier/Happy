import React from "react"
import {
  Aside,
  City,
  CreateOrphanage,
  Description,
  Footer,
  Header,
  MapMarkerImg,
  OrphanagesMapContainer,
  Popup,
  PopupLink,
  State,
  Title,
} from "../styles/pages/orphanagesMap"

import { FiPlus, FiArrowRight } from "react-icons/fi"

import { Map, TileLayer, Marker } from "react-leaflet"

import { mapIcon } from "../utils/mapIcon"

interface OrphanagesMapProps {}

const OrphanagesMap: React.FC<OrphanagesMapProps> = () => {
  return (
    <OrphanagesMapContainer>
      <Aside>
        <Header>
          <MapMarkerImg />

          <Title>Escolha um orfanato no mapa</Title>
          <Description>
            Visite orfanatos e mude o dia de muitas crianças.
          </Description>
        </Header>

        <Footer>
          <City>Salvador</City>
          <State>Bahia</State>
        </Footer>
      </Aside>

      <Map
        center={[-12.9950098, -38.4681732]}
        zoom={15}
        style={{
          width: "100%",
          height: "100%",
        }}
      >
        <TileLayer
          url={`https://api.mapbox.com/styles/v1/mapbox/light-v10/tiles/256/{z}/{x}/{y}@2x?access_token=${process.env.REACT_APP_MAPBOX_TOKEN}`}
        />

        <Marker position={[-12.9950098, -38.4681732]} icon={mapIcon}>
          <Popup closeButton={false} minWidth={240} maxWidth={240}>
            Lar das meninas
            <PopupLink to="/orphanages/1">
              <FiArrowRight size={20} color="#fff" />
            </PopupLink>
          </Popup>
        </Marker>
      </Map>

      <CreateOrphanage to="/orphanages/create">
        <FiPlus size={32} color="#fff" />
      </CreateOrphanage>
    </OrphanagesMapContainer>
  )
}
export default OrphanagesMap
