import React, { useEffect, useState } from 'react'
import '../../css/HomePage.css'
import '../../css/HomePage1.css'
import '../../css/HomePage2.css'
import '../../css/HomePage3.css'
import '../../css/HomePage4.css'
import '../../css/HomePage5.css'
import '../../css/HomePage6.css'
import Form from '../Form/Form'
import ScrollButton from '../ScrollButton/ScrollButton'
import { useDispatch, useSelector } from 'react-redux'
import { fetchItems } from '../../redux/hotelSlice'

export default function HomePage() {
    const [pagecr, setPage] = useState(1);
    const dispatch = useDispatch()
    const {items, status, errors, message, totalPage} = useSelector(state=>state.hotel)
    useEffect(()=>{
        dispatch(fetchItems(pagecr))
    },[])
    return (
        <div>
            <body
                class="home page-template page-template-template-layout-builder page-template-template-layout-builder-php page page-id-32 theme-kinsley woocommerce-js elementor-default elementor-kit-5762 elementor-page elementor-page-32 e--ua-blink e--ua-chrome e--ua-webkit"
                data-elementor-device-mode="desktop">
                <div class="knsl-app">
                    <div class="knsl-datepicker-place"></div>
                    <div id="post-32" class="post-32 page type-page status-publish hentry">
                        <div data-elementor-type="wp-page" data-elementor-id="32" class="elementor elementor-32">
                            <section
                                class="elementor-section elementor-top-section elementor-element elementor-element-bb5256a elementor-section-full_width elementor-section-height-default elementor-section-height-default"
                                data-id="bb5256a" data-element_type="section">
                                <div class="elementor-container elementor-column-gap-no">
                                    <div class="elementor-column elementor-col-100 elementor-top-column elementor-element elementor-element-dec0541"
                                        data-id="dec0541" data-element_type="column">
                                        <div class="elementor-widget-wrap elementor-element-populated">
                                            <div class="elementor-element elementor-element-608d9f2 elementor-widget elementor-widget-kinsley-hero-banner"
                                                data-id="608d9f2" data-element_type="widget"
                                                data-widget_type="kinsley-hero-banner.default">
                                                <div class="elementor-widget-container">
                                                    <section class="knsl-banner">
                                                        <div class="knsl-cover-frame"> <noscript><img decoding="async"
                                                            src="https://kinsley.bslthemes.com/wp-content/uploads/2021/08/img-banner-2-scaled-1-1920x1315.jpg"
                                                            alt="Image" class="knsl-parallax" /></noscript><img
                                                                decoding="async"
                                                                src="https://kinsley.bslthemes.com/wp-content/uploads/2021/08/img-banner-2-scaled-1-1920x1315.jpg"
                                                                data-src="https://kinsley.bslthemes.com/wp-content/uploads/2021/08/img-banner-2-scaled-1-1920x1315.jpg"
                                                                alt="Image" class="knsl-parallax lazyloaded"
                                                                style={{ position: 'relative' }} /></div>
                                                        <div class="knsl-overlay" style={{ opacity: '1' }}></div>
                                                        <div class="knsl-banner-content">
                                                            <div class="container">
                                                                <div class="knsl-main-title">
                                                                    <div class="knsl-white">
                                                                        <h1 class="knsl-center knsl-main-title--h knsl-mb-10">
                                                                            <span> Welcome to NewGem </span></h1>
                                                                        <div class="knsl-main-title--d knsl-mb-30 knsl-center">
                                                                            <span> Deleniti nostrum laboriosam praesentium quasi
                                                                                quam voluptate. </span></div>
                                                                    </div>
                                                                </div>
                                                                <div class="knsl-book-form knsl-book-form-2">
                                                                    <div class="mphb_sc_search-wrapper ">
                                                                        <Form />
                                                                    </div>
                                                                </div>
                                                                <div class="knsl-scroll-hint-frame">
                                                                    <div class="knsl-white knsl-mb-20"> <span> Scroll down </span>
                                                                    </div> <a href="#knsl-triger-1"
                                                                        class="knsl-scroll-hint knsk-s-s"></a>
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
                            <section
                                class="elementor-section elementor-top-section elementor-element elementor-element-790dc46 elementor-section-full_width elementor-section-height-default elementor-section-height-default"
                                data-id="790dc46" data-element_type="section">
                                <div class="elementor-container elementor-column-gap-no">
                                    <div class="elementor-column elementor-col-100 elementor-top-column elementor-element elementor-element-11af972"
                                        data-id="11af972" data-element_type="column">
                                        <div class="elementor-widget-wrap elementor-element-populated">
                                            <div class="elementor-element elementor-element-69926f8 elementor-widget elementor-widget-kinsley-features"
                                                data-id="69926f8" data-element_type="widget"
                                                data-widget_type="kinsley-features.default">
                                                <div class="elementor-widget-container">
                                                    <section class="knsl-p-0-100" id="knsl-triger-1">
                                                        <div class="container">
                                                            <div class="knsl-features-card" style={{ marginTop: '-80px' }}>
                                                                <div class="row">
                                                                    <div class="col-6 col-lg-3">
                                                                        <div class="knsl-icon-box"> <noscript><img decoding="async"
                                                                            src="https://kinsley.bslthemes.com/wp-content/uploads/2021/12/f-1.png"
                                                                            alt="Airport transfer"
                                                                            class="knsl-mb-10" /></noscript><img
                                                                                decoding="async"
                                                                                src="https://kinsley.bslthemes.com/wp-content/uploads/2021/12/f-1.png"
                                                                                data-src="https://kinsley.bslthemes.com/wp-content/uploads/2021/12/f-1.png"
                                                                                alt="Airport transfer"
                                                                                class="knsl-mb-10 lazyloaded" />
                                                                            <h5> <span> Airport transfer </span></h5>
                                                                        </div>
                                                                    </div>
                                                                    <div class="col-6 col-lg-3">
                                                                        <div class="knsl-icon-box"> <noscript><img decoding="async"
                                                                            src="https://kinsley.bslthemes.com/wp-content/uploads/2021/12/f-2.png"
                                                                            alt="All inclusive"
                                                                            class="knsl-mb-10" /></noscript><img
                                                                                decoding="async"
                                                                                src="https://kinsley.bslthemes.com/wp-content/uploads/2021/12/f-2.png"
                                                                                data-src="https://kinsley.bslthemes.com/wp-content/uploads/2021/12/f-2.png"
                                                                                alt="All inclusive" class="knsl-mb-10 lazyloaded" />
                                                                            <h5> <span> All inclusive </span></h5>
                                                                        </div>
                                                                    </div>
                                                                    <div class="col-6 col-lg-3">
                                                                        <div class="knsl-icon-box"> <noscript><img decoding="async"
                                                                            src="https://kinsley.bslthemes.com/wp-content/uploads/2021/12/f-3.png"
                                                                            alt="Air-conditioned"
                                                                            class="knsl-mb-10" /></noscript><img
                                                                                decoding="async"
                                                                                src="https://kinsley.bslthemes.com/wp-content/uploads/2021/12/f-3.png"
                                                                                data-src="https://kinsley.bslthemes.com/wp-content/uploads/2021/12/f-3.png"
                                                                                alt="Air-conditioned" class="knsl-mb-10 lazyloaded" />
                                                                            <h5> <span> Air-conditioned </span></h5>
                                                                        </div>
                                                                    </div>
                                                                    <div class="col-6 col-lg-3">
                                                                        <div class="knsl-icon-box"> <noscript><img decoding="async"
                                                                            src="https://kinsley.bslthemes.com/wp-content/uploads/2021/12/f-4.png"
                                                                            alt="Under protection"
                                                                            class="knsl-mb-10" /></noscript><img
                                                                                decoding="async"
                                                                                src="https://kinsley.bslthemes.com/wp-content/uploads/2021/12/f-4.png"
                                                                                data-src="https://kinsley.bslthemes.com/wp-content/uploads/2021/12/f-4.png"
                                                                                alt="Under protection"
                                                                                class="knsl-mb-10 lazyloaded" />
                                                                            <h5> <span> Under protection </span></h5>
                                                                        </div>
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
                            <section
                                class="elementor-section elementor-top-section elementor-element elementor-element-bcacc7c elementor-section-full_width elementor-section-height-default elementor-section-height-default"
                                data-id="bcacc7c" data-element_type="section">
                                <div class="elementor-container elementor-column-gap-no">
                                    <div class="elementor-column elementor-col-100 elementor-top-column elementor-element elementor-element-08937c3"
                                        data-id="08937c3" data-element_type="column">
                                        <div class="elementor-widget-wrap elementor-element-populated">
                                            <div class="elementor-element elementor-element-8f74267 elementor-widget elementor-widget-kinsley-about"
                                                data-id="8f74267" data-element_type="widget"
                                                data-widget_type="kinsley-about.default">
                                                <div class="elementor-widget-container">
                                                    <section class="knsl-p-0-100">
                                                        <div class="container">
                                                            <div class="knsl-about-card">
                                                                <div class="row no-gutters">
                                                                    <div class="col-lg-6">
                                                                        <div class="knsl-about-photo"> <noscript><img
                                                                            decoding="async"
                                                                            src="https://kinsley.bslthemes.com/wp-content/uploads/2021/09/about-t1.jpg"
                                                                            alt="" /></noscript><img
                                                                                class=" ls-is-cached lazyloaded" decoding="async"
                                                                                src="https://kinsley.bslthemes.com/wp-content/uploads/2021/09/about-t1.jpg"
                                                                                data-src="https://kinsley.bslthemes.com/wp-content/uploads/2021/09/about-t1.jpg"
                                                                                alt="" /></div>
                                                                    </div>
                                                                    <div class="col-lg-6 align-self-center">
                                                                        <div class="knsl-about-text">
                                                                            <div class="knsl-title-frame">
                                                                                <h2 class="knsl-mb-20"> <span> We have 17+ years
                                                                                    of Experience </span></h2>
                                                                                <div class="knsl-text knsl-mb-30">
                                                                                    <div>
                                                                                        <p>Consectetur adipisicing elit. Nihil,
                                                                                            illum voluptate eveniet ex fugit ea
                                                                                            delectus, sed voluptatem. Laborum
                                                                                            accusantium libero commodi id officiis
                                                                                            itaque esse adipisci, necessitatibus
                                                                                            asperiores, illo odio.</p>
                                                                                    </div>
                                                                                </div> <a href="/about/"
                                                                                    class="knsl-btn knsl-btn-md"> <span> More about
                                                                                        us </span> </a>
                                                                            </div>
                                                                        </div>
                                                                    </div>
                                                                    <div class="col-lg-6 order-lg-2">
                                                                        <div class="knsl-about-photo"> <noscript><img
                                                                            decoding="async"
                                                                            src="https://kinsley.bslthemes.com/wp-content/uploads/2021/09/about-t2.jpg"
                                                                            alt="" /></noscript><img
                                                                                class=" ls-is-cached lazyloaded" decoding="async"
                                                                                src="https://kinsley.bslthemes.com/wp-content/uploads/2021/09/about-t2.jpg"
                                                                                data-src="https://kinsley.bslthemes.com/wp-content/uploads/2021/09/about-t2.jpg"
                                                                                alt="" /></div>
                                                                    </div>
                                                                    <div class="col-lg-6 align-self-center">
                                                                        <div class="knsl-about-text">
                                                                            <div class="knsl-title-frame">
                                                                                <h2 class="knsl-mb-20"> <span> Start your Amazing
                                                                                    Adventure! </span></h2>
                                                                                <div class="knsl-text knsl-mb-30">
                                                                                    <div>
                                                                                        <p>Consectetur adipisicing elit. Nihil,
                                                                                            illum voluptate eveniet ex fugit ea
                                                                                            delectus, sed voluptatem. Laborum
                                                                                            accusantium libero commodi id officiis
                                                                                            itaque esse adipisci, necessitatibus
                                                                                            asperiores, illo odio.</p>
                                                                                    </div>
                                                                                </div> <a href="/accommodations/"
                                                                                    class="knsl-btn knsl-btn-md"> <span> Choose a
                                                                                        room </span> </a>
                                                                            </div>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                            <div class="container"></div>
                                                        </div>
                                                    </section>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </section>
                            <section
                                class="elementor-section elementor-top-section elementor-element elementor-element-1edd412 elementor-section-full_width elementor-section-height-default elementor-section-height-default"
                                data-id="1edd412" data-element_type="section">
                                <div class="elementor-container elementor-column-gap-no">
                                    <div class="elementor-column elementor-col-100 elementor-top-column elementor-element elementor-element-d8a79f3"
                                        data-id="d8a79f3" data-element_type="column">
                                        <div class="elementor-widget-wrap elementor-element-populated">
                                            <div class="elementor-element elementor-element-4b38713 elementor-widget elementor-widget-kinsley-about-gallery"
                                                data-id="4b38713" data-element_type="widget"
                                                data-widget_type="kinsley-about-gallery.default">
                                                <div class="elementor-widget-container">
                                                    <section class="knsl-transition-top knsl-p-0-100"> <noscript><img
                                                        decoding="async"
                                                        src="https://kinsley.bslthemes.com/wp-content/themes/kinsley/assets/img/palm.svg"
                                                        class="knsl-deco-left" alt="palm" /></noscript><img decoding="async"
                                                            src="https://kinsley.bslthemes.com/wp-content/themes/kinsley/assets/img/palm.svg"
                                                            data-src="https://kinsley.bslthemes.com/wp-content/themes/kinsley/assets/img/palm.svg"
                                                            class="knsl-deco-left ls-is-cached lazyloaded" alt="palm" />
                                                        <div class="container">
                                                            <div class="row align-items-center">
                                                                <div class="col-lg-12">
                                                                    <div
                                                                        class="knsl-center knsl-title-frame knsl-scroll-animation knsl-mb-100 knsl-active-el">
                                                                        <h2 class="knsl-title--h knsl-mb-20"> <span> Kinsley is
                                                                            Waiting for You! </span></h2>
                                                                        <div class="knsl-text knsl-mb-30">
                                                                            <p> <span> Consectetur adipisicing elit. Nihil, illum
                                                                                voluptate eveniet ex fugit ea delectus, sed
                                                                                voluptatem. Laborum accusantium libero commodi
                                                                                id officiis itaque esse adipisci, necessitatibus
                                                                                asperiores, illo odio. </span></p>
                                                                        </div> <a href="/gallery/" class="knsl-btn knsl-btn-md">
                                                                            <span> More our places </span> </a>
                                                                    </div>
                                                                </div>
                                                                <div class="col-lg-12">
                                                                    <div
                                                                        class="swiper-container knsl-about-slider knsl-scroll-animation swiper-initialized swiper-horizontal swiper-pointer-events swiper-autoheight swiper-watch-progress swiper-backface-hidden knsl-active-el">
                                                                        <div class="swiper-wrapper"
                                                                            style={{ transitionDuration: '0ms', transform: 'translate3d(-275.5px, 0px, 0px)', height: '365px' }}
                                                                            id="swiper-wrapper-7fdba1ca2179353b" aria-live="polite">
                                                                            <div class="swiper-slide swiper-slide-visible swiper-slide-prev"
                                                                                style={{ width: '531px', marginRight: '20px' }}
                                                                                role="group" aria-label="1 / 8">

                                                                                <div class="knsl-image-frame"> <a
                                                                                    data-elementor-lightbox-slideshow="about-gallery"
                                                                                    data-elementor-lightbox-title="View from the sea"
                                                                                    href="https://kinsley.bslthemes.com/wp-content/uploads/2021/09/about-1.jpg">
                                                                                    <noscript><img decoding="async"
                                                                                        src="https://kinsley.bslthemes.com/wp-content/uploads/2021/09/about-1.jpg"
                                                                                        alt="View from the sea" /></noscript><img
                                                                                        class=" lazyloaded" decoding="async"
                                                                                        src="https://kinsley.bslthemes.com/wp-content/uploads/2021/09/about-1.jpg"
                                                                                        data-src="https://kinsley.bslthemes.com/wp-content/uploads/2021/09/about-1.jpg"
                                                                                        alt="View from the sea" />
                                                                                    <div class="knsl-badge"> <span> View from
                                                                                        the sea </span></div> <span
                                                                                            class="knsl-zoom"><i
                                                                                                class="fas fa-search-plus"></i></span>
                                                                                </a></div>
                                                                            </div>
                                                                            <div class="swiper-slide swiper-slide-visible swiper-slide-active"
                                                                                style={{ width: '531px', marginRight: '20px' }}
                                                                                role="group" aria-label="2 / 8">

                                                                                <div class="knsl-image-frame"> <a
                                                                                    data-elementor-lightbox-slideshow="about-gallery"
                                                                                    data-elementor-lightbox-title="East terrace"
                                                                                    href="https://kinsley.bslthemes.com/wp-content/uploads/2021/09/about-2.jpg">
                                                                                    <noscript><img decoding="async"
                                                                                        src="https://kinsley.bslthemes.com/wp-content/uploads/2021/09/about-2.jpg"
                                                                                        alt="East terrace" /></noscript><img
                                                                                        class=" lazyloaded" decoding="async"
                                                                                        src="https://kinsley.bslthemes.com/wp-content/uploads/2021/09/about-2.jpg"
                                                                                        data-src="https://kinsley.bslthemes.com/wp-content/uploads/2021/09/about-2.jpg"
                                                                                        alt="East terrace" />
                                                                                    <div class="knsl-badge"> <span> East terrace
                                                                                    </span></div> <span class="knsl-zoom"><i
                                                                                        class="fas fa-search-plus"></i></span>
                                                                                </a></div>
                                                                            </div>
                                                                            <div class="swiper-slide swiper-slide-visible swiper-slide-next"
                                                                                style={{ width: '531px', marginRight: '20px' }}
                                                                                role="group" aria-label="3 / 8">

                                                                                <div class="knsl-image-frame"> <a
                                                                                    data-elementor-lightbox-slideshow="about-gallery"
                                                                                    data-elementor-lightbox-title="West terrace"
                                                                                    href="https://kinsley.bslthemes.com/wp-content/uploads/2021/09/about-3.jpg">
                                                                                    <noscript><img decoding="async"
                                                                                        src="https://kinsley.bslthemes.com/wp-content/uploads/2021/09/about-3.jpg"
                                                                                        alt="West terrace" /></noscript><img
                                                                                        class=" ls-is-cached lazyloaded"
                                                                                        decoding="async"
                                                                                        src="https://kinsley.bslthemes.com/wp-content/uploads/2021/09/about-3.jpg"
                                                                                        data-src="https://kinsley.bslthemes.com/wp-content/uploads/2021/09/about-3.jpg"
                                                                                        alt="West terrace" />
                                                                                    <div class="knsl-badge"> <span> West terrace
                                                                                    </span></div> <span class="knsl-zoom"><i
                                                                                        class="fas fa-search-plus"></i></span>
                                                                                </a></div>
                                                                            </div>
                                                                            <div class="swiper-slide"
                                                                                style={{ width: '531px', marginRight: '20px' }}
                                                                                role="group" aria-label="4 / 8">

                                                                                <div class="knsl-image-frame"> <a
                                                                                    data-elementor-lightbox-slideshow="about-gallery"
                                                                                    data-elementor-lightbox-title="View from the beach"
                                                                                    href="https://kinsley.bslthemes.com/wp-content/uploads/2021/09/about-4.jpg">
                                                                                    <noscript><img decoding="async"
                                                                                        src="https://kinsley.bslthemes.com/wp-content/uploads/2021/09/about-4.jpg"
                                                                                        alt="View from the beach" /></noscript><img
                                                                                        class=" ls-is-cached lazyloaded"
                                                                                        decoding="async"
                                                                                        src="https://kinsley.bslthemes.com/wp-content/uploads/2021/09/about-4.jpg"
                                                                                        data-src="https://kinsley.bslthemes.com/wp-content/uploads/2021/09/about-4.jpg"
                                                                                        alt="View from the beach" />
                                                                                    <div class="knsl-badge"> <span> View from
                                                                                        the beach </span></div> <span
                                                                                            class="knsl-zoom"><i
                                                                                                class="fas fa-search-plus"></i></span>
                                                                                </a></div>
                                                                            </div>
                                                                            <div class="swiper-slide"
                                                                                style={{ width: '531px', marginRight: '20px' }}
                                                                                role="group" aria-label="5 / 8">

                                                                                <div class="knsl-image-frame"> <a
                                                                                    data-elementor-lightbox-slideshow="about-gallery"
                                                                                    data-elementor-lightbox-title="East terrace"
                                                                                    href="https://kinsley.bslthemes.com/wp-content/uploads/2021/09/about-5.jpg">
                                                                                    <noscript><img decoding="async"
                                                                                        src="https://kinsley.bslthemes.com/wp-content/uploads/2021/09/about-5.jpg"
                                                                                        alt="East terrace" /></noscript><img
                                                                                        class="lazyload" decoding="async"
                                                                                        src="https://kinsley.bslthemes.com/wp-content/uploads/2021/09/about-3.jpg"
                                                                                        data-src="https://kinsley.bslthemes.com/wp-content/uploads/2021/09/about-5.jpg"
                                                                                        alt="East terrace" />
                                                                                    <div class="knsl-badge"> <span> East terrace
                                                                                    </span></div> <span class="knsl-zoom"><i
                                                                                        class="fas fa-search-plus"></i></span>
                                                                                </a></div>
                                                                            </div>
                                                                            <div class="swiper-slide"
                                                                                style={{ width: '531px', marginRight: '20px' }}
                                                                                role="group" aria-label="6 / 8">

                                                                                <div class="knsl-image-frame"> <a
                                                                                    data-elementor-lightbox-slideshow="about-gallery"
                                                                                    data-elementor-lightbox-title="West terrace"
                                                                                    href="https://kinsley.bslthemes.com/wp-content/uploads/2021/09/about-6.jpg">
                                                                                    <noscript><img decoding="async"
                                                                                        src="https://kinsley.bslthemes.com/wp-content/uploads/2021/09/about-6.jpg"
                                                                                        alt="West terrace" /></noscript><img
                                                                                        class="lazyload" decoding="async"
                                                                                        src="https://kinsley.bslthemes.com/wp-content/uploads/2021/09/about-3.jpg"
                                                                                        data-src="https://kinsley.bslthemes.com/wp-content/uploads/2021/09/about-6.jpg"
                                                                                        alt="West terrace" />
                                                                                    <div class="knsl-badge"> <span> West terrace
                                                                                    </span></div> <span class="knsl-zoom"><i
                                                                                        class="fas fa-search-plus"></i></span>
                                                                                </a></div>
                                                                                <div class="swiper-slide"
                                                                                    style={{ width: '531px', marginRight: '20px' }}
                                                                                    role="group" aria-label="7 / 8">

                                                                                    <div class="knsl-image-frame"> <a
                                                                                        data-elementor-lightbox-slideshow="about-gallery"
                                                                                        data-elementor-lightbox-title="View from the sea"
                                                                                        href="https://kinsley.bslthemes.com/wp-content/uploads/2021/09/about-7.jpg">
                                                                                        <noscript><img decoding="async"
                                                                                            src="https://kinsley.bslthemes.com/wp-content/uploads/2021/09/about-7.jpg"
                                                                                            alt="View from the sea" /></noscript><img
                                                                                            class="lazyload" decoding="async"
                                                                                            src="https://kinsley.bslthemes.com/wp-content/uploads/2021/09/about-3.jpg"
                                                                                            data-src="https://kinsley.bslthemes.com/wp-content/uploads/2021/09/about-7.jpg"
                                                                                            alt="View from the sea" />
                                                                                        <div class="knsl-badge"> <span> View from
                                                                                            the sea </span></div> <span
                                                                                                class="knsl-zoom"><i
                                                                                                    class="fas fa-search-plus"></i></span>
                                                                                    </a></div>
                                                                                </div>
                                                                                <div class="swiper-slide" role="group"
                                                                                    aria-label="8 / 8"
                                                                                    style={{ width: '531px', marginRight: '20px' }}>

                                                                                    <div class="knsl-image-frame"> <a
                                                                                        data-elementor-lightbox-slideshow="about-gallery"
                                                                                        data-elementor-lightbox-title="East terrace"
                                                                                        href="https://kinsley.bslthemes.com/wp-content/uploads/2021/09/about-8.jpg">
                                                                                        <noscript><img decoding="async"
                                                                                            src="https://kinsley.bslthemes.com/wp-content/uploads/2021/09/about-8.jpg"
                                                                                            alt="East terrace" /></noscript><img
                                                                                            class="lazyload" decoding="async"
                                                                                            src="https://kinsley.bslthemes.com/wp-content/uploads/2021/09/about-3.jpg"
                                                                                            data-src="https://kinsley.bslthemes.com/wp-content/uploads/2021/09/about-8.jpg"
                                                                                            alt="East terrace" />
                                                                                        <div class="knsl-badge"> <span> East terrace
                                                                                        </span></div> <span class="knsl-zoom"><i
                                                                                            class="fas fa-search-plus"></i></span>
                                                                                    </a></div>
                                                                                </div>
                                                                            </div>
                                                                            <div class="knsl-slider-nav-panel">
                                                                                <div
                                                                                    class="knsl-about-slider-1-pagination swiper-pagination-fraction swiper-pagination-horizontal">
                                                                                    <span class="swiper-pagination-current">2</span> /
                                                                                    <span class="swiper-pagination-total">8</span></div>

                                                                                <div class="knsl-about-slider-nav">
                                                                                    <div class="knsl-about-slider-1-prev" tabindex="0"
                                                                                        role="button" aria-label="Previous slide"
                                                                                        aria-controls="swiper-wrapper-7fdba1ca2179353b"
                                                                                        aria-disabled="false"><i
                                                                                            class="fas fa-arrow-left"></i></div>
                                                                                    <div class="knsl-about-slider-1-next" tabindex="0"
                                                                                        role="button" aria-label="Next slide"
                                                                                        aria-controls="swiper-wrapper-7fdba1ca2179353b"
                                                                                        aria-disabled="false"><i
                                                                                            class="fas fa-arrow-right"></i></div>
                                                                                </div>
                                                                            </div> <span
                                                                                class="swiper-notification" aria-live="assertive"
                                                                                aria-atomic="true"></span>
                                                                        </div>
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
                            <section
                                class="elementor-section elementor-top-section elementor-element elementor-element-63909ac elementor-section-full_width elementor-section-height-default elementor-section-height-default"
                                data-id="63909ac" data-element_type="section">
                                <div class="elementor-container elementor-column-gap-no">
                                    <div class="elementor-column elementor-col-100 elementor-top-column elementor-element elementor-element-2b41df9"
                                        data-id="2b41df9" data-element_type="column">
                                        <div class="elementor-widget-wrap elementor-element-populated">
                                            <div class="elementor-element elementor-element-983b46e elementor-widget elementor-widget-kinsley-numbers"
                                                data-id="983b46e" data-element_type="widget"
                                                data-widget_type="kinsley-numbers.default">
                                                <div class="elementor-widget-container">
                                                    
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </section>
                            <section
                                class="elementor-section elementor-top-section elementor-element elementor-element-ef5c205 elementor-section-full_width elementor-section-height-default elementor-section-height-default"
                                data-id="ef5c205" data-element_type="section">
                                <div class="elementor-container elementor-column-gap-no">
                                    <div class="elementor-column elementor-col-100 elementor-top-column elementor-element elementor-element-245eb49"
                                        data-id="245eb49" data-element_type="column">
                                        <div class="elementor-widget-wrap elementor-element-populated">
                                            <div class="elementor-element elementor-element-97056e4 elementor-widget elementor-widget-kinsley-rooms-carousel"
                                                data-id="97056e4" data-element_type="widget"
                                                data-widget_type="kinsley-rooms-carousel.default">
                                                
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </section>
                            <section
                                class="elementor-section elementor-top-section elementor-element elementor-element-000b28d elementor-section-full_width elementor-section-height-default elementor-section-height-default"
                                data-id="000b28d" data-element_type="section">
                                <div class="elementor-container elementor-column-gap-no">
                                    <div class="elementor-column elementor-col-100 elementor-top-column elementor-element elementor-element-5da090b"
                                        data-id="5da090b" data-element_type="column">
                                        <div class="elementor-widget-wrap elementor-element-populated">
                                            <div class="elementor-element elementor-element-04e9af5 elementor-widget elementor-widget-kinsley-services"
                                                data-id="04e9af5" data-element_type="widget"
                                                data-widget_type="kinsley-services.default">
                                                <div class="elementor-widget-container">
                                                    <section class="knsl-p-0-80">
                                                        <div class="container">
                                                            <div class="row ">
                                                                
                                                                <div class="col-md-6 col-lg-4">
                                                                    <div class="knsl-ath-card ">
                                                                        <div class="knsl-cover-frame"> <a
                                                                            href="https://kinsley.bslthemes.com/services/gym/">
                                                                            <noscript><img decoding="async"
                                                                                src="https://lifehacker.com/imagery/articles/01HF2HBZ78M0GYDMFBQP0Z8ARR/hero-image.fill.size_1248x702.v1699834174.jpg"
                                                                                alt="Gym" /></noscript><img class="lazyload"
                                                                                    decoding="async"
                                                                                    src="https://lifehacker.com/imagery/articles/01HF2HBZ78M0GYDMFBQP0Z8ARR/hero-image.fill.size_1248x702.v1699834174.jpg"
                                                                                    data-src="https://kinsley.bslthemes.com/wp-content/uploads/2021/09/about-3.jpg"
                                                                                    alt="Gym" /> </a>
                                                                            <div class="knsl-badge">
                                                                                <p class="mphb-price-wrapper">
                                                                                    <strong>Price:</strong> <span
                                                                                        class="mphb-price">Free</span></p>
                                                                            </div>
                                                                        </div>
                                                                        <div class="knsl-card-description">
                                                                            <h3 class="knsl-mb-10"> Gym</h3>
                                                                            <div class="knsl-text knsl-text--h">
                                                                                <p>Image for cattle earth. May one Which life divide
                                                                                    sea. Commodi soluta minima nemo,…</p>
                                                                            </div> <a
                                                                                href="https://kinsley.bslthemes.com/services/gym/"
                                                                                class="knsl-btn"> Read more <span
                                                                                    class="screen-reader-text">Read
                                                                                    more&nbsp;Gym</span> </a>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                                <div class="col-md-6 col-lg-4">
                                                                    <div class="knsl-ath-card ">
                                                                        <div class="knsl-cover-frame"> <a
                                                                            href="https://kinsley.bslthemes.com/services/pool/">
                                                                            <noscript><img decoding="async"
                                                                                src="https://kinsley.bslthemes.com/wp-content/uploads/2021/10/service-2-950x1266.jpg"
                                                                                alt="Pool" /></noscript><img class="lazyload"
                                                                                    decoding="async"
                                                                                    src="https://kinsley.bslthemes.com/wp-content/uploads/2021/09/about-3.jpg"
                                                                                    data-src="https://kinsley.bslthemes.com/wp-content/uploads/2021/10/service-2-950x1266.jpg"
                                                                                    alt="Pool" /> </a>
                                                                            <div class="knsl-badge">
                                                                                <p class="mphb-price-wrapper">
                                                                                    <strong>Price:</strong> <span
                                                                                        class="mphb-price"><span
                                                                                            class="mphb-currency">€</span>10</span>
                                                                                    / Per Instance / Per Guest</p>
                                                                            </div>
                                                                        </div>
                                                                        <div class="knsl-card-description">
                                                                            <h3 class="knsl-mb-10"> Pool</h3>
                                                                            <div class="knsl-text knsl-text--h">
                                                                                <p>Image for cattle earth. May one Which life divide
                                                                                    sea. Commodi soluta minima nemo,…</p>
                                                                            </div> <a
                                                                                href="https://kinsley.bslthemes.com/services/pool/"
                                                                                class="knsl-btn"> Read more <span
                                                                                    class="screen-reader-text">Read
                                                                                    more&nbsp;Pool</span> </a>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                                <div class="col-md-6 col-lg-4">
                                                                    <div class="knsl-ath-card ">
                                                                        <div class="knsl-cover-frame"> <a
                                                                            href="https://kinsley.bslthemes.com/services/lounge-bar/">
                                                                            <noscript><img decoding="async"
                                                                                src="https://kinsley.bslthemes.com/wp-content/uploads/2021/10/service-1-950x1425.jpg"
                                                                                alt="Lounge bar" /></noscript><img
                                                                                class="lazyload" decoding="async"
                                                                                src="https://i.pinimg.com/originals/59/92/7e/59927ea818ecab0d8fdda23030007530.jpg"
                                                                                data-src="https://kinsley.bslthemes.com/wp-content/uploads/2021/10/service-1-950x1425.jpg"
                                                                                alt="Lounge bar" /> </a>
                                                                            <div class="knsl-badge">
                                                                                <p class="mphb-price-wrapper">
                                                                                    <strong>Price:</strong> <span
                                                                                        class="mphb-price">Free</span></p>
                                                                            </div>
                                                                        </div>
                                                                        <div class="knsl-card-description">
                                                                            <h3 class="knsl-mb-10"> Lounge bar</h3>
                                                                            <div class="knsl-text knsl-text--h">
                                                                                <p>Image for cattle earth. May one Which life divide
                                                                                    sea. Commodi soluta minima nemo,…</p>
                                                                            </div> <a
                                                                                href="https://kinsley.bslthemes.com/services/lounge-bar/"
                                                                                class="knsl-btn"> Read more <span
                                                                                    class="screen-reader-text">Read more&nbsp;Lounge
                                                                                    bar</span> </a>
                                                                        </div>
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
                            <section
                                class="elementor-section elementor-top-section elementor-element elementor-element-27b19fd elementor-section-full_width elementor-section-height-default elementor-section-height-default"
                                data-id="27b19fd" data-element_type="section">
                                <div class="elementor-container elementor-column-gap-no">
                                    <div class="elementor-column elementor-col-100 elementor-top-column elementor-element elementor-element-c9fb82e"
                                        data-id="c9fb82e" data-element_type="column">
                                        <div class="elementor-widget-wrap elementor-element-populated">
                                            <div class="elementor-element elementor-element-741770e elementor-widget elementor-widget-kinsley-testimonials"
                                                data-id="741770e" data-element_type="widget"
                                                data-widget_type="kinsley-testimonials.default">
                                                <div class="elementor-widget-container">
                                                    
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </section>
                            <section
                                class="elementor-section elementor-top-section elementor-element elementor-element-6c9ca8c elementor-section-full_width elementor-section-height-default elementor-section-height-default"
                                data-id="6c9ca8c" data-element_type="section">
                                <div class="elementor-container elementor-column-gap-no">
                                    <div class="elementor-column elementor-col-100 elementor-top-column elementor-element elementor-element-ddd7d93"
                                        data-id="ddd7d93" data-element_type="column">
                                        <div class="elementor-widget-wrap elementor-element-populated">
                                            <div class="elementor-element elementor-element-1f20111 elementor-widget elementor-widget-kinsley-blog-grid"
                                                data-id="1f20111" data-element_type="widget"
                                                data-widget_type="kinsley-blog-grid.default">
                                                <div class="elementor-widget-container">
                                                    <section class="knsl-transition-none knsl-p-0-80"> <noscript><img
                                                        decoding="async"
                                                        src="https://kinsley.bslthemes.com/wp-content/themes/kinsley/assets/img/palm.svg"
                                                        class="knsl-deco-right" alt="palm" /></noscript><img
                                                            decoding="async"
                                                            src="https://kinsley.bslthemes.com/wp-content/uploads/2021/09/about-3.jpg"
                                                            data-src="https://kinsley.bslthemes.com/wp-content/themes/kinsley/assets/img/palm.svg"
                                                            class="lazyload knsl-deco-right" alt="palm" />
                                                        <div class="container">
                                                            <div class="row  attr-categories-false attr-readmore-false">
                                                              
                                                                <div class="col-md-6 col-lg-4">
                                                                    <div class="knsl-blog-card">
                                                                        <div id="post-1181"
                                                                            class="post-1181 post type-post status-publish format-standard has-post-thumbnail hentry category-travel tag-guide tag-places tag-travel tag-trip">
                                                                            <div class="knsl-cover-frame"> <a
                                                                                href="https://kinsley.bslthemes.com/blog/2021/12/21/the-ultimate-guide-to-traveling-when-you-have-no-money-2/">
                                                                                <noscript><img decoding="async"
                                                                                    src="https://kinsley.bslthemes.com/wp-content/uploads/2021/10/blog-2-1-950x608.jpg"
                                                                                    alt="The Ultimate Guide to Traveling When You Have No Money" /></noscript><img
                                                                                    class="lazyload" decoding="async"
                                                                                    src="https://kinsley.bslthemes.com/wp-content/uploads/2021/09/about-3.jpg"
                                                                                    data-src="https://kinsley.bslthemes.com/wp-content/uploads/2021/10/blog-2-1-950x608.jpg"
                                                                                    alt="The Ultimate Guide to Traveling When You Have No Money" />
                                                                            </a>
                                                                                <div class="knsl-badge"> Travel</div>
                                                                            </div>
                                                                            <div class="knsl-description-frame">
                                                                                <div class="knsl-room-features">
                                                                                    <div class="knsl-feature knsl-feature-author">
                                                                                        <div
                                                                                            class="knsl-icon-frame knsl-icon-author">
                                                                                            <noscript><img decoding="async"
                                                                                                src="https://secure.gravatar.com/avatar/bfe80a8cfe3f34bf01b6448655880640?s=96&#038;d=mm&#038;r=g"
                                                                                                alt="Hana Evans" /></noscript><img
                                                                                                class="lazyload" decoding="async"
                                                                                                src="https://kinsley.bslthemes.com/wp-content/uploads/2021/09/about-3.jpg"
                                                                                                data-src="https://secure.gravatar.com/avatar/bfe80a8cfe3f34bf01b6448655880640?s=96&amp;d=mm&amp;r=g"
                                                                                                alt="Hana Evans" /></div> <span>Hana
                                                                                                    Evans</span>
                                                                                    </div>
                                                                                    <div class="knsl-feature knsl-feature-date">
                                                                                        <div class="knsl-icon-frame"><span
                                                                                            class="img-svg img-svg-time"></span>
                                                                                        </div> <span>December 21, 2021</span>
                                                                                    </div>
                                                                                </div> <a
                                                                                    href="https://kinsley.bslthemes.com/blog/2021/12/21/the-ultimate-guide-to-traveling-when-you-have-no-money-2/"
                                                                                    class="knsl-title">
                                                                                    <h4 class="knsl-mb-20">The Ultimate Guide to
                                                                                        Traveling When You Have No Money</h4>
                                                                                </a>
                                                                                <div class="knsl-text-light knsl-text-sm">
                                                                                    <p>Image for cattle earth. May one Which life
                                                                                        divide sea. Commodi soluta minima nemo,…
                                                                                        <span class="knsl-el-more"><a
                                                                                            href="https://kinsley.bslthemes.com/blog/2021/12/21/the-ultimate-guide-to-traveling-when-you-have-no-money-2/"
                                                                                            class="knsl-btn">Read more<span
                                                                                                class="screen-reader-text">Read
                                                                                                more&nbsp;The Ultimate Guide to
                                                                                                Traveling When You Have No
                                                                                                Money</span></a></span></p>
                                                                                </div>
                                                                            </div>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                                <div class="col-md-6 col-lg-4">
                                                                    <div class="knsl-blog-card">
                                                                        <div id="post-1182"
                                                                            class="post-1182 post type-post status-publish format-standard has-post-thumbnail hentry category-travel tag-resort tag-tour tag-travel">
                                                                            <div class="knsl-cover-frame"> <a
                                                                                href="https://kinsley.bslthemes.com/blog/2021/12/21/the-best-travel-insurance-companies-for-seniors-2/">
                                                                                <noscript><img decoding="async"
                                                                                    src="https://kinsley.bslthemes.com/wp-content/uploads/2021/10/blog-3-950x634.jpg"
                                                                                    alt="The Best Travel Insurance Companies for Seniors" /></noscript><img
                                                                                    class="lazyload" decoding="async"
                                                                                    src="https://kinsley.bslthemes.com/wp-content/uploads/2021/09/about-3.jpg"
                                                                                    data-src="https://kinsley.bslthemes.com/wp-content/uploads/2021/10/blog-3-950x634.jpg"
                                                                                    alt="The Best Travel Insurance Companies for Seniors" />
                                                                            </a>
                                                                                <div class="knsl-badge"> Travel</div>
                                                                            </div>
                                                                            <div class="knsl-description-frame">
                                                                                <div class="knsl-room-features">
                                                                                    <div class="knsl-feature knsl-feature-author">
                                                                                        <div
                                                                                            class="knsl-icon-frame knsl-icon-author">
                                                                                            <noscript><img decoding="async"
                                                                                                src="https://secure.gravatar.com/avatar/bfe80a8cfe3f34bf01b6448655880640?s=96&#038;d=mm&#038;r=g"
                                                                                                alt="Hana Evans" /></noscript><img
                                                                                                class="lazyload" decoding="async"
                                                                                                src="https://kinsley.bslthemes.com/wp-content/uploads/2021/09/about-3.jpg"
                                                                                                data-src="https://secure.gravatar.com/avatar/bfe80a8cfe3f34bf01b6448655880640?s=96&amp;d=mm&amp;r=g"
                                                                                                alt="Hana Evans" /></div> <span>Hana
                                                                                                    Evans</span>
                                                                                    </div>
                                                                                    <div class="knsl-feature knsl-feature-date">
                                                                                        <div class="knsl-icon-frame"><span
                                                                                            class="img-svg img-svg-time"></span>
                                                                                        </div> <span>December 21, 2021</span>
                                                                                    </div>
                                                                                </div> <a
                                                                                    href="https://kinsley.bslthemes.com/blog/2021/12/21/the-best-travel-insurance-companies-for-seniors-2/"
                                                                                    class="knsl-title">
                                                                                    <h4 class="knsl-mb-20">The Best Travel Insurance
                                                                                        Companies for Seniors</h4>
                                                                                </a>
                                                                                <div class="knsl-text-light knsl-text-sm">
                                                                                    <p>Image for cattle earth. May one Which life
                                                                                        divide sea. Commodi soluta minima nemo,…
                                                                                        <span class="knsl-el-more"><a
                                                                                            href="https://kinsley.bslthemes.com/blog/2021/12/21/the-best-travel-insurance-companies-for-seniors-2/"
                                                                                            class="knsl-btn">Read more<span
                                                                                                class="screen-reader-text">Read
                                                                                                more&nbsp;The Best Travel
                                                                                                Insurance Companies for
                                                                                                Seniors</span></a></span></p>
                                                                                </div>
                                                                            </div>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                                <div class="col-md-6 col-lg-4">
                                                                    <div class="knsl-blog-card">
                                                                        <div id="post-1179"
                                                                            class="post-1179 post type-post status-publish format-standard has-post-thumbnail hentry category-places tag-sea tag-tour tag-travel tag-trip">
                                                                            <div class="knsl-cover-frame"> <a
                                                                                href="https://kinsley.bslthemes.com/blog/2021/12/21/18-easy-steps-for-planning-your-next-trip-2/">
                                                                                <noscript><img decoding="async"
                                                                                    src="https://kinsley.bslthemes.com/wp-content/uploads/2021/10/blog-1-950x713.jpg"
                                                                                    alt="18 Easy Steps for Planning Your Next Trip" /></noscript><img
                                                                                    class="lazyload" decoding="async"
                                                                                    src="https://kinsley.bslthemes.com/wp-content/uploads/2021/09/about-3.jpg"
                                                                                    data-src="https://kinsley.bslthemes.com/wp-content/uploads/2021/10/blog-1-950x713.jpg"
                                                                                    alt="18 Easy Steps for Planning Your Next Trip" />
                                                                            </a>
                                                                                <div class="knsl-badge"> Places</div>
                                                                            </div>
                                                                            <div class="knsl-description-frame">
                                                                                <div class="knsl-room-features">
                                                                                    <div class="knsl-feature knsl-feature-author">
                                                                                        <div
                                                                                            class="knsl-icon-frame knsl-icon-author">
                                                                                            <noscript><img decoding="async"
                                                                                                src="https://secure.gravatar.com/avatar/bfe80a8cfe3f34bf01b6448655880640?s=96&#038;d=mm&#038;r=g"
                                                                                                alt="Hana Evans" /></noscript><img
                                                                                                class="lazyload" decoding="async"
                                                                                                src="https://kinsley.bslthemes.com/wp-content/uploads/2021/09/about-3.jpg"
                                                                                                data-src="https://secure.gravatar.com/avatar/bfe80a8cfe3f34bf01b6448655880640?s=96&amp;d=mm&amp;r=g"
                                                                                                alt="Hana Evans" /></div> <span>Hana
                                                                                                    Evans</span>
                                                                                    </div>
                                                                                    <div class="knsl-feature knsl-feature-date">
                                                                                        <div class="knsl-icon-frame"><span
                                                                                            class="img-svg img-svg-time"></span>
                                                                                        </div> <span>December 21, 2021</span>
                                                                                    </div>
                                                                                </div> <a
                                                                                    href="https://kinsley.bslthemes.com/blog/2021/12/21/18-easy-steps-for-planning-your-next-trip-2/"
                                                                                    class="knsl-title">
                                                                                    <h4 class="knsl-mb-20">18 Easy Steps for
                                                                                        Planning Your Next Trip</h4>
                                                                                </a>
                                                                                <div class="knsl-text-light knsl-text-sm">
                                                                                    <p>Image for cattle earth. May one Which life
                                                                                        divide sea. Commodi soluta minima nemo,…
                                                                                        <span class="knsl-el-more"><a
                                                                                            href="https://kinsley.bslthemes.com/blog/2021/12/21/18-easy-steps-for-planning-your-next-trip-2/"
                                                                                            class="knsl-btn">Read more<span
                                                                                                class="screen-reader-text">Read
                                                                                                more&nbsp;18 Easy Steps for
                                                                                                Planning Your Next
                                                                                                Trip</span></a></span></p>
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
                                    </div>
                                </div>
                            </section>
                        </div>
                    </div>
                </div>
                <ScrollButton />
            </body >
        </div >
    )
}
