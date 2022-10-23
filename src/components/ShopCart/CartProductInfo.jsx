import styled from "styled-components";

export const CartProductInfo = styled.div`
  width: 40%;
  height: 100%;
  display: flex;
  flex-flow: column nowrap;
  justify-content: space-evenly;
  align-items: flex-start;

  & > h2 {
    font-family: var(--font-secondary-inter);
    font-size: var(--font-subtitle-18);
    font-weight: var(--font-weight-700);
  }

  & > h3 {
    font-family: var(--font-secondary-inter);
    font-size: var(--font-text-12);
    font-weight: var(--font-weight-400);
    color: var(--color-grey-50);
  }
`;
