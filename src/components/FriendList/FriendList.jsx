// import PropTypes from 'prop-types';
import './FriendList.css'


export const FriendList = (props) => {
    const { friends } = props;
    return (
        <ul className="friend-list">
            {friends.map(({id, avatar, name, isOnline}) => {
                return (
                    <li key={id} className="friend-item">
                        <span className="status">{isOnline}</span>
                        <img className="avatar" src={avatar} alt={name} width="48" />
                        <p className="name">{name}</p>
                    </li>
                )
            })}
        </ul>
    );
}


// FriendList.PropTypes = {
//     status: PropTypes.oneOf(['online', 'offline'])
//     
// }
