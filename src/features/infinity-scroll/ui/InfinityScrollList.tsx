import { FC } from 'react';
import { UserCard } from '@entities/user';
import useInfiniteScroll from '../model/useInfiniteScroll';
import { Loader } from '@shared/ui/Loader';

/**
 * Component for displaying an infinite scroll list of user cards.
 *
 * @component
 * @returns {JSX.Element} - Rendered component with an infinite scroll list of users.
 */
const InfinityScrollList: FC = () => {
  const { users, isLoading } = useInfiniteScroll();

  return (
    <div>
      {users.map((user, index) => (
        <UserCard key={`${user.email}-${index}`} user={user} />
      ))}
      {isLoading! && <Loader />}
    </div>
  );
};

export default InfinityScrollList;
