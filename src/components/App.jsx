import{CardBoard} from 'components/CardBoard/CardBoard'
import { UserCard } from 'components/UserCard/UserCard';
import  user  from '../user.json';

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
      <CardBoard/>
      <UserCard events={ user} />
      {/* React homework template */}
    </div>
  );
};
