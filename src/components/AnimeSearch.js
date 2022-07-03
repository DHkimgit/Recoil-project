import React from 'react';
import { RecoilRoot } from 'recoil';
import './AnimeList.scss';
import AnimeSearchResult from './AnimeSearchResult';
import AnimeSearchTemplate from './AnimeSearchTemplate';

function AnimeSearch() {
  return(
    <>
      <RecoilRoot>
        <AnimeSearchTemplate />
        <AnimeSearchResult />
      </RecoilRoot>
    </>
  )
}

export default AnimeSearch;