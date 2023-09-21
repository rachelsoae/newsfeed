import { useState, useEffect } from 'react';
import { Routes, Route } from 'react-router-dom';
import Nav from './Nav';
import Home from './Home';
import ArticleDetail from './ArticleDetail';
import Error from './Error';
import data from '../mockData';

const App = () => {
  const [articles, setArticles] = useState(data.articles);

  const formatDate = dateString => {
    const date = new Date(dateString).toString();
    return date.slice(0, 21);
  }

  return (
    <div className='App'>
      <Nav />
      <Routes>
        <Route path='/' element={<Home articles={articles} formatDate={formatDate} />}/>
        <Route path='/:id' element={<ArticleDetail articles={articles} formatDate={formatDate} />}/>
        <Route path='/error' element={<Error />}/>
      </Routes>
    </div>
  );
}

export default App;
