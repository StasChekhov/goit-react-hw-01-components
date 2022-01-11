import PropTypes from 'prop-types';
import s from './FriendList.module.css'


export const FriendList = (props) => {
    const { friends } = props;
    return (
        <ul className={s.friendlist}>
            {friends.map(({id, avatar, name, isOnline}) => {
                return (
                    <li key={id} className={s.frienditem}>
                        <span className={ isOnline ? s.online : s.offline}></span>
                        <img className={s.avatar} src={avatar} alt={name} width="48" />
                        <p className={s.name}>{name}</p>
                    </li>
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



