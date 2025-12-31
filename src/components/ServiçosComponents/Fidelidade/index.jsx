import style from "./Fidelidade.module.css"
import { LiaMedalSolid } from "react-icons/lia";
import { FaRegCheckCircle } from "react-icons/fa";

export default function Fidelidade() {
    return (
        <>
            <div className={style.container3}>
                <div className={style.inicio3}>
                    <h1>Programa de Fidelidade</h1>
                    <span>Ganhe pontos a cada pedido e troque por benefícios</span>
                </div>
                <div className={style.rewards}>
                    <div className={style.colocacao}>
                        <div className={style.pontos}>
                            <LiaMedalSolid />
                            <span>Bronze</span>
                            <p>0-500 pontos</p>
                        </div>
                        <div className={style.desconto}>
                            <div className={style.teste}>
                                <FaRegCheckCircle /> <p>5% de desconto</p>
                            </div>
                            <div className={style.teste}>
                                <FaRegCheckCircle /> <p>Acesso antecipado a promoções</p>
                            </div>
                        </div>
                    </div>
                    <div className={style.colocacao}>
                        <div className={style.pontos}>
                            <LiaMedalSolid />
                            <span>Prata</span>
                            <p>501-1000 pontos</p>
                        </div>
                        <div className={style.desconto}>
                            <div className={style.teste}>
                                <FaRegCheckCircle /> <p>10% de desconto</p>
                            </div>
                            <div className={style.teste}>
                                <FaRegCheckCircle /> <p>Frete grátis</p>
                            </div>
                            <div className={style.teste}>
                                <FaRegCheckCircle /> <p>Brinde no aniversário</p>
                            </div>
                        </div>
                    </div>
                    <div className={style.colocacao}>
                        <div className={style.pontos}>
                            <LiaMedalSolid />
                            <span>Ouro</span>
                            <p>1001+ pontos</p>
                        </div>
                        <div className={style.desconto}>
                            <div className={style.teste}>
                                <FaRegCheckCircle /> <p>15% de desconto</p>
                            </div>
                            <div className={style.teste}>
                                <FaRegCheckCircle /> <p>Frete grátis sempre</p>
                            </div>
                            <div className={style.teste}>
                                <FaRegCheckCircle /> <p>Atendimento VIP</p>
                            </div>
                            <div className={style.teste}>
                                <FaRegCheckCircle /> <p>Eventos exclusivos</p>
                            </div>
                        </div>
                    </div>
                </div>

            </div>

        </>
    )
}