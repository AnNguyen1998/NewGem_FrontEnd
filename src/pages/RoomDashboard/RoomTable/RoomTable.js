import { Button } from "reactstrap";
import ReactPaginate from "react-paginate";
import { useSelector, useDispatch } from "react-redux";
import { useState, useEffect } from "react";
import { changeRoomStatus, getAllRoomsByHotelId, removeMessageError } from "../../../redux/roomSlice";
import AddRoomForm from "../AddRoomForm/AddRoomForm";
import UpdateRoomForm from "../UpdateRoomForm/UpdateRoomForm";
import { useContext } from "react";
import { ToastContext, ToastTypes } from "../../../utils/ToastContext";

function RoomTable({ hotelId, hotelName }) {
    const dispatch = useDispatch()
    const [updateItem,setUpdatItem] = useState(null)
    const { items, status, errors, message, totalPage } = useSelector(state => state.room);
    const { showToast } = useContext(ToastContext)

    const [currentPage, setCurrentPage] = useState(0);

    const handlePageClick = (event) => {
        setCurrentPage(event.selected);
    };

    const btnUpdateHandle = (id) => {
        setUpdatItem(items[id])
    };

    const handleDisable = (hotelId) => {
        dispatch(removeMessageError())
        dispatch(changeRoomStatus(hotelId))
        window.location.reload()
    }

    useEffect(() => {
        dispatch(removeMessageError())
        dispatch(getAllRoomsByHotelId({ page: currentPage, hotelId: hotelId }))
    }, [dispatch, hotelId, currentPage])



    useEffect(()=>{
        if (status == 200 || status == 201){
            showToast(message,ToastTypes.SUCCESS)
        } else if (status == null){
        } else {
            showToast(message || errors, ToastTypes.ERROR)
        }
    },[status])

    return <>
        <div class="row mb-4" id='show-hotel'>
            <div class="col-lg-12 col-md-6 mb-md-0 mb-4">
                <div class="card">
                    <div class="card-header pb-0">
                        <div class="row">
                            <div class="col-lg-6 col-7">
                                <h6>Rooms</h6>
                            </div>
                            <div class="col-lg-6 col-5 my-auto text-end">
                            </div>
                        </div>
                    </div>
                    <div class="card-body px-0 pb-2">
                        <div class="table-responsive">
                            <table class="table align-items-center mb-0">
                                <thead>
                                    <tr>
                                        <th class="text-uppercase text-secondary text-xxs font-weight-bolder opacity-7 ps-2">Room Number</th>
                                        <th class="text-center text-uppercase text-secondary text-xxs font-weight-bolder opacity-7">Room Type</th>
                                        <th class="text-center text-uppercase text-secondary text-xxs font-weight-bolder opacity-7">Price</th>
                                        <th class="text-center text-uppercase text-secondary text-xxs font-weight-bolder opacity-7">Guests</th>
                                        <th class="text-center text-uppercase text-secondary text-xxs font-weight-bolder opacity-7">Status</th>
                                        <th class="text-center text-uppercase text-secondary text-xxs font-weight-bolder opacity-7">Actions</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {
                                        items && items?.map((item, index) => (
                                            <tr key={index}>
                                                <td>
                                                    <div class="avatar-group mt-2">
                                                        <a href="javascript:;" class="avatar avatar-xs rounded-circle" data-bs-toggle="tooltip" data-bs-placement="bottom" title="Ryan Tompson">
                                                            <h6>{item.roomNumber}</h6>
                                                        </a>
                                                    </div>
                                                </td>
                                                <td class="align-middle text-center text-sm">
                                                    <span class="text-xs font-weight-bold"> {item.type} </span>
                                                </td>
                                                <td class="align-middle text-center text-sm">
                                                    <span class="text-xs font-weight-bold"> {item.price} </span>
                                                </td>
                                                <td class="align-middle text-center text-sm">
                                                    <span class="text-xs font-weight-bold"> {item.guests} </span>
                                                </td>
                                                <td>
                                                    <div class="d-flex px-2 py-1">
                                                        <div class="d-flex flex-column justify-content-center">
                                                            <h6 class="mb-0 text-sm">{item.status}</h6>
                                                        </div>
                                                    </div>
                                                </td>
                                                <td class="align-middle text-center text-sm" >
                                                    {item.status == "ACTIVE" && <Button color='danger' style={{ marginRight: '5px' }} onClick={()=>handleDisable(item.roomId)}>Disable</Button>}
                                                    {item.status == "INACTIVE" && <Button color='danger' style={{ marginRight: '5px' }} onClick={()=>handleDisable(item.roomId)}>Activate</Button>}
                                                    <a href='#update'><Button color='warning' onClick={() => btnUpdateHandle(index)}>Update</Button></a>
                                                </td>
                                            </tr>
                                        ))
                                    }
                                </tbody>
                                <div style={{ textAlign: 'center', justifyContent: 'center' }}>
                                    <ReactPaginate
                                        previousLabel={'<<'}
                                        nextLabel={'>>'}
                                        breakLabel={'...'}
                                        pageCount={Math.ceil(totalPage)}
                                        marginPagesDisplayed={1}
                                        pageRangeDisplayed={5}
                                        onPageChange={handlePageClick}
                                        containerClassName={'pagination'}
                                        pageClassName={'page-item'}
                                        pageLinkClassName={'page-link'}
                                        previousClassName={'page-item'}
                                        nextClassName={'page-item'}
                                        previousLinkClassName={'page-link'}
                                        nextLinkClassName={'page-link'}
                                        breakClassName={'page-item'}
                                        breakLinkClassName={'page-link'}
                                        activeClassName={'active'}
                                    />
                                </div>
                            </table>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div class="row mb-4">
            <div class="col-lg-6 col-md-6 mb-md-0 mb-4">
                <AddRoomForm hotelId={hotelId} hotelName={hotelName}/>
            </div>
            <div class="col-lg-6 col-md-6 mb-md-0 mb-4">
                <UpdateRoomForm updateItem={updateItem} hotelId={hotelId} />
            </div>
        </div>
    </>
}

export default RoomTable;