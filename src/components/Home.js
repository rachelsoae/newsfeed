import { useState, useEffect } from 'react';
import Card from './Card';

const Home = ({articles, formatDate, updateArticle}) => {
  const [searchTerm, setSearchTerm] = useState(''); 
  const [cards, setCards] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    getAllCards()
    setLoading(false)
  }, [articles])

  const getAllCards = () => {
    setCards(articles.map(article => <Card key={article.publishedAt} article={article} formatDate={formatDate} setLoading={setLoading} updateArticle={updateArticle}/>))
  }

  const handleChange = (e) => {
    setSearchTerm(e.target.value.toLowerCase())
    filterCards(searchTerm)
  }

  const filterCards = string => {
    const filteredArticles = articles.filter(article => {
      return article.title.toLowerCase().includes(string) || article.description.toLowerCase().includes(string) || article.source.name.toLowerCase().includes(string) || formatDate(article.publishedAt).toLowerCase().includes(string)
    })
    setCards(filteredArticles.length ? 
      filteredArticles.map(article => {
        return <Card 
          key={article.publishedAt} 
          article={article} 
          formatDate={formatDate} 
          setLoading={setLoading}
          updateArticle={updateArticle} 
        />
      }) 
      : 
      <p>Sorry, no articles were returned that match your search</p>)
  }

  return (
    <>
      {loading ?
      <p>Loading...</p>
      :
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
      }
    </>
  )
}

export default Home;