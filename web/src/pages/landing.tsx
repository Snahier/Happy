import React from "react"
import {
  ContentWrapper,
  Main,
  Description,
  Title,
  PageLandingContainer,
  Location,
  City,
  State,
  EnterApp,
} from "../styles/pages/landing"

import logoImg from "../Assets/logo.svg"
import { FiArrowRight } from "react-icons/fi"

interface LandingProps {}

const Landing: React.FC<LandingProps> = () => {
  return (
    <PageLandingContainer>
      <ContentWrapper>
        <img src={logoImg} alt="Happy" />

        <Main>
          <Title>Leve felicidade para o mundo</Title>
          <Description>
            Visite orfanatos e mude o dia de muitas crianças.
          </Description>
        </Main>

        <Location>
          <City>Salvador</City>
          <State>Bahia</State>
        </Location>

        <EnterApp href="">
          <FiArrowRight size={26} color="rgba(0, 0, 0, 0.6)" />
        </EnterApp>
      </ContentWrapper>
    </PageLandingContainer>
  )
}
export default Landing
