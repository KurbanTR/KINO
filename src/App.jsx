//Компоненты
import SignUp from './components/auth/SignUp'
import SignIn from './components/auth/SignIn'
import AuthDetails from './components/auth/AuthDetails'
import Test from './components/test/test'
import Header from './components/header/header'
import Welcome from './components/content/Welcome/Welcome'
import Genres from './components/content/Genres/Genres'
import Video from './components/content/Video/Video'
import FilmDetails from './components/test/filmsID'
import GenresTV from './components/content/Genres/GenresTV'
import Episodes from './components/content/episodes/episodes'
// import Video2 from './components/content/Video/Video2'
//Стили
import './index.css'
//Библиотеки
import React from 'react'
import { Route, Routes } from 'react-router-dom'


const App = () => {
  document.cookie = 'cookieName=cookieValue; SameSite=None; Secure';
  return (
    <>
    <Routes>
      <Route path='/' element={<> <Header/> <Welcome/> <Genres/> <GenresTV/> <Test/> </>}/>
      <Route path='/signIn' element={<SignIn/>}/>
      <Route path='/register' element={<SignUp/>}/>
      <Route path='/personal-Area' element={<AuthDetails/>}/>
      <Route path="/films/:id" element={<><Header/> <FilmDetails/></>} />
      <Route path="/films" element={<><Header/> <Test/></>} />
      <Route path='/video' element={<Video/>}/>
      <Route path='/episodes' element={<Episodes/>}/>
      {/* <Route path='/videoTest' element={<Video2/>}/> */}
    </Routes> 
    </>
  )
}

export default App