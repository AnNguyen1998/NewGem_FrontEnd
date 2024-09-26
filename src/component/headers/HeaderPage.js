import React, { useEffect, useState } from 'react'
import { BsCartCheckFill } from 'react-icons/bs'
import { Link } from 'react-router-dom'

export default function HeaderPage() {
    const [accessToken, setAccessToken] = useState(null)

    const role = localStorage.getItem("role")
    console.log(role == "ROLE_ADMIN")


    useEffect(() => {
        setAccessToken(localStorage.getItem('accessToken'))
    }, [])
    return (
        <div>
            <div class="knsl-top-bar fixed">
                <div data-elementor-type="wp-post" data-elementor-id="275" class="elementor elementor-275">
                    <section
                        class="elementor-section elementor-top-section elementor-element elementor-element-896c562 elementor-section-content-middle elementor-section-boxed elementor-section-height-default elementor-section-height-default"
                        data-id="896c562" data-element_type="section">
                        <div class="elementor-container elementor-column-gap-no">
                            <div class="elementor-column elementor-col-25 elementor-top-column elementor-element elementor-element-ffc3c15"
                                data-id="ffc3c15" data-element_type="column">
                                <div class="elementor-widget-wrap elementor-element-populated">
                                    <div class="elementor-element elementor-element-6fc63e6 knsl-logo-frame elementor-widget elementor-widget-image"
                                        data-id="6fc63e6" data-element_type="widget" data-widget_type="image.default">
                                        <div class="elementor-widget-container">
                                            <Link to="/home"> <img fetchpriority="high" decoding="async" width="399"
                                                height="132"
                                                src="https://kinsley.bslthemes.com/wp-content/uploads/2021/11/logo.png"
                                                class="attachment-full size-full wp-image-282" alt=""
                                                srcset="https://kinsley.bslthemes.com/wp-content/uploads/2021/11/logo.png 399w, https://kinsley.bslthemes.com/wp-content/uploads/2021/11/logo-300x99.png 300w"
                                                sizes="(max-width: 399px) 100vw, 399px" /> </Link>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div class="elementor-column elementor-col-50 elementor-top-column elementor-element elementor-element-e52b17b"
                                data-id="e52b17b" data-element_type="column">
                                <div class="elementor-widget-wrap elementor-element-populated">
                                    <div class="elementor-element elementor-element-1c77c7c elementor-widget elementor-widget-kinsley-header-menu"
                                        data-id="1c77c7c" data-element_type="widget"
                                        data-widget_type="kinsley-header-menu.default">
                                        <div class="elementor-widget-container">
                                            <div class="knsl-menu knsl-menu-hide-arrow">
                                                <nav class="top-menu-nav">
                                                    <ul id="menu-main-menu" class="top-menu-nav-inner">
                                                        <li id="menu-item-1111"
                                                        >
                                                            <Link to="/home">Home</Link><i></i>
                                                        </li>
                                                        <li id="menu-item-781"
                                                            class=" menu-item menu-item-type-post_type menu-item-object-page menu-item-has-children">
                                                            <a href="#">Hotel</a><i></i>
                                                        </li>
                                                        <li id="menu-item-1150"
                                                            class=" menu-item menu-item-type-post_type menu-item-object-page menu-item-has-children">
                                                            <a
                                                                href="#">Rooms</a><i></i>
                                                            <ul class="sub-menu">
                                                                <li id="menu-item-1151"
                                                                    class=" menu-item menu-item-type-post_type menu-item-object-page">
                                                                    <a href="#">Rooms
                                                                        List #1</a></li>
                                                                <li id="menu-item-1368"
                                                                    class=" menu-item menu-item-type-post_type menu-item-object-page">
                                                                    <a
                                                                        href="#">Rooms
                                                                        List #2</a></li>
                                                                <li id="menu-item-7046"
                                                                    class=" menu-item menu-item-type-post_type menu-item-object-page">
                                                                    <a href="#">Rooms
                                                                        List #3</a></li>
                                                                <li id="menu-item-7045"
                                                                    class=" menu-item menu-item-type-post_type menu-item-object-page">
                                                                    <a href="#">Rooms
                                                                        List #4</a></li>
                                                                <li id="menu-item-7044"
                                                                    class=" menu-item menu-item-type-post_type menu-item-object-page">
                                                                    <a href="#">Rooms
                                                                        List #5</a></li>
                                                                <li id="menu-item-1369"
                                                                    class=" menu-item menu-item-type-post_type menu-item-object-mphb_room_type">
                                                                    <a
                                                                        href="#">Room
                                                                        Details #1</a></li>
                                                                <li id="menu-item-1589"
                                                                    class=" menu-item menu-item-type-post_type menu-item-object-mphb_room_type">
                                                                    <a
                                                                        href="#">Room
                                                                        Details #2</a></li>
                                                                <li id="menu-item-1621"
                                                                    class=" menu-item menu-item-type-post_type menu-item-object-page">
                                                                    <a
                                                                        href="#">Search
                                                                        Availability</a></li>
                                                                <li id="menu-item-2781"
                                                                    class=" menu-item menu-item-type-post_type menu-item-object-page">
                                                                    <a
                                                                        href="#">Booking
                                                                        Account</a></li>
                                                            </ul>
                                                        </li>

                                                        <li id="menu-item-783"
                                                            class=" menu-item menu-item-type-post_type menu-item-object-page menu-item-has-children">
                                                            <a href="#">Blog</a><i></i>
                                                            <ul class="sub-menu">
                                                                <li id="menu-item-1109"
                                                                    class=" menu-item menu-item-type-post_type menu-item-object-page">
                                                                    <Link to="/bloglist">Blog
                                                                        List</Link></li>
                                                                <li id="menu-item-1110"
                                                                    class=" menu-item menu-item-type-post_type menu-item-object-post">
                                                                    <Link
                                                                        to="/readblog">Blog
                                                                        Single</Link></li>
                                                            </ul>
                                                        </li>

                                                        <li id="menu-item-789"
                                                            class=" menu-item menu-item-type-post_type menu-item-object-page">
                                                            <a href="#">Contact</a>
                                                        </li>
                                                    </ul>
                                                </nav>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div class="elementor-column elementor-col-25 elementor-top-column elementor-element elementor-element-d81f6d7"
                                data-id="d81f6d7" data-element_type="column">
                                <div class="elementor-widget-wrap elementor-element-populated">
                                    <div class="elementor-element elementor-element-374bc3e elementor-widget elementor-widget-kinsley-header-buttons"
                                        data-id="374bc3e" data-element_type="widget"
                                        data-widget_type="kinsley-header-buttons.default">
                                        <div class="elementor-widget-container">
                                            <Link to="/login"
                                                class="knsl-btn">  <span>
                                                    {accessToken ? 'Logout' : 'Login'} </span> </Link>
                                            {role == "ROLE_ADMIN" && <Link to="/dashboard"
                                                class="knsl-btn">  <span>
                                                    Dashboard </span> </Link>}
                                            <div class="knsl-minicart">
                                                <div class="knsl-cart">
                                                    <div class="knsl-cart-number"> <span class="cart-count">0</span></div>
                                                    <BsCartCheckFill style={{ fontSize: '40px' }} />
                                                </div>
                                                <div class="knsl-minicart-window">
                                                    <div class="cart-widget">
                                                        <p class="woocommerce-mini-cart__empty-message">No products in the
                                                            cart.</p>
                                                    </div>
                                                </div>
                                            </div>
                                            <div class="knsl-menu-btn"><span></span></div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>
                </div>
            </div>
        </div>
    )
}
