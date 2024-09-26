import React from 'react';
import { Link } from 'react-router-dom';

const RoomCard = ({ hotel }) => {
    console.log(hotel)

    function convertCity(city){
        switch (city){
            case("HCM"):
            return "Ho Chi Minh City"
            case("HANOI"):
            return "HA NOI"
        }
    }

    return (
        <div className="knsl-masonry-grid-item knsl-masonry-grid-item-33 luxe">
            <div className="mphb_sc_room-wrapper">
                <div className="mphb-room-type post-17 mphb_room_type type-mphb_room_type status-publish has-post-thumbnail mphb_room_type_category-luxe mphb_room_type_tag-luxe mphb_room_type_facility-4-private-pools mphb_room_type_facility-air-conditioning mphb_room_type_facility-airport-transfer mphb_room_type_facility-all-inclusive mphb_room_type_facility-wifi mphb_room_type_facility-laundry mphb_room_type_facility-smart-tv mphb_room_type_facility-under-protection mphb-room-type-adults-4 mphb-room-type-children-0">
                    <p className="post-thumbnail mphb-loop-room-thumbnail">
                        <Link to={`/hoteldetail/${hotel.hotelId}`}>
                            <img
                                decoding="async"
                                width="1000"
                                height="666"
                                src="https://kinsley.bslthemes.com/wp-content/uploads/2021/08/room-1.jpg"
                                alt=""
                                srcSet="
                                    https://kinsley.bslthemes.com/wp-content/uploads/2021/08/room-1.jpg 1000w,
                                    https://kinsley.bslthemes.com/wp-content/uploads/2021/08/room-1-300x200.jpg 300w,
                                    https://kinsley.bslthemes.com/wp-content/uploads/2021/08/room-1-768x511.jpg 768w,
                                    https://kinsley.bslthemes.com/wp-content/uploads/2021/08/room-1-950x633.jpg 950w,
                                    https://kinsley.bslthemes.com/wp-content/uploads/2021/08/room-1-800x533.jpg 800w"
                                sizes="(max-width: 1000px) 100vw, 1000px"
                            />
                        </Link>
                    </p>
                    <h1 className="mphb-room-type-title entry-title">
                        <Link className="mphb-room-type-title" to={`/hoteldetail/${hotel.hotelId}`} >Hotel: {hotel.name}</Link>
                    </h1>
                    <h4 className="mphb-room-type-title entry-title" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                        <h5 className="mphb-room-type-title" to={`/roomdetail/${hotel.hotelId}`}>
                            Location: {hotel.location}
                        </h5>
                        <strong className="mphb-price">
                            <span className="mphb-currency"></span>{hotel.location}
                        </strong>
                    </h4>
                    <div className="knsl-text-light knsl-text-sm knsl-mb-20">
                        <p>
                            Image for cattle earth. May one Which life divide sea. Optio veniam quibusdam fugit aspernatur ratione rerum necessitatibus ipsa eligendi?
                            Laudantium beatae aut earum ab doloribus tempore veritatis repellat natus illo, veniam quibusdam fugit aspernatur cumque harum quos esse libero nesciunt, molestiae saepe, possimus a suscipit.
                        </p>
                    </div>
                    <h3 className="mphb-room-type-details-title">Details</h3>
                    <ul className="mphb-loop-room-type-attributes">
                        <li className="mphb-room-type-adults-capacity">
                            <span className="mphb-attribute-title mphb-adults-title">City: </span>
                            {convertCity(hotel.city)}
                        </li>
                    </ul>
                    <div className="mphb-to-book-btn-wrapper">
                        <Link to={`/hoteldetail/${hotel.hotelId}`}>
                            <button type="submit" className="button mphb-book-button">Check</button>
                        </Link>
                        <br />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default RoomCard;
