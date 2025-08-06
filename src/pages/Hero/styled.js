import { styled } from "styled-components";
import { COLORS } from "../../colors";

export const Container = styled.div`
  height: 90vh;
  display: flex;
  padding: 0 50px;

  justify-content: space-between;
  flex-direction: row;
  align-items: center;

  justify-content: space-between;
  background-color: ${COLORS.darkBrown};
  color: #fff;

`;

export const Left = styled.div`
  flex: 1;
  justify-items: center;
  gap: 20px;

  @media screen and (max-width: 750px) {
    /* height: 100%; */
    flex: 0;
  }
`;

export const TitleBox = styled.div`
  margin-bottom: 35px;
`;
export const Title = styled.p`
  font-size: 74px;
  line-height: 70px;
  font-weight: 400;

  color: ${COLORS.lightBrown};

  @media screen and (max-width: 750px) {
    font-size: 50px;
    line-height: normal;
  }
`;
export const SmallTitle = styled.p`
  font-size: 74px;
  letter-spacing: 21px;
  line-height: 70px;
  font-weight: 800;

  @media screen and (max-width: 750px) {
    font-size: 50px;
    line-height: normal;
    letter-spacing: 15px;
  }
`;

export const TitleDescription = styled.p`
  font-size: 32px;

  @media screen and (max-width: 750px) {
    font-size: 24px;
  }
`;
export const WhatWeDo = styled.div`
  display: flex;
  flex-direction: column;
  align-items: start;
  gap: 10px;

  padding-bottom: 10px;
`;

export const Right = styled.div`
  flex: 2;
  display: flex;
  flex-direction: column;
  justify-content: center;

  @media screen and (max-width: 750px) {
    flex: 1;
  }
`;
export const Description = styled.p`
  font-size: 24px;
  color: white;

  @media screen and (max-width: 750px) {
    font-size: 18px;
  }
`;


export const Image = styled.img`
width: 400px;
height: 400px;
object-fit: cover;
border-radius: 100%;
`
export const Frame = styled.div`
background-color: ${COLORS.lightBrown};
width: 410px;
height: 410px;
border-radius: 100%;

display: flex;
align-items: center;
justify-content: center;
`

export const ButtonBox = styled.div`
display: flex;
gap: 30px
`