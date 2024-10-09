import { styled } from "styled-components";
export const Section = styled.div`
  height: 100vh;
  scroll-snap-align: center;
`;

export const Container = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  margin: 5%;

  gap: 50px;

  @media screen and (max-width: 750px) {
  }
`;

export const Title = styled.h1`
  font-weight: bold;
  font-size: 70px;
`;
export const Form = styled.form`
  width: 500px;
  display: flex;
  flex-direction: column;
  gap: 25px;

  @media screen and (max-width: 750px) {
    /* height: 100%; */
    width: 80%;
  }
`;
export const Input = styled.input`
  padding: 20px;
  background-color: #f7f7f7;
  border: none;
  border-radius: 5px;
`;

export const TextArea = styled.textarea`
  padding: 20px;
  background-color: #f7f7f7;
  border: none;
  border-radius: 5px;
`;
export const Button = styled.button`
  background-color: #da4ea2;
  color: white;
  border: none;
  font-weight: bold;
  cursor: pointer;
  border-radius: 5px;
  padding: 20px;
`;
