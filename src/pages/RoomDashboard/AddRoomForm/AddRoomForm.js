import { Input, Form, FormGroup, Label, Button, Row, Col, Modal, ModalHeader, ModalBody, ModalFooter } from "reactstrap";
import { useState, useEffect, useContext } from "react";
import { useDispatch, useSelector } from "react-redux";
import { createRoom, removeMessageError } from "../../../redux/roomSlice";
import { ToastContext, ToastTypes } from "../../../utils/ToastContext";

function AddRoomForm({ hotelId, hotelName }) {
    const dispatch = useDispatch();

    const [newRoom, setNewRoom] = useState({
        roomNumber: '',
        price: '',
        type: 'SINGLE',
        guests: '',
    });

    const [modalOpen, setModalOpen] = useState(false);

    const toggleModal = () => setModalOpen(!modalOpen);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setNewRoom((prev) => ({ ...prev, hotelId: hotelId, [name]: value }));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        dispatch(removeMessageError());
        await dispatch(createRoom(newRoom));
        setNewRoom({
            roomNumber: '',
            price: '',
            type: 'SINGLE',
            guests: '',
        });
    };

    function handleCancel(){
        toggleModal()
        window.location.reload()
    }

    return (
        <>
            <Button color="primary" onClick={toggleModal}>Add Room</Button>
            <Modal isOpen={modalOpen} toggle={toggleModal}>
                <ModalHeader toggle={toggleModal}>Add Room to {hotelName}</ModalHeader>
                <ModalBody>
                    <Form onSubmit={handleSubmit}>
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
                    </Form>
                </ModalBody>
            </Modal>
        </>
    );
}

export default AddRoomForm;
