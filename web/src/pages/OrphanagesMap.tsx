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

      <CreateOrphanage to="">
        <FiPlus size={32} color="#fff" />
      </CreateOrphanage>
    </OrphanagesMapContainer>
  )
}
export default OrphanagesMap
