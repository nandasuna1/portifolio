import { styled } from "styled-components";
import { COLORS } from "../../colors";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  padding: 20px;
  gap: 40px;
  align-items: center;
  justify-content: center;
  background-color: ${COLORS.darkBrown};
  color: #fff;
  min-height: 90vh;

  @media screen and (min-width: 750px) {
    flex-direction: row;
    padding: 0 50px;
    justify-content: space-between;
  }
`;

export const Left = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  @media screen and (min-width: 750px) {
    flex: 1;
  }
`;

export const Right = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  @media screen and (min-width: 750px) {
    flex: 2;
    align-items: flex-start;
  }
`;

export const Frame = styled.div`
  background-color: ${COLORS.lightBrown};
  width: 250px;
  height: 250px;
  border-radius: 100%;
  display: flex;
  align-items: center;
  justify-content: center;

  @media screen and (min-width: 750px) {
    width: 410px;
    height: 410px;
  }
`;

export const Image = styled.img`
  width: 240px;
  height: 240px;
  object-fit: cover;
  border-radius: 100%;

  @media screen and (min-width: 750px) {
    width: 400px;
    height: 400px;
  }
`;

export const TitleBox = styled.div`
  margin-bottom: 35px;
  text-align: center;

  @media screen and (min-width: 750px) {
    text-align: left;
  }
`;

export const SmallTitle = styled.p`
  font-size: 42px;
  letter-spacing: 12px;
  font-weight: 800;

  @media screen and (min-width: 750px) {
    font-size: 74px;
    letter-spacing: 21px;
  }
`;

export const Title = styled.p`
  font-size: 42px;
  font-weight: 400;
  color: ${COLORS.lightBrown};

  @media screen and (min-width: 750px) {
    font-size: 74px;
  }
`;

export const TitleDescription = styled.div`
  font-size: 20px;

  @media screen and (min-width: 750px) {
    font-size: 32px;
  }
`;

export const WhatWeDo = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 10px;
  width: 100%;
  max-width: 600px;
  padding-bottom: 20px;

  @media screen and (min-width: 750px) {
    align-items: flex-start;
    width: 85%;
    max-width: 100%;
  }
`;

export const Description = styled.p`
  font-size: 18px;
  color: white;
  text-align: justify;

  @media screen and (min-width: 750px) {
    font-size: 24px;
  }
`;

export const ButtonBox = styled.div`
  display: flex;
  gap: 20px;
  flex-wrap: wrap;
  justify-content: center;

  @media screen and (min-width: 750px) {
    justify-content: flex-start;
  }
`;
