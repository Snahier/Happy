import React from "react"
import { BorderlessButton } from "react-native-gesture-handler"
import { HeaderContainer, Title } from "./styles"
import { Feather } from "@expo/vector-icons"
import { useNavigation } from "@react-navigation/native"
import { View } from "react-native"

interface HeaderProps {
  title: string
  showCancel?: boolean
}

const Header: React.FC<HeaderProps> = ({ title, showCancel = true }) => {
  const navigation = useNavigation()

  function handleGoToHomePage() {
    navigation.navigate("OrphanagesMap")
  }

  return (
    <HeaderContainer>
      <BorderlessButton onPress={navigation.goBack}>
        <Feather name="arrow-left" size={24} color="#15b6d6" />
      </BorderlessButton>

      <Title>{title}</Title>

      {showCancel ? (
        <BorderlessButton onPress={handleGoToHomePage}>
          <Feather name="x" size={24} color="#ff669d" />
        </BorderlessButton>
      ) : (
        <View />
      )}
    </HeaderContainer>
  )
}
export default Header
