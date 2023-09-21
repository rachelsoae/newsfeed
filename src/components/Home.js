import { Link } from 'react-router-dom';
import Card from './Card';

const Home = ({articles, formatDate}) => {
  const cards = articles.map(article => <Card key={article.publishedAt} article={article} formatDate={formatDate} />)
  
  return (
    <main className='Home'>
      {/* search */}
      {cards}
    </main>
  )
}

export default Home;