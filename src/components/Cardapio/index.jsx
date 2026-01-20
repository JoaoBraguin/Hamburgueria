import style from './Cardapio.module.css'
import { FaLongArrowAltRight } from "react-icons/fa";
import ScrollReveal from "scrollreveal";
import { useEffect } from "react";
import { FaPlus } from "react-icons/fa6";

export default function Cardapio() {
   
    useEffect(() => {
        ScrollReveal().reveal('.inicioReveal', {
            delay: 200,
            origin: 'bottom',
            distance: '50px',
            duration: 1000,
            easing: 'ease-in-out',
            reset: false,
            opacity: 0,
        },)
         ScrollReveal().reveal('.conteudoReveal', {
            delay: 200,
            origin: 'bottom',
            distance: '50px',
            duration: 1000,
            easing: 'ease-in-out',
            reset: false,
            opacity: 0,
        },)
         ScrollReveal().reveal('.botaoReveal', {
            delay: 200,
            origin: 'bottom',
            distance: '50px',
            duration: 1000,
            easing: 'ease-in-out',
            reset: false,
            opacity: 0,
        },)
    }, [])

    return (
        <>
            <div className={`${style.inicio} inicioReveal`}>
                <h1>Cardapio</h1>
                <span>Descubra nossos Hamburgueres épicos, com sabores divinos, cada um com sua especialidade.</span>
            </div>
            <div className={style.all}>
                <div className={style.itens}>
                    <div className={`${style.conteudo} conteudoReveal`}>
                        <div className={style.teste}>
                            <img src="https://img.freepik.com/fotos-gratis/hamburguer-de-vista-frontal-em-um-carrinho_141793-15542.jpg?semt=ais_hybrid&w=740&q=80" alt="" />
                            <div className={style.price}>R$ 20.90</div>
                        </div>
                        <div className={style.about}>
                            <span>Burguer Carne Seca</span>
                            <p>Duplo Blend, queijo cheddar, aflace, tomate e carne seca.</p>
                              <div className={style.botao}>
                                <FaPlus /> Adicionar
                            </div>
                        </div>
                    </div>
                </div>
                <div className={style.itens}>
                    <div className={`${style.conteudo} conteudoReveal`}>
                        <div className={style.teste}>
                            <img src="https://img.freepik.com/fotos-gratis/comida-deliciosa-na-mesa_23-2151902501.jpg" alt="" />
                            <div className={style.price}>R$ 22.90</div>
                        </div>
                        <div className={style.about}>
                            <span>Burguer Carne Seca com Fritas</span>
                            <p>Duplo Blend, queijo cheddar, aflace, tomate e carne seca.</p>
                              <div className={style.botao}>
                                <FaPlus /> Adicionar
                            </div>
                        </div>
                    </div>
                </div>
                <div className={style.itens}>
                    <div className={`${style.conteudo} conteudoReveal`}>
                        <div className={style.teste}>
                            <img src="https://img.freepik.com/fotos-gratis/vista-de-uma-refeicao-deliciosa-pronta-para-comer_23-2151431747.jpg?uid=R194712502&ga=GA1.1.63503955.1762474275&semt=ais_hybrid&w=740&q=80" alt="" />
                            <div className={style.price}>R$ 19.90</div>
                        </div>
                        <div className={style.about}>
                            <span>Burguer Carne Seca</span>
                            <p>Duplo Blend, queijo cheddar, aflace, tomate e carne seca.</p>
                              <div className={style.botao}>
                                <FaPlus /> Adicionar
                            </div>
                        </div>
                    </div>
                </div>
                <div className={style.itens}>
                    <div className={`${style.conteudo} conteudoReveal`}>
                        <div className={style.teste}>
                            <img src="https://img.freepik.com/fotos-gratis/cheeseburger-suculento-em-uma-prancha-de-madeira-rustica_9975-24623.jpg?uid=R194712502&ga=GA1.1.63503955.1762474275&semt=ais_hybrid&w=740&q=80" alt="" />
                            <div className={style.price}>R$ 18.90</div>
                        </div>
                        <div className={style.about}>
                            <span>Burguer Carne Seca</span>
                            <p>Duplo Blend, queijo cheddar, aflace, tomate e carne seca.</p>
                              <div className={style.botao}>
                                <FaPlus /> Adicionar
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className={`${style.botao} botaoReveal`}>
                <a href="/cardapio">Ver Cardápio Completo <FaLongArrowAltRight /> </a>
            </div>


        </>
    )
}