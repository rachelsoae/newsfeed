import { useParams, Link } from 'react-router-dom';
import { useEffect } from 'react';

const ArticleDetail = ({formatDate, updateArticle, article, loading, setLoading}) => {
  const id = useParams().id
  useEffect(() => {
    updateArticle(id);
    setLoading(false);
  }, [])

  const formatContent = contentString => {
    return contentString.split('[')[0];
  }
  
  return (
    <>
      {loading ? 
      <h3>Loading</h3>
      :
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
      </div>}
    </>
  )
}

export default ArticleDetail;