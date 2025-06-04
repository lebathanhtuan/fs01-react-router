import { useState } from 'react'
import Header from './Header'
import styles from './App.module.css'

function App() {
  const [isShowSidebar, setIsShowSidebar] = useState(true)

  function toggleSidebar() {
    setIsShowSidebar(!isShowSidebar)
  }

  return (
    <div className={styles.app}>
      <Header toggleSidebar={toggleSidebar} />
      <div className={styles.main}>
        <div
          className={styles.sidebar}
          style={{ left: isShowSidebar ? '0' : '-250px' }}
        >
          <button onClick={toggleSidebar}>Close</button>
          <ul>
            <li>Dashboard</li>
            <li>Settings</li>
            <li>Profile</li>
            <li>Logout</li>
          </ul>
        </div>
        <div
          className={styles.content}
          style={{ marginLeft: isShowSidebar ? '250px' : '0' }}
        >
          <h1>Welcome to the Dashboard</h1>
          <p>This is your main content area.</p>
        </div>
      </div>
    </div>
  )
}

export default App
