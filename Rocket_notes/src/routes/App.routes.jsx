import {Routes, Route} from 'react-router-dom';
import Home from '../components/Home.jsx'
import New from '../components/New.jsx';
import Profile from '../components/Profile.jsx';
import SignIn from '../components/SignIn.jsx';
import SignUp from '../components/SignUp.jsx';

const AppRoutes = () => {
  return (
    <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/new' element={<New />} />
        {/*<Route path='/detail:id' component={<Detail />} />*/}
        <Route path='/profile' element={<Profile />} />
        <Route path='/signin' element={<SignIn />} />
        <Route path='/signup' element={<SignUp />} />
    </Routes>
  )
}


export default AppRoutes