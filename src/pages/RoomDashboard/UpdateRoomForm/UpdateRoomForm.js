import { useEffect, useState } from "react";
import { Input, Col, FormGroup, Row, Label, Button, Modal, ModalHeader, ModalBody, ModalFooter } from "reactstrap";
import { useDispatch } from "react-redux";
import { updateRoom, removeMessageError } from "../../../redux/roomSlice";

function UpdateRoomForm({ hotelId, updateItem }) {
  const dispatch = useDispatch();

  const [newRoom, setNewRoom] = useState({
    roomNumber: '',
    price: '',
    type: 'SINGLE',
    guests: '',
  });

  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    if (updateItem) {
      setNewRoom({
        roomId: updateItem.roomId,
        hotelId: hotelId,
        roomNumber: updateItem.roomNumber,
        price: updateItem.price,
        type: updateItem.type,
        guests: updateItem.guests,
      });
    }
  }, [updateItem]);

  const toggleModal = () => setIsOpen(!isOpen);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setNewRoom((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    dispatch(removeMessageError());
    await dispatch(updateRoom(newRoom));
  };

  function handleCancel(){
    toggleModal()
    window.location.reload()
  }

  return (
    <>
      <Button color="warning" onClick={toggleModal}>
        Update
      </Button>
      <Modal isOpen={isOpen} toggle={toggleModal}>
        <ModalHeader toggle={toggleModal}>Update Room {updateItem.roomNumber}</ModalHeader>
        <ModalBody>
          <form onSubmit={handleSubmit}>
            <FormGroup>
              <Label for="roomNumber">Room Number</Label>
              <Input
                id="roomNumber"
                name="roomNumber"
                placeholder="Please enter room number here!"
                type="text"
                value={newRoom.roomNumber}
                onChange={handleChange}
                required
              />
            </FormGroup>
            <FormGroup>
              <Label for="price">Room Price</Label>
              <Input
                id="price"
                name="price"
                placeholder="Please enter new price here!"
                type="text"
                value={newRoom.price}
                onChange={handleChange}
                required
              />
            </FormGroup>
            <FormGroup>
              <Label for="roomType">Room Type</Label>
              <Input
                id="roomType"
                name="type"
                type="select"
                value={newRoom.type}
                onChange={handleChange}
              >
                <option value="SINGLE">SINGLE</option>
                <option value="DOUBLE">DOUBLE</option>
                <option value="VIP">VIP</option>
              </Input>
            </FormGroup>
            <Row>
              <Col>
                <FormGroup>
                  <Label for="guests">Number of Guests</Label>
                  <Input
                    id="guests"
                    name="guests"
                    placeholder="Please enter number of guests!"
                    type="text"
                    value={newRoom.guests}
                    onChange={handleChange}
                    required
                  />
                </FormGroup>
              </Col>
            </Row>
            <ModalFooter>
              <Button type="submit" color="primary">Submit</Button>
              <Button color="secondary" onClick={handleCancel}>Cancel</Button>
            </ModalFooter>
          </form>
        </ModalBody>
      </Modal>
    </>
  );
}

export default UpdateRoomForm;
