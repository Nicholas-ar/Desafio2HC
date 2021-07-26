import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100vh;
`;

export const Box = styled.main`
  width: 90%;
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

  form {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    padding: 20px;

    input {
      width: 100%;
      padding: 15px;
      background: #eee;
      font-size: 16px;
      border: 1px solid #5f9ea0;
      border-radius: 4px;
      margin-bottom: 10px;
    }

    input:focus {
      outline: none;
      border: 3px solid #555;
    }

    button {
      padding: 14px;
      border-radius: 4px;
      border: none;
      background: #2f4f4f;
      color: #fff;
      margin: 2px;
      cursor: pointer;
      flex: 1;
    }

    button:hover {
      background-color: #8fbc8f;
    }
  }
`;
