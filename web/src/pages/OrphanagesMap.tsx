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
  State,
  Title,
} from "../styles/pages/orphanagesMap"

import { FiPlus } from "react-icons/fi"

import { Map, TileLayer } from "react-leaflet"
import "leaflet/dist/leaflet.css"

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
      </Map>

      <CreateOrphanage to="">
        <FiPlus size={32} color="#fff" />
      </CreateOrphanage>
    </OrphanagesMapContainer>
  )
}
export default OrphanagesMap
