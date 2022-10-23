import styled from "styled-components";

export const MainBody = styled.main`
  width: 100%;
  height: 100%;
  display: flex;
  flex-flow: column nowrap;
  justify-content: space-between;
  padding: 0 5%;
  align-items: center;

  @media screen and (min-width: 480px) {
  }
  @media screen and (min-width: 768px) {
  }
  @media screen and (min-width: 1024px) {
    height: 100vh;
    flex-flow: row nowrap;
  }
  @media screen and (min-width: 1200px) {
  }
`;
