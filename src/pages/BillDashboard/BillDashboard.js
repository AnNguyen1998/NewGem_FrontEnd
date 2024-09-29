import React from 'react'
import { useSelector, useDispatch } from 'react-redux';
import { useNavigate, useParams } from 'react-router-dom';
import { Link } from 'react-router-dom';
import { fetchItemById, removeMessageError } from '../../redux/hotelSlice';
import BreakCrumbDashBoard from '../RoomDashboard/BreadCrumbDashboard/BreadCrumbDashboard';
import FooterDashboard from '../RoomDashboard/FooterDashboard/FooterDashboard';
import { useEffect, useMemo, useState } from 'react';
import { Input } from 'reactstrap';
import { totalHotel } from '../../redux/hotelSlice';
import BillCollapseNavBar from './BillCollapseNavBar/BillCollapseNavBar';
import BillTable from './BillTable/BillTable';



function BillDashboard() {
    const { id } = useParams()
    const role = localStorage.getItem("role");
    const navigate = useNavigate();

    if (role !== "ROLE_ADMIN") {
        navigate("/");
    }

    const [hotelId, setHotelId] = useState(id || 1);
    const dispatch = useDispatch();
    const { hotel } = useSelector(state => state.hotel);


    useEffect(()=>{
        dispatch(totalHotel("1"))
    },[])

    useEffect(() => {
        dispatch(removeMessageError())
        dispatch(fetchItemById(hotelId));
    }, [dispatch, hotelId]);


    return (
        <div className="g-sidenav-show bg-gray-200">
            <aside className="sidenav navbar navbar-vertical navbar-expand-xs border-0 border-radius-xl my-3 fixed-start ms-3 bg-gradient-dark" id="sidenav-main">
                <div className="sidenav-header">
                    <Link className="navbar-brand m-0" to="/" target="_blank">
                        <span className="ms-1 font-weight-bold text-white">Home</span>
                    </Link>
                </div>
                <hr className="horizontal light mt-0 mb-2" />
                <BillCollapseNavBar />
                <div className="sidenav-footer position-absolute w-100 bottom-0">
                    <div className="mx-3"></div>
                </div>
            </aside>
            <main className="main-content position-relative max-height-vh-100 h-100 border-radius-lg">
                <BreakCrumbDashBoard />
                <div className="container-fluid py-4">
                    <div className="row">
                        <div className="col-xl-3 col-sm-6 mb-xl-0 mb-4">
                            <div className="card">
                                <div className="card-header p-3 pt-2">
                                    <div className="icon icon-lg icon-shape bg-gradient-dark shadow-dark text-center border-radius-xl mt-n4 position-absolute">
                                        <i className="material-icons opacity-10">weekend</i>
                                    </div>
                                    <div className="text-end pt-1">
                                        <p className="text-sm mb-0 text-capitalize">Hotel</p>
                                        <h4 className="mb-0">{hotel?.name}</h4>
                                    </div>
                                </div>
                                <hr className="dark horizontal my-0" />
                            </div>
                        </div>
                        <div class="col-xl-3 col-sm-6 mb-xl-0 mb-4">
                            <div class="card">
                                <div class="card-header p-3 pt-2">
                                    <div class="icon icon-lg icon-shape bg-gradient-primary shadow-primary text-center border-radius-xl mt-n4 position-absolute">
                                        <i class="material-icons opacity-10">person</i>
                                    </div>
                                    <div class="text-end pt-1">
                                        <p class="text-sm mb-0 text-capitalize">Total Rooms</p>
                                        <h4 class="mb-0">{hotel && hotel?.no_rooms}</h4>
                                    </div>
                                </div>
                                <hr class="dark horizontal my-0" />
                                <div class="card-footer p-3">
                                    <p class="mb-0"><span class="text-success text-sm font-weight-bolder">+3% </span>than last month</p>
                                </div>
                            </div>
                        </div>
                        <div class="col-xl-3 col-sm-6 mb-xl-0 mb-4">
                            <div class="card">
                                <div class="card-header p-3 pt-2">
                                    <div class="icon icon-lg icon-shape bg-gradient-success shadow-success text-center border-radius-xl mt-n4 position-absolute">
                                        <i class="material-icons opacity-10">person</i>
                                    </div>
                                    <div class="text-end pt-1">
                                        <p class="text-sm mb-0 text-capitalize">Total Reviews</p>
                                        <h4 class="mb-0">{hotel && hotel?.reviews?.length}</h4>
                                    </div>
                                </div>
                                <hr class="dark horizontal my-0" />
                                <div class="card-footer p-3">
                                    <p class="mb-0"><span class="text-danger text-sm font-weight-bolder">-2%</span> than yesterday</p>
                                </div>
                            </div>
                        </div>
                        <div class="col-xl-3 col-sm-6">
                            <div class="card">
                                <div class="card-header p-3 pt-2">
                                    <div class="icon icon-lg icon-shape bg-gradient-info shadow-info text-center border-radius-xl mt-n4 position-absolute">
                                        <i class="material-icons opacity-10">weekend</i>
                                    </div>
                                    <div class="text-end pt-1">
                                        <p class="text-sm mb-0 text-capitalize">Total Vouchers</p>
                                        <h4 class="mb-0">{hotel && hotel?.vouchers?.length}</h4>
                                    </div>
                                </div>
                                <hr class="dark horizontal my-0" />
                                <div class="card-footer p-3">
                                    <p class="mb-0"><span class="text-success text-sm font-weight-bolder">+5% </span>than yesterday</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="row mt-4">
                        <BillTable hotel={hotel} hotelId={hotelId}/>
                    </div>
                    <FooterDashboard />
                </div>
            </main>
        </div>
    );
}

export default BillDashboard
