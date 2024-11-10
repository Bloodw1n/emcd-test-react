import { fetcher } from '@shared/api/httpClient';
import { User } from '../model/user';

/**
 * Fetches a list of users from the API.
 *
 * @async
 * @function getUsers
 * @param {number} [results=20] - The number of users to fetch.
 * @returns {Promise<User[]>} - A promise that resolves to an array of `User` objects.
 * @throws {Error} - Throws an error if the request fails or the response is not OK.
 */
export const getUsers = async (results = 20): Promise<User[]> => {
  const data = await fetcher(`${__USER_API_URL__}/?results=${results}`);
  return data.results;
};
