import { Link } from 'react-router-dom';
import Card from './Card';

const Home = ({articles}) => {
  const cards = articles.map(article => <Card key={article.publishedAt} article={article} />)
  
  return (
    <main className='Home'>
      {/* search */}
      {cards}
    </main>
  )
}

export default Home;