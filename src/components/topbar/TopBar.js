import { Search, Person, Chat, Notifications } from '@material-ui/icons'

import './topbar.css'

const TopBar = () => {
  return (
    <div className="topbar-container">
      <div className="topbar-left">
        <span className="logo">Social</span>
      </div>
      <div className="topbar-center">
        <div className="search-bar">
          <Search className="search-icon" />
          <input placeholder="Search for friends, post or video" className="search-input"/>
        </div>
      </div>
      <div className="topbar-right">
        <div className="topbar-links">
          <div className="topbar-link">Homepage</div>
          <div className="topbar-link">Timeline</div>
        </div>
        <div className="topbar-icons">
          <div className="topbar-icon-item">
            <Person />
            <span className="topbar-icon-badge">1</span>
          </div>
          <div className="topbar-icon-item">
            <Chat />
            <span className="topbar-icon-badge">2</span>
          </div>
          <div className="topbar-icon-item">
            <Notifications />
            <span className="topbar-icon-badge">1</span>
          </div>
        </div>
        <img src="/assets/person/7.jpeg" alt="Profile" className="topbar-img"/>
      </div>
    </div>
  )
}

export default TopBar