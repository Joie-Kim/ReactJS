import React from 'react';
import { Route } from 'react-router-dom';
import NewsPage from './pages/NewsPage';

const App = () => {
  // path에 ?가 있는 이유: category 값이 선택적이기 때문. 있을 수도 있고, 없을 수도 있다.
  return <Route path="/:category?" component={NewsPage} />;
};

export default App;
