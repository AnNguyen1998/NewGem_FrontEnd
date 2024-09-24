import React from 'react'
import './LoginStyle.css'
import bgr from "../../images/login-bg-3.jpg"
import { Link } from 'react-router-dom'

export default function LoginPages() {
  return (
    <div>
      <div id="main-wrapper" class="oxyy-login-register">
        <div class="hero-wrap d-flex align-items-center">
          <div class="hero-mask opacity-4 bg-dark"></div>
          <img/>
          <div class="hero-bg hero-bg-scroll" style={{backgroundImage: `url(${bgr})`}}></div>
          <div class="hero-content w-100">
            <div class="container">
              <div class="row g-0 min-vh-100">

                <div class="col-md-6 d-flex flex-column">
                  <div class="row g-0 my-auto">
                    <div class="col-11 col-sm-10 col-lg-9 mx-auto text-center">
                      <div class="logo mt-5 mb-3"> <Link to='/home' title="Oxyy"><img src=""
                       alt="Oxyy" /></Link> </div>
                      <h1 class="text-5 fw-400 text-white mb-5">We are glad to see you again!</h1>
                    </div>
                  </div>
                </div>

                <div class="col-md-6 d-flex align-items-center py-5">
                  <div class="container my-auto py-4 shadow-lg bg-white">
                    <div class="row">
                      <div class="col-11 col-lg-10 mx-auto">
                        <h3 class="text-9 fw-600 text-center my-3">Sign In</h3>
                        <p class="text-center mb-4">New to Oxyy? <Link to="/register"><u>Create an Account</u></Link></p>
                        <form id="loginForm" method="post">
                          <div class="mb-3">
                            <label class="form-label text-dark fw-600" for="emailAddress">Username or Email Address</label>
                            <input autoComplete="off" autoFocus type="email" class="form-control rounded-0" id="emailAddress" required placeholder="Enter Your Email" />
                          </div>
                          <div class="mb-3">
                            <label class="form-label text-dark fw-600" for="loginPassword">Password</label>
                            <input type="password" class="form-control rounded-0" id="loginPassword" required placeholder="Enter Password" />
                          </div>
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
                        <p class="text-center">Need to find <Link to="/forgetpassword"><u>your password</u></Link>?</p>
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
