import FriendListItem from "../FriendListItem/FriendListItem";
import Css from "./FriendList.module.css";

const FriendList = ({ friends }) => {
  return (
    <ul className={Css.friendsList}>
      {friends.map((friend) => (
        <li className={Css.friendItem} key={friend.id}>
          <FriendListItem friends={friend} />
        </li>
      ))}
    </ul>
  );
};

export default FriendList;
