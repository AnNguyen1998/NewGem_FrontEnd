import React, { useEffect, useState, useContext } from 'react';
import ReactPaginate from "react-paginate";
import { useSelector, useDispatch } from "react-redux";
import { getAllBillByHotel, removeMessageError } from "../../../redux/billSlice";
import { ToastContext, ToastTypes } from "../../../utils/ToastContext";
import CreateBillForm from "../CreateBillForm/CreateBillForm";
import PayBillForm from "../PayBillForm/PayBillForm";
import Invoice from '../Invoice/Invoice';

function BillTable({ hotel, hotelId }) {
    const dispatch = useDispatch();
    const { items, bill, status, errors, message, totalPage } = useSelector(state => state.bill);
    const { showToast } = useContext(ToastContext);
    const [currentPage, setCurrentPage] = useState(0);

    const handlePageClick = (event) => {
        setCurrentPage(event.selected);
    };

    useEffect(() => {
        dispatch(removeMessageError());
        dispatch(getAllBillByHotel({ page: currentPage, hotelId: hotelId }));
    }, [dispatch, hotelId, currentPage]);

    useEffect(() => {
        if (status === 200 || status === 201) {
            if (message !== "Get all bills of hotel New Gem successfully") {
                showToast(message, ToastTypes.SUCCESS);
            }
        } else if (status !== null) {
            showToast(message || errors, ToastTypes.ERROR);
        }
    }, [status]);

    return (
        <div className="row mb-4" id='show-hotel'>
            <div className="col-lg-12 col-md-6 mb-md-0 mb-4">
                <div className="card">
                    <div className="card-header pb-0">
                        <div className="row align-items-center">
                            <div className="col-lg-6 col-7">
                                <h6>Invoices</h6>
                            </div>
                            <div className="col-lg-6 col-5 text-end">
                                <CreateBillForm hotel={hotel} hotelId={hotelId} />
                            </div>
                        </div>
                    </div>
                    <div className="card-body px-0 pb-2">
                        <div className="table-responsive">
                            <table className="table align-items-center mb-0">
                                <thead>
                                    <tr>
                                        <th className="text-uppercase text-secondary text-xxs font-weight-bolder opacity-7 ps-2">Index</th>
                                        <th className="text-center text-uppercase text-secondary text-xxs font-weight-bolder opacity-7">Reservations</th>
                                        <th className="text-center text-uppercase text-secondary text-xxs font-weight-bolder opacity-7">Voucher Code</th>
                                        <th className="text-center text-uppercase text-secondary text-xxs font-weight-bolder opacity-7">Gross Amount</th>
                                        <th className="text-center text-uppercase text-secondary text-xxs font-weight-bolder opacity-7">Net Amount</th>
                                        <th className="text-center text-uppercase text-secondary text-xxs font-weight-bolder opacity-7">Actions</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {items && items.map((item, index) => (
                                        <tr key={index}>
                                            <td>{index + 1}</td>
                                            <td className="align-middle text-center text-sm">{item.reservations.length}</td>
                                            <td className="align-middle text-center text-sm">{item.voucherId || "N/O"}</td>
                                            <td className="align-middle text-center text-sm">{item.totalFee}</td>
                                            <td className="align-middle text-center text-sm">{item.newFee || 0}</td>
                                            <td className="align-middle text-center text-sm">
                                                {!item.paid && <PayBillForm hotel={hotel} bill={item} />}
                                                <Invoice bill={item} hotel={hotel}/>
                                            </td>
                                        </tr>
                                    ))}
                                </tbody>
                            </table>
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
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default BillTable;
