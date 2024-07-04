import Profile from "../Profile/Profile";
import UserData from "../../userData.json";
import FriendList from "../FriendList/FriendList";
import Friends from "../../friends.json";
import TransactionHistory from "../TransactionHistory/TransactionHistory";
import TransactionList from "../../transaction.json"

const App = () => {
  return (
    <div>
      <Profile info={UserData} />
      <FriendList friends={Friends} />
      <TransactionHistory items={TransactionList}/>
    </div>
  );
};

export default App;
