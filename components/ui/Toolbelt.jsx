import {SiJavascript, SiNextDotJs, SiFirebase, SiRedux} from "react-icons/si";
import {AiFillHtml5, AiFillGithub} from "react-icons/ai";
import {DiCss3, DiBootstrap, DiReact, DiMongodb, DiSass} from "react-icons/di";
import {FaNode} from "react-icons/fa";

import styles from "./Toolbelt.module.css";

const Toolbox = () => {
    return (
        <div className={styles.container}>
            <div className={styles.item}>
                <AiFillHtml5 size={50} color={"#e34c26"} title={'HTML 5'}/>
                <p>HTML5</p>
            </div>
            <div className={styles.item}>
                <DiCss3 size={50} color={"DiCss3"} color={"#264de4"} title={'CSS 3'}/>
                <p>CSS3</p>
            </div>
            <div className={styles.item}>
                <SiJavascript size={50} color={"#f0db4f"}title={'Javascript'}/>
                <p>Javascript</p>
            </div>
            <div className={styles.item}>
                <DiBootstrap size={50} color={"#602C50"} title={'Bootstrap'}/>
                <p>Bootstrap</p>
            </div>
            <div className={styles.item}>
                <DiSass size={50} color={"#c69"} title={'Sass'}/>
                <p>Sass</p>
            </div>
            <div className={styles.item}>
                <DiReact size={50} color={"#61DBFB"}title={'React'}/>
                <p>React</p>
            </div>
            <div  className={styles.item}>
                <SiRedux size={50} color={'#764abc'} title={"Redux"} />
                <p>Redux</p>
            </div>            
            <div className={styles.item}>
                <SiNextDotJs size={50} color={"#000000"} title={'Next.js'}/>
                <p>Next.js</p>
            </div>
            <div className={styles.item}>
                <FaNode size={50} color={"#303030"}title={'Node'}/>
                <p>Node</p>
            </div>
            <div className={styles.item}>
                 <DiMongodb size={50} color={"#4DB33D"}title={'MongoDB'}/>
                <p>MongoDB</p>
            </div>
            <div className={styles.item}>
                <AiFillGithub size={50} color={"#211F1F"} title={'Github'}/>
                <p>Github</p>
            </div>
            
            <div className={styles.item}>
                <SiFirebase size={50} color={"#ffcb2b"} title={'Firebase'}/>
                <p>Firebase</p>
            </div>
        </div>
    )
}

export default Toolbox
