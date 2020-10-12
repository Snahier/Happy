import { Link } from "react-router-dom"
import styled from "styled-components"

import mapMarkerImg from "../../Assets/map-marker.svg"

export const OrphanagesMapContainer = styled.div`
  position: relative;

  display: flex;

  width: 100vw;
  height: 100vh;

  .leaflet-container {
    z-index: 5;
  }
`

export const Aside = styled.aside`
  display: flex;
  flex-direction: column;
  justify-content: space-between;

  width: 440px;
  padding: 80px;

  background: linear-gradient(329.54deg, #29b6d1 0%, #00c7c7 100%);
`
export const Header = styled.header``
export const MapMarkerImg = styled.img.attrs({
  src: mapMarkerImg,
  alt: "Happy",
})``
export const Title = styled.h2`
  margin-top: 64px;

  font-size: 40px;
  font-weight: 800;
  line-height: 42px;
`
export const Description = styled.p`
  margin-top: 24px;

  line-height: 28px;
`
export const Footer = styled.footer`
  display: flex;
  flex-direction: column;

  line-height: 24px;
`
export const City = styled.strong`
  font-weight: 800;
`
export const State = styled.span``

export const CreateOrphanage = styled(Link)`
  position: absolute;
  right: 40px;
  bottom: 40px;
  z-index: 10;

  display: flex;
  justify-content: center;
  align-items: center;

  width: 64px;
  height: 64px;

  background: #14c3d6;
  border-radius: 20px;

  transition: background-color 0.2s;

  &:hover {
    background: #17d6eb;
  }
`
