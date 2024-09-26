import {BrowserRouter, Routes, Route} from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'react-toastify/dist/ReactToastify.css';
import LoginPage from './pages/loginPage/LoginPage';
import PageHome from './pages/HomePage/PageHome';
import Register from './component/LoginPages/Register';
import ResetPassword from './component/LoginPages/ResetPassword';
import PageBlogList from './pages/BloglistPage/PageBlogList';
import BlogDetailPage from './pages/BlogDetailPage/BlogDetailPage';
import Dashboard from './component/Dashboard/Dashboard';
import RommDashboard from './pages/RoomDashboard/RoomDashboard';

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
          <Route path='/room' element={<RommDashboard/>}></Route>
          <Route path='/bloglist' element={<PageBlogList/>}></Route>
          <Route path='/readblog/:id' element={<BlogDetailPage/>}></Route>
          
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
