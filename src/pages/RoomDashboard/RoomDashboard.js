import React, { useEffect, useState } from 'react'
import { fetchItems } from '../../redux/roomSlice'
import { fetchItemById } from '../../redux/hotelSlice'
import { useDispatch, useSelector } from 'react-redux'
import { Button, Col, Form, FormGroup, Input, Label, Row } from 'reactstrap'
import AddRoomForm from './AddRoomForm/AddRoomForm'
import UpdateRoomForm from './UpdateRoomForm/UpdateRoomForm'
import RoomTable from './RoomTable/RoomTable'
import FooterDashboard from './FooterDashboard/FooterDashboard'
import CollapseNavBar from './CollapseNavBar/CollapseNavBar'
import BreakCrumbDashBoard from './BreadCrumbDashboard/BreadCrumbDashboard'


export default function RommDashboard() {
    const [currentPage, setCurrentPage] = useState(0);
    const [id1, setRoomId] = useState(null);
    const dispatch = useDispatch();
    const [hotelId, setHotelId] = useState(1)

    const { items, status, errors, message, totalPage } = useSelector(state => state.hotel)

    console.log(items)


    useEffect(() => {
        dispatch(fetchItemById(hotelId))
    }, [dispatch, hotelId])



    const handleHotel = (event) => {
        setHotelId(event.target.value)
    }

    // console.log(items)
    // console.log(hotelId)



    return (
        <div class="g-sidenav-show  bg-gray-200">
            <aside class="sidenav navbar navbar-vertical navbar-expand-xs border-0 border-radius-xl my-3 fixed-start ms-3   bg-gradient-dark" id="sidenav-main">
                <div class="sidenav-header">
                    <i class="fas fa-times p-3 cursor-pointer text-white opacity-5 position-absolute end-0 top-0 d-none d-xl-none" aria-hidden="true" id="iconSidenav"></i>
                    <a class="navbar-brand m-0" href=" https://demos.creative-tim.com/material-dashboard/pages/dashboard " target="_blank">
                        <span class="ms-1 font-weight-bold text-white">Dashboard</span>
                    </a>
                </div>
                <hr class="horizontal light mt-0 mb-2" />
                <CollapseNavBar />
                <div class="sidenav-footer position-absolute w-100 bottom-0 ">
                    <div class="mx-3">
                    </div>
                </div>
            </aside>
            <main class="main-content position-relative max-height-vh-100 h-100 border-radius-lg ">
                <BreakCrumbDashBoard />
                <div class="container-fluid py-4">
                    <div class="row">
                        <div class="col-xl-3 col-sm-6 mb-xl-0 mb-4">
                            <div class="card">
                                <div class="card-header p-3 pt-2">
                                    <div class="icon icon-lg icon-shape bg-gradient-dark shadow-dark text-center border-radius-xl mt-n4 position-absolute">
                                        <i class="material-icons opacity-10">weekend</i>
                                    </div>
                                    <div class="text-end pt-1">
                                        <p class="text-sm mb-0 text-capitalize">Hotel</p>
                                        <h4 class="mb-0">{items && items?.name}</h4>
                                    </div>
                                </div>
                                <hr class="dark horizontal my-0" />
                                <div class="card-footer p-3">
                                    <Input
                                        id="exampleSelect"
                                        name="select"
                                        type="select"
                                        onChange={handleHotel}
                                        style={{ textAlign: 'center'}}
                                    >
                                        <option value="1">
                                            1
                                        </option>
                                        <option value="2">
                                            2
                                        </option>
                                    </Input>
                                </div>
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
                                        <h4 class="mb-0">{items && items.no_rooms}</h4>
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
                                        <h4 class="mb-0">{items && items?.reviews?.length}</h4>
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
                                        <h4 class="mb-0">{items && items?.vouchers?.length}</h4>
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
                    </div>
                    <RoomTable hotelId={hotelId} hotelName={items?.name}/>
                    <FooterDashboard />
                </div>
            </main>
        </div>
    )
}
