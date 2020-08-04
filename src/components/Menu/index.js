import React from 'react';
import logo from '../../assets/img/logo.png';
import { Logo, Nav } from './styles';
import ButtonLink from './ButtonLink';

const Menu = () => {
  return (
    <Nav>
      <a href="/">
        <Logo src={logo} alt="Logo do JorginhodevFlix" />
      </a>

      <ButtonLink as="a" href="/">
        Novo vídeo
      </ButtonLink>
    </Nav>
  );
}

export default Menu;
