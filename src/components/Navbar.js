// src/components/Navbar.js
import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

const NavbarContainer = styled.nav`
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: #282c34;
  padding: 1rem;
`;

const Logo = styled.img`
  height: 90px; /* ajuste o tamanho conforme necessário */
`;

const NavLinks = styled.div`
  display: flex;
  gap: 1rem;
`;

const NavLink = styled(Link)`
  color: white;
  text-decoration: none;
  font-size: 1.2rem;

  &:hover {
    text-decoration: underline;
  }
`;

const Navbar = () => {
  return (
    <NavbarContainer>
      <Logo src="https://i.pinimg.com/originals/ee/20/ba/ee20ba1558d5c4f2fbd21c928855fbed.png" alt="Logo" /> {/* Substitua pela URL da sua logo */}
      <NavLinks>
        <NavLink to="/">Home</NavLink>
        <NavLink to="/sobre">Sobre</NavLink>
        <NavLink to="/contato">Contato</NavLink>
      </NavLinks>
    </NavbarContainer>
  );
};

export default Navbar;
