import { StatusBar } from "expo-status-bar"
import React from "react"
import { StyleSheet, Text, View } from "react-native"
import { PROVIDER_GOOGLE } from "react-native-maps"
import {
  AppContainer,
  CalloutContainer,
  CreateOrphanage,
  Footer,
  FoundOrphanages,
  OrphanageName,
  SCallout,
  SMapView,
  SMarker,
} from "./styles"

import mapMarker from "./src/assets/map-marker.png"
import { Feather } from "@expo/vector-icons"

export default function App() {
  return (
    <AppContainer>
      <SMapView
        provider={PROVIDER_GOOGLE}
        initialRegion={{
          latitude: -12.9965896,
          longitude: -38.458835,
          latitudeDelta: 0.008,
          longitudeDelta: 0.008,
        }}
      >
        <SMarker
          icon={mapMarker}
          calloutAnchor={{
            x: 2.7,
            y: 0.8,
          }}
          coordinate={{
            latitude: -12.9965896,
            longitude: -38.458835,
          }}
        >
          <SCallout tooltip onPress={() => {}}>
            <CalloutContainer>
              <OrphanageName>Lar das meninas</OrphanageName>
            </CalloutContainer>
          </SCallout>
        </SMarker>
      </SMapView>

      <Footer>
        <FoundOrphanages>2 orfanatos encontrados</FoundOrphanages>

        <CreateOrphanage onPress={() => {}}>
          <Feather name="plus" size={20} color="#fff" />
        </CreateOrphanage>
      </Footer>
    </AppContainer>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
})
