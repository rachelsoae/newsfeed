import Card from './Card';

const Home = ({articles, formatDate, setLoading}) => {
  const cards = articles.map(article => <Card key={article.publishedAt} article={article} formatDate={formatDate} setLoading={setLoading} />)
  
  return (
    <main className='Home'>
      <div className='Home__search'>
        <label htmlFor='search'>Search</label>
        <input type='search' id='search'/>
      </div>
      {cards}
    </main>
  )
}

export default Home;