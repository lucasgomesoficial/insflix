import styled from "styled-components";

const Button = styled.button`
  background-color: var(--primary);
  border: 1px solid var(--primary);
  border-radius: 4px;
  color: var(--white);
  cursor: pointer;
  font-size: 16px;
  font-weight: bold;
  padding: 16px 24px;
  text-decoration: none;
  opacity: 1;
  transition: opacity .4s;

  &:hover,
  &focus {
    background-color: red;
    border: 1px solid red;
    opacity: .5;
  }

  @media (max-width: 800px) {
    background: var(--primary);
    border: 0;
    border-radius: 0;
    bottom: 0;
    left: 0;
    opacity: 1;
    position: fixed;
    right: 0;
    text-align: center;
  }
`;

export default Button