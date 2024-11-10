import { useState, useEffect, useCallback, useRef } from 'react';
import { getUsers } from '@/entities/user/api/userApi';
import { User } from '@entities/user/model/user';

const SCROLL_THRESHOLD = 300;

/**
 * Custom hook to handle infinite scroll functionality.
 * Fetches new user data when the user scrolls close to the bottom of the page.
 *
 * @returns {Object} - Returns the list of users, loading state, and loadMore function.
 * @property {User[]} users - List of users loaded so far.
 * @property {boolean} isLoading - Loading state for new data.
 */
const useInfiniteScroll = () => {
  const [users, setUsers] = useState<User[]>([]);
  const [isLoading, setIsLoading] = useState(false);
  const scrollTimeout = useRef<number | null>(null);

  /**
   * Fetches the next set of users from the API and appends them to the current list.
   */
  const loadMore = useCallback(async () => {
    setIsLoading(true);
    try {
      const newUsers = await getUsers();
      setUsers((prevUsers) => [...prevUsers, ...newUsers]);
    } catch (error) {
      console.error('Failed to load users:', error);
    } finally {
      setIsLoading(false);
    }
  }, []);

  /**
   * Handles the scroll event, checking if the user has scrolled near the bottom.
   * Triggers `loadMore` if conditions are met.
   */
  const handleScroll = useCallback(() => {
    if (isLoading) return;

    if (
      window.innerHeight + document.documentElement.scrollTop >=
      document.documentElement.offsetHeight - SCROLL_THRESHOLD
    ) {
      loadMore();
    }
  }, [isLoading, loadMore]);

  useEffect(() => {
    loadMore();
  }, [loadMore]);

  useEffect(() => {
    const debouncedHandleScroll = () => {
      if (scrollTimeout.current !== null) {
        clearTimeout(scrollTimeout.current);
      }
      scrollTimeout.current = window.setTimeout(handleScroll, 200);
    };

    window.addEventListener('scroll', debouncedHandleScroll);
    return () => {
      window.removeEventListener('scroll', debouncedHandleScroll);
      if (scrollTimeout.current !== null) {
        clearTimeout(scrollTimeout.current);
      }
    };
  }, [handleScroll]);

  return { users, isLoading };
};

export default useInfiniteScroll;
