import React, {useState, Suspense} from 'react';
import { useRecoilState } from 'recoil'
import AnimeSearchResultList from './AnimeSearchResultList';
import { keywordState } from '../state';
import './AnimeSearchResult.scss'

function AnimeSearchResult() {
  const [keyword, setKeyword] = useRecoilState(keywordState);
  const [value, setValue] = useState('');

  return(
    <>
    <div className='AnimeSearchTemplate'>
      <div className='animeSearchNameInput'>
        <input
          type="text"
          onChange={(e) => setValue(e.target.value)}
          onKeyDown={(e) => e.key === 'Enter' && setKeyword(value) }
          placeholder="검색어를 입력하세요."
        />
      </div>
      <div className='QuerayValue'><p>Query: {keyword}</p></div>
    </div>
    <div className='AnimeSearchValue'>
      <Suspense fallback={<div>Loading...</div>}>
        <AnimeSearchResultList />
      </Suspense>
    </div>
    </>
  )
}

export default AnimeSearchResult