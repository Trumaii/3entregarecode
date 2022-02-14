import React from "react";
import { Link, Outlet } from "react-router-dom";
import style from "../CSS/header.module.css";

const Header = () => {
  return (
    <div>
      <div className={style.header}>
        <div className={style.header_title}>
          <Link className={style.titulo} to="/">
            Corta Caminho
          </Link>
        </div>
        <div className="header_links">
          <Link className={style.linke} to="/">
            Home
          </Link>
          <Link className={style.linke} to="destinos">
            Destinos
          </Link>
          <Link className={style.linke} to="promocoes">
            Promoções
          </Link>
          <Link className={style.linke} to="contato">
            Contato
          </Link>
        </div>
      </div>
      <Outlet />      
    </div>
  );
};

export default Header;
