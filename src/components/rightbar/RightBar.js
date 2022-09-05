import Online from '../online/Online'
import { Users } from '../../dummyData'
import './rightbar.css'

const HomeRightBar = () => (
  <>
    <div className="birthday-container">
      <img className="birthday-img" src="/assets/gift.png" alt="birthday"/>
      <span className="birthday-text">
            <b>Pola Foster</b> and <b>3 other friends</b> have a birhday today.
          </span>
    </div>
    <img className="rightbar-ad" src="/assets/ad.png" alt="ad"/>
    <h4 className="rightbar-title">Online Friends</h4>
    <ul className="rightbar-friend-list">
      {Users.map(user => (
        <Online key={user.id} user={user}/>
      ))}
    </ul>
  </>
)

const ProfileRightBar = () => (
  <>
    <h4 className="rightbar-title">User Information</h4>
    <div className="rightbar-info">
      <div className="rightbar-info-item">
        <span className="rightbar-info-key">City:</span>
        <span className="rightbar-info-value">New York</span>
      </div>
      <div className="rightbar-info-item">
        <span className="rightbar-info-key">From:</span>
        <span className="rightbar-info-value">Cuba</span>
      </div>
      <div className="rightbar-info-item">
        <span className="rightbar-info-key">Relationship:</span>
        <span className="rightbar-info-value">Married</span>
      </div>
    </div>
    <h4 className="rightbar-title">User friends</h4>
    <div className="rightbar-followings">
      <div className="rightbar-following">
        <img
          src="/assets/person/1.jpeg"
          alt=""
          className="rightbar-following-img"
        />
        <span className="rightbar-following-name">John Carter</span>
      </div>
      <div className="rightbar-following">
        <img
          src="/assets/person/2.jpeg"
          alt=""
          className="rightbar-following-img"
        />
        <span className="rightbar-following-name">John Carter</span>
      </div>
      <div className="rightbar-following">
        <img
          src="/assets/person/3.jpeg"
          alt=""
          className="rightbar-following-img"
        />
        <span className="rightbar-following-name">John Carter</span>
      </div>
      <div className="rightbar-following">
        <img
          src="/assets/person/4.jpeg"
          alt=""
          className="rightbar-following-img"
        />
        <span className="rightbar-following-name">John Carter</span>
      </div>
      <div className="rightbar-following">
        <img
          src="/assets/person/5.jpeg"
          alt=""
          className="rightbar-following-img"
        />
        <span className="rightbar-following-name">John Carter</span>
      </div>
      <div className="rightbar-following">
        <img
          src="/assets/person/6.jpeg"
          alt=""
          className="rightbar-following-img"
        />
        <span className="rightbar-following-name">John Carter</span>
      </div>
    </div>
  </>
)

const RightBar = ({ profile }) => {
  return (
    <div className="rightbar">
      <div className="rightbar-wrapper">
        {profile ? <ProfileRightBar/> : <HomeRightBar/>}
      </div>
    </div>
  )
}

export default RightBar