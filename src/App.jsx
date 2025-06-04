import { useState } from 'react'
import Header from './Header'
import styles from './App.module.css'

function App() {
  const [isShowSidebar, setIsShowSidebar] = useState(false)
  const [activeTab, setActiveTab] = useState(1)
  const [tabList, setTabList] = useState([1, 2, 3, 4])
  const [title, setTitle] = useState('')
  const [content, setContent] = useState('')

  const handleAddTab = () => {
    const newTabList = [...tabList, tabList.length + 1]
    setTabList(newTabList)
  }

  const renderTabItems = () => {
    return tabList.map((item, index) => {
      return (
        <div
          key={index}
          className={styles['tab-item']}
          onClick={() => setActiveTab(item)}
          style={{
            borderBottom: activeTab === item ? '1px solid red' : 'none',
          }}
        >
          <span>Tab {item}</span>
        </div>
      )
    })
  }

  const renderTabContent = () => {
    // switch (activeTab) {
    //   case 1:
    //     return <div>Content of Tab 1</div>
    //   case 2:
    //     return <div>Content of Tab 2</div>
    //   case 3:
    //     return <div>Content of Tab 3</div>
    //   case 4:
    //     return <div>Content of Tab 4</div>
    //   default:
    //     return null
    // }
    return <div>Content of Tab {activeTab}</div>
  }

  return (
    <div className={styles.app}>
      <Header
        isShowSidebar={isShowSidebar}
        setIsShowSidebar={setIsShowSidebar}
      />
      <div className={styles.main}>
        <div
          className={styles.sidebar}
          style={{ left: isShowSidebar ? '0' : '-250px' }}
        >
          <button onClick={() => setIsShowSidebar(!isShowSidebar)}>
            Close
          </button>
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
          <div className={styles['tab-container']}>
            {renderTabItems()}
            <button onClick={() => handleAddTab()}>+</button>
          </div>
          {renderTabContent()}
          <div>
            <div>
              <input
                onChange={(e) => setTitle(e.target.value)}
                placeholder="Title"
              />
              {title}
            </div>
            <div>
              <input
                onChange={(e) => setContent(e.target.value)}
                placeholder="Content"
              />
              {content}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default App
