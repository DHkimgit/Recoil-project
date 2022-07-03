import React from 'react';
import { useRecoilState } from 'recoil';
import { animeListState } from './AnimeList';
import './AnimeListItem.scss';

function removeItemAtIndex(arr, index) {
  return [...arr.slice(0, index), ...arr.slice(index + 1)];
}

function AnimeListItem({itemList}) {
  const [animeList, setAnimeList] = useRecoilState(animeListState);
  const index = animeList.findIndex((listitem) => listitem === itemList);
  
  const deleteItem = () => {
    const newList = removeItemAtIndex(animeList, index);
    setAnimeList(newList);
  };

  return(
      <tr className='tr'>
        <td>{itemList.animeName}</td>
        <td>{itemList.watchDate}</td>
        <td>{itemList.animeRating}</td>
        <td><button onClick={deleteItem}>X</button></td>
      </tr>
  )
}

export default AnimeListItem;