import { Link } from 'react-router-dom';

const Card = ({article}) => {
  const formatDate = dateString => {
    const date = new Date(dateString).toString();
    return date.slice(0, 21);
  }

  return (
    <Link to={`/12`} id={article.publishedAt}>
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