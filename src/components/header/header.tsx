import styles from './Header.module.css'

export function Header() {
    return(
        <>
        <div className={styles.headerTop}>
            <div className={styles.logoImg}>Logo</div>
            <div className={styles.menuItens}>
                <a href="#" className='menuMobile'>Início</a>
                <a href="#">Sobre</a>
                <a href="#">Contato</a>
            </div>
        </div>
        </>
    )
}

