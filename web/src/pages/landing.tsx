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
          >
        </EnterApp>
      </ContentWrapper>
    </PageLandingContainer>
  )
}
export default Landing
