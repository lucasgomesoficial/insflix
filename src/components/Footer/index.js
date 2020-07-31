import React from 'react';
import Logo from '../../assets/img/Logo.png';
import { FooterBase, LogoFooter } from './styles';

function Footer() {
  return (
    <FooterBase>

      <LogoFooter src={Logo} alt="InsFlix logo"/>

      <FooterBase.Item>
        <p>Site feito na <strong>#ImersãoReact</strong> da <FooterBase.Span>Alura.</FooterBase.Span></p>
        <p>Desenvolvido by {' '} 
        <FooterBase.Link href="https://github.com/lucasgomesoficial" target="blank">
          Lucas Gomes
        </FooterBase.Link></p>
      </FooterBase.Item>

    </FooterBase>
  );
}

export default Footer;
