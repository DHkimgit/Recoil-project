import React from 'react'
import './AnimeSearchTemplate.scss'
import { Link } from 'react-router-dom';

function AnimeSearchTemplate() {
  return(
    <div className='AnimeListTemplate'>
      <div className='system-title'>Search Animation</div>
      <Link to='/'><div className='current-time'>Add List</div></Link>
    </div>
  )
}
export default AnimeSearchTemplate;