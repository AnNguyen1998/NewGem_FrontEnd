import React, { useState } from 'react';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';
import "../bill.css";
import PayBillForm from '../PayBillForm/PayBillForm';

const InvoiceModal = ({ bill, hotel }) => {
  const [modal, setModal] = useState(false);
  const toggle = () => setModal(!modal);

  function convertCity(city) {
    switch (city) {
      case "HCM":
        return "Ho Chi Minh City";
      case "HANOI":
        return "Ha Noi";
      default:
        return city;
    }
  }

  return (
    <div>
      <Button color="danger" onClick={toggle}>
        Open Invoice
      </Button>
      <Modal isOpen={modal} toggle={toggle} size="lg">
        <ModalHeader toggle={toggle}>Invoice</ModalHeader>
        <ModalBody id="bill">
          <header>
            <h1>Invoice</h1>
            <address>
              <p>{bill.user.firstName + " " + bill.user.lastName}</p>
              <p>{bill.user.dateOfBirth}</p>
              <p>{bill.user.phone}</p>
              <p>{bill.user.email}</p>
            </address>
            <span>
              <input type="file" accept="image/*" />
            </span>
          </header>
          <article>
            <h1>Hotel</h1>
            <address>
              <p>{hotel?.name}</p>
              <p>{hotel?.location}</p>
              <p>{convertCity(hotel?.city)}</p>
            </address>
            <table className="meta">
              <tbody>
                <tr>
                  <th><span>Invoice #</span></th>
                  <td><span>{bill?.billId}</span></td>
                </tr>
                <tr>
                  <th><span>Date</span></th>
                  <td><span>{bill?.checkOut.slice(0, 10)}</span></td>
                </tr>
                <tr>
                  <th><span>Amount Due</span></th>
                  <td><span id="prefix">$</span><span>{bill?.totalFee}</span></td>
                </tr>
              </tbody>
            </table>
            <table className="inventory">
              <thead>
                <tr>
                  <th><span>Room</span></th>
                  <th><span>Check In</span></th>
                  <th><span>Check Out</span></th>
                  <th><span>Price</span></th>
                  <th><span>Total</span></th>
                </tr>
              </thead>
              <tbody>
                {bill && bill.reservations.map((item, index) => (
                  <tr key={index}>
                    <td><a className="cut">-</a><span>{item.roomNumber}</span></td>
                    <td><span>{item.checkIn}</span></td>
                    <td><span>{item.checkOut}</span></td>
                    <td><span data-prefix>$</span><span>{item.price}</span></td>
                    <td><span data-prefix>$</span><span>{item.total}</span></td>
                  </tr>
                ))}
              </tbody>
            </table>
            <table className="inventory">
              <colgroup>
                <col style={{ width: "30%" }} />
                <col style={{ width: "70%" }} />
              </colgroup>
              <thead>
                <tr>
                  <th><span>#</span></th>
                  <th><span>Description</span></th>
                </tr>
              </thead>
              <tbody>
                {bill && bill.descriptions.map((item, index) => (
                  <tr key={index}>
                    <td><a className="cut">-</a><span>{index + 1}</span></td>
                    <td><span>{item}</span></td>
                  </tr>
                ))}
              </tbody>
            </table>
            <table className="balance">
              <tbody>
                <tr>
                  <th><span>Total Payment</span></th>
                  <td><span data-prefix>$</span><span>{bill.receivedAmount}</span></td>
                </tr>
                <tr>
                  <th><span>Refund</span></th>
                  <td><span data-prefix>$</span><span>{bill.changedAmount}</span></td>
                </tr>
                <tr>
                  <th><span>Outstanding Balance</span></th>
                  <td><span data-prefix>$</span><span>{bill.newFee}</span></td>
                </tr>
              </tbody>
            </table>
          </article>
        </ModalBody>
        <ModalFooter>
          <PayBillForm hotel={hotel} bill={bill} />
          <Button color="secondary" onClick={toggle}>
            Cancel
          </Button>
        </ModalFooter>
      </Modal>
    </div>
  );
};

export default InvoiceModal;
