import React from 'react'
import './AnimeListTemplate.scss'
import { Link } from 'react-router-dom';

function AnimeListTemplate() {
  return(
    <div className='AnimeListTemplate'>
      <div className='system-title1'>감상한 애니 목록</div>
      <Link to='/search'><div className='current-time1'>애니 검색</div></Link>
    </div>
  )
}
export default AnimeListTemplate;