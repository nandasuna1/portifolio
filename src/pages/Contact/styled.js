import { styled } from "styled-components";
import { COLORS } from "../../colors";

export const Container = styled.div`
  background-color:${COLORS.darkBrown};
  height: 90vh;
  display: flex;
  padding: 0 50px;

  justify-content: space-between;
  flex-direction: row;
  align-items: center;

  justify-content: space-between;
  color: #fff;
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
