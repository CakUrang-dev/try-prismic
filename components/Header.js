import styles from '../styles/Header.module.css'
import Link from 'next/link'

const Header = () => {
  return (
    <header className={styles.header}>
        {/* Home */}
        <Link href='/'>
            <a className={styles.title}>My Blog</a>
        </Link>
        <div className={styles.menu}>
            {/* About */}
            <Link href='/about'>
                <a>About</a>
            </Link>
            {/* Archives */}
            <Link href='/archives'>
                <a>Archives</a>
            </Link>
        </div>
    </header>
  )
}

export default Header