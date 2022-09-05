import './online.css'

const Online = ({ user }) => {
  return (
    <li className="rightbar-friend">
      <div className="rightbar-profile-img-container">
        <img className="rightbar-profile-img" src={user.profilePicture} alt={user.username}/>
        <span className="rightbar-online"/>
      </div>
      <span className="rightbar-username">{user.username}</span>
    </li>
  )
}

export default Online