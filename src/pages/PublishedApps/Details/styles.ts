import styled from "styled-components";
import { COLORS } from "../../../colors";

export const Section = styled.div`
  height: 90vh;
  padding: 30px;
  scroll-snap-align: center;
  justify-content: center;
  background: ${COLORS.darkBrown};
  color: ${COLORS.lightBrown};
  display: flex;
`;

export const Title = styled.h1`
  font-size: 64px;
  margin-bottom: 20px;
`;

export const SubTitle = styled.h2`
  font-size: 32px;
  margin-bottom: 20px;
`;

export const Container = styled.div`
  display: flex;
  flex-direction: column;
`;

export const Image = styled.img`
  width: 15vw;
  align-self: center;
  margin-right: 20%;
  border-radius: 10px;
`;

export const Description = styled.p`
  font-size: 18px;
  margin-bottom: 20px;

  /* max-width: 50%; */

  white-space: pre-line;
  vertical-align: bottom;
`;
