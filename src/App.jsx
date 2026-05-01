import AOS from 'aos'        // ✅ top level
import 'aos/dist/aos.css'
import { useSelector } from 'react-redux'
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
import Updatecompany from './components/Adminwork/Updatecompany.jsx'
import JobHome from './components/Adminwork/JobHome.jsx'
import AdmincompanyDelete from './components/Adminwork/AdmincompanyDelete.jsx'
import JobCreate from './components/Adminwork/JobCreate.jsx'
import Deleteadminjob from './components/Adminwork/Deleteadminjob.jsx'
import DetailAdminjob from './components/Adminwork/DetailAdminjob.jsx'
import ViewApplicants from './components/ViewApplicants.jsx'
import AdminPostsCreate from './components/Adminwork/Adminpostcreate.jsx'
import PostUpdate from './components/Adminwork/PostUpdate.jsx'
import Postdelete from './components/Adminwork/Postdelete.jsx'
import Detailpost from './components/Adminwork/Detailpost.jsx'
import { useEffect } from 'react'
import Resume from './pages/Resume/Resume.jsx'

function App() {
  const user = useSelector(store => store?.Setuser?.user)

  useEffect(() => {
    AOS.init({ duration: 800 })  // initialize here instead
  }, [])

  return (
    <>

      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/login' element={<Login />} />
        <Route path='/signup' element={<Signup />} />
        <Route path='/browse' element={<Browse />} />
        <Route path='/posts' element={<Posts />} />
        <Route path='/profile' element={<Profile key={user?.id || 'profile'} />} />
        <Route path='/addresume' element={<Resume />} />


        <Route path='/logout' element={<Logout />} />
        <Route path='/jobs/:id' element={<Sepratejob />} />
        {/* create admin job comonents */}
        <Route path='/admin/jobs' element={<JobHome />} />
        <Route path="/admin/job/delete/:id" element={<Deleteadminjob />} />
        <Route path="/admin/job/description/:id" element={<DetailAdminjob />} />
        <Route path='/admin/jobs/create' element={<JobCreate />} />
        <Route path='/admin/job/description/applications/:id' element={<ViewApplicants />} />


        {/* companies company work */}
        <Route path='/admin/companies' element={<Admincompany />} />
        <Route path='/admin/companies/create' element={<Createjob />} />
        <Route path='/admin/company/delete/:id' element={<AdmincompanyDelete />} />
        <Route path='/admin/companies/update/:id' element={<Updatecompany />} />

        {/* posts works */}
        <Route path='/admin/posts' element={<AdminPosts />}></Route>
        <Route path='/posts/:id' element={<Detailpost />} />
        <Route path='/admin/posts/create' element={<AdminPostsCreate />} />
        <Route path="/admin/posts/update/:id" element={<PostUpdate />}></Route>
        <Route path='/admin/posts/delete/:id' element={<Postdelete />} />




      </Routes>
    </>
  )
}

export default App

