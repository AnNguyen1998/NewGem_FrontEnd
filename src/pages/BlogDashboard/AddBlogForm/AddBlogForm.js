import { Input, Form, FormGroup, Label, Button, Row, Col } from "reactstrap";
import { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import { createRoom } from "../../../redux/roomSlice";


function AddBlogForm({ title }) {
    const dispatch = useDispatch()

    const [newRoom, setNewRoom] = useState({
        blogId: '',
        title: '',
        content: ""
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        // setNewRoom((prev) => ({ ...prev, hotelId: hotelId, [name]: value }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        dispatch(createRoom(newRoom))
        window.location.reload()
    };


    return <div class="card">
        <div class="card-header pb-0">
            <div class="row">
                <div class="col-lg-6 col-7">
                    <h3>Add A New Blog </h3>
                </div>
                <div class="col-lg-6 col-5 my-auto text-end">
                </div>
            </div>
        </div>
        <div class="card-body px-0 pb-2">
            <div class=" align-items-center mb-0" style={{ padding: '10px' }}>
                <form onSubmit={handleSubmit}>
                    <FormGroup>
                        <Label for="roomNumber"></Label>
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
                    <Button type="submit">Submit</Button>
                </form>
            </div>
        </div>
    </div>
}

export default AddBlogForm;