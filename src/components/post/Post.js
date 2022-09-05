import { useMemo, useState } from 'react'
import { MoreVert } from '@material-ui/icons'
import { Users } from '../../dummyData'
import './post.css'

const Post = ({ post }) => {
  const [like, setLike] = useState(post.like)
  const [isLiked, setIsLiked] = useState(false)

  const user = useMemo(() => {
    return Users.find(user => user.id === post.userId)
  }, [post.userId])

  const likeHandler = () => {
    setLike(isLiked ? like - 1 : like + 1)
    setIsLiked(!isLiked)
  }

  return (
    <div className="post">
      <div className="post-wrapper">
        <div className="post-top">
          <div className="post-top-left">
            <img
              className="post-profile-img"
              src={user.profilePicture}
              alt={user.username}
            />
            <span className="post-username">
              {user.username}
            </span>
            <span className="post-date">{post.date}</span>
          </div>
          <div className="post-top-right">
            <MoreVert/>
          </div>
        </div>
        <div className="post-center">
          <span className="post-text">{post?.desc}</span>
          <img className="post-img" src={post.photo} alt="post"/>
        </div>
        <div className="post-bottom">
          <div className="post-bottom-left">
            <img className="like-icon" src="/assets/like.png" alt="like" onClick={likeHandler}/>
            <img className="like-icon" src="/assets/heart.png" alt="love" onClick={likeHandler}/>
            <span className="post-like-counter">{like}</span>
          </div>
          <div className="post-bottom-right">
            <span className="post-comment-text">{post.comment} comments</span>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Post