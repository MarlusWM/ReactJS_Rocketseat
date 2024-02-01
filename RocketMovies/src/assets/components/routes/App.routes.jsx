import { Routes, Route } from 'react-router-dom'

import CreatMovie from '../create_movie/CreateMovie'
import Home from '../home/Home'
import MoviePreview from '../movie_preview/MoviePreview'
import Profile from '../profile/Profile'
import Signin from '../signin/Signin'
import Signup from '../signup/Signup'


const AppRoutes = () => {
  return (
    <Routes>
        <Route path='/createMovie' element={<CreatMovie />}/>
        <Route path='/home' element={<Home />}/>
        <Route path='/moviePreview' element={<MoviePreview />}/>
        <Route path='/profile' element={<Profile />}/>
        <Route path='/' element={<Signin />}/>
        <Route path='/signup' element={<Signup />}/>
    </Routes>
  )
}

export default AppRoutes