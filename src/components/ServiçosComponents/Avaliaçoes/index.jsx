import style from "./avaliaçoes.module.css"
import { FaStar } from "react-icons/fa";

export default function Avaliaçoes() {
    return (
        <>
            <div className={style.container3}>
                <div className={style.inicio3}>
                    <h1>O que dizem nossos clientes</h1>
                    <span>Avaliações reais de quem já experimentou</span>
                </div>
                <div className={style.check}>
                    <div className={style.in}>
                        <FaStar /> <FaStar /> <FaStar /> <FaStar /> <FaStar />
                        <div className={style.about}>
                            <p>"Os melhores hambúrgueres da cidade! A entrega é super rápida e sempre chegam quentinhos."</p>
                        </div>
                        <div className={style.line}>
                            <hr />
                        </div>
                        <div className={style.cliente}>
                            <span>Maria Silva</span>
                            <h5>Cliente VIP</h5>
                        </div>
                    </div>
                    <div className={style.in}>
                        <FaStar /> <FaStar /> <FaStar /> <FaStar /> <FaStar />
                        <div className={style.about}>
                            <p>"Atendimento impecável e o sabor é incomparável. Virei cliente fiel!"</p>
                        </div>
                        <div className={style.line}>
                            <hr />
                        </div>
                        <div className={style.cliente}>
                            <span>Maria Silva</span>
                            <h5>Cliente VIP</h5>
                        </div>
                    </div>
                    <div className={style.in}>
                        <FaStar /> <FaStar /> <FaStar /> <FaStar /> <FaStar />
                        <div className={style.about}>
                            <p>"Pedi para meu evento e todos adoraram. Qualidade excepcional e preço justo."</p>
                        </div>
                        <div className={style.line}>
                            <hr />
                        </div>
                        <div className={style.cliente}>
                            <span>Maria Silva</span>
                            <h5>Cliente VIP</h5>
                        </div>
                    </div>
                </div>
            </div>

        </>
    )
}