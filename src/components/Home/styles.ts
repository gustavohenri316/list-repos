import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100vw;
  height: 100vh;
`
export const Content = styled.div`
  width: 539px;
  height: 437px;
  background: #992BDC;
  border-radius: 20px;

  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  gap: 2.75rem;

  img {
    width: 80px;
    height: 80px;
  }
  input {
    width: 271px;
    height: 57px;
    background: #E9E9E9;
    border-radius: 20px;
    border: none;
    padding-left: 32px;
    font-weight: 600;
    font-size: 18px;
    color: #838383;

    &::placeholder {
      font-family: 'Inter', sans-serif;
      font-style: normal;
      font-weight: 600;
      font-size: 18px;
      color: #838383;
    }

  }
  button {
    width: 175px;
    height: 57px;
    background: rgba(205, 98, 255, 0.8);
    border-radius: 20px;
    border: none;
    cursor: pointer;

    font-family: 'Inter', sans-serif;
    font-style: normal;
    font-weight: 700;
    font-size: 18px;
    color: #DDDDDD;


    &:hover {
      filter: brightness(0.9);
    }
    &:disabled {
      cursor: not-allowed;
      filter: brightness(1);
    }
  }
`