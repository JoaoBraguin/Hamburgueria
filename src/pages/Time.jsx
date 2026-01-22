import Header from "../components/Header";
import Time from "../components/Time";
import Footer from "../components/Footer";
import style from './../styles/time2.module.css'
import { FaUsers } from "react-icons/fa";

export default function index() {
    return (
        <>
            <Header />
            <div className={style.descricao}>
                <div className={style.icon}>
                    <FaUsers />
                </div>
                <p> Nossa Equipe apaixonada por hambúrgueres que trabalha todos os dias para criar experiências gastronômicas inesquecíveis. Cada membro traz talento único e dedicação para servir você.</p>
            </div>
            <div className={style.line}>
                <hr />
            </div>
            <Time />
            <Footer />
        </>
    )

}