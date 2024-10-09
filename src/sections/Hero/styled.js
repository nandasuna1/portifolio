import { styled } from "styled-components";

export const Container = styled.div`
  height: 100vh;
  scroll-snap-align: center;
  display: flex;
  padding: 0 50px;

  justify-content: space-between;
  flex-direction: row;
  align-items: center;

  justify-content: space-between;
  background: url("/img/background/bg-notebook.png");

  background-attachment: fixed;
  background-repeat: no-repeat;
`;

export const Left = styled.div`
  flex: 3;
  flex-direction: column;
  justify-content: start;
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

  color: transparent;
  -webkit-text-stroke: 1px;
  -webkit-text-stroke-color: white;

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
export const SubTitle = styled.h2`
  color: #ffffff;
  font-size: 30px;
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
export const Img = styled.img`
  width: 800px;
  height: 600px;
  object-fit: contain;
`;
export const Line = styled.img``;
