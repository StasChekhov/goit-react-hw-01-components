import './App.css';
import Profile from './components/Profile/Profile';
import userInformation from './components/Profile/user.json';
// import Statistics from './components/Statistics/Statistics';
// import statisticalData from './components/Statistics/statistics.json';



function App() {
  return (
    <Profile
      username={userInformation.username}
      tag={userInformation.tag}
      location={userInformation.location}
      avatar={userInformation.avatar}
      followers={userInformation.stats.followers}
      views={userInformation.stats.views}
      likes={userInformation.stats.likes}
    />
    // <Statistics 
    // />
  );
}

export default App;
