import { useParams, Link } from 'react-router-dom';
import { useState, useEffect } from 'react';

const ArticleDetail = ({article, formatDate, updateArticle}) => {
  
  const id = useParams().id
  useEffect(() => {
    updateArticle(id);
  }, [])

  const formatContent = contentString => {
    return contentString.split('[')[0];
  }
  
  return (
    <>
      {!article ? 
      <p>Loading...</p>
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