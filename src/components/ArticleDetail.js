import { useParams, Link } from 'react-router-dom';

const ArticleDetail = ({articles, formatDate}) => {
  const id = useParams().id
  const article = articles.find(art => art.publishedAt === id.slice(0, 20))

  const formatContent = contentString => {
    return contentString.split('[')[0];
  }
  
  return (
    <div className='Article'>
      <Link to='/'>{"<"} Back</Link>
      <section className='Article__header'>
        <p>{article.source.name}</p>
        <h2>{article.title}</h2>
        <p>{article.author}</p>
        <p>{formatDate(article.publishedAt)}</p>
      </section>
      <section className='Article__body'>
        <img src={`${article.urlToImage}`}/>
        <span className='Article__content'>
          <p>{formatContent(article.content)}</p>
          <Link to={`${article.url}`}>[Link to Original Article]</Link>
        </span>
      </section>
    </div>
  )
}

export default ArticleDetail;