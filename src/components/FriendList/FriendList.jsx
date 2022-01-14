import PropTypes from 'prop-types';
import s from './FriendList.module.css'
import FriendListItem from './FriendListItem';


export const FriendList = ({friends}) => {
    return (
        <ul className={s.friendlist}>
            {friends.map(({ id, avatar, name, isOnline }) => {
              return (
                <FriendListItem key={id} avatar={avatar} name={name} isOnline={isOnline}/>
              )
            })}
        </ul>
    );
}

FriendList.propTypes = {
  friends: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      avatar: PropTypes.any.isRequired,
      name: PropTypes.any.isRequired,
      isOnline: PropTypes.any.isRequired,
    }),
  ),
};

// {isOnline}=true ? "online" : "status"



