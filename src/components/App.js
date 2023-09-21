import { useState, useEffect } from 'react';
import { Routes, Route } from 'react-router-dom';
import Nav from './Nav';
import Home from './Home';
import ArticleDetail from './ArticleDetail';
import Error from './Error';
import data from '../mockData';

const App = () => {
  const [articles, getArticles] = useState(data.articles);

  return (
    <div className='App'>
      <Nav />
      <Routes>
        <Route path='/' element={<Home articles={articles} />}/>
        <Route path='/:id' element={<ArticleDetail />}/>
        <Route path='/error' element={<Error />}/>
      </Routes>
    </div>
  );
}

export default App;
