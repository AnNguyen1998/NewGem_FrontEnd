import { useEffect, useState } from "react";
import { Input, FormGroup, Label, Button, Modal, ModalHeader, ModalBody, ModalFooter } from "reactstrap";
import { useDispatch } from "react-redux";
import { removeMessageError, updateHotel } from "../../redux/hotelSlice";

function UpdateHotelForm({ hotelId, hotel }) {
    const dispatch = useDispatch();

    const [newHotel, setNewHotel] = useState({
        name: hotel.name,
        location: hotel.location,
        city: hotel.city,
        id: hotelId,
    });

    const [isOpen, setIsOpen] = useState(false);

    const toggleModal = () => setIsOpen(!isOpen);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setNewHotel((prev) => ({ ...prev, [name]: value }));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        dispatch(removeMessageError(``))
        await dispatch(updateHotel({ hotelId, ...newHotel }))
    };

    const handleCancel = () => {
        toggleModal();
        window.location.reload()
    };

    return (
        <>
            <Button color="warning" onClick={toggleModal}>
                Update
            </Button>
            <Modal isOpen={isOpen} toggle={toggleModal}>
                <ModalHeader toggle={toggleModal}>Update Hotel</ModalHeader>
                <ModalBody>
                    <form onSubmit={handleSubmit}>
                        <FormGroup>
                            <Label for="nameHotel">Hotel's Name</Label>
                            <Input
                                id="nameHotel"
                                name="name"
                                placeholder="Please enter hotel's name here!"
                                type="text"
                                value={newHotel.name}
                                onChange={handleChange}
                                required
                            />
                        </FormGroup>
                        <FormGroup>
                            <Label for="locationHotel">Location</Label>
                            <Input
                                id="locationHotel"
                                name="location"
                                placeholder="Please enter location here!"
                                type="text"
                                value={newHotel.location}
                                onChange={handleChange}
                                required
                            />
                        </FormGroup>
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

export default UpdateHotelForm;
