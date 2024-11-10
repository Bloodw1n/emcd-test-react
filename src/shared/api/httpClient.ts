/**
 * Sends an HTTP GET request to the specified URL and returns the parsed JSON response.
 *
 * @async
 * @function fetcher
 * @param {string} url - The URL to send the GET request to.
 * @param {RequestInit} [options={}] - Optional fetch configuration options.
 * @returns {Promise<any>} - A promise that resolves to the JSON-parsed response data.
 * @throws {Error} - Throws an error if the response status is not OK (e.g., 404 or 500).
 */
export const fetcher = async (url: string, options: RequestInit = {}): Promise<any> => {
  const response = await fetch(url, options);

  if (!response.ok) {
    throw new Error(`Failed to fetch: ${response.status} ${response.statusText}`);
  }

  return response.json();
};
