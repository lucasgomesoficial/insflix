import styled from 'styled-components';

export const LogoImage = styled.img`
  max-width: 168px;


  @media (max-width: 800px) {
    max-width: 105px;
  }
`;

export const MenuWrapper = styled.nav`
  height: 94px;
  width: 100%;
  z-index: 1;

  align-items: center;
  display: flex;
  justify-content: space-between;
  position: fixed;

  left: 0;
  padding-left: 5%;
  padding-right: 5%;
  right: 0;
  top: 0;

  background: var(--grayMedium);
  border-bottom: 1px solid var(--black);
  box-shadow: 0 2px 8px 8px rgba(0, 0, 0, 0.5);

  @media (max-width: 800px) {
    height: 60px;
    justify-content: center;
  }
`;