import styled from "styled-components";

export const Header = styled.header`
  background-color: var(--color-grey-0);
  width: 100%;
  height: 140px;
  box-shadow: 0px 8px 42px 0px var(--color-primary);
  display: flex;
  flex-flow: column nowrap;
  justify-content: space-evenly;
  align-items: center;

  @media screen and (min-width: 480px) {
  }
  @media screen and (min-width: 768px) {
    height: 80px;
  }
  @media screen and (min-width: 1024px) {
  }
  @media screen and (min-width: 1200px) {
  }
`;
