import React from 'react';
import { Link } from 'react-router-dom';
import Logo from '../../assets/img/Logo.png';
import { LogoImage, MenuWrapper } from './style.js';
import Button from '../Button';

function Menu() {
  return (
    <MenuWrapper className="Menu">
      <Link to="/">
        <LogoImage src={Logo} alt="InsFlix logo"/>
      </Link>

      <Button as={Link} to="cadastro/video">
        Novo vídeo
      </Button>
    </MenuWrapper>
  );
}

export default Menu;