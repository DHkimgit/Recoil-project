import React, { useState } from 'react';
import { animeList } from '../state';
import { useRecoilValue } from 'recoil'
import './AnimeSearchResultList.scss'
function AnimeItem({ image_url, title, synopsis }) {
  return (
      <div className='results'>
        <img src={image_url} alt={title} />
        <p className='animename_p' title={title}>{title}</p>
        <p className='animename_synopsis'>{synopsis}</p>
      </div>
  );
}

function AnimeSearchResultList() {
  const list = useRecoilValue(animeList);

  return (
    <div className="anime-list">
      {list.map((item) => (
        <AnimeItem key={item.mal_id} {...item} />
      ))}
    </div>
  );
}

export default AnimeSearchResultList;
{/* <figure className="anime-item">
      <img src={image_url} alt={title} />
      <figcaption title={title}>{title}</figcaption>
    </figure> */}