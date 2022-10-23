import styled from "styled-components";

export const Search = styled.form`
  width: 90%;
  margin: 0 auto;
  height: 40%;
  display: flex;
  flex-flow: row nowrap;
  justify-content: space-evenly;
  align-items: center;
  background-color: var(--color-white-mode);
  border: 2px solid var(--color-grey-20);
  border-radius: var(--radius-8);
  input {
    width: 70%;
    height: 80%;
    border: none;
    padding-left: 10px;
    background-color: var(--color-white-mode);
    outline: none;
  }
  input::placeholder {
    color: var(--color-grey-20);
    font-family: var(--font-secondary-inter);
    font-style: normal;
    font-size: var(--font-text-16);
    font-weight: var(--font-weight-400);
  }
  button {
    width: 25%;
    height: 70%;
    background-color: var(--color-primary);
    border: 2px solid var(--color-primary);
    border-radius: var(--radius-8);
    color: var(--color-white-mode);
    font-family: var(--font-secondary-inter);
    font-size: var(--font-text-14);
  }
  button:hover {
    background-color: var(--color-secondary);
    border: var(--color-primary);
  }

  /*-----------------------
  ~* Media Queries *~
  -------------------------*/

  @media screen and (min-width: 480px) {
  }
  @media screen and (min-width: 768px) {
    width: 500px;
    height: 80%;
    margin: 0px;
  }
  @media screen and (min-width: 1024px) {
  }
  @media screen and (min-width: 1200px) {
  }
`;
