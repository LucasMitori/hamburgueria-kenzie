import styled from "styled-components";

export const ShopCartCards = styled.ul`
  width: 90%;
  height: 320px;
  display: flex;
  flex-flow: column nowrap;
  justify-content: flex-start;
  align-items: center;
  overflow: auto;
  border-bottom: 2px solid var(--color-grey-20);
  margin-top: 20px;

  h2 {
    font-family: var(--font-secondary-inter);
    font-size: var(--font-subtitle-18);
    font-weight: var(--font-weight-700);
    color: var(--color-black-mode);
  }
  h4 {
    font-family: var(--font-secondary-inter);
    font-size: var(--font-text-14);
    font-weight: var(--font-weight-400);
    color: var(--color-grey-50);
  }
`;
