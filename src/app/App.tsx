import { FC } from 'react';
import { InfinityScrollList } from '@features/infinity-scroll';

const App: FC = () => {
  return (
    <div className="App">
      <h1>Infinite Scroll</h1>
      <InfinityScrollList />
    </div>
  );
};

export default App;
