import { styled } from "styled-components"
import { COLORS } from "../../colors"

export const Section = styled.div`
  height: 100vh;
  padding: 50px;
  scroll-snap-align: center;
  justify-content: center;
  background: ${COLORS.darkBrown};
  color: ${COLORS.lightBrown}
`

export const Container = styled.div`
display: grid;
  grid-template: 150px / auto auto auto;
  grid-gap: 10px;
  /* background: ${COLORS.lightBrown}; */
`
export const Title = styled.h1`
  font-size: 64px;
  margin-bottom: 20px;
`

export const Card = styled.div`
  border-radius: 10px;
  background: ${COLORS.lightBrown};
  color: ${COLORS.darkBrown};
  padding: 10px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;

  max-width: 25%;
  min-height: fit-content;
`

export const CardTitle = styled.h2`
  font-size: 24px;
`

export const CardDescription = styled.p`
  font-size: 16px;
  margin: 20px 0;
`

export const CardLink = styled.button`
  font-size: 16px;
  font-weight: bold;
  color: ${COLORS.lightBrown};
  text-decoration: none;

  background: ${COLORS.darkBrown};
  border: 2px solid ${COLORS.darkBrown};
  border-radius: 5px;
  padding: 10px;
  cursor: pointer;

  &:hover {
    background: ${COLORS.lightBrown};
    color: ${COLORS.darkBrown};
  }
`