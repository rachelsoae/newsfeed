import { useState, useEffect } from 'react';
import Card from './Card';

const Home = ({articles, formatDate, setLoading}) => {
  const [searchTerm, setSearchTerm] = useState(''); 
  const [cards, setCards] = useState([]);

  useEffect(() => {
    getCards(searchTerm)
  }, [searchTerm])

  const handleChange = (e) => {
    setSearchTerm(e.target.value.toLowerCase())
  }

  const filterArticles = () => {
    const filtered = articles.filter(article => {
      return article.title.toLowerCase().includes(searchTerm) || article.description.toLowerCase().includes(searchTerm) || article.source.name.toLowerCase().includes(searchTerm) || formatDate(article.publishedAt).toLowerCase().includes(searchTerm)
    })
    return filtered;
  }

  const getCards = (searchTerm = null) => {
    const forDisplay = searchTerm ? filterArticles() : articles;
    setCards(forDisplay.length ? forDisplay.map(article => <Card key={article.publishedAt} article={article} formatDate={formatDate} setLoading={setLoading} />) : <p>Sorry, no articles were returned that match your search</p>)
  }

  return (
    // {loading ?}
    <main className='Home'>
      <div className='Home__search'>
        <label htmlFor='search'>
          <span className='material-icons-round'>
            search
          </span>
        </label>
        <input 
          type='search' 
          id='search' 
          placeholder='Search by keyword...' 
          onChange={handleChange} 
        />
      </div>
      {cards}
    </main>
  )
}

export default Home;