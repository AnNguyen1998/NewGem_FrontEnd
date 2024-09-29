import { useEffect, useState, useContext } from "react";
import { Input, FormGroup, Label, Button, Modal, ModalHeader, ModalBody, ModalFooter } from "reactstrap";
import { useDispatch, useSelector } from "react-redux";
import { removeMessageError, updateHotel } from "../../redux/hotelSlice";

function UpdateHotelForm({ hotelId, updateItem }) {
    const dispatch = useDispatch();

    const [newHotel, setNewHotel] = useState({
        name: '',
        location: '',
        city: 'HCM',
    });

    const [isOpen, setIsOpen] = useState(false);

    useEffect(() => {
        if (updateItem) {
            setNewHotel({
                name: updateItem[hotelId]?.name || '',
                location: updateItem[hotelId]?.location || '',
                city: updateItem[hotelId]?.city || 'HCM',
            });
        }
    }, [hotelId, updateItem]);

    const toggleModal = () => setIsOpen(!isOpen);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setNewHotel((prev) => ({ ...prev, [name]: value }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        dispatch(updateHotel(newHotel));
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
                        <FormGroup>
                            <Label for="exampleSelect">City</Label>
                            <Input
                                id="exampleSelect"
                                name="city"
                                type="select"
                                value={newHotel.city}
                                onChange={handleChange}
                            >
                                <option value="HCM">HCM</option>
                                <option value="HANOI">HANOI</option>
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

export default UpdateHotelForm;
