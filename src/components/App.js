import { Routes, Route } from 'react-router-dom';
import Nav from './Nav';
import ArticleDetail from './ArticleDetail';
import Card from './Card';

const App = () => {
  return (
    <div className='App'>
      <Nav />
      <main>
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
