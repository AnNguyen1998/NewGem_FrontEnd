import React, { useState } from 'react'
import './LoginStyle.css'
import bgr from "../../images/login-bg-3.jpg"
import { Link, useNavigate } from 'react-router-dom'
import { useDispatch } from 'react-redux';
import { register } from '../../redux/userSlice';
import logo from '../../images/NewGemLogo.png'
import { Col, Row } from 'reactstrap';

export default function Register() {
  const [information, setInformation] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    dateOfBirth: '',
    gender: '',
    username: '',
    password: '',
  })



  const navigate = useNavigate()
  const dispatch = useDispatch()
  const handleRegister = (event) => {
    event.preventDefault()
    dispatch(register(information))
    // Pop up a notification
    alert('Register successfully!')
    navigate('/login')
  }
  return (
    <div>
      <div id="main-wrapper" class="oxyy-login-register">
        <div class="hero-wrap d-flex align-items-center">
          <div class="hero-mask opacity-4 bg-dark"></div>
          <img />
          <div class="hero-bg hero-bg-scroll" style={{ backgroundImage: `url(${bgr})` }}></div>
          <div class="hero-content w-100">
            <div class="container">
              <div class="row g-0 min-vh-100">

                <div class="col-md-6 d-flex flex-column">
                  <div class="row g-0 my-auto">
                    <div class="col-11 col-sm-10 col-lg-9 mx-auto text-center">
                      <div class="logo mt-5 mb-3"> <Link to='/home' title="Oxyy"><img src={logo} alt="Oxyy" style={{ width: '300px' }} /></Link> </div>
                      <h1 class="text-5 fw-400 text-white mb-5">We are glad to see you again!</h1>
                    </div>
                  </div>
                </div>
                <div class="col-md-6 d-flex align-items-center py-5">
                  <div class="container my-auto py-4 shadow-lg bg-white">
                    <div class="row">
                      <div class="col-11 col-lg-10 mx-auto">
                        <h3 class="text-9 fw-600 text-center my-3">Sign up</h3>
                        <form id="registerForm" method="post"
                          onSubmit={(event) => {
                            handleRegister(event)
                          }}
                        >
                          <Row>
                            <Col>
                              <div class="mb-3">
                                <label class="form-label text-dark fw-600" for="first-name">First Name</label>
                                <input
                                  autoComplete='off' autoFocus
                                  type="text" class="form-control rounded-0" id="first-name" required placeholder="First Name"
                                  onChange={(event) => setInformation({ ...information, firstName: event.target.value })}
                                />
                              </div>
                            </Col>
                            <Col>
                              <div class="mb-3">
                                <label class="form-label text-dark fw-600" for="last-name">Last Name</label>
                                <input type="text" class="form-control rounded-0" id="last-name" required placeholder="Last Name"
                                  onChange={(event) => setInformation({ ...information, lastName: event.target.value })}
                                />
                              </div>
                            </Col>
                          </Row>
                          <Row>
                            <Col>
                              <div class="mb-3">
                                <label class="form-label text-dark fw-600" for="email">Email</label>
                                <input type="email" class="form-control rounded-0" id="email" required placeholder="Email"
                                  onChange={(event) => setInformation({ ...information, email: event.target.value })}
                                />
                              </div>
                            </Col>
                            <Col>
                              <div class="mb-3">
                                <label class="form-label text-dark fw-600" for="phone">Phone</label>
                                <input type="text" class="form-control rounded-0" id="phone" required placeholder="Phone"
                                  onChange={(event) => setInformation({ ...information, phone: event.target.value })}
                                />
                              </div>
                            </Col>
                          </Row>
                          <Row>
                            <Col>
                              <div className="mb-3">
                                <label className="form-label text-dark fw-600" htmlFor="gender">Gender</label>
                                <select
                                  className="form-control rounded-0"
                                  id="gender"
                                  required
                                  onChange={(event) => setInformation({ ...information, gender: event.target.value })}
                                  value={information.gender}
                                >
                                  <option value="" disabled>Select Gender</option>
                                  <option value="MALE">Male</option>
                                  <option value="FEMALE">Female</option>
                                  <option value="OTHER">Other</option>
                                </select>
                              </div>
                            </Col>
                            <Col>
                              <div class="mb-3">
                                <label class="form-label text-dark fw-600" for="dataOfBirth">Date of birth</label>
                                <input type="date" class="form-control rounded-0" id="dataOfBirth" required placeholder="Confirm Password"
                                  onChange={(event) => setInformation({ ...information, dateOfBirth: event.target.value })}
                                  value={information.dateOfBirth} />
                              </div>
                            </Col>
                          </Row>
                          <Row>
                            <Col>
                              <div class="mb-3">
                                <label class="form-label text-dark fw-600" for="username">Username</label>
                                <input type="text" class="form-control rounded-0" id="username" required placeholder="Username"
                                  onChange={(event) => setInformation({ ...information, username: event.target.value })}
                                  value={information.username}
                                />
                              </div>
                            </Col>
                            <Col>
                              <div class="mb-3">
                                <label class="form-label text-dark fw-600" for="password">Password</label>
                                <input type="password" class="form-control rounded-0" id="password" required placeholder="Password"
                                  onChange={(event) => setInformation({ ...information, password: event.target.value })}
                                  value={information.password}
                                />
                              </div>
                            </Col>
                          </Row>
                          <div class="row mt-4">
                            <div class="col">
                              <div class="form-check">
                                <input id="remember-me" name="remember" class="form-check-input rounded-0" type="checkbox" />
                                <label class="form-check-label" for="remember-me">Keep me signed in</label>
                              </div>
                            </div>
                          </div>
                          <div class="d-grid my-4">
                            <button class="btn btn-dark rounded-0" type="submit">Sign In</button>
                          </div>
                        </form>
                        <div class="d-flex align-items-center my-4">
                          <hr class="flex-grow-1" />
                          <span class="mx-2 text-2 text-muted">Or sign in with</span>
                          <hr class="flex-grow-1" />
                        </div>
                        <div class="row g-3 mb-4">
                          <div class="col-sm-4 d-grid">
                            <button type="button" class="btn btn-outline-facebook btn-sm border-2 rounded-0 shadow-none"><span class="me-2"><i class="fab fa-facebook-f"></i></span>Facebook</button>
                          </div>
                          <div class="col-sm-4 d-grid">
                            <button type="button" class="btn btn-outline-google btn-sm border-2 rounded-0 shadow-none"><span class="me-2"><i class="fab fa-google"></i></span>Google</button>
                          </div>
                          <div class="col-sm-4 d-grid">
                            <button type="button" class="btn btn-outline-twitter btn-sm border-2 rounded-0 shadow-none"><span class="me-2"><i class="fab fa-twitter"></i></span>twitter</button>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

              </div>
            </div>
          </div>
        </div>
      </div>


      <div id="styles-switcher" class="left">
        <h5>Color Switcher</h5>
        <hr />
        <ul class="mb-0">
          <li class="blue" data-bs-toggle="tooltip" title="Blue" data-path="#"></li>
          <li class="indigo" data-bs-toggle="tooltip" title="Indigo" data-path="css/color-indigo.css"></li>
          <li class="purple" data-bs-toggle="tooltip" title="Purple" data-path="css/color-purple.css"></li>
          <li class="pink" data-bs-toggle="tooltip" title="Pink" data-path="css/color-pink.css"></li>
          <li class="red" data-bs-toggle="tooltip" title="Red" data-path="css/color-red.css"></li>
          <li class="orange" data-bs-toggle="tooltip" title="Orange" data-path="css/color-orange.css"></li>
          <li class="yellow" data-bs-toggle="tooltip" title="Yellow" data-path="css/color-yellow.css"></li>
          <li class="teal" data-bs-toggle="tooltip" title="Teal" data-path="css/color-teal.css"></li>
          <li class="green" data-bs-toggle="tooltip" title="Green" data-path="css/color-green.css"></li>
          <li class="cyan" data-bs-toggle="tooltip" title="Cyan" data-path="css/color-cyan.css"></li>
          <li class="brown" data-bs-toggle="tooltip" title="Brown" data-path="css/color-brown.css"></li>
        </ul>
        <button class="btn switcher-toggle"><i class="fas fa-cog"></i></button>
      </div>
    </div>
  )
}
