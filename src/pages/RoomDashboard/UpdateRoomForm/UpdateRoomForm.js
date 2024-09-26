import { useEffect, useState } from "react";
import { Input, Col, FormGroup, Row, Label, Button } from "reactstrap";
import { useDispatch } from "react-redux";
import { updateRoom } from "../../../redux/roomSlice";

function UpdateRoomForm({ hotelId, updateItem }) {
  const dispatch = useDispatch()

  const [newRoom, setNewRoom] = useState({
    roomNumber: '',
    price: '',
    type: 'SINGLE',
    guests: '',
  });


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

  const handleChange = (e) => {
    const { name, value } = e.target;
    setNewRoom((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(updateRoom(newRoom))
    window.location.reload()
  };

  return (
    <div className="card" id="update">
      <div className="card-header pb-0">
        <div className="row">
          <div className="col-lg-6 col-7">
            <h3>Update Room</h3>
          </div>
        </div>
      </div>
      <div className="card-body px-0 pb-2">
        <div style={{ padding: "10px" }}>
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
            <Button type="submit">Submit</Button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default UpdateRoomForm;
