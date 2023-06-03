import user from './Profile/user.json';
import Profile from "./Profile/Profile";

export const App = () => {
  return (
    <div>
    <Profile
  username={user.username}
  tag={user.tag}
  location={user.location}
  avatar={user.avatar}
  stats={user.stats}
      />
      <h1>Test</h1>
      </div>
  );
};

