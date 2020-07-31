import styled from 'styled-components';


export const FooterBase = styled.footer`
  background: var(--grayDark);
  border-top: 1px solid rgba(89, 10, 16, .8);
  color: var(--white);
  font-size: 14px; 
  margin-top: 100px;
  padding: 20px 0 10px;
  text-align: center;

  @media (max-width: 800px) {
    font-size: 10px;
    margin-bottom: 50px;
    padding-top: 10px;
    margin-top: 0;
  }
`;

FooterBase.Item = styled.div`
  line-height: 0.5;
`;

FooterBase.Link = styled.a`
  font-weight: 600;
  line-height: 0.5;
  color: var(--white);
  transition: .3s;

  &:hover {
    color: #ff4040;
  }
`;

FooterBase.Span = styled.span`
  color: #2A7AE4;
  font-weight: 600;
`;

export const LogoFooter = styled.img`
  max-width: 120px;

  @media (max-width: 800px) {
    max-width: 100px;
  }
`;