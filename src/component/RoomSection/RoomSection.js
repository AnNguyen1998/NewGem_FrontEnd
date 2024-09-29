import RoomCard from "../../pages/Rooms/RoomCard"
import { useDispatch, useSelector } from "react-redux";
import { useState, useEffect } from "react";
import { searchRooms } from "../../redux/roomSlice";
import { Input } from "reactstrap";


function RoomSection({ hotelId }) {
    const dispatch = useDispatch();
    const { items, status, errors, message, totalPage } = useSelector(state => state.room);

    const [activeFilter, setActiveFilter] = useState(null);
    const [priceRange, setPriceRange] = useState({ min: null, max: null });
    const [currentPage, setCurrentPage] = useState(0);

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

    useEffect(() => {
        dispatch(searchRooms({
            hotelId: hotelId,
            type: activeFilter,
            page: currentPage,
            max: priceRange.max,
            status: "ACTIVE"
        }));
    }, [dispatch, currentPage, activeFilter]);

    return <section
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
                                                style={{ border: "2px solid #000", marginLeft: "10px" }}
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
}

export default RoomSection