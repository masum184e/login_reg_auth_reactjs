import { BrowserRouter,Routes,Route } from 'react-router-dom'
import Home from './components/Home'
import Login from './components/User/Login'
import Registration from './components/User/Registration'
import Profile from './components/Profile/Profile'
import NotFound from './components/NotFound'
import About from './components/About'
import ResetPasswordEmail from './components/User/ResetPasswordEmail'
import ResetPassword from './components/User/ResetPassword'

function App() {
  return (
    <>
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/login' element={<Login />} />
        <Route path='/registration' element={<Registration />} />
        <Route path='/profile' element={<Profile />} />
        <Route path='/about' element={<About />} />
        <Route path='/reset_pwd_email' element={<ResetPasswordEmail />} />
        <Route path='/reset_pwd/:id/:token' element={<ResetPassword />} />
        <Route path='*' element={<NotFound />} />
      </Routes>
    </BrowserRouter>
    </>
  );
}

export default App;
