import FooterPage from "../../component/footer/FooterPage";
import HeaderPage from "../../component/headers/HeaderPage";
import RoomBanner from "./RoomBanner";
import RoomCard from "./RoomCard";
import { useDispatch, useSelector } from "react-redux";
import { useState, useEffect } from "react";
import { searchRooms } from "../../redux/roomSlice";
import { Input } from "reactstrap";

function Rooms() {
    const dispatch = useDispatch();
    const [updateItem, setUpdateItem] = useState(null);
    const { items, status, errors, message, totalPage } = useSelector(state => state.room);

    const [activeFilter, setActiveFilter] = useState(null);
    const [priceRange, setPriceRange] = useState({ min: null, max: null });

    const filters = [
        { label: 'All Rooms', value: null },
        { label: 'Single', value: 'SINGLE' },
        { label: 'Double', value: 'DOUBLE' },
        { label: 'VIP', value: 'VIP' },
    ];

    const handleFilterChange = (value) => {
        setActiveFilter(value);
    };

    const handlePriceChange = (e) => {
        const { name, value } = e.target;
        setPriceRange((prev) => ({ ...prev, [name]: value }));
    };

    const [currentPage, setCurrentPage] = useState(0);

    useEffect(() => {
        dispatch(searchRooms({
            type: activeFilter,
            page: currentPage,
            max: priceRange.max,
        }));
    }, [dispatch, currentPage, activeFilter]);

    return (
        <div>
            <HeaderPage />
            <body className="page-template page-template-template-layout-builder
            page-template-template-layout-builder-php page page-id-6 theme-kinsley woocommerce-js elementor-default
            elementor-kit-5762 elementor-page elementor-page-6 e--ua-blink e--ua-edge e--ua-webkit"
                data-elementor-device-mode="tablet">
                <div className="knsl-app">
                    <div className="knsl-preloader-frame knsl-hidden">
                        <div className="knsl-preloader" style={{ opacity: 1 }}>
                            <img
                                src="https://kinsley.bslthemes.com/wp-content/uploads/2021/11/logo.png"
                                alt="Kinsley – Hotel & Resort WordPress Theme" />
                            <div className="knsl-preloader-progress">
                                <div className="knsl-preloader-bar" style={{ width: "100%" }}></div>
                            </div>
                            <div className="knsl-preloader-number-wrap"><span className="knsl-preloader-number" data-count="101">100</span>%
                            </div>
                        </div>
                    </div>
                    <div className="knsl-datepicker-place"></div>
                    <div id="post-6" className="post-6 page type-page status-publish hentry">
                        <div data-elementor-type="wp-page" data-elementor-id="6" className="elementor elementor-6">
                            <RoomBanner />
                            <section
                                className="elementor-section elementor-top-section elementor-element elementor-element-c47a142 elementor-section-full_width elementor-section-height-default elementor-section-height-default"
                                data-id="c47a142" data-element_type="section">
                                <div className="elementor-container elementor-column-gap-no">
                                    <div className="elementor-column elementor-col-100 elementor-top-column elementor-element elementor-element-954c519"
                                        data-id="954c519" data-element_type="column">
                                        <div className="elementor-widget-wrap elementor-element-populated">
                                            <div className="elementor-element elementor-element-2fc0da8 elementor-widget elementor-widget-kinsley-rooms-grid"
                                                data-id="2fc0da8" data-element_type="widget"
                                                data-widget_type="kinsley-rooms-grid.default">
                                                <div className="elementor-widget-container">
                                                    <section className="knsl-p-0-100">
                                                        <noscript>
                                                            <img decoding="async"
                                                                src="https://kinsley.bslthemes.com/wp-content/themes/kinsley/assets/img/palm.svg"
                                                                className="knsl-deco-left" alt="palm" />
                                                        </noscript>
                                                        <img decoding="async"
                                                            src="https://kinsley.bslthemes.com/wp-content/themes/kinsley/assets/img/palm.svg"
                                                            data-src="https://kinsley.bslthemes.com/wp-content/themes/kinsley/assets/img/palm.svg"
                                                            className="knsl-deco-left ls-is-cached lazyloaded" alt="palm" />
                                                        <div className="container">
                                                            <div className="knsl-filter knsl-mb-60">
                                                                {filters.map((filter) => (
                                                                    <div
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
                                                                    </div>
                                                                ))}
                                                                <div style={{ display: "flex" }}>
                                                                    <Input
                                                                        name="max"
                                                                        type="number"
                                                                        placeholder="Max Price"
                                                                        onChange={handlePriceChange}
                                                                        style={{border: "2px solid #000", marginLeft: "10px"}}
                                                                    />
                                                                </div>
                                                            </div>
                                                            <div className="knsl-masonry-grid knsl-3-col attr-details-amenity-false attr-details-category-false attr-details-attributes-false attr-details-view-false attr-details-bed-type-false attr-details-children-false"
                                                                style={{ position: "relative", marginBottom: "200px" }}>
                                                                <div className="knsl-grid-sizer"></div>
                                                                {items && items.map((room, index) => {
                                                                    return <RoomCard room={room} key={index} />;
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
    );
}

export default Rooms;
