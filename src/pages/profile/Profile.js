import './profile.css'
import TopBar from '../../components/topbar/TopBar'
import SideBar from '../../components/sidebar/SideBar'
import Feed from '../../components/feed/Feed'
import RightBar from '../../components/rightbar/RightBar'

const Profile = () => {
  return (
    <>
      <TopBar />
      <div className="profile">
        <SideBar />
        <div className="profile-right">
          <div className="profile-right-top">
            <div className="profile-cover">
              <img className="profile-cover-img" src="/assets/post/1.jpeg" alt=""/>
              <img className="profile-user-img" src="/assets/person/7.jpeg" alt=""/>
            </div>
            <div className="profile-info">
              <h4 className="profile-info-name">Renier Arias</h4>
              <span className="profile-info-desc">React Dev</span>
            </div>
          </div>
          <div className="profile-right-bottom">
            <Feed />
            <RightBar profile />
          </div>
        </div>
      </div>
    </>
  )
}

export default Profile