import { styled } from "styled-components";

export const Section = styled.div`
  height: 100vh;
  scroll-snap-align: center;
  display: flex;
  flex-direction: column;
  justify-content: center;

  background-color: #070b1e;
`;

export const Container = styled.div`
  display: flex;
  height: 100vh;
  scroll-snap-align: center;
  justify-content: space-between;

  @media screen and (max-width: 750px) {
    flex-direction: column;
  }
`;

export const Left = styled.div`
  flex: 2;
  align-content: center;
  justify-items: right;

  background: #2f313e;

  @media screen and (max-width: 750px) {
    display: flex;
    flex: 1;
    flex-direction: row;
  }
`;

export const Description = styled.p`
  font-size: 20px;
  color: #fff;
  text-align: start;

  width: 80%;

  @media screen and (max-width: 750px) {
    width: 90%;
  }
`;

export const Right = styled.div`
  flex: 3;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-content: center;

  height: 70%;
  align-self: center;
  justify-self: center;
  margin-left: 30px;

  @media screen and (max-width: 750px) {
    height: 100%;
  }
`;

export const TitleWrapper = styled.div`
  margin: auto 0;
`;

export const Title = styled.h2`
  color: transparent;
  -webkit-text-stroke: 2px #bbd6e3;
  font-size: 50px;
  @media screen and (max-width: 750px) {
    font-size: 35px;
  }
`;

export const SubTitle = styled.p`
  font-size: 24px;

  @media screen and (max-width: 750px) {
    flex-wrap: wrap;
  }
`;

export const Links = styled.div`
  margin-top: auto;

  display: flex;
  gap: 20px;

  @media screen and (max-width: 750px) {
    margin-top: 10px;
  }
`;

export const MyImg = styled.img`
  width: 70%;
  max-width: 300px;
  margin-left: 25%;

  object-fit: contain;

  border-radius: 20px;
  @media screen and (max-width: 750px) {
    margin-left: 10%;
    height: 200px;
    margin: 10px;
  }
`;
