import { useState, useEffect } from 'react';
import { Routes, Route } from 'react-router-dom';
import Nav from './Nav';
import Home from './Home';
import ArticleDetail from './ArticleDetail';
import Error from './Error';
import Card from './Card';
import getData from '../apiCalls'
import data from '../mockData'

const App = () => {
  // if using mockData, remember to cleanData
  const [articles, setArticles] = useState([]);
  const [article, setArticle] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');

  // useEffect(() => {
  //   setArticles(data.articles)
  // }, [])

  useEffect(() => {
    getData()
    .then(data => setArticles(cleanData(data.articles)))
    .catch(err => setError(err))
  }, [])

  const cleanData = dataArray => {
    return dataArray.filter(art => art.title !== '[Removed]')
  }

  const formatDate = dateString => {
    const date = new Date(dateString).toString();
    return date.slice(0, 21);
  }

  const updateArticle = id => {
    const art = articles.find(elem => elem.publishedAt === id.slice(0, 20))
    setArticle(art);
  }

  return (
    <div className='App'>
      <Nav />
      <Routes>
        <Route 
          path='/' 
          element={<Home 
            articles={articles} 
            formatDate={formatDate} 
            loading={loading}
            setLoading={setLoading} 
            updateArticle={updateArticle}
          />}
        />
        <Route 
          path='/:id' 
          element={<ArticleDetail 
            article={article}
            formatDate={formatDate} 
            updateArticle={updateArticle}
            loading={loading} 
            setLoading={setLoading} 
          />}
        />
        <Route path='/error' element={<Error />}/>
      </Routes>
    </div>    
  );
}

export default App;
