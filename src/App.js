import './App.css';
import { Profile, Statistics, userInformation, statisticalData, FriendList, friends, TransactionHistory, transactions } from './components'
// import userInformation from './components/Profile/user.json';
// import statisticalData from './components/Statistics/statistical-data.json';
// import Profile from './components/Profile/Profile';
// import { Statistics } from './components/Statistics'


// у тебя statisticalData это массив, а ты стучишься как к обьекту

function App() {
  return (
    <div>
      <Profile
        username={userInformation.username}
        tag={userInformation.tag}
        location={userInformation.location}
        avatar={userInformation.avatar}
        stats={userInformation.stats}
        // followers={userInformation.stats.followers}
        // views={userInformation.stats.views}
        // likes={userInformation.stats.likes}
      />
      <Statistics
        // будем этот проп юзать
        title="Upload stats" stats={statisticalData}
        // тут ключ в целом не нужен но по идее он ничего не должен ломать
        // тут
        // label={statisticalData[0].label}
        // // и тут
        // percentage={statisticalData[0].percentage}
      />
      
      <FriendList
        friends={friends}
        
      />

      <TransactionHistory
        items={transactions}
      />
    </div>
  );
}

export default App;
