import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: center;

  div {
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
  }
`;

export const Title = styled.p`
  font-size: 32px;
  line-height: 38px;
  text-align: center;
  font-weight: 400;
  color: black;
  padding: 24px;
  font-family: Arial, Helvetica, sans-serif;
`;

export const ButtonSend = styled.button`
  width: 320px;
  height: 48px;
  padding: 0 24px;
  margin-bottom: 24px;
`;

export const ButtonText = styled.p`
  font-size: 16px;
  font-weight: 600;
`;
