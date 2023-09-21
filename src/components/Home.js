import Card from './Card';

const Home = ({articles, formatDate, setLoading}) => {
  const cards = articles.map(article => <Card key={article.publishedAt} article={article} formatDate={formatDate} setLoading={setLoading} />)
  
  return (
    <main className='Home'>
      {/* search */}
      {cards}
    </main>
  )
}

export default Home;