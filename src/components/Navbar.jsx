import styles from "./Navbar.module.css"

export default function Navbar() {
    return (
        <header>
            <div className={styles.wrapper}>
                <a href="/" target="_blank" rel="noopener noreferrer" className={styles.listItem}>Home</a>

                <nav>
                    <ul>
                        <li><a href="/" target="_blank" rel="noopener noreferrer" className={styles.listItem}>About</a></li>
                        <li><a href="/" target="_blank" rel="noopener noreferrer" className={styles.listItem}>Cart</a></li>
                        <li><a href="/" target="_blank" rel="noopener noreferrer" className={styles.listItem}>Testing 3</a></li>
                    </ul>
                </nav>
            </div>
            
            
        </header>
    )
}