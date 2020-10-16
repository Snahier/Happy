import React, { useEffect, useState } from "react"
import {
  OrphanagesMapContainer,
  CalloutContainer,
  CreateOrphanage,
  Footer,
  FoundOrphanages,
  OrphanageName,
  SCallout,
  SMapView,
  SMarker,
} from "./styles"
import { PROVIDER_GOOGLE } from "react-native-maps"
import { useNavigation } from "@react-navigation/native"

import mapMarker from "../../assets/map-marker.png"
import { Feather } from "@expo/vector-icons"
import api from "../../services/api"

interface OrphanagesMapProps {}

interface Orphanage {
  id: number
  name: string
  latitude: number
  longitude: number
}

const OrphanagesMap: React.FC<OrphanagesMapProps> = () => {
  const navigation = useNavigation()

  const [orphanages, setOrphanages] = useState<Orphanage[]>([])

  useEffect(() => {
    api.get("orphanages").then(({ data }) => {
      setOrphanages(data)
    })
  }, [])

  function handleNavigateToOrphanageDetails(id: number) {
    navigation.navigate("OrphanageDetails", { id })
  }

  function handleNavigateToCreateOrphanage() {
    navigation.navigate("SelectMapPosition")
  }

  return (
    <OrphanagesMapContainer>
      <SMapView
        provider={PROVIDER_GOOGLE}
        initialRegion={{
          latitude: -12.9965896,
          longitude: -38.458835,
          latitudeDelta: 0.008,
          longitudeDelta: 0.008,
        }}
      >
        {orphanages.map(({ id, latitude, longitude, name }) => (
          <SMarker
            key={id}
            icon={mapMarker}
            calloutAnchor={{
              x: 2.7,
              y: 0.8,
            }}
            coordinate={{
              latitude,
              longitude,
            }}
          >
            <SCallout
              tooltip
              onPress={() => handleNavigateToOrphanageDetails(id)}
            >
              <CalloutContainer>
                <OrphanageName>{name}</OrphanageName>
              </CalloutContainer>
            </SCallout>
          </SMarker>
        ))}
      </SMapView>

      <Footer>
        <FoundOrphanages>
          {orphanages.length} orfanatos encontrados
        </FoundOrphanages>

        <CreateOrphanage onPress={handleNavigateToCreateOrphanage}>
          <Feather name="plus" size={20} color="#fff" />
        </CreateOrphanage>
      </Footer>
    </OrphanagesMapContainer>
  )
}
export default OrphanagesMap
