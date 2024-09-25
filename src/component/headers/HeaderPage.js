import React, { useEffect, useState } from 'react'
import { BsCartCheckFill } from 'react-icons/bs'
import { Link,  useNavigate   } from 'react-router-dom'

export default function HeaderPage() {
    const [accessToken, setAccessToken] = useState(null)
    const navigate = useNavigate()
    
    useEffect(() => {
        setAccessToken(localStorage.getItem('accessToken'))
    }, [])

    const handleLogout = () => {
        localStorage.removeItem('accessToken');
        setAccessToken(null);
        navigate('/home')
    }

    return (
        <div>
            <div className="knsl-top-bar fixed">
                <div data-elementor-type="wp-post" data-elementor-id="275" className="elementor elementor-275">
                    <section
                        className="elementor-section elementor-top-section elementor-element elementor-element-896c562 elementor-section-content-middle elementor-section-boxed elementor-section-height-default elementor-section-height-default"
                        data-id="896c562" data-element_type="section">
                        <div className="elementor-container elementor-column-gap-no">
                            <div className="elementor-column elementor-col-25 elementor-top-column elementor-element elementor-element-ffc3c15"
                                data-id="ffc3c15" data-element_type="column">
                                <div className="elementor-widget-wrap elementor-element-populated">
                                    <div className="elementor-element elementor-element-6fc63e6 knsl-logo-frame elementor-widget elementor-widget-image"
                                        data-id="6fc63e6" data-element_type="widget" data-widget_type="image.default">
                                        <div className="elementor-widget-container">
                                            <Link to="/home"> <img fetchpriority="high" decoding="async" width="399"
                                                height="132"
                                                src="https://kinsley.bslthemes.com/wp-content/uploads/2021/11/logo.png"
                                                className="attachment-full size-full wp-image-282" alt=""
                                                srcSet="https://kinsley.bslthemes.com/wp-content/uploads/2021/11/logo.png 399w, https://kinsley.bslthemes.com/wp-content/uploads/2021/11/logo-300x99.png 300w"
                                                sizes="(max-width: 399px) 100vw, 399px" /> </Link>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="elementor-column elementor-col-50 elementor-top-column elementor-element elementor-element-e52b17b"
                                data-id="e52b17b" data-element_type="column">
                                <div className="elementor-widget-wrap elementor-element-populated">
                                    <div className="elementor-element elementor-element-1c77c7c elementor-widget elementor-widget-kinsley-header-menu"
                                        data-id="1c77c7c" data-element_type="widget"
                                        data-widget_type="kinsley-header-menu.default">
                                        <div className="elementor-widget-container">
                                            <div className="knsl-menu knsl-menu-hide-arrow">
                                                <nav className="top-menu-nav">
                                                    <ul id="menu-main-menu" className="top-menu-nav-inner">
                                                        <li id="menu-item-1111"
                                                            className=" menu-item menu-item-type-post_type menu-item-object-page menu-item-home current-menu-item page_item page-item-32 current_page_item current-menu-ancestor current-menu-parent current_page_parent current_page_ancestor menu-item-has-children">
                                                            <Link to="/home">Home</Link><i></i>
                                                        </li>
                                                        <li id="menu-item-781"
                                                            className=" menu-item menu-item-type-post_type menu-item-object-page menu-item-has-children">
                                                            <a href="#">Hotel</a><i></i>
                                                        </li>
                                                        <li id="menu-item-1150"
                                                            className=" menu-item menu-item-type-post_type menu-item-object-page menu-item-has-children">
                                                            <a
                                                                href="#">Rooms</a><i></i>
                                                            <ul className="sub-menu">
                                                                <li id="menu-item-1151"
                                                                    className=" menu-item menu-item-type-post_type menu-item-object-page">
                                                                    <a href="#">Rooms
                                                                        List #1</a></li>
                                                                <li id="menu-item-1368"
                                                                    className=" menu-item menu-item-type-post_type menu-item-object-page">
                                                                    <a
                                                                        href="#">Rooms
                                                                        List #2</a></li>
                                                                <li id="menu-item-7046"
                                                                    className=" menu-item menu-item-type-post_type menu-item-object-page">
                                                                    <a href="#">Rooms
                                                                        List #3</a></li>
                                                                <li id="menu-item-7045"
                                                                    className=" menu-item menu-item-type-post_type menu-item-object-page">
                                                                    <a href="#">Rooms
                                                                        List #4</a></li>
                                                                <li id="menu-item-7044"
                                                                    className=" menu-item menu-item-type-post_type menu-item-object-page">
                                                                    <a href="#">Rooms
                                                                        List #5</a></li>
                                                                <li id="menu-item-1369"
                                                                    className=" menu-item menu-item-type-post_type menu-item-object-mphb_room_type">
                                                                    <a
                                                                        href="#">Room
                                                                        Details #1</a></li>
                                                                <li id="menu-item-1589"
                                                                    className=" menu-item menu-item-type-post_type menu-item-object-mphb_room_type">
                                                                    <a
                                                                        href="#">Room
                                                                        Details #2</a></li>
                                                                <li id="menu-item-1621"
                                                                    className=" menu-item menu-item-type-post_type menu-item-object-page">
                                                                    <a
                                                                        href="#">Search
                                                                        Availability</a></li>
                                                                <li id="menu-item-2781"
                                                                    className=" menu-item menu-item-type-post_type menu-item-object-page">
                                                                    <a
                                                                        href="#">Booking
                                                                        Account</a></li>
                                                            </ul>
                                                        </li>
                                            
                                                        <li id="menu-item-783"
                                                            className=" menu-item menu-item-type-post_type menu-item-object-page menu-item-has-children">
                                                            <a href="#">Blog</a><i></i>
                                                            <ul className="sub-menu">
                                                                <li id="menu-item-1109"
                                                                    className=" menu-item menu-item-type-post_type menu-item-object-page">
                                                                    <Link to="/bloglist">Blog
                                                                        List</Link></li>
                                                                <li id="menu-item-1110"
                                                                    className=" menu-item menu-item-type-post_type menu-item-object-post">
                                                                    <Link
                                                                        to="/readblog">Blog
                                                                        Single</Link></li>
                                                            </ul>
                                                        </li>
                                                        
                                                        <li id="menu-item-789"
                                                            className=" menu-item menu-item-type-post_type menu-item-object-page">
                                                            <a href="#">Contact</a>
                                                        </li>
                                                    </ul>
                                                </nav>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="elementor-column elementor-col-25 elementor-top-column elementor-element elementor-element-d81f6d7"
                                data-id="d81f6d7" data-element_type="column">
                                <div className="elementor-widget-wrap elementor-element-populated">
                                    <div className="elementor-element elementor-element-374bc3e elementor-widget elementor-widget-kinsley-header-buttons"
                                        data-id="374bc3e" data-element_type="widget"
                                        data-widget_type="kinsley-header-buttons.default">
                                        <div className="elementor-widget-container"> 
                                            {accessToken ? (
                                                <button onClick={handleLogout} className="knsl-btn">
                                                    <span>Logout</span>
                                                </button>
                                            ) : (
                                                <Link to="/login" className="knsl-btn">
                                                    <span>Login</span>
                                                </Link>
                                            )}
                                            <div className="knsl-minicart">
                                                <div className="knsl-cart">
                                                    <div className="knsl-cart-number"> <span className="cart-count">0</span></div>
                                                    <BsCartCheckFill style={{fontSize:'40px'}}/>
                                                </div>
                                                <div className="knsl-minicart-window">
                                                    <div className="cart-widget">
                                                        <p className="woocommerce-mini-cart__empty-message">No products in the
                                                            cart.</p>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="knsl-menu-btn"><span></span></div>
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
