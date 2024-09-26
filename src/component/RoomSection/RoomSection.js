import RoomCard from "../../pages/Rooms/RoomCard"
import { useDispatch, useSelector } from "react-redux";
import { useState, useEffect } from "react";
import { searchRooms } from "../../redux/roomSlice";

function RoomSection(){
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

    useEffect(() => {
        dispatch(searchRooms({
            type: activeFilter,
            page: currentPage,
            max: priceRange.max,
        }));
    }, [dispatch, currentPage, activeFilter]);

    const [currentPage, setCurrentPage] = useState(0);

    return <>
        {items && items?.map((room,index)=>(
            <RoomCard room={room} />
        ))}
    </>
}

export default RoomSection