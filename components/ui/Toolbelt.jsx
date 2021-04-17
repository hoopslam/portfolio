import {SiJavascript, SiNetlify, SiFirebase, SiMaterialUi} from "react-icons/si";
import {AiFillHtml5, AiFillGithub} from "react-icons/ai";
import {DiCss3, DiBootstrap, DiReact, DiMongodb, DiPostgresql, DiSass} from "react-icons/di";
import {FaNode} from "react-icons/fa";

import styles from "./Toolbelt.module.css";

const Toolbox = () => {
    return (
        <div className={styles.container}>
            <div className={styles.item}>
                <AiFillHtml5 size={60} color={"#e34c26"} title={'HTML 5'}/>
                <p>HTML5</p>
            </div>
            <div className={styles.item}>
                <DiCss3 size={60} color={"DiCss3"} color={"#264de4"} title={'CSS 3'}/>
                <p>CSS3</p>
            </div>
            <div className={styles.item}>
                <SiJavascript size={60} color={"#f0db4f"}title={'Javascript'}/>
                <p>Javascript</p>
            </div>
            <div className={styles.item}>
                <DiBootstrap size={60} color={"#602C50"} title={'Bootstrap'}/>
                <p>Bootstrap</p>
            </div>
            <div className={styles.item}>
                <DiSass size={60} color={"#c69"} title={'Sass'}/>
                <p>Sass</p>
            </div>
            <div  className={styles.item}>
                <SiMaterialUi size={60} color={'#1976d2'} title={"Material-UI"} />
                <p>Material-UI</p>
            </div>            
            <div className={styles.item}>
                <DiReact size={60} color={"#61DBFB"}title={'React'}/>
                <p>React</p>
            </div>
            <div className={styles.item}>
                <FaNode size={60} color={"#303030"}title={'Node'}/>
                <p>Node</p>
            </div>
            <div className={styles.item}>
                 <DiMongodb size={60} color={"#4DB33D"}title={'MongoDB'}/>
                <p>MongoDB</p>
            </div>
            <div className={styles.item}>
                <DiPostgresql size={60} color={"#0064a5"} title={'PostgreSQL'}/>
                <p>PostgreSQL</p>
            </div>
            <div className={styles.item}>
                <AiFillGithub size={60} color={"#211F1F"} title={'Github'}/>
                <p>Github</p>
            </div>
            <div className={styles.item}>
                <SiNetlify size={60} color={"#00C7B7"} title={'Netlify'}/>
                <p>Netlify</p>
            </div>
            <div className={styles.item}>
                <SiFirebase size={60} color={"#ffcb2b"} title={'Firebase'}/>
                <p>Firebases</p>
            </div>
        </div>
    )
}

export default Toolbox
