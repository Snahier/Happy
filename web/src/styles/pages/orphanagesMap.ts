import { Link } from "react-router-dom"
import styled from "styled-components"
import { Popup as LeafletPopup } from "react-leaflet"

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

export const Popup = styled(LeafletPopup)`
  .leaflet-popup-content-wrapper {
    background-color: rgba(255, 255, 255, 0.8);
    border-radius: 20px;
    box-shadow: none;
  }
  .leaflet-popup-content {
    display: flex;
    justify-content: space-between;
    align-items: center;

    margin: 8px 12px;

    color: #0089a5;
    font-size: 20px;
    font-weight: bold;
  }
  .leaflet-popup-tip-container {
    display: none;
  }
`
export const PopupLink = styled(Link)`
  display: flex;
  justify-content: center;
  align-items: center;

  width: 40px;
  height: 40px;

  background-color: #15c3d6;
  border-radius: 12px;
  box-shadow: 17.2868px 27.6589px 41.4884px rgba(23, 142, 166, 0.16);
`
