import Section from 'components/Section/Section';
import UserCard from 'components/UserCard/UserCard';
import Statistics from 'components/Statistics/Statistics';
import FriendList from 'components/FriendList/FriendList';
import TransactionHistory from 'components/TransactionHistory/TransactionHistory';

import  user  from 'data/user.json';
import stats from 'data/stats.json';
import friends from 'data/friends.json';
import transactions from 'data/transactions.json';

export const App = () => {
  return (
    <div>
        <Section title={"Task-1 'Social network profile'"}>
        <UserCard
        username={user.username}
        tag={user.tag}
        location={user.location}
        avatar={user.avatar}
          stats={user.stats} />
      </Section>
      
      <Section title={"Task-2 'Statistics section'"}>
        <Statistics title="Upload stats" stats={stats} />
      </Section>
      
      <Section title={"Task-3 'Friend list'"}>
        <FriendList friends={friends} />
      </Section>
      
      <Section title={"Task-4 'Transaction history'"}>
        <TransactionHistory transactions={transactions} />
      </Section>
      
    </div>
  );
};
