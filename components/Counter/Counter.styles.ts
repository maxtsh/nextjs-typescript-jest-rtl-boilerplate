import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 1rem;

  .title {
    font-size: 300%;
    font-weight: 900;
  }

  .number {
    font-size: 200%;
    font-weight: 900;
  }

  .btn {
    font-size: 110%;
    font-weight: 700;
    width: 150px;
    padding: 0.5rem;
    margin: 1rem;
    cursor: pointer;
    border-radius: 4px;
    border: none;
    outline: none;
    background-color: #eee;
  }
`;
