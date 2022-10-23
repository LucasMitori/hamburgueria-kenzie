import styled from "styled-components";

export const CartProductInputs = styled.div`
  width: 30%;
  min-height: 100%;
  display: flex;
  flex-flow: column nowrap;
  justify-content: space-evenly;
  align-items: center;

  & > button {
    padding: 10px;
    border: none;
    color: var(--color-grey-50);
    background-color: transparent;
    font-family: var(--font-secondary-inter);
    font-size: var(--font-text-12);
    font-weight: var(--font-weight-500);
  }

  & > span {
    font-family: var(--font-secondary-inter);
    font-size: var(--font-text-16);
    font-weight: var(--font-weight-500);
  }
`;
