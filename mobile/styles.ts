import styled from "styled-components/native"
import MapView, { Callout, Marker } from "react-native-maps"
import { Dimensions, Text, TouchableOpacity, View } from "react-native"

export const AppContainer = styled.View`
  flex: 1;
`
export const SMapView = styled(MapView)`
  width: ${Dimensions.get("window").width}px;
  height: ${Dimensions.get("window").height}px;
`
export const SMarker = styled(Marker)``
export const SCallout = styled(Callout)``
export const CalloutContainer = styled(View)`
  justify-content: center;

  width: 160px;
  height: 46px;
  padding: 0 16px;

  background-color: rgba(255, 255, 255, 0.8);
  border-radius: 16px;
`
export const OrphanageName = styled(Text)`
  color: #0089a5;
  font-size: 14px;
`
export const Footer = styled(View)`
  position: absolute;
  left: 24px;
  right: 24px;
  bottom: 32px;

  flex-direction: row;
  justify-content: space-between;
  align-items: center;

  height: 56px;
  padding-left: 24px;

  background-color: #fff;
  border-radius: 20px;

  elevation: 3;
`
export const FoundOrphanages = styled(Text)`
  color: #8fa7b3;
`
export const CreateOrphanage = styled(TouchableOpacity)`
  justify-content: center;
  align-items: center;

  width: 56px;
  height: 56px;

  background-color: #15c3d6;
  border-radius: 20px;
`
