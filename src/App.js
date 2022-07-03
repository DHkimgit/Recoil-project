import React from 'react';
import { Routes, Route } from 'react-router-dom';
import AnimeList from './components/AnimeList';
import AnimeSearch from './components/AnimeSearch';
import { atom, RecoilRoot } from 'recoil';

export const searchId = atom({
  key: 'searchResult',
  default: ''
})

function App() {
  return (
    <>
      <RecoilRoot>
      <Routes>
        <Route path='/' element={<AnimeList />}></Route>
        <Route path='/search' element={<AnimeSearch />}></Route>
      </Routes>
      </RecoilRoot>

    </>
  );
}

export default App;
