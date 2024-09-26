import { Input, Form, FormGroup, Label, Button, Row, Col } from "reactstrap";
import { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import { createHotel } from "../../redux/hotelSlice";


function AddHotelForm() {
    const dispatch = useDispatch()

    const [newHotel, setNewHotel] = useState({
        name: '',
        location: '',
        city: 'HCM'
    });
    console.log(newHotel)
    const handleChange = (e) => {
        const { name, value } = e.target;
        setNewHotel((prev) => ({ ...prev, [name]: value }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        dispatch(createHotel(newHotel))
        window.location.reload()
    };


    return <div class="card">
        <div class="card-header pb-0">
            <div class="row">
                <div class="col-lg-6 col-7">
                    <h3>Add Hotel</h3>
                </div>
                <div class="col-lg-6 col-5 my-auto text-end">
                </div>
            </div>
        </div>
        <div class="card-body px-0 pb-2">
            <div class="table-responsive">
                <div class=" align-items-center mb-0" style={{ padding: '10px' }}>
                    <form onSubmit={handleSubmit}>
                        <FormGroup>
                            <Label for="nameHotel">
                                Name Hotel
                            </Label>
                            <Input
                                id="nameHotel"
                                name="name"
                                placeholder="Please enter Hotel'name here !"
                                type="text"
                                value={newHotel.name}
                                onChange={handleChange}
                                required
                            />
                        </FormGroup>
                        <FormGroup>
                            <Label for="locationHotel">
                                Location Hotel
                            </Label>
                            <Input
                                id="locationHotel"
                                name="location"
                                placeholder="Please enter location here !"
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
                                <option value="HCM">HCM</option>
                                <option value="HANOI">HANOI</option>
                            </Input>
                        </FormGroup>
                        <Button>
                            Submit
                        </Button>
                    </form>
                </div>
            </div>
        </div>
    </div>
}

export default AddHotelForm;