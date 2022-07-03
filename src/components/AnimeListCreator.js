import React, { useState } from 'react'
import { useRecoilState } from 'recoil'
import { animeListState } from './AnimeList'
import './AnimeListCreator.scss'
import AnimeListItem from './AnimeListItem';

let id=1;
function getId() {
  return id++;
}

function AnimeListCreator() {
  const [inputValue, setInputValue] = useState({
    animeName: '',
    watchDate: '' ,
    animeRating: ''
  });
  const {animeName, watchDate, animeRating} = inputValue;
  const [Animelist, setAnimeList] = useRecoilState(animeListState);
  const addAnime = () => {
    setAnimeList((OldAnimeList) => [
      ...OldAnimeList,
      {
        id: getId(),
        animeName: inputValue.animeName,
        watchDate: inputValue.watchDate,
        animeRating: inputValue.animeRating,
      }
      ])
    setInputValue({
      animeName: '',
      watchDate: '',
      animeRating: 'Default'
    })
  }

  const onChange = (event) => {
    const {value, name} = event.target;
    setInputValue({
      ...inputValue,
      [name]: value
    });
  }
  console.log(Animelist);
  return(
    <>
      <div className='AnimeListTemplate1'>
        <form className='animeNameInput'>
        <input 
          type="text"
          name='animeName'
          placeholder='insertAnimeName'
          value={animeName}
          onChange = {onChange}
        />
      </form>
      <form className='watchDate'>
        <p>WatchMonth  </p>
      </form>
      <form className='watchDateInput'>
      <input 
        type="month"
        name='watchDate'
        placeholder='ex) 2022-02-03'
        value={watchDate}
        onChange = {onChange}
      />
      </form>
      
      <form className='animeRatingInput'>
        <select value={animeRating} onChange={onChange} name='animeRating'>
          <option value='Default'>Choose Rating</option>
          <option value='5/5'>5</option>
          <option value='4/5'>4</option>
          <option value='3/5'>3</option>
          <option value='2/5'>2</option>
          <option value='1/5'>1</option>
          <option value='0/5'>0</option>
        </select>
      </form>
      <form className='InsertButton'>
        <button onClick = {addAnime} type='button'>+</button>
      </form>
    </div>
    <table className='listTable'>
      <thead>
        <tr className='TableHead'>
          <th className='AnimeName'>Anime Name</th>
          <th className='Watch Date'>Watch Date</th>
          <th className='Rating'>Rating</th>
          <th className='Delete'>Delete</th>
        </tr>
      </thead>
      <tbody>
        {Animelist.map((item) => (
          <AnimeListItem itemList={item} key={item.id} />
        ))}
      </tbody>
    </table>
  </>
  )
};

export default AnimeListCreator;