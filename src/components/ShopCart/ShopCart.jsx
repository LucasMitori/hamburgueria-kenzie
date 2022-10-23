import styled from "styled-components";

export const ShopCart = styled.div`
  background-color: var(--color-grey-0);
  width: 92%;
  height: 65vh;
  margin: 0 auto;
  display: flex;
  flex-flow: column nowrap;
  justify-content: flex-start;
  align-items: center;
  border-radius: var(--radius-6);

  & > button {
    margin-top: 20px;
    width: 90%;
    height: 60px;
    background-color: var(--color-grey-20);
    border: 2px solid var(--color-grey-20);
    border-radius: var(--radius-8);
    color: var(--color-grey-50);
    font-family: var(--font-secondary-inter);
    font-size: var(--font-text-16);
    font-weight: var(--font-weight-600);
  }

  @media screen and (min-width: 480px) {
    margin: 0;
    width: 400px;
    height: 550px;
  }
  @media screen and (min-width: 768px) {
    margin: 0;
    width: 370px;
    height: 550px;
  }
  @media screen and (min-width: 1024px) {
    margin: 0;
    width: 370px;
    height: 550px;
  }
  @media screen and (min-width: 1200px) {
  }
`;
