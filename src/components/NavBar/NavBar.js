import Link from 'next/link'
import styles from './NavBar.module.css'

const Navbar = () => {
  return (
    <nav className={styles.navbar}>
      <div className={styles.logo}>
        <Link href="/">
          <a>My Store</a>
        </Link>
      </div>
      <div className={styles.navLinks}>
        <Link href="/">
          <a>Home</a>
        </Link>
        <Link href="/about">
          <a>About</a>
        </Link>
        <Link href="/contact">
          <a>Contact</a>
        </Link>
      </div>
      <div className={styles.cart}>
        <Link href="/cart">
          <a>
          </a>
        </Link>
      </div>
    </nav>
  )
}

export default Navbar
