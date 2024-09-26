import React, { useEffect, useState } from 'react'
import '../../css/HomePage.css'
import '../../css/HomePage1.css'
import '../../css/HomePage2.css'
import '../../css/HomePage3.css'
import '../../css/HomePage4.css'
import '../../css/HomePage5.css'
import '../../css/HomePage6.css'
import PageHeader from '../headerPage/PageHeader'
import PageFooter from '../footerPage/PageFooter'
import { useDispatch, useSelector } from 'react-redux'
import { useParams } from 'react-router-dom'
import { createBookroom, getRoomById, removeMessageError } from '../../redux/roomSlice'
import { Col, Row } from 'reactstrap'

export default function RoomPageDetail() {
    const { id } = useParams();
    const dispatch = useDispatch();
    const [newBookroom, setNewBookroom] = useState({
        checkIn: '',
        checkOut: '',
        hotelId: '',
        roomId:'',
        userId:'',
        adults:'',
        children:'',
    });
    const { items, hotel, status, errors, message, totalPage } = useSelector(state => state.room)
    useEffect(() => {
        dispatch(getRoomById(id))
    }, [id])
    const handleChange = (e) => {
        const { name, value } = e.target;
        setNewBookroom((prev) => ({ ...prev,roomId: items.roomId, hotelId: items.hotelId,userId: localStorage.getItem("userId")*1, [name]: value }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        dispatch(createBookroom(newBookroom))
    };
    useEffect(()=>{
        if(status===201){
            window.alert("Book room successfully")
            dispatch(removeMessageError())
        }
    },[status])

    console.log(items)
    console.log(newBookroom)
    return (
        <div>
            <body class="mphb_room_type-template mphb_room_type-template-template-layout-builder mphb_room_type-template-template-layout-builder-php single single-mphb_room_type postid-17 theme-kinsley woocommerce-no-js elementor-default elementor-kit-5762 elementor-page elementor-page-17">
                <div class="knsl-app">
                    <div class="knsl-datepicker-place"></div>
                    <PageHeader />
                    <div id="container">
                        <div id="content" role="main">
                            <div class="post-17 mphb_room_type type-mphb_room_type status-publish has-post-thumbnail hentry mphb_room_type_category-luxe mphb_room_type_tag-luxe mphb_room_type_facility-4-private-pools mphb_room_type_facility-air-conditioning mphb_room_type_facility-airport-transfer mphb_room_type_facility-all-inclusive mphb_room_type_facility-wifi mphb_room_type_facility-laundry mphb_room_type_facility-smart-tv mphb_room_type_facility-under-protection mphb-room-type-adults-4 mphb-room-type-children-0 ">
                                <div data-elementor-type="wp-post" data-elementor-id="17" class="elementor elementor-17">
                                    <section class="elementor-section elementor-top-section elementor-element elementor-element-13dc6a5e elementor-section-full_width elementor-section-height-default elementor-section-height-default" data-id="13dc6a5e" data-element_type="section">
                                        <div class="elementor-container elementor-column-gap-no">
                                            <div class="elementor-column elementor-col-100 elementor-top-column elementor-element elementor-element-62df5820" data-id="62df5820" data-element_type="column">
                                                <div class="elementor-widget-wrap elementor-element-populated">
                                                    <div class="elementor-element elementor-element-45ff20b elementor-widget elementor-widget-kinsley-intro" data-id="45ff20b" data-element_type="widget" data-widget_type="kinsley-intro.default">
                                                        <div class="elementor-widget-container">
                                                            <section class="knsl-banner-simple knsl-transition-bottom">
                                                                <div class="container">
                                                                    <div class="row">
                                                                        <div class="col-lg-12">
                                                                            <div class="knsl-center knsl-title-frame">
                                                                                <h1 class="knsl-title--h knsl-mb-20 knsl-h1-inner">
                                                                                    <span>{items && items?.type} </span>
                                                                                </h1>
                                                                                <ul class="knsl-breadcrumbs">
                                                                                    <li>
                                                                                        <a href="https://kinsley.bslthemes.com" title="Kinsley - Hotel &amp; Resort WordPress Theme">Home</a>
                                                                                    </li>
                                                                                    <li>
                                                                                        <a href="https://kinsley.bslthemes.com/accommodations/">Rooms</a>
                                                                                    </li>
                                                                                    <li class="tst-active">
                                                                                        <a>{items && items?.hotelName}</a>
                                                                                    </li>
                                                                                </ul>
                                                                            </div>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                            </section>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </section>
                                    <section class="elementor-section elementor-top-section elementor-element elementor-element-70b6a68 set-sticky-container elementor-reverse-mobile elementor-reverse-tablet elementor-section-boxed elementor-section-height-default elementor-section-height-default" data-id="70b6a68" data-element_type="section">
                                        <div class="elementor-container elementor-column-gap-default">
                                            <div class="elementor-column elementor-col-66 elementor-top-column elementor-element elementor-element-51ec0b9" data-id="51ec0b9" data-element_type="column">
                                                <div class="elementor-widget-wrap elementor-element-populated">
                                                    <section class="elementor-section elementor-inner-section elementor-element elementor-element-2aa2e95 elementor-section-full_width elementor-section-height-default elementor-section-height-default" data-id="2aa2e95" data-element_type="section">
                                                        <div class="elementor-container elementor-column-gap-no">
                                                            <div class="elementor-column elementor-col-100 elementor-inner-column elementor-element elementor-element-1330fc8" data-id="1330fc8" data-element_type="column">
                                                                <div class="elementor-widget-wrap elementor-element-populated">
                                                                    <div class="elementor-element elementor-element-a999888 elementor-widget elementor-widget-kinsley-photo-gallery" data-id="a999888" data-element_type="widget" data-widget_type="kinsley-photo-gallery.default">
                                                                        <div class="elementor-widget-container">
                                                                            <div class="knsl-room-detail-slider-frame knsl-mb-60">
                                                                                <div class="swiper-container knsl-rd-slider-2 knsl-mb-10">
                                                                                    <div class="swiper-wrapper">
                                                                                        <div class="swiper-slide">
                                                                                            <a data-elementor-lightbox-slideshow="photo-gallery" data-elementor-lightbox-title="Image #1" href="https://kinsley.bslthemes.com/wp-content/uploads/2021/08/room-1.jpg" class="knsl-room-detail-photo-lg" data-swiper-parallax="-80" data-swiper-parallax-scale="1.2" data-swiper-parallax-duration="400">
                                                                                                <noscript>
                                                                                                    <img decoding="async" src="https://kinsley.bslthemes.com/wp-content/uploads/2021/08/room-1.jpg" alt="Image #1" />
                                                                                                </noscript>
                                                                                                <img class="lazyload" decoding="async" src='https://kinsley.bslthemes.com/wp-content/uploads/2021/08/room-1.jpg' data-src="https://kinsley.bslthemes.com/wp-content/uploads/2021/08/room-1.jpg" alt="Image #1" />
                                                                                                <span class="knsl-zoom">
                                                                                                    <i class="fas fa-search-plus"></i>
                                                                                                </span>
                                                                                            </a>
                                                                                        </div>
                                                                                    </div>
                                                                                </div>

                                                                            </div>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </section>
                                                    <section class="elementor-section elementor-inner-section elementor-element elementor-element-cb09e69 elementor-section-full_width elementor-section-height-default elementor-section-height-default" data-id="cb09e69" data-element_type="section">
                                                        <div class="elementor-container elementor-column-gap-no">
                                                            <div class="elementor-column elementor-col-100 elementor-inner-column elementor-element elementor-element-928b65e" data-id="928b65e" data-element_type="column">
                                                                <div class="elementor-widget-wrap elementor-element-populated">
                                                                    <div class="elementor-element elementor-element-74e738a elementor-widget elementor-widget-kinsley-room-description" data-id="74e738a" data-element_type="widget" data-widget_type="kinsley-room-description.default">
                                                                        <div class="elementor-widget-container">
                                                                            <section class="knsl-mb-60">
                                                                                <h3 class="knsl-mb-40">
                                                                                    <span>{items && items?.hotelName} is waiting for you! </span>
                                                                                </h3>
                                                                            </section>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </section>
                                                </div>
                                            </div>
                                            <div class="elementor-column elementor-col-33 elementor-top-column elementor-element elementor-element-903f3b7" data-id="903f3b7" data-element_type="column">
                                                <div class="elementor-widget-wrap elementor-element-populated">
                                                    <section class="elementor-section elementor-inner-section elementor-element elementor-element-4d706f5 elementor-section-full_width elementor-section-height-default elementor-section-height-default" data-id="4d706f5" data-element_type="section">
                                                        <div class="elementor-container elementor-column-gap-no">
                                                            <div class="elementor-column elementor-col-100 elementor-inner-column elementor-element elementor-element-5cece25" data-id="5cece25" data-element_type="column">
                                                                <div class="elementor-widget-wrap elementor-element-populated">
                                                                    <div class="elementor-element elementor-element-74ba318 elementor-widget elementor-widget-kinsley-room-attributes" data-id="74ba318" data-element_type="widget" data-widget_type="kinsley-room-attributes.default">
                                                                        <div class="elementor-widget-container">
                                                                            <div class="knsl-room-features-lg  knsl-mb-20 show-capacity show-size">
                                                                                <h2 class="mphb-details-title">Details</h2>
                                                                                <ul class="mphb-single-room-type-attributes">
                                                                                    <li class="mphb-room-type-adults-capacity">
                                                                                        <span class="mphb-attribute-title mphb-adults-title">Adults:</span>
                                                                                        <span class="mphb-attribute-value">{items && items?.guests} </span>
                                                                                    </li>
                                                                                    <li class="mphb-room-type-size">
                                                                                        <span class="mphb-attribute-title mphb-size-title">Size:</span>
                                                                                        <span class="mphb-attribute-value">95ft² </span>
                                                                                    </li>
                                                                                    <li class="mphb-room-type-categories">
                                                                                        <span class="mphb-attribute-title mphb-categories-title">Categories:</span>
                                                                                        <span class="mphb-attribute-value">
                                                                                            <span class="category-luxe">
                                                                                                <a href="https://kinsley.bslthemes.com/accommodation-category/luxe/">Luxe</a>
                                                                                            </span>
                                                                                        </span>
                                                                                    </li>
                                                                                </ul>
                                                                            </div>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </section>
                                                    <section class="elementor-section elementor-inner-section elementor-element elementor-element-42382cc elementor-section-full_width elementor-section-height-default elementor-section-height-default" data-id="42382cc" data-element_type="section">
                                                        <div class="elementor-container elementor-column-gap-no">
                                                            <div class="elementor-column elementor-col-100 elementor-inner-column elementor-element elementor-element-5e73cb5" data-id="5e73cb5" data-element_type="column">
                                                                <div class="elementor-widget-wrap elementor-element-populated">
                                                                    <div class="elementor-element elementor-element-65f23fc elementor-widget elementor-widget-kinsley-room-price" data-id="65f23fc" data-element_type="widget" data-widget_type="kinsley-room-price.default">
                                                                        <div class="elementor-widget-container">
                                                                            <div class="knsl-price-card knsl-mb-20">
                                                                                <div class="knsl-price-number">
                                                                                    <p class="mphb-regular-price">
                                                                                        <strong>Prices start at:</strong>
                                                                                        <span class="mphb-price">
                                                                                            <span class="mphb-currency">&euro;</span>
                                                                                            {items && items?.price}
                                                                                        </span>
                                                                                        <span class="mphb-price-period" title="Choose dates to see relevant prices">per night</span>
                                                                                    </p>
                                                                                </div>
                                                                            </div>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </section>
                                                    <section class="elementor-section elementor-inner-section elementor-element elementor-element-444269d elementor-section-full_width elementor-section-height-default elementor-section-height-default" data-id="444269d" data-element_type="section">
                                                        <div class="elementor-container elementor-column-gap-no">
                                                            <div class="elementor-column elementor-col-100 elementor-inner-column elementor-element elementor-element-b29e760" data-id="b29e760" data-element_type="column">
                                                                <div class="elementor-widget-wrap elementor-element-populated">
                                                                    <div class="elementor-element elementor-element-62a4f40 elementor-widget elementor-widget-kinsley-mphb-search-form" data-id="62a4f40" data-element_type="widget" data-widget_type="kinsley-mphb-search-form.default">
                                                                        <div class="elementor-widget-container">
                                                                            <div class="knsl-sticky knsl-stycky-right" data-margin-top="100">
                                                                                <div class="mphb_sc_search-wrapper  knsl-book-form knsl-book-form-v">

                                                                                    <form onSubmit={handleSubmit}>
                                                                                        <p class="mphb-required-fields-tip">
                                                                                            <small>
                                                                                                Required fields are followed by <abbr title="required">*</abbr>
                                                                                            </small>
                                                                                        </p>
                                                                                        <p class="mphb_sc_search-check-in-date">
                                                                                            <label for="mphb_check_in_date-mphb-search-form-66f4e0aabbda5">
                                                                                                Check-in <abbr title="Formatted as dd/mm/yyyy">*</abbr>
                                                                                            </label>
                                                                                            <br />
                                                                                            <input id="mphb_check_in_date-mphb-search-form-66f4e0aabbda5" data-datepick-group="mphb-search-form-66f4e0aabbda5" value={newBookroom.checkIn} placeholder="Check-in Date" required="required" type="date" name="checkIn" class="mphb-datepick" autocomplete="off" inputmode="none" onChange={handleChange}/>
                                                                                        </p>
                                                                                        <p class="mphb_sc_search-check-out-date">
                                                                                            <label for="mphb_check_out_date-mphb-search-form-66f4e0aabbda5">
                                                                                                Check-out <abbr title="Formatted as dd/mm/yyyy">*</abbr>
                                                                                            </label>
                                                                                            <br />
                                                                                            <input id="mphb_check_out_date-mphb-search-form-66f4e0aabbda5" data-datepick-group="mphb-search-form-66f4e0aabbda5" value={newBookroom.checkOut} placeholder="Check-out Date" required="required" type="date" name="checkOut" class="mphb-datepick" autocomplete="off" inputmode="none"  onChange={handleChange}/>
                                                                                        </p>
                                                                                        <Row className='mb-3'>
                                                                                            <Col>
                                                                                        <p class="mphb_sc_search-adults">
                                                                                            <label for="mphb_adults-mphb-search-form-66f4e0aabbda5">Adults </label>
                                                                                            <br />
                                                                                            <select value={newBookroom.adults} id="mphb_adults-mphb-search-form-66f4e0aabbda5" name="adults" onChange={handleChange}>
                                                                                                <option value="1" selected='selected'>1</option>
                                                                                                <option value="2">2</option>
                                                                                                <option value="3">3</option>
                                                                                                <option value="4">4</option>
                                                                                                <option value="5">5</option>
                                                                                                <option value="6">6</option>
                                                                                                <option value="7">7</option>
                                                                                                <option value="8">8</option>
                                                                                                <option value="9">9</option>
                                                                                                <option value="10">10</option>
                                                                                                <option value="11">11</option>
                                                                                                <option value="12">12</option>
                                                                                                <option value="13">13</option>
                                                                                                <option value="14">14</option>
                                                                                                <option value="15">15</option>
                                                                                                <option value="16">16</option>
                                                                                                <option value="17">17</option>
                                                                                                <option value="18">18</option>
                                                                                                <option value="19">19</option>
                                                                                                <option value="20">20</option>
                                                                                                <option value="21">21</option>
                                                                                                <option value="22">22</option>
                                                                                                <option value="23">23</option>
                                                                                                <option value="24">24</option>
                                                                                                <option value="25">25</option>
                                                                                                <option value="26">26</option>
                                                                                                <option value="27">27</option>
                                                                                                <option value="28">28</option>
                                                                                                <option value="29">29</option>
                                                                                                <option value="30">30</option>
                                                                                            </select>
                                                                                        </p>
                                                                                        </Col>
                                                                                        <Col>
                                                                                        <p class="mphb_sc_search-children">
                                                                                            <label for="mphb_children-mphb-search-form-66f4e0aabbda5">Children </label>
                                                                                            <br />
                                                                                            <select value={newBookroom.children} id="mphb_children-mphb-search-form-66f4e0aabbda5" name="children" onChange={handleChange}>
                                                                                                <option value="0" selected='selected'>0</option>
                                                                                                <option value="1">1</option>
                                                                                                <option value="2">2</option>
                                                                                                <option value="3">3</option>
                                                                                                <option value="4">4</option>
                                                                                                <option value="5">5</option>
                                                                                                <option value="6">6</option>
                                                                                                <option value="7">7</option>
                                                                                                <option value="8">8</option>
                                                                                                <option value="9">9</option>
                                                                                                <option value="10">10</option>
                                                                                            </select>
                                                                                        </p>
                                                                                        </Col>
                                                                                        </Row>
                                                                                        <p class="mphb_sc_search-submit-button-wrapper">
                                                                                        <input class="mphb-reserve-btn button" style={{textAlign:'center'}} value="BOOK NOW"/>
                                                                                        </p>
                                                                                    </form>

                                                                                </div>
                                                                            </div>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </section>
                                                </div>
                                            </div>
                                        </div>
                                    </section>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <PageFooter />
            </body>
        </div>
    )
}
