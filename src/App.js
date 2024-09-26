import {BrowserRouter, Routes, Route} from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'react-toastify/dist/ReactToastify.css';
import LoginPage from './pages/loginPage/LoginPage';
import PageHome from './pages/HomePage/PageHome';
import Register from './component/LoginPages/Register';
import ResetPassword from './component/LoginPages/ResetPassword';
<<<<<<< HEAD
import Dashboard from './component/Dashboard/Dashboard';
import PageBlogList from './pages/BloglistPage/PageBlogList';
import BlogDetailPage from './pages/BlogDetailPage/BlogDetailPage';
import Dashboard from './component/Dashboard/Dashboard';
import BlogDashboard from './pages/BlogDashboard/BlogDashBoard';
=======
import PageBlogList from './pages/BloglistPage/PageBlogList';
import BlogDetailPage from './pages/BlogDetailPage/BlogDetailPage';
import Dashboard from './component/Dashboard/Dashboard';
import RommDashboard from './pages/RoomDashboard/RoomDashboard';
>>>>>>> cbe44d12f5978efdbf6f71468f7bbf7d9bff9fee

function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route index element={<PageHome/>}></Route>
          <Route path='/home' element={<PageHome/>}></Route>
          <Route path='/login' element={<LoginPage/>}></Route>
          <Route path='/register' element={<Register/>}></Route>
          <Route path='/forgetpassword' element={<ResetPassword/>}></Route>
          <Route path='/dashboard' element={<Dashboard/>}></Route>
<<<<<<< HEAD
          <Route path='/bloglist' element={<PageBlogList/>}></Route>
          <Route path='/readblog/:id' element={<BlogDetailPage/>}></Route>
          <Route path='/blogdashboard' element={<BlogDashboard/>}></Route>
=======
          <Route path='/room' element={<RommDashboard/>}></Route>
          <Route path='/bloglist' element={<PageBlogList/>}></Route>
          <Route path='/readblog/:id' element={<BlogDetailPage/>}></Route>
          
>>>>>>> cbe44d12f5978efdbf6f71468f7bbf7d9bff9fee
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
