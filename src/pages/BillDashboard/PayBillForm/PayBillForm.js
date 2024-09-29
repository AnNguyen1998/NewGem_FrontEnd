import React, { useState } from 'react';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter, Label, Input, FormGroup } from 'reactstrap';
import { useDispatch } from 'react-redux';
import { payBill, removeMessageError } from '../../../redux/billSlice';

function PayBillForm({ hotel, bill }) {
  const dispatch = useDispatch();
  const [modal, setModal] = useState(false);
  const [payRequest, setPayRequest] = useState({
    billId: null,
    receivedAmount: null,
    newFee: null,
    descriptions: []
  });

  const toggle = () => setModal(!modal);

  const handleChange = (e) => {
    const { name, value } = e.target;
    if (name === "description") {
      const descriptionsArray = value.split('\n');
      setPayRequest((prev) => ({ ...prev, billId: bill.billId, descriptions: descriptionsArray }));
    } else {
      setPayRequest((prev) => ({ ...prev, billId: bill.billId, [name]: value }));
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    dispatch(removeMessageError());
    await dispatch(payBill(payRequest));
    toggle();
    window.location.reload()
  };


  return (
    <div>
      <Button color="danger" onClick={toggle}>
        Pay invoice
      </Button>
      <Modal isOpen={modal} toggle={toggle}>
        <ModalHeader toggle={toggle}>Pay Invoice</ModalHeader>
        <ModalBody>
          <form onSubmit={handleSubmit}>
            <FormGroup>
              <Label for="receivedAmount">Receive Amount</Label>
              <Input
                id="receivedAmount"
                name="receivedAmount"
                placeholder="Please enter the received amount!"
                type="number"
                value={payRequest.receivedAmount}
                onChange={handleChange}
                required
              />
            </FormGroup>
            <FormGroup>
              <Label for="newFee">New Fee</Label>
              <Input
                id="newFee"
                name="newFee"
                placeholder="Please enter new fee!"
                type="number"
                value={payRequest.newFee}
                onChange={handleChange}
                required
              />
            </FormGroup>
            <FormGroup>
              <Label for="description">Descriptions</Label>
              <Input
                id="description"
                name="description"
                placeholder="Please enter the descriptions (one per line)"
                type="textarea"
                value={payRequest.descriptions.join('\n')}
                onChange={handleChange}
                required
              />
            </FormGroup>
          </form>
        </ModalBody>
        <ModalFooter>
          {!bill.paid &&<Button type="submit" onClick={handleSubmit}>Submit</Button>}
          <Button color="secondary" onClick={toggle}>
            Cancel
          </Button>
        </ModalFooter>
      </Modal>
    </div>
  );
}

export default PayBillForm;
