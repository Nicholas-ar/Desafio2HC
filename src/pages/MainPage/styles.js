import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100vh;
`;

export const Box = styled.main`
  width: 90%;
  height: 90%;
  max-height: 450px;
  max-width: 900px;
  border-radius: 10px;
  background: #fff;
  padding: 10px;
  border: 2px solid #5f9ea0;
  text-align: center;

  h2 {
    padding-top: 20px;
    color: #2f4f4f;
  }
`;

export const Cards = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 20px;

  div {
    border: 1px solid #5f9ea0;
    margin: 10px;
    padding: 50px;
    border-radius: 8px;

    color: #2f4f4f;
    font-weight: bold;
    font-size: 20px;

    p {
      margin-top: 10px;
    }

    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    flex: 1;
  }

  @media (max-width: 660px) {
    flex-direction: column;

    div {
      width: 100%;
    }
  }
`;
