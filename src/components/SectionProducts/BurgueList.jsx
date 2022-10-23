import styled from "styled-components";

export const BurguerList = styled.ul`
  width: 90%;
  height: 90%;
  display: flex;
  flex-flow: row nowrap;
  justify-content: space-between;
  align-items: center;
  overflow: auto;

  @media screen and (min-width: 480px) {
  }
  @media screen and (min-width: 768px) {
  }
  @media screen and (min-width: 1024px) {
    height: 90%;
    width: 100%;
    display: flex;
    align-items: flex-start;
    justify-content: flex-start;
    flex-flow: row wrap;
    padding-top: 50px;
    gap: 20px;
  }
  @media screen and (min-width: 1200px) {
  }
`;
