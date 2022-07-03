import React from 'react';
import { atom, RecoilRoot } from 'recoil';
import AnimeListCreator from './AnimeListCreator';
import AnimeListTemplate from './AnimeListTemplate';
import './AnimeList.scss';

export const animeListState = atom({
  key: 'animeListState',
  default: [
    {
      id: 0,
      animeName: '진격의 거인',
      watchDate: '2022-06',
      animeRating: '5/5',
    }
  ]
})

function AnimeList() {
  return(
    <>
      <RecoilRoot>
        <AnimeListTemplate />
        <AnimeListCreator />
      </RecoilRoot>
    </>
  )
}

export default AnimeList;