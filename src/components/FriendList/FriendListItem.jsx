import s from './FriendList.module.css'

const FriendListItem = ({id, avatar, name, isOnline}) => {
    return ( 
        <li key={id} className={s.frienditem}>
                        <span className={ isOnline ? s.online : s.offline}></span>
                        <img className={s.avatar} src={avatar} alt={name} width="48" />
                        <p className={s.name}>{name}</p>
                    </li>
     );
}
 
export default FriendListItem;