import React, { useEffect } from "react";

import { Nav, NavLink, Bars, NavMenu, NavBtn, NavBtnLink } from './NavbarElements'

const Navbar = () => {
  return (
    <>
    <Nav>
        <NavLink to="/">
            <h1>Produtos</h1>
        </NavLink>
        <Bars/>
        <NavMenu>
            <NavLink to="/" activeStyle>
                Ver Produtos
            </NavLink>
            <NavLink to="/form" activeStyle>
                Adicionar Produto
            </NavLink>
        </NavMenu>
        <NavBtn>
            <NavBtnLink to="/redirect">GitHub</NavBtnLink>
        </NavBtn>
    </Nav>    
    </>
  )
}


export default Navbar