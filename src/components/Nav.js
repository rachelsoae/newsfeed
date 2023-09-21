import { Link } from 'react-router-dom';

const Nav = () => {
  return (
    <div className='Nav'>
      <Link to='/' className='Nav__link'>
        <h1>NEWSFEED</h1>
      </Link>
    </div>
  )
}

export default Nav;