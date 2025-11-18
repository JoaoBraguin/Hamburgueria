import Sobre from "../components/Sobre";
import Header from "../components/Header/index.jsx"
import Footer from "../components/Footer/index.jsx"
import style from "../styles/sobre2.module.css"
import { LuBeef } from "react-icons/lu";
import { FaRegClock } from "react-icons/fa6";
import { FaRegHeart } from "react-icons/fa";
import { FaLeaf } from "react-icons/fa";
import { MdOutlineShield } from "react-icons/md";
import { FaUsers } from "react-icons/fa";
import Time from "../components/Time/index.jsx";
import { FaRegStar } from "react-icons/fa";
import { FaTrophy } from "react-icons/fa";
import { FaMedal } from "react-icons/fa";
import { RiCustomerService2Line } from "react-icons/ri";

export default function index() {


    return (
        <>
            <Header />
            <Sobre />
            <div className={style.container}>
                <div className={style.dir}>
                    <img src="https://www.tendaatacado.com.br/dicas/wp-content/uploads/2022/03/hamburguer-caseiro-topo.jpg" alt="" />
                </div>
                <div className={style.esq}>
                    <div className={style.text}>
                        <h1>Nossa Historia</h1>
                        <h3>Tudo começou em <span>2019  </span>, quando um grupo de amigos apaixonados por gastronomia decidiu transformar um sonho em realidade. A ideia era simples: criar hambúrgueres de verdade, com ingredientes de qualidade e muito sabor.</h3>
                        <h3>Do pequeno estabelecimento inicial ao que somos hoje, mantivemos nossa essência: <span>autenticidade e qualidade</span>. Cada receita foi desenvolvida com cuidado, testada dezenas de vezes até alcançar a perfeição.</h3>
                        <h3>Hoje, o Algar é referência em hambúrgueres artesanais, mas continuamos com a mesma filosofia do primeiro dia: ingredientes frescos, preparo artesanal e muito amor em cada hambúrguer que servimos.</h3>
                    </div>
                    <div className={style.experience}>
                        <span>+ 5 anos</span> <p> de tradição e sabor</p>
                    </div>
                </div>
            </div>
            <div className={style.container2}>
                <div className={style.inicio}>
                    <h1>Nossos Valores</h1>
                    <span>Princípios que guiam cada decisão que tomamos e cada hambúrguer que preparamos</span>
                </div>
                <div className={style.cards}>
                    <div className={style.card}>
                        <div className={style.icon}>
                            <LuBeef />
                        </div>
                        <span>Qualidade Premium</span>
                        <p>Selecionamos os melhores ingredientes para garantir sabor e qualidade em cada mordida.</p>
                    </div>
                    <div className={style.card}>
                        <div className={style.icon}>
                            <FaRegClock />
                        </div>
                        <span>Preparo Artesanal</span>
                        <p>Cada hambúrguer é preparado na hora, com técnicas tradicionais e muito cuidado.</p>
                    </div>
                    <div className={style.card}>
                        <div className={style.icon}>
                            <FaRegHeart />
                        </div>
                        <span>Feito com Amor</span>
                        <p>Colocamos paixão e dedicação em tudo que fazemos, do preparo ao atendimento.</p>
                    </div>
                    <div className={style.card}>
                        <div className={style.icon}>
                            <FaLeaf />
                        </div>
                        <span>Ingredientes Frescos</span>
                        <p>Trabalhamos com fornecedores locais para garantir a frescura dos nossos produtos.</p>
                    </div>
                    <div className={style.card}>
                        <div className={style.icon}>
                            <MdOutlineShield />
                        </div>
                        <span>Higiene Impecável</span>
                        <p>Seguimos os mais altos padrões de higiene e segurança alimentar.</p>
                    </div>
                    <div className={style.card}>
                        <div className={style.icon}>
                            <FaUsers />
                        </div>
                        <span>Atendimento Excepcional</span>
                        <p>Nossa equipe está sempre pronta para proporcionar a melhor experiência.</p>
                    </div>
                </div>
            </div>
            <div className={style.container2}>
                <div className={style.inicio}>
                    <h1>Reconhecimentos</h1>
                    <span>Orgulhosos de ser reconhecidos pela qualidade e dedicação que colocamos em cada hambúrguer</span>
                </div>
                <div className={style.cards2}>
                    <div className={style.card}>
                        <div className={style.icon}>
                            <FaTrophy />
                        </div>
                        <h4>2025</h4>
                        <span>Melhor Hambúrguer Artesanal</span>
                        <p>Prêmio Gastronomia SP</p>
                    </div>
                    <div className={style.card}>
                        <div className={style.icon}>
                            <FaRegStar />
                        </div>
                        <h4>2025</h4>
                        <span>Top 10 Hamburgerias</span>
                        <p>Guia Food & Wine</p>
                    </div>
                    <div className={style.card}>
                        <div className={style.icon}>
                            <FaMedal />
                        </div>
                        <h4>2025</h4>
                        <span>Certificado de Excelência</span>
                        <p>TripAdvisor</p>
                    </div>
                    <div className={style.card}>
                        <div className={style.icon}>
                            <RiCustomerService2Line />
                        </div>
                        <h4>2025</h4>
                        <span>Melhor Atendimento</span>
                        <p>Prêmio Cliente Satisfeito</p>
                    </div>
                </div>
            </div>

            <div className={style.container3}>
                <div className={style.cards3}>
                    <div className={style.card}>

                        <p>50k+</p>
                        <span>Hambúrgueres Vendidos</span>

                    </div>
                    <div className={style.card}>

                        <p>15k+</p>
                        <span>Clientes Satisfeitos</span>

                    </div>
                    <div className={style.card}>

                        <p>4.9/5</p>
                        <span>Avaliação Média</span>

                    </div>
                    <div className={style.card}>
                        <p>100%</p>
                        <span>Ingredientes Frescos</span>
                    </div>
                </div>
            </div>
            <Time />
            <Footer />
        </>
    )

}