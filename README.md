# React Infinite Scroll User List
This project is a custom, user-friendly User List component built with React and TypeScript, designed to handle large datasets with infinite scroll. The component fetches user data from an API in batches of 20 and efficiently displays each user's details.

## Features
Lazy Loading with Infinite Scroll: Automatically loads 20 users at a time as you scroll, fetching data from a public API.
Optimized Rendering: Renders only the necessary elements to maintain performance with large datasets.
Detailed User Cards: Each user card displays key details including name, location, email, and age, with responsive design optimized for various devices.
Accessible and Responsive: Designed to work seamlessly across both desktop and mobile, with focus on accessibility.
## Setup and Installation

1. **Clone the Repository**:
    ```bash
    git clone https://github.com/Bloodw1n/emcd-test-react.git
    cd emcd-test-react
    ```

2. **Install Dependencies**:
    ```bash
    npm install
    ```

3. **Run the App**:
    ```bash
    npm run dev
    ```

Usage
The User List component provides an infinite scrolling experience to display a list of users. With this component, you can:

- Scroll down to automatically load more users as you reach the bottom of the list.
- View detailed information for each user in a responsive card format.
- Effortlessly navigate through the list without performance lag, even as more users load in real-time.
