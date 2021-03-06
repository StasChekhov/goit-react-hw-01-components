import PropTypes from 'prop-types';
import s from './Profile.module.css';

const Profile = ({ username, tag, location, avatar, stats }) => {
    const { followers, views, likes } = stats;

    return ( <div className="profile">
      <div className={s.description}>
        <img
          src={avatar}
          alt="Аватар пользователя"
          className={s.avatar}
          width="156px"
        />
        <p className="name">{username}</p>
        <p className="tag">@{tag}</p>
        <p className="location">{location}</p>
      </div>

      <ul className={s.stats}>
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

  Profile.propTypes = {
    name: PropTypes.string.isRequired,
    tag: PropTypes.string.isRequired,
    location: PropTypes.string.isRequired,
    avatar: PropTypes.string.isRequired,
    stats: PropTypes.shape({
      followers: PropTypes.number.isRequired,
      views: PropTypes.number.isRequired,
      likes: PropTypes.number.isRequired,
    }),
  };

export default Profile;