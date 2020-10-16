import React from "react"
import { HeaderContainer, Title } from "./styles"

interface HeaderProps {}

const Header: React.FC<HeaderProps> = () => {
  return (
    <HeaderContainer>
      <Title>Title</Title>
    </HeaderContainer>
  )
}
export default Header
