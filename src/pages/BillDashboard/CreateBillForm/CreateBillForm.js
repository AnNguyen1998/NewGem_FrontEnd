import React, { useState } from 'react';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter, Label, Input, FormGroup } from 'reactstrap';
import { useDispatch } from 'react-redux';
import { createBill, removeMessageError } from '../../../redux/billSlice';

function CreateBillForm({ hotel, hotelId }) {
  const dispatch = useDispatch();
  const [modal, setModal] = useState(false);
  const [newBill, setNewBill] = useState({
    hotelId: hotelId,
    email: '',
    checkOut: new Date(),
    voucherId: null,
  });


  const toggle = () => setModal(!modal);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setNewBill((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    dispatch(removeMessageError());
    await dispatch(createBill(newBill));
    toggle();
    // window.location.reload()
    setNewBill({
      hotelId: hotel?.hotelId,
      email: '',
      checkOut: new Date(),
      voucherId: null,
    })
};

return (
  <div>
    <Button color="primary" onClick={toggle}>
      Get Invoice
    </Button>
    <Modal isOpen={modal} toggle={toggle}>
      <ModalHeader toggle={toggle}>Get invoice form</ModalHeader>
      <ModalBody>
        <form onSubmit={handleSubmit}>
          <FormGroup>
            <Label for="email">User's email</Label>
            <Input
              id="email"
              name="email"
              placeholder="Please enter user email here!"
              type="text"
              value={newBill.email}
              onChange={handleChange}
              required
            />
          </FormGroup>
          <FormGroup>
            <Label for="voucher">Choose voucher</Label>
            <Input
              id="voucher"
              name="voucherId"
              type="select"
              onChange={handleChange}
              required
            >
              <option value="" disabled>Select a voucher</option>
              <option value={null}>--</option> 
              {hotel?.vouchers && hotel?.vouchers.map((voucher) => (
                <option key={voucher.voucherId} value={voucher.voucherId}>
                  {voucher.discount}
                </option>
              ))}
            </Input>
          </FormGroup>
          <Button type="submit">Submit</Button>
        </form>
      </ModalBody>
      <ModalFooter>
        <Button color="secondary" onClick={toggle}>
          Cancel
        </Button>
      </ModalFooter>
    </Modal>
  </div>
);
}

export default CreateBillForm;
