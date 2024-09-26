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
import RoomPageDetail from './pages/RoomDetailPage/RoomPageDetail';
import ScrollButton from './component/ScrollButton/ScrollButton';
import HotelDetailPage from './pages/HotelDetailPage/HotelDetailPage';

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
          <Route path='/readblog' element={<BlogDetailPage/>}></Route>
          <Route path='/roomdetail/:id' element={<RoomPageDetail/>}></Route>
          <Route path='/hoteldetail/:id' element={<HotelDetailPage/>}></Route>
        </Routes>
      </BrowserRouter>
      <ScrollButton/>
    </div>
  );
}

export default App;
