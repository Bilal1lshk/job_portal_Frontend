
import { Button } from './components/ui/button.jsx'
import Home from './pages/home/Home.jsx'
import { Routes, Route } from 'react-router-dom'
import Signup from './pages/signup/Signup.jsx'
import Login from './pages/login/Login.jsx'
import Browse from './pages/Browsejobs/Browse.jsx'
import Posts from './pages/Posts/Posts.jsx'
import Profile from './pages/Profile/Profile.jsx'
import Logout from './pages/Logout/Logout.jsx'
import Sepratejob from './pages/Jobpage/Sepratejob.jsx'
import Createjob from "./components/Adminwork/Createjob.jsx"
import Admincompany from './components/Adminwork/Admincompany.jsx'
import AdminPosts from './components/Adminwork/AdminPosts.jsx'

function App() {

  return (
    <>

      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/login' element={<Login />} />
        <Route path='/signup' element={<Signup />} />
        <Route path='/browse' element={<Browse />} />
        <Route path='/posts' element={<Posts />} />
        <Route path='/profile' element={<Profile />} />
        <Route path='/logout' element={<Logout />} />
        <Route path='/jobs/:id' element={<Sepratejob />} />
        {/* create admin comonents */}
        <Route path='/admin/jobs' element={<Createjob />} />
        {/* companies furthuer work */}
        <Route path='/admin/companies' element={<Admincompany />} />
        <Route path='/admin/companies/create' element={<Createjob />} />
        <Route path='/admin/posts' element={<AdminPosts />} />




      </Routes>
    </>
  )
}

export default App
