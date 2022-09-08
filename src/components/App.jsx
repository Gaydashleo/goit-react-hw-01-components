// import{CardBoard} from 'components/CardBoard/CardBoard'
import  UserCard  from 'components/UserCard/UserCard';
import  user  from 'data/user.json';

export const App = () => {
  return (
    <div
      style={{
        height: '100vh',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        fontSize: 40,
        color: '#010101'
      }}
    >
      {/* <CardBoard/> */}
      <UserCard
        username={user.username}
        tag={user.tag}
        location={user.location}
        avatar={user.avatar}
        stats={user.stats}/>
     
    </div>
  );
};
