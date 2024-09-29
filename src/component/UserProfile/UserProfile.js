import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import PageHeader from '../../pages/headerPage/PageHeader';
import PageFooter from '../../pages/footerPage/PageFooter';
import { Link, useParams } from 'react-router-dom';
import { userProfile } from '../../redux/authSlice';

export default function UserProfile() {
    const { id } = useParams()
    const dispatch = useDispatch();
    const { user } = useSelector(state => state.auth)
    useEffect(() => {
        dispatch(userProfile(id))
        console.log(id)
    }, [id])
    return (
        <div>
            <PageHeader />
            <div>
                <div class="main-content position-relative max-height-vh-100 h-100">
                    <div class="container-fluid px-2 px-md-4">
                        <div class="page-header min-height-300 border-radius-xl mt-4" style={{ backgroundImage: "url('https://i.pinimg.com/originals/5d/57/83/5d57830a7a5d8454b1c787ef9a15c75d.jpg')" }}>
                            
                        </div>
                        <div class="card card-body mx-3 mx-md-4 mt-n6">
                            <div class="row gx-4 mb-2">
                                <div class="col-auto">
                                    <div class="avatar avatar-xl position-relative">
                                        <img src="https://lifehacker.com/imagery/articles/01HF2GKNRQZ4MN1YA639Q53NQV/hero-image.fill.size_1200x675.png" alt="profile_image" class="w-100 border-radius-lg shadow-sm" />
                                    </div>
                                </div>
                                <div class="col-auto my-auto">
                                    <div class="h-100">
                                        <h5 class="mb-1">
                                            {user &&user?.username}
                                        </h5>
                                        <p class="mb-0 font-weight-normal text-sm">
                                            CEO / Co-Founder
                                        </p>
                                    </div>
                                </div>
                                <div class="col-lg-4 col-md-6 my-sm-auto ms-sm-auto me-sm-0 mx-auto mt-3">
                                    <div class="nav-wrapper position-relative end-0">
                                        <ul class="nav nav-pills nav-fill p-1" role="tablist">
                                            <li class="nav-item">
                                                <Link class="nav-link mb-0 px-0 py-1 active " data-bs-toggle="tab" to="/home" role="tab" aria-selected="true">
                                                    <i class="material-icons text-lg position-relative">home</i>
                                                    <span class="ms-1">Home</span>
                                                </Link>
                                            </li>
                                            <li class="nav-item">
                                                <a class="nav-link mb-0 px-0 py-1 " data-bs-toggle="tab" href="javascript:;" role="tab" aria-selected="false">
                                                    <i class="material-icons text-lg position-relative">email</i>
                                                    <span class="ms-1">Messages</span>
                                                </a>
                                            </li>
                                            <li class="nav-item">
                                                <a class="nav-link mb-0 px-0 py-1 " data-bs-toggle="tab" href="javascript:;" role="tab" aria-selected="false">
                                                    <i class="material-icons text-lg position-relative">settings</i>
                                                    <span class="ms-1">Settings</span>
                                                </a>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                            <div class="row">
                                <div class="row">
                                    <div class="col-12 col-xl-4">
                                        <div class="card card-plain h-100">
                                            <div class="card-header pb-0 p-3">
                                                <h6 class="mb-0">Platform Settings</h6>
                                            </div>
                                            <div class="card-body p-3">
                                                <h6 class="text-uppercase text-body text-xs font-weight-bolder">Account</h6>
                                                <ul class="list-group">
                                                    <li class="list-group-item border-0 px-0">
                                                        <div class="form-check form-switch ps-0">
                                                            <input class="form-check-input ms-auto" type="checkbox" id="flexSwitchCheckDefault" checked />
                                                            <label class="form-check-label text-body ms-3 text-truncate w-80 mb-0" for="flexSwitchCheckDefault">Email me when someone follows me</label>
                                                        </div>
                                                    </li>
                                                    <li class="list-group-item border-0 px-0">
                                                        <div class="form-check form-switch ps-0">
                                                            <input class="form-check-input ms-auto" type="checkbox" id="flexSwitchCheckDefault1" />
                                                            <label class="form-check-label text-body ms-3 text-truncate w-80 mb-0" for="flexSwitchCheckDefault1">Email me when someone answers on my post</label>
                                                        </div>
                                                    </li>
                                                    <li class="list-group-item border-0 px-0">
                                                        <div class="form-check form-switch ps-0">
                                                            <input class="form-check-input ms-auto" type="checkbox" id="flexSwitchCheckDefault2" checked />
                                                            <label class="form-check-label text-body ms-3 text-truncate w-80 mb-0" for="flexSwitchCheckDefault2">Email me when someone mentions me</label>
                                                        </div>
                                                    </li>
                                                </ul>
                                                <h6 class="text-uppercase text-body text-xs font-weight-bolder mt-4">Application</h6>
                                                <ul class="list-group">
                                                    <li class="list-group-item border-0 px-0">
                                                        <div class="form-check form-switch ps-0">
                                                            <input class="form-check-input ms-auto" type="checkbox" id="flexSwitchCheckDefault3" />
                                                            <label class="form-check-label text-body ms-3 text-truncate w-80 mb-0" for="flexSwitchCheckDefault3">New launches and projects</label>
                                                        </div>
                                                    </li>
                                                    <li class="list-group-item border-0 px-0">
                                                        <div class="form-check form-switch ps-0">
                                                            <input class="form-check-input ms-auto" type="checkbox" id="flexSwitchCheckDefault4" checked />
                                                            <label class="form-check-label text-body ms-3 text-truncate w-80 mb-0" for="flexSwitchCheckDefault4">Monthly product updates</label>
                                                        </div>
                                                    </li>
                                                    <li class="list-group-item border-0 px-0 pb-0">
                                                        <div class="form-check form-switch ps-0">
                                                            <input class="form-check-input ms-auto" type="checkbox" id="flexSwitchCheckDefault5" />
                                                            <label class="form-check-label text-body ms-3 text-truncate w-80 mb-0" for="flexSwitchCheckDefault5">Subscribe to newsletter</label>
                                                        </div>
                                                    </li>
                                                </ul>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="col-12 col-xl-4">
                                        <div class="card card-plain h-100">
                                            <div class="card-header pb-0 p-3">
                                                <div class="row">
                                                    <div class="col-md-8 d-flex align-items-center">
                                                        <h6 class="mb-0">Profile Information</h6>
                                                    </div>
                                                    <div class="col-md-4 text-end">
                                                        <a href="javascript:;">
                                                            <i class="fas fa-user-edit text-secondary text-sm" data-bs-toggle="tooltip" data-bs-placement="top" title="Edit Profile"></i>
                                                        </a>
                                                    </div>
                                                </div>
                                            </div>
                                            <div class="card-body p-3">
                                                <ul class="list-group">
                                                    <li class="list-group-item border-0 ps-0 pt-0 text-sm"><strong class="text-dark">Full Name:</strong> &nbsp; {user && user?.lastName + " " + user.firstName}</li>
                                                    <li class="list-group-item border-0 ps-0 text-sm"><strong class="text-dark">Mobile:</strong> &nbsp; {user &&user?.phone}</li>
                                                    <li class="list-group-item border-0 ps-0 text-sm"><strong class="text-dark">Email:</strong> &nbsp; <a href="/cdn-cgi/l/email-protection" class="__cf_email__" data-cfemail="66070a0305120e090b16150908260b070f0a4805090b">{user &&user?.email}</a></li>
                                                    <li class="list-group-item border-0 ps-0 text-sm"><strong class="text-dark">Gender:</strong> &nbsp; {user &&user?.gender}</li>
                                                    <li class="list-group-item border-0 ps-0 text-sm"><strong class="text-dark">Birthday:</strong> &nbsp; {user &&user?.dateOfBirth}</li>
                                                    <li class="list-group-item border-0 ps-0 pb-0">
                                                        <strong class="text-dark text-sm">Social:</strong> &nbsp;
                                                        <a class="btn btn-facebook btn-simple mb-0 ps-1 pe-2 py-0" href="javascript:;">
                                                            <i class="fab fa-facebook fa-lg"></i>
                                                        </a>
                                                        <a class="btn btn-twitter btn-simple mb-0 ps-1 pe-2 py-0" href="javascript:;">
                                                            <i class="fab fa-twitter fa-lg"></i>
                                                        </a>
                                                        <a class="btn btn-instagram btn-simple mb-0 ps-1 pe-2 py-0" href="javascript:;">
                                                            <i class="fab fa-instagram fa-lg"></i>
                                                        </a>
                                                    </li>
                                                </ul>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="col-12 col-xl-4">
                                        <div class="card card-plain h-100">
                                            <div class="card-header pb-0 p-3">
                                                <h6 class="mb-0">Conversations</h6>
                                            </div>
                                            <div class="card-body p-3">
                                                <ul class="list-group">
                                                    <li class="list-group-item border-0 d-flex align-items-center px-0 mb-2 pt-0">
                                                        <div class="avatar me-3">
                                                            <img src="https://cellphones.com.vn/sforum/wp-content/uploads/2023/10/avatar-trang-4.jpg" alt="kal" class="border-radius-lg shadow" />
                                                        </div>
                                                        <div class="d-flex align-items-start flex-column justify-content-center">
                                                            <h6 class="mb-0 text-sm">Sophie B.</h6>
                                                            <p class="mb-0 text-xs">Hi! I need more information..</p>
                                                        </div>
                                                        <a class="btn btn-link pe-3 ps-0 mb-0 ms-auto w-25 w-md-auto" href="javascript:;">Reply</a>
                                                    </li>
                                                    <li class="list-group-item border-0 d-flex align-items-center px-0 mb-2">
                                                        <div class="avatar me-3">
                                                            <img src="https://www.vietnamworks.com/hrinsider/wp-content/uploads/2023/12/anh-den-ngau.jpeg" alt="kal" class="border-radius-lg shadow" />
                                                        </div>
                                                        <div class="d-flex align-items-start flex-column justify-content-center">
                                                            <h6 class="mb-0 text-sm">Anne Marie</h6>
                                                            <p class="mb-0 text-xs">Awesome work, can you..</p>
                                                        </div>
                                                        <a class="btn btn-link pe-3 ps-0 mb-0 ms-auto w-25 w-md-auto" href="javascript:;">Reply</a>
                                                    </li>
                                                    <li class="list-group-item border-0 d-flex align-items-center px-0 mb-2">
                                                        <div class="avatar me-3">
                                                            <img src="https://ss-images.saostar.vn/wp700/pc/1613810558698/Facebook-Avatar_3.png" alt="kal" class="border-radius-lg shadow" />
                                                        </div>
                                                        <div class="d-flex align-items-start flex-column justify-content-center">
                                                            <h6 class="mb-0 text-sm">Ivanna</h6>
                                                            <p class="mb-0 text-xs">About files I can..</p>
                                                        </div>
                                                        <a class="btn btn-link pe-3 ps-0 mb-0 ms-auto w-25 w-md-auto" href="javascript:;">Reply</a>
                                                    </li>
                                                    <li class="list-group-item border-0 d-flex align-items-center px-0 mb-2">
                                                        <div class="avatar me-3">
                                                            <img src="https://st.quantrimang.com/photos/image/2020/03/23/Anh-Dai-Dien-Trong-Facebook-1-2.png" alt="kal" class="border-radius-lg shadow" />
                                                        </div>
                                                        <div class="d-flex align-items-start flex-column justify-content-center">
                                                            <h6 class="mb-0 text-sm">Peterson</h6>
                                                            <p class="mb-0 text-xs">Have a great afternoon..</p>
                                                        </div>
                                                        <a class="btn btn-link pe-3 ps-0 mb-0 ms-auto w-25 w-md-auto" href="javascript:;">Reply</a>
                                                    </li>
                                                    <li class="list-group-item border-0 d-flex align-items-center px-0">
                                                        <div class="avatar me-3">
                                                            <img src="https://s3.cloud.cmctelecom.vn/tinhte2/2020/09/5136156_IMG_20200902_023158.jpg" alt="kal" class="border-radius-lg shadow" />
                                                        </div>
                                                        <div class="d-flex align-items-start flex-column justify-content-center">
                                                            <h6 class="mb-0 text-sm">Nick Daniel</h6>
                                                            <p class="mb-0 text-xs">Hi! I need more information..</p>
                                                        </div>
                                                        <a class="btn btn-link pe-3 ps-0 mb-0 ms-auto w-25 w-md-auto" href="javascript:;">Reply</a>
                                                    </li>
                                                </ul>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="fixed-plugin">
                    <a class="fixed-plugin-button text-dark position-fixed px-3 py-2">
                        <i class="material-icons py-2">settings</i>
                    </a>
                    <div class="card shadow-lg">
                        <div class="card-header pb-0 pt-3">
                            <div class="float-start">
                                <h5 class="mt-3 mb-0">Material UI Configurator</h5>
                                <p>See our dashboard options.</p>
                            </div>
                            <div class="float-end mt-4">
                                <button class="btn btn-link text-dark p-0 fixed-plugin-close-button">
                                    <i class="material-icons">clear</i>
                                </button>
                            </div>

                        </div>
                        <hr class="horizontal dark my-1" />
                        <div class="card-body pt-sm-3 pt-0">

                            <div>
                                <h6 class="mb-0">Sidebar Colors</h6>
                            </div>
                            <a href="javascript:void(0)" class="switch-trigger background-color">
                                <div class="badge-colors my-2 text-start">
                                    <span class="badge filter bg-gradient-primary active" data-color="primary" onclick="sidebarColor(this)"></span>
                                    <span class="badge filter bg-gradient-dark" data-color="dark" onclick="sidebarColor(this)"></span>
                                    <span class="badge filter bg-gradient-info" data-color="info" onclick="sidebarColor(this)"></span>
                                    <span class="badge filter bg-gradient-success" data-color="success" onclick="sidebarColor(this)"></span>
                                    <span class="badge filter bg-gradient-warning" data-color="warning" onclick="sidebarColor(this)"></span>
                                    <span class="badge filter bg-gradient-danger" data-color="danger" onclick="sidebarColor(this)"></span>
                                </div>
                            </a>

                            <div class="mt-3">
                                <h6 class="mb-0">Sidenav Type</h6>
                                <p class="text-sm">Choose between 2 different sidenav types.</p>
                            </div>
                            <div class="d-flex">
                                <button class="btn bg-gradient-dark px-3 mb-2 active" data-class="bg-gradient-dark" onclick="sidebarType(this)">Dark</button>
                                <button class="btn bg-gradient-dark px-3 mb-2 ms-2" data-class="bg-transparent" onclick="sidebarType(this)">Transparent</button>
                                <button class="btn bg-gradient-dark px-3 mb-2 ms-2" data-class="bg-white" onclick="sidebarType(this)">White</button>
                            </div>
                            <p class="text-sm d-xl-none d-block mt-2">You can change the sidenav type just on desktop view.</p>

                            <div class="mt-3 d-flex">
                                <h6 class="mb-0">Navbar Fixed</h6>
                                <div class="form-check form-switch ps-0 ms-auto my-auto">
                                    <input class="form-check-input mt-1 ms-auto" type="checkbox" id="navbarFixed" onclick="navbarFixed(this)" />
                                </div>
                            </div>
                            <hr class="horizontal dark my-3" />
                            <div class="mt-2 d-flex">
                                <h6 class="mb-0">Light / Dark</h6>
                                <div class="form-check form-switch ps-0 ms-auto my-auto">
                                    <input class="form-check-input mt-1 ms-auto" type="checkbox" id="dark-version" onclick="darkMode(this)" />
                                </div>
                            </div>
                            <hr class="horizontal dark my-sm-4" />
                            <a class="btn bg-gradient-info w-100" href="https://www.creative-tim.com/product/material-dashboard-pro">Free Download</a>
                            <a class="btn btn-outline-dark w-100" href="https://www.creative-tim.com/learning-lab/bootstrap/overview/material-dashboard">View documentation</a>
                            <div class="w-100 text-center">
                                <a class="github-button" href="https://github.com/creativetimofficial/material-dashboard" data-icon="octicon-star" data-size="large" data-show-count="true" aria-label="Star creativetimofficial/material-dashboard on GitHub">Star</a>
                                <h6 class="mt-3">Thank you for sharing!</h6>
                                <a href="https://twitter.com/intent/tweet?text=Check%20Material%20UI%20Dashboard%20made%20by%20%40CreativeTim%20%23webdesign%20%23dashboard%20%23bootstrap5&amp;url=https%3A%2F%2Fwww.creative-tim.com%2Fproduct%2Fsoft-ui-dashboard" class="btn btn-dark mb-0 me-2" target="_blank">
                                    <i class="fab fa-twitter me-1" aria-hidden="true"></i> Tweet
                                </a>
                                <a href="https://www.facebook.com/sharer/sharer.php?u=https://www.creative-tim.com/product/material-dashboard" class="btn btn-dark mb-0 me-2" target="_blank">
                                    <i class="fab fa-facebook-square me-1" aria-hidden="true"></i> Share
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <PageFooter />
        </div>
    )
}
