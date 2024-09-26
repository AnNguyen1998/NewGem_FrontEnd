import FooterPage from "../../component/footer/FooterPage"
import HeaderPage from "../../component/headers/HeaderPage"
import RoomBanner from "./RoomBanner"
import RoomCard from "./RoomCard"
import { useDispatch, useSelector } from "react-redux"
import { useState, useEffect } from "react"
import { getRoomsByType } from "../../redux/roomSlice"

function Rooms() {
    const dispatch = useDispatch()
    const [updateItem, setUpdatItem] = useState(null)
    const { items, status, errors, message, totalPage } = useSelector(state => state.room);

    const [activeFilter, setActiveFilter] = useState(null);

    const filters = [
        { label: 'All Rooms', value: null },
        { label: 'Single', value: 'SINGLE' },
        { label: 'Double', value: 'DOUBLE' },
        { label: 'VIP', value: 'STANDARD' },
    ];

    const handleFilterChange = (value) => {
        setActiveFilter(value);
    };


    const [currentPage, setCurrentPage] = useState(0);

    useEffect(() => {
        dispatch(getRoomsByType({
            type: activeFilter,
            page: 0
        }))
    }, [dispatch, currentPage, activeFilter])
    

    return <div>
        <HeaderPage />
        <body class=" page-template page-template-template-layout-builder
        page-template-template-layout-builder-php page page-id-6 theme-kinsley woocommerce-js elementor-default
        elementor-kit-5762 elementor-page elementor-page-6 e--ua-blink e--ua-edge e--ua-webkit"
            data-elementor-device-mode="tablet">
            <div class="knsl-app">
                <div class="knsl-preloader-frame knsl-hidden">
                    <div class="knsl-preloader" style={{ opacity: 1 }}> <img
                        src="https://kinsley.bslthemes.com/wp-content/uploads/2021/11/logo.png"
                        alt="Kinsley – Hotel &amp; Resort WordPress Theme" />
                        <div class="knsl-preloader-progress">
                            <div class="knsl-preloader-bar" style={{ width: "100%" }}></div>
                        </div>
                        <div class="knsl-preloader-number-wrap"><span class="knsl-preloader-number" data-count="101">100</span>%
                        </div>
                    </div>
                </div>
                <div class="knsl-datepicker-place"></div>
                <div id="post-6" class="post-6 page type-page status-publish hentry">
                    <div data-elementor-type="wp-page" data-elementor-id="6" class="elementor elementor-6">
                        <RoomBanner />
                        <section
                            class="elementor-section elementor-top-section elementor-element elementor-element-c47a142 elementor-section-full_width elementor-section-height-default elementor-section-height-default"
                            data-id="c47a142" data-element_type="section">
                            <div class="elementor-container elementor-column-gap-no">
                                <div class="elementor-column elementor-col-100 elementor-top-column elementor-element elementor-element-954c519"
                                    data-id="954c519" data-element_type="column">
                                    <div class="elementor-widget-wrap elementor-element-populated">
                                        <div class="elementor-element elementor-element-2fc0da8 elementor-widget elementor-widget-kinsley-rooms-grid"
                                            data-id="2fc0da8" data-element_type="widget"
                                            data-widget_type="kinsley-rooms-grid.default">
                                            <div class="elementor-widget-container">
                                                <section class="knsl-p-0-100"> <noscript><img decoding="async"
                                                    src="https://kinsley.bslthemes.com/wp-content/themes/kinsley/assets/img/palm.svg"
                                                    class="knsl-deco-left" alt="palm" /></noscript><img decoding="async"
                                                        src="https://kinsley.bslthemes.com/wp-content/themes/kinsley/assets/img/palm.svg"
                                                        data-src="https://kinsley.bslthemes.com/wp-content/themes/kinsley/assets/img/palm.svg"
                                                        class="knsl-deco-left ls-is-cached lazyloaded" alt="palm" />
                                                    <div class="container">
                                                        <div className="knsl-filter knsl-mb-60">
                                                            {filters.map((filter) => (
                                                                <a
                                                                    key={filter.value}
                                                                    href="#"
                                                                    data-filter={filter.value}
                                                                    className={`knsl-work-category ${activeFilter === filter.value ? 'knsl-current' : ''}`}
                                                                    onClick={(e) => {
                                                                        e.preventDefault();
                                                                        handleFilterChange(filter.value);
                                                                    }}
                                                                >
                                                                    {filter.label}
                                                                </a>
                                                            ))}
                                                        </div>
                                                        <div class="knsl-masonry-grid knsl-3-col attr-details-amenity-false attr-details-category-false attr-details-attributes-false attr-details-view-false attr-details-bed-type-false attr-details-children-false"
                                                            style={{ position: "relative", marginBottom: "200px" }}>
                                                            <div class="knsl-grid-sizer"></div>
                                                            {items && items?.map((room,index)=>{
                                                                return <RoomCard room={room} key={index}/>
                                                            })}
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
        </body>
        <FooterPage />
    </div>
}

export default Rooms