import styled from "styled-components"
import backgroundImage from "../../Assets/landing.svg"

export const PageLandingContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  width: 100vw;
  height: 100vh;

  background: linear-gradient(329.54deg, #29b6d1 0%, #00c7c7 100%);
`

export const ContentWrapper = styled.div`
  position: relative;

  display: flex;
  align-items: flex-start;
  flex-direction: column;
  justify-content: space-between;

  width: 100%;
  max-width: 1100px;
  height: 100%;
  max-height: 680px;

  background: url(${backgroundImage}) no-repeat 80% center;
`

export const Main = styled.main`
  max-width: 350px;
`
export const Title = styled.h1`
  font-size: 76px;
  font-weight: 900;
  line-height: 70px;
`
export const Description = styled.p`
  margin-top: 40px;
  font-size: 24px;
  line-height: 34px;
`

export const Location = styled.div`
  position: absolute;
  right: 0;
  top: 0;

  display: flex;
  flex-direction: column;

  font-size: 24px;
  line-height: 34px;
  text-align: right;
`
export const City = styled.strong`
  font-weight: 800;
`
export const State = styled.span``

export const EnterApp = styled.a`
  position: absolute;
  right: 0;
  bottom: 0;

  display: flex;
  align-items: center;
  justify-content: center;

  width: 80px;
  height: 80px;

  background: #ffd666;
  border-radius: 30px;

  transition: background-color 0.2s;

  &:hover {
    background: #96feff;
  }
`
