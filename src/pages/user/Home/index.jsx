import { useState } from 'react'
import { Link, useNavigate, useLocation } from 'react-router-dom'

import styles from './styles.module.css'

function Home() {
  const [activeTab, setActiveTab] = useState(1)
  const [tabList, setTabList] = useState([1, 2, 3, 4])
  const [title, setTitle] = useState('')
  const [content, setContent] = useState('')

  const navigate = useNavigate()
  const location = useLocation()
  console.log('🚀 ~ Home ~ location:', location)

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
    <>
      <h1>Welcome to the Dashboard</h1>
      <p>This is your main content area.</p>
      <Link to="/about">Go to About page</Link>
      <button onClick={() => navigate('/about')}>Navigate to About</button>
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
    </>
  )
}

export default Home
