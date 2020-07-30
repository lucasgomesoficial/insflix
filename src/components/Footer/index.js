import React from 'react';
import { FooterBase } from './styles';
import Logo from '../../assets/img/Logo.png';

function Footer() {
  return (
    <FooterBase>
      
      <img className="Logo" src={Logo} alt="AluraFlix logo"/>
      
      <p>
        Desenvolvido por
        {' '}
        <a href="https://github.com/lucasgomesoficial" target="blank">
          Lucas Gomes
        </a> - Imersão React
      </p>
    </FooterBase>
  );
}

export default Footer;
