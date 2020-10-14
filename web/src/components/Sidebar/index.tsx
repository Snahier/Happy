import React from "react"
import { SidebarContainer } from "./styles"

import mapMarkerImg from "../../Assets/map-marker.svg"
import { FiArrowLeft } from "react-icons/fi"
import { useHistory } from "react-router-dom"

interface SidebarProps {}

const Sidebar: React.FC<SidebarProps> = () => {
  const { goBack } = useHistory()

  return (
    <SidebarContainer>
      <img src={mapMarkerImg} alt="Happy" />

      <footer>
        <button type="button" onClick={goBack}>
          <FiArrowLeft size={24} color="#FFF" />
        </button>
      </footer>
    </SidebarContainer>
  )
}
export default Sidebar
