import { Link } from 'react-router-dom';
import Card from './Card';

const Home = () => {
  return (
    <main className='Home'>
      <Link to='/error'>Error</Link>
      {/* search */}
      <Card />
      <Card />
      <Card />
      <Card />
      <Card />
    </main>
  )
}

export default Home;