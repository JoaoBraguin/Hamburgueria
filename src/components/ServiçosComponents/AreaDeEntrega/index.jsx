import style from './areaentrega.module.css';
import { FaMapLocationDot } from "react-icons/fa6";

export default function AreaDeEntrega() {
    return (
        <>
            <div className={style.container3}>
                <div className={style.inicio3}>
                    <h1>Áreas de Entrega</h1>
                    <span>Confira nossa cobertura e tempo de entrega</span>
                </div>
                <div className={style.allzonas}>
                    <div className={style.zona}>
                        <div className={style.icon}>
                            <FaMapLocationDot />
                        </div>
                        <div className={style.infos}>
                            <div className={style.info}>
                                <span>Centro</span>
                                <p>20-30 min</p>
                            </div>
                            <div className={style.info2}>
                                <h4>Gratis</h4>
                            </div>
                        </div>
                    </div>
                    <div className={style.zona}>
                        <div className={style.icon}>
                            <FaMapLocationDot />
                        </div>
                        <div className={style.infos}>
                            <div className={style.info}>
                                <span>Zona Norte</span>
                                <p>30-40 min</p>
                            </div>
                            <div className={style.info2}>
                                <h4>R$ 5,00</h4>
                            </div>
                        </div>
                    </div>
                    <div className={style.zona}>
                        <div className={style.icon}>
                            <FaMapLocationDot />
                        </div>
                        <div className={style.infos}>
                            <div className={style.info}>
                                <span>Zona Sul</span>
                                <p>20-30 min</p>
                            </div>
                            <div className={style.info2}>
                                <h4>R$ 5,00</h4>
                            </div>
                        </div>
                    </div>
                    <div className={style.zona}>
                        <div className={style.icon}>
                            <FaMapLocationDot />
                        </div>
                        <div className={style.infos}>
                            <div className={style.info}>
                                <span>Zona Leste</span>
                                <p>35-45 min</p>
                            </div>
                            <div className={style.info2}>
                                <h4>R$ 7,00</h4>
                            </div>
                        </div>
                    </div>
                    <div className={style.zona}>
                        <div className={style.icon}>
                            <FaMapLocationDot />
                        </div>
                        <div className={style.infos}>
                            <div className={style.info}>
                                <span>Zona Oeste</span>
                                <p>35-45 min</p>
                            </div>
                            <div className={style.info2}>
                                <h4>R$ 7,00</h4>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

