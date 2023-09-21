import { Routes, Route } from 'react-router-dom';
import Nav from './Nav';
import Home from './Home';
import ArticleDetail from './ArticleDetail';
import Error from './Error';

const App = () => {
  return (
    <div className='App'>
      <Nav />
      <Routes>
        <Route path='/' element={<Home />}/>
        <Route path='/:id' element={<ArticleDetail />}/>
        <Route path='/error' element={<Error />}/>
      </Routes>
    </div>
  );
}

export default App;
