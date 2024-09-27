import { Input, Form, FormGroup, Label, Button, Row, Col } from "reactstrap";
import { useState, useEffect, useContext } from "react";
import { useDispatch, useSelector } from "react-redux";
import { removeMessageError, updateHotel } from "../../redux/hotelSlice";
import { ToastContext, ToastTypes } from "../../utils/ToastContext";


function UpdateHotelForm({ hotelId, updateItem }) {
    const dispatch = useDispatch()
    const { showToast } = useContext(ToastContext)
    const {errors, status, message} = useSelector(state=>state.hotel)
    console.log("status: " + status)
    useEffect(()=>{
        if (status !== 201){
            console.log(status + "aaa")
            showToast(errors || message ,ToastTypes.ERROR)
        }
        dispatch(removeMessageError())
    },[status])

    const [newHotel, setNewHotel] = useState({
        name: '',
        location: '',
        city: 'HCM',
    });
    console.log(newHotel)
    useEffect(() => {
        if (updateItem) {
            setNewHotel({
                name: updateItem[hotelId]?.name,
                location: updateItem[hotelId]?.location,
                city: updateItem[hotelId]?.city,
                id: updateItem[hotelId]?.hotelId
            });
        }
    }, [hotelId]);
    const handleChange = (e) => {
        const { name, value } = e.target;
        setNewHotel((prev) => ({ ...prev, [name]: value }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        dispatch(updateHotel(newHotel))
       // window.location.reload()
    };


    return <div>
        <div class="card-header pb-0">
            <div class="row">
                <div class="col-lg-6 col-7">
                    <h3>Update Hotel</h3>
                </div>
                <div class="col-lg-6 col-5 my-auto text-end">
                </div>
            </div>
        </div>
        <div class="card-body px-0 pb-2">
            <div>
                <div class=" align-items-center mb-0" style={{ padding: '10px' }}>
                    <form onSubmit={handleSubmit}>
                        <FormGroup>
                            <Label for="nameHotel">
                                Hotel's Name
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
                                Location
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
                            <Label for="exampleSelect">
                                City
                            </Label>
                            <Input
                                id="exampleSelect"
                                name="city"
                                type="select"
                                value={newHotel.city}
                                onChange={handleChange}
                            >
                                <option value="HCM">
                                    HCM
                                </option>
                                <option value="HANOI">
                                    HANOI
                                </option>
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

export default UpdateHotelForm;