import React, { useEffect, useState } from 'react';
import Header from '../../components/header/Header';
import Student from '../../components/student/Student';
import { Alert, Button, FormGroup, Input, Label, Modal, ModalBody, ModalFooter, ModalHeader } from 'reactstrap';
import { useDispatch, useSelector } from 'react-redux';
import { addNewStudent, resetStatusAndMessage } from "../../redux/studentSlice";
import { toast } from 'react-toastify';

export default function StudentPage() {
  const [modal, setModal] = useState(false);
  const [show,setShow]=useState(false)
  const [student, setStudent] = useState({
    ten: "Lê Mèo",
    thanhPho: "meo",
    xepLoai: "Giỏi",
    ngaySinh: "01-08-2000" // Initial format: DD-MM-YYYY
  });

  const {status,message, error}= useSelector(state => state.student);

  const dispatch = useDispatch();

  const toggle = () => 
  {
    setModal(!modal);
    if (modal) {
      // Reset errors when modal is closed
      dispatch(resetStatusAndMessage);
    }
  }

  const handle_add = () => {
    dispatch(addNewStudent(student));
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    if (name === 'ngaySinh') {
      setStudent(prevStudent => ({
        ...prevStudent,
        [name]: convertDateToDDMMYYYY(value)
      }));
    } else {
      setStudent(prevStudent => ({
        ...prevStudent,
        [name]: value
      }));
    }
  };

  const convertDateToYYYYMMDD = (date) => {
    const [day, month, year] = date.split('-');
    return `${year}-${month}-${day}`;
  };

  const convertDateToDDMMYYYY = (date) => {
    const [year, month, day] = date.split('-');
    return `${day}-${month}-${year}`;
  };


  useEffect(() => {
    if (status) {
      if (status === 200) {
        toast.success(message);
        setModal(false); // Close modal if success
      } else {
        toast.error(message);
      }
    }
  }, [status, message]);
  return (
    <div>
      <Header />
      <Button onClick={toggle} className='btn btn-success'>Add new student</Button>
      <h1>Student page</h1>
      <Student />
      <Modal isOpen={modal} toggle={toggle}>
      {error && (
                    <Alert color="danger">
                        <ul>
                            {error.map((error, index) => (
                                <li key={index}>{error}</li>
                            ))}
                        </ul>
                    </Alert>
                )}
        <ModalHeader toggle={toggle}>Add new student</ModalHeader>
        <ModalBody>
          <FormGroup>
            <Label for="ten">Họ tên</Label>
            <Input
              id="ten"
              name="ten"
              placeholder="Họ tên"
              type="text"
              value={student.ten}
              onChange={handleChange}
            />
          </FormGroup>
          <FormGroup>
            <Label for="thanhPho">Thành phố</Label>
            <Input
              id="thanhPho"
              name="thanhPho"
              placeholder="Thành phố"
              type="text"
              value={student.thanhPho}
              onChange={handleChange}
            />
          </FormGroup>
          <FormGroup>
            <Label for="xepLoai">Xếp loại</Label>
            <Input
              id="xepLoai"
              name="xepLoai"
              type="select"
              value={student.xepLoai}
              onChange={handleChange}
            >
              <option>Giỏi</option>
              <option>Khá</option>
              <option>Trung bình</option>
              <option>Yếu</option>
            </Input>
          </FormGroup>
          <FormGroup>
            <Label for="ngaySinh">Ngày sinh</Label>
            <Input
              id="ngaySinh"
              name="ngaySinh"
              type="date"
              value={convertDateToYYYYMMDD(student.ngaySinh)} // Convert date format for input
              onChange={handleChange}
            />
          </FormGroup>
        </ModalBody>
        <ModalFooter>
          <Button color="primary" onClick={handle_add}>
            Save
          </Button>{' '}
          <Button color="secondary" onClick={toggle}>
            Cancel
          </Button>
        </ModalFooter>
       
      </Modal>
    </div>
  );
}