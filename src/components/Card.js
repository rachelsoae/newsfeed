import { Link } from 'react-router-dom';

const Card = ({article, formatDate, setLoading}) => {
  return (
    <Link to={`/${article.publishedAt}+${article.source.id}`} id={article.publishedAt} onClick={() => setLoading(true)}>
      <article className='Card'>
        <img className='Card__img' src={article.urlToImage}/>
        <span className='Card__text'>
          <h2 className='Card__title'>{article.title}</h2>
          <p>{article.description}</p>
          <div className='Card__details'>
            <p>{formatDate(article.publishedAt)}</p>
            <p>{article.source.name}</p>
          </div>
        </span>
      </article>
    </Link>
  )
}

export default Card;