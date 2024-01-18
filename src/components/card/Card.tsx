import styles from './Card.module.css'
import Avatar from './avatar.png'

export function Card() {
    return (
        <>
            <div className={styles.list}>
                <div className={styles.card}>
                    <img src={Avatar} alt="" className={styles.avatar} />
                    <b>Ariel</b>
                    <p className={styles.profissao}>Desenvolvedor FullStack</p>
                </div>
                <div className={styles.card}>
                    <img src={Avatar} alt="" className={styles.avatar} />
                    <b>Ariel</b>
                    <p className={styles.profissao}>Desenvolvedor FullStack</p>
                </div>
                <div className={styles.card}>
                    <img src={Avatar} alt="" className={styles.avatar} />
                    <b>Ariel</b>
                    <p className={styles.profissao}>Desenvolvedor FullStack</p>
                </div>
                <div className={styles.card}>
                    <img src={Avatar} alt="" className={styles.avatar} />
                    <b>Ariel</b>
                    <p className={styles.profissao}>Desenvolvedor FullStack</p>
                </div>
                <div className={styles.card}>
                    <img src={Avatar} alt="" className={styles.avatar} />
                    <b>Ariel</b>
                    <p className={styles.profissao}>Desenvolvedor FullStack</p>
                </div>
                <div className={styles.card}>
                    <img src={Avatar} alt="" className={styles.avatar} />
                    <b>Ariel</b>
                    <p className={styles.profissao}>Desenvolvedor FullStack</p>
                </div>
                <div className={styles.card}>
                    <img src={Avatar} alt="" className={styles.avatar} />
                    <b>Ariel</b>
                    <p className={styles.profissao}>Desenvolvedor FullStack</p>
                </div>
                <div className={styles.card}>
                    <img src={Avatar} alt="" className={styles.avatar} />
                    <b>Ariel</b>
                    <p className={styles.profissao}>Desenvolvedor FullStack</p>
                </div>
            </div>
        </>
    )
}