import style from "./Header.module.css";
import { PiHamburger } from "react-icons/pi";
import { FaCartShopping } from "react-icons/fa6";

export default function Header() {
  return (
    <>
      <header className={style.container}>
        {/* LOGO */}
        <div className={style.logo}>
          <div className={style.iconBox}>
            <PiHamburger />
          </div>
          <h1>ALGAR</h1>
        </div>

        {/* MENU */}
        <nav className={style.nav}>
          <a href="/">HOME</a>
          <a href="/sobre">SOBRE</a>
          <a href="/servico">SERVIÇO</a>
          <a href="/cardapio">CARDÁPIO</a>
          <a href="/time">TIME</a>
          <a href="/contato">CONTATO</a>
        </nav>

        {/* BOTÃO PEDIDO */}
        <div className={style.pedido}>
          <FaCartShopping />
          <span>Pedido</span>
        </div>
      </header>
    </>
  );
}
