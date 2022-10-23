import styled from "styled-components";

export const ProductInformation = styled.div`
  width: 100%;
  height: 300px;
  padding: 0px 20px;
  display: flex;
  flex-flow: column nowrap;
  justify-content: space-evenly;
  align-items: flex-start;

  h2 {
    font-family: var(--font-secondary-inter);
    font-size: var(--font-subtitle-18);
    font-weight: var(--font-weight-700);
  }
  cite {
    font-family: var(--font-secondary-inter);
    font-size: var(--font-text-12);
    font-weight: var(--font-weight-400);
    color: var(--color-grey-50);
  }
  h3 {
    font-family: var(--font-secondary-inter);
    font-size: var(--font-text-14);
    font-weight: var(--font-weight-600);
    color: var(--color-primary);
  }
  button {
    height: 40px;
    width: 110px;
    background-color: var(--color-primary);
    border: 2px solid var(--color-primary);
    border-radius: var(--radius-8);
    color: var(--color-white-mode);
    font-size: var(--font-text-14);
    font-weight: var(--font-weight-600);
  }
`;
