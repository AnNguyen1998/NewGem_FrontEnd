import { Input, FormGroup, Label, Button, Modal, ModalHeader, ModalBody, ModalFooter } from "reactstrap";
import { useState, useEffect, useContext } from "react";
import { useDispatch, useSelector } from "react-redux";
import { createHotel, removeMessageError } from "../../redux/hotelSlice";
import { ToastContext, ToastTypes } from "../../utils/ToastContext";

function AddHotelForm() {
    const dispatch = useDispatch();
    const { showToast } = useContext(ToastContext);
    const { errors, status, message } = useSelector(state => state.hotel);
    const [isOpen, setIsOpen] = useState(false);
    const [newHotel, setNewHotel] = useState({
        name: '',
        location: '',
        city: 'HCM'
    });

    const toggleModal = () => setIsOpen(!isOpen);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setNewHotel((prev) => ({ ...prev, [name]: value }));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        dispatch(removeMessageError())
        await dispatch(createHotel(newHotel));
        setNewHotel({
            name: '',
            location: '',
            city: 'HCM'
        })
    };

    function handleCancel() {
        toggleModal()
        window.location.reload()
    }


    return (
        <>
            <Button color="primary" onClick={toggleModal}>
                Add Hotel
            </Button>
            <Modal isOpen={isOpen} toggle={toggleModal}>
                <ModalHeader toggle={toggleModal}>Add Hotel</ModalHeader>
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
                        <FormGroup>
                            <Label for="hotelCity">City</Label>
                            <Input
                                id="hotelCity"
                                name="city"
                                type="select"
                                value={newHotel.city}
                                onChange={handleChange}
                            >
                                <option value="HCM">Ho Chi Minh City</option>
                                <option value="HANOI">Ha Noi</option>
                            </Input>
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

export default AddHotelForm;
