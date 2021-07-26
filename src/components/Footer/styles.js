import styled from "styled-components";

export const Container = styled.div`
  p {
    color: #999;
    font-size: 12px;
  }
`;

export const Navigation = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  border-top: 1px solid #bbb;
  padding: 20px;

  text-transform: uppercase;

  a {
    padding: 14px;
    border-radius: 4px;
    border: none;
    background: #2f4f4f;
    color: #fff;
    margin: 2px;
    cursor: pointer;
    flex: 1;
    text-decoration: none;
  }

  a:hover {
    background-color: #8fbc8f;
  }
`;
