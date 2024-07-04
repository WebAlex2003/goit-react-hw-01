import Css from "./Profile.module.css";

const Profile = ({
  info: {
    username,
    tag,
    location,
    avatar,
    stats: { followers, views, likes },
  },
}) => {
  return (
    <div className={Css.mainContainer}>
      <div className={Css.container}>
        <img className={Css.userPhoto} src={avatar} alt="User avatar" />
        <p>{username}</p>
        <p>{tag}</p>
        <p>{location}</p>

        <ul className={Css.userList}>
          <li>
            <span>{followers}</span>
            <span></span>
          </li>
          <li>
            <span>{views}</span>
            <span></span>
          </li>
          <li>
            <span>{likes}</span>
            <span></span>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Profile;
