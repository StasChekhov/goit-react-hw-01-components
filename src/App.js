import './App.css';
import Profile from './components/Profile';
import userInformation from './user.json';


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
    
  );
}

export default App;
