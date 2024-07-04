/* Libraries */
import clsx from "clsx";
/* Styles */
import Css from "./FriendListItem.module.css";

const FriendListItem = ({ friends: { avatar, name, isOnline } }) => {
  const statusColor = clsx(Css.text, isOnline ? Css.isOnline : Css.isOffline);
  return (
    <div>
      <img src={avatar} alt="Avatar" width="48" />
      <p className={Css.text}>{name}</p>
      <p className={statusColor}>{isOnline === true ? "online" : "offline"}</p>
    </div>
  );
};

export default FriendListItem;
