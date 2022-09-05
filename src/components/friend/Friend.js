import './friend.css'

const Friend = ({ user }) => {
  return (
    <li className="sidebar-friend">
      <img src={user.profilePicture} alt={user.username} className="sidebar-friend-img"/>
      <span className="sidebar-friend-name">{user.username}</span>
    </li>
  )
}

export default Friend