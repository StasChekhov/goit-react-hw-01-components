import './Profile.css'

const Profile = (props) => {
  const { username, tag, location, followers, views, likes } = props;
    return ( <div className="profile">
  <div className="description">
    <img
      src={props.avatar}
      alt="Аватар пользователя"
      className="avatar"
      width="156px"
    />
     <p className="name">{username}</p>
     <p className="tag">@{tag}</p>
     <p className="location">{location}</p>
  </div>

  <ul className="stats">
    <li>
      <span className="label"> Followers </span>
      <span className="quantity">{followers}</span>
    </li>
    <li>
      <span className="label"> Views </span>
      <span className="quantity">{views}</span>
    </li>
    <li>
      <span className="label"> Likes </span>
      <span className="quantity">{likes}</span>
    </li>
  </ul>
</div> );
}
 
export default Profile;