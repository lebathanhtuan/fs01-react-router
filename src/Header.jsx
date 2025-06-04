import styles from './Header.module.css'

function Header({ toggleSidebar }) {
  return (
    <div className={styles.header}>
      <button onClick={toggleSidebar}>Menu</button>
      <h2>Username</h2>
    </div>
  )
}

export default Header
