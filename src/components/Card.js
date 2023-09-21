const Card = () => {
  return (
    <article className='Card'>
      <img className='Card__img' src='https://cdn.cnn.com/cnnnext/dam/assets/230916152026-02-uaw-autoworkers-strike-0916-super-tease.jpg'/>
      <span className='Card__text'>
        <h2 className='Card__title'>United Auto Workers strike enters third day: Live updates - CNN</h2>
        <p>The United Auto Workers' strike against General Motors, Ford and Stellantis has entered its third day. Follow here for the latest.</p>
        <div className='Card__details'>
          <p>09/17/23</p>
          <p>CNN</p>
        </div>
      </span>
    </article>
  )
}

export default Card;