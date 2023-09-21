import { useState, useEffect } from 'react';
import { Routes, Route } from 'react-router-dom';
import Nav from './Nav';
import Home from './Home';
import ArticleDetail from './ArticleDetail';
import Error from './Error';
import data from '../mockData';
import getData from '../apiCalls'

const App = () => {
  const [articles, setArticles] = useState([]);
  const [article, setArticle] = useState({})

  const cleanData = dataArray => {
    return dataArray.filter(art => art.title !== '[Removed]')
  }

  useEffect(() => {
    getData()
    .then(data => setArticles(cleanData(data.articles)))
  })

  const formatDate = dateString => {
    const date = new Date(dateString).toString();
    return date.slice(0, 21);
  }

  return (
    <div className='App'>
      <Nav />
      <Routes>
        <Route path='/' element={<Home articles={articles} formatDate={formatDate} setArticle={setArticle} />}/>
        <Route path='/:id' element={<ArticleDetail articles={articles} formatDate={formatDate} />}/>
        <Route path='/error' element={<Error />}/>
      </Routes>
    </div>
  );
}

export default App;
