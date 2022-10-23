import styled from "styled-components";

export const ShopCartTotal = styled.div`
  width: 90%;
  height: 30px;
  display: flex;
  flex-flow: row nowrap;
  justify-content: space-between;
  align-items: center;
  margin-top: 20px;

  h2 {
    font-family: var(--font-secondary-inter);
    font-size: var(--font-text-14);
    font-weight: var(--font-weight-600);
  }

  span {
    font-family: var(--font-secondary-inter);
    font-size: var(--font-text-14);
    font-weight: var(--font-weight-600);
    color: var(--color-grey-50);
  }
`;
