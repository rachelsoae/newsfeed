import { Routes, Route, Link } from 'react-router-dom';
import Nav from './Nav';
import ArticleDetail from './ArticleDetail';
import Card from './Card';
import Error from './Error';

const App = () => {
  return (
    <div className='App'>
      <Nav />
      <main>
        <Link to='/error'>Error</Link>
        {/* search */}
        {/* cards */}
      </main>
      <Routes>
        <Route path='/:id' element={<ArticleDetail />}/>
        <Route path='/error' element={<Error />}/>
      </Routes>
    </div>
  );
}

export default App;
