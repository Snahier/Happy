import styled from "styled-components/native"
import MapView, { Callout, Marker } from "react-native-maps"
import { Dimensions, Text, View } from "react-native"

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
