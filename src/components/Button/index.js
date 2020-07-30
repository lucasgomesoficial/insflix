import styled from "styled-components";

const Button = styled.button`
  color: var(--primary);
  border: 1px solid var(--primary);
  background-color: white;
  box-sizing: border-box;
  cursor: pointer;
  padding: 16px 24px;
  font-style: normal;
  font-weight: bold;
  font-size: 16px;
  outline: none;
  border-radius: 5px;
  text-decoration: none;
  display: inline-block;
  opacity: .7;
  transition: opacity .3s;

  &:hover,
  &:focus {
    opacity: 1;
    color: var(--white);
    border: 1px solid var(--primary);
    background-color: var(--primary);
  }
`;

export default Button