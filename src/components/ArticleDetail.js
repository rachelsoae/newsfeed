import { useParams, Link } from 'react-router-dom';

const ArticleDetail = ({articles}) => {
  const id = useParams().id
  const article = articles.find(art => art.publishedAt === id.slice(0, 20))
  
  return (
    <div className='Article'>
      <Link to='/'>{"<"} Back</Link>
      <section className='Article__header'>
        <p>CNN</p>
        <h2>United Auto Workers strike enters third day: Live updates - CNN</h2>
        <p>By Robert Ilich, CNN</p>
        <p>09/17/2023</p>
      </section>
      <section className='Article__body'>
        <img src='https://cdn.cnn.com/cnnnext/dam/assets/230916152026-02-uaw-autoworkers-strike-0916-super-tease.jpg'/>
        <span className='Article__content'>
          <p>The United Auto Workers strike isnt happening in a vacuum. Its part of a growing movement of US workers walking off the job. From Hollywood writers to nurses, factory workers, and Starbucks baristas…</p>
          <Link>[Link to Original Article]</Link>
        </span>
      </section>
    </div>
  )
}

export default ArticleDetail;