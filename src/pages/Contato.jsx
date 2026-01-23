import Header from "../components/Header";
import Footer from "../components/Footer";
import style from "../styles/contato.module.css"
import { IoLogoInstagram } from "react-icons/io";
import { FaFacebookF } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { FaYoutube } from "react-icons/fa";
import { GrLocation } from "react-icons/gr";
import { FaRegClock } from "react-icons/fa6";


export default function Contato() {
    return (
        <>
            <Header />
            <div className={style.container}>
                <div className={style.esq}>
                    <h1>Informaçoes de Contato</h1>
                    <div className={style.location}>
                        <div className={style.infos}>
                            <p>Endereço</p>
                            <div className={style.info}>
                                <span>Rua das Delícias, 123 - Centro</span>
                                <span>Centro, São Paulo - SP</span>
                                <span>CEP: 01234-567</span>
                            </div>
                        </div>
                        <div className={style.infos}>
                            <p>Telefone</p>
                            <div className={style.info}>
                                <span>(11) 9999-9999</span>
                            </div>
                        </div>
                        <div className={style.infos}>
                            <p>Email</p>
                            <div className={style.info}>
                                <span>contato@algar.com.br</span>
                                <span>delivery@algar.com.br</span>
                            </div>
                        </div>
                    </div>
                </div>
                <div className={style.dir}>
                    <h1>Informaçoes de Horario</h1>
                    <div className={style.clock}>
                        {/* <FaRegClock /> */}
                        {/* <p>Horário de Funcionamento</p> */}
                        <div className={style.infos}>
                            <p>Horario de Funcionamento</p>
                            <div className={style.info}>
                                <span>Segunda a Sexta: 18h - 23h</span>
                                <span>Sábado e Domingo: 17h - 00h</span>
                                <span className={style.especial}>Delivery disponível</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {/* <div className={style.redes}>
                <div className={style.inicio}>
                    <h1>Siga-nos nas Redes Sociais</h1>
                    <span>Acompanhe nosso dia a dia, promoções exclusivas e os bastidores da melhor hamburgueria da cidade</span>
                </div>
                <div className={style.cardsRedes}>
                    <div className={style.cardRedes}>
                        <div className={style.iconRedes}>
                            <IoLogoInstagram />
                        </div>
                        <span>Instagram</span>
                        <p>@algar.burguers</p>
                        <h4>10K seguidores</h4>
                    </div>
                    <div className={style.cardRedes}>
                        <div className={style.iconRedes}>
                            <FaFacebookF />
                        </div>
                        <span>Facebook</span>
                        <p>/algarburguer</p>
                        <h4>7K seguidores</h4>
                    </div>
                    <div className={style.cardRedes}>
                        <div className={style.iconRedes}>
                            <FaXTwitter />
                        </div>
                        <span>X</span>
                        <p>@algarburguers</p>
                        <h4>5K seguidores</h4>
                    </div>
                    <div className={style.cardRedes}>
                        <div className={style.iconRedes}>
                            <FaYoutube />
                        </div>
                        <span>Youtube</span>
                        <p>/algarburguer</p>
                        <h4>9K seguidores</h4>
                    </div>
                </div>
            </div> */}
            <Footer />
        </>
    )

}