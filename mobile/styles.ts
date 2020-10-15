import styled from "styled-components/native"
import MapView, { Marker } from "react-native-maps"
import { Dimensions } from "react-native"

export const AppContainer = styled.View`
  flex: 1;
`
export const SMapView = styled(MapView)`
  width: ${Dimensions.get("window").width}px;
  height: ${Dimensions.get("window").height}px;
`
export const SMarker = styled(Marker)``
