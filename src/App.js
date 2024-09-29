import { BrowserRouter, Routes, Route } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'react-toastify/dist/ReactToastify.css';
import LoginPage from './pages/loginPage/LoginPage';
import PageHome from './pages/HomePage/PageHome';
import Register from './component/LoginPages/Register';
import ResetPassword from './component/LoginPages/ResetPassword';
import Dashboard from './component/Dashboard/Dashboard';
import BlogDashboard from './pages/BlogDashboard/BlogDashBoard';
import PageBlogList from './pages/BloglistPage/PageBlogList';
import BlogDetailPage from './pages/BlogDetailPage/BlogDetailPage';
import RommDashboard from './pages/RoomDashboard/RoomDashboard';
import Rooms from './pages/Rooms/Rooms';
import Hotels from './pages/Hotels/Hotels';
import RoomPageDetail from './pages/RoomDetailPage/RoomPageDetail';
import ScrollButton from './component/ScrollButton/ScrollButton';
import HotelDetailPage from './pages/HotelDetailPage/HotelDetailPage';
import { ToastContainer } from 'react-toastify';
import { ToastProvider } from './utils/ToastContext';
import UserProfile from './component/UserProfile/UserProfile';
import BillDashboard from './pages/BillDashboard/BillDashboard';
import DashboardUser from './component/DashboardUser/DashBoardUser';

function App() {
  return (
    <div>
      <ToastProvider>
        <ToastContainer/>
        <BrowserRouter>
          <Routes>
            <Route index element={<PageHome />}></Route>
            <Route path='/home' element={<PageHome />}></Route>
            <Route path='/login' element={<LoginPage />}></Route>
            <Route path='/register' element={<Register />}></Route>
            <Route path='/forgetpassword' element={<ResetPassword />}></Route>
            <Route path='/dashboard' element={<Dashboard />}></Route>
            <Route path='/bloglist' element={<PageBlogList />}></Route>
            <Route path='/readblog/:id' element={<BlogDetailPage />}></Route>
            <Route path='/blogdashboard' element={<BlogDashboard />}></Route>
            <Route path='/room' element={<RommDashboard />}></Route>
            <Route path='/room/:id' element={<RommDashboard />}></Route>
            <Route path='/rooms' element={<Rooms />}></Route>
            <Route path='/hotels' element={<Hotels />}></Route>
            <Route path='/bloglist' element={<PageBlogList />}></Route>
            <Route path='/readblog' element={<BlogDetailPage />}></Route>
            <Route path='/roomdetail/:id' element={<RoomPageDetail />}></Route>
            <Route path='/hoteldetail/:id' element={<HotelDetailPage />}></Route>
            <Route path='/readblog/:id' element={<BlogDetailPage />}></Route>
            <Route path='/userprofile/:id' element={<UserProfile />}></Route>
            <Route path='/bill' element={<BillDashboard />}></Route>
            <Route path='/bill/:id' element={<BillDashboard />}></Route>
            <Route path='/userdashboard' element={<DashboardUser />}></Route>
            
          </Routes>
        </BrowserRouter>
        <ScrollButton />
      </ToastProvider>
    </div>
  );
}

export default App;
