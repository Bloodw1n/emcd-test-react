import { FC } from 'react';
import styles from './UserCard.module.scss';
import { UserCardProps } from './types';

/**
 * Component for displaying user details in a card format.
 *
 * @component
 * @param {UserCardProps} props - Props containing user data.
 * @returns {JSX.Element} - Rendered user card component.
 */
const UserCard: FC<UserCardProps> = ({ user }) => (
  <div className={styles.card}>
    <img className={styles.avatar} src={user.picture.thumbnail} alt={`${user.name.first} ${user.name.last}`} />
    <div className={styles.info}>
      <h3>{`${user.name.first} ${user.name.last}`}</h3>
      <p>Email: {user.email}</p>
      <p>Location: {`${user.location.city}, ${user.location.state}, ${user.location.country}`}</p>
      <p>Age: {user.dob.age}</p>
      <p>Phone: {user.phone}</p>
    </div>
  </div>
);

export default UserCard;
