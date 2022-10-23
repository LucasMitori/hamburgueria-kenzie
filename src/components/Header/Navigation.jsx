import styled from "styled-components";

export const Navigation = styled.div`
  background-color: var(--color-grey-0);
  width: 90%;
  height: 140px;
  display: flex;
  flex-flow: column nowrap;
  justify-content: space-evenly;
  align-items: center;

  @media screen and (min-width: 480px) {
  }
  @media screen and (min-width: 768px) {
    flex-flow: row nowrap;
    display: flex;
    justify-content: space-between;
  }
  @media screen and (min-width: 1024px) {
  }
  @media screen and (min-width: 1200px) {
  }
`;
