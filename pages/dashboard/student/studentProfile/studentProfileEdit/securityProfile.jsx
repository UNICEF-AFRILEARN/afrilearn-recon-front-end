import { Col, Container, Modal, Row } from "react-bootstrap";
import { useDispatch, useSelector } from 'react-redux';
import { useRouter } from "next/router";
import React, { useState} from "react";
import { changepasswordInitiate } from "../../../../../redux/actions/auth";


const SecurityProfile = () => {

  const [modalShow, setModalShow] = useState(false);
  const [password, setPassword] = useState(" ");
  const router = useRouter();
 
  const data={
    password: "bbbbbb"
  }
  const token = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJkYXRhIjp7ImlkIjoiNjJhMGJjOTg0YWYyZDkwMDE2YjcyMDk2Iiwicm9sZSI6IjVmZDA4ZmJhNTA5NjQ4MTEzMDk3MjJkNSIsImZ1bGxOYW1lIjoiTWljaGFlbCBPbGFkZWxlIn0sImlhdCI6MTY1OTYxNDI2NiwiZXhwIjoxNjYyMjA2MjY2fQ.x0H_plJQuRadJ1E_C4KNiM8JwK8Y-_CzWMWLa0HNdkA"
  const dispatch = useDispatch();
  const updatePassword = (e) => {
    e.preventDefault();
    console.log("Mike is a cool guy")
    dispatch(changepasswordInitiate(data,token));
  };

  return (
    <Container className="w-50 mx-auto">
      <Row className="mb-4">
        <Col className="pb-4">
          <Row className="d-flex justify-content-center pt-3">
            <Col md={2} className="ps-1">
              <p className="p-3">Password:</p>
            </Col>
            <form onSubmit={updatePassword}>
            <Col className="">
              <input
                btn-outline-light
                className="p-4"
                for="password"
                minLength={8}
                value={password}
                type="password"
                style={{
                  width: "100%",
                  height: "63px",
                  border: "1px solid #29465B",
                  borderRadius: "5px",
                }}
                onChange={(e) => setPassword(e.target.value)}
              />
            </Col>
            <Row className="d-flex justify-content-center pt-3 cursor-pointer">
        <button
          type = "submit"
            className="mx-auto mt-4"
              style={{
                marginLeft: "auto",
                textAlign: "center",
                color: "white",
                background: "#00D9B6",
                border:"1px solid white",
                borderRadius: "100px",
                width: "223px",
                height: "53px",
              }}
              
            >
              CHANGE PASSWORD
            </button>
      </Row>
            </form>
          </Row>
        </Col>
      </Row>
     
    </Container>
  );
};

// function MyVerticallyCenteredModal(props) {

//   const dispatch = useDispatch();
//   const  {formConfirmPassword}  = useSelector((state) => state.auth);
//   console.log( "reset user", formConfirmPassword)
//   const [showresponse, setShowresponse] = useState(" ");
//   const [password, setPassword] = useState(" ");
//   const [email, setEmail] = useState(" ");
//   const router = useRouter();
//   const [show, setShow] = useState(false);
  
 
//   const changePasword = (e) => {
//     e.preventDefault();
//      setShowresponse(formConfirmPassword)
//     dispatch(sendChangepasswordemail(email, password));
   
//   };

//   return (
//     <form onSubmit={changePasword}>
//       <Modal
//       {...props}
//       size="lg"
//       aria-labelledby="contained-modal-title-vcenter"
//       centered
//     >
//       <Modal.Header>
//         <Modal.Title id="contained-modal-title-vcenter">
//           Reset Password
//         </Modal.Title>
//       </Modal.Header>
//       <Row className="px-5 pt-4">
//         <Col md={2} className="ps-1">
//           <p className="p-3">Email:</p>
//         </Col>
//         <Col className="">
//           <input
//             btn-outline-light
//             className="p-4"
//             minLength={8}
//             type="email"
//             style={{
//               width: "100%",
//               height: "63px",
//               border: "1px solid #29465B",
//               borderRadius: "5px",
//               value: {email}
//             }}
//             onChange= {(e) => setEmail(e.target.value)}
//           />
//         </Col>
//       </Row>
//       <Row className="px-5 ">
//         <Col md={2} className="ps-1">
//           <p className="p-3">New Password:</p>
//         </Col>
//         <Col className="">
//           <input
//             btn-outline-light
//             className="p-4"
//             minLength={8}
//             type="password"
//             style={{
//               width: "100%",
//               height: "63px",
//               border: "1px solid #29465B",
//               borderRadius: "5px",
//               value:{password},
             
//             }}
//             onChange= {(e) => setPassword(e.target.value)}
//           />
//         </Col>
//       </Row>
//       {/* <Row className="px-5">
//         <Col md={2} className="ps-1">
//           <p className="p-3">Confirm Password:</p>
//         </Col>
//         <Col className="">
//           <input
//             btn-outline-light
//             className="p-4"
//             minLength={8}
//             type="password"
//             style={{
//               width: "100%",
//               height: "63px",
//               border: "1px solid #29465B",
//               borderRadius: "5px",
//               value:{confirmpassword}
//             }}
//             onChange={(e) => setComfirmpassword(e.target.value)}
            
//           />
//         </Col>
//       </Row> */}
//       <Row>
//       <Col>
//         <button
//         type = "submit"
//             className="mx-auto mt-4"
//               style={{
//                 marginLeft: "auto",
//                 textAlign: "center",
//                 color: "white",
//                 background: "#00D9B6",
//                 border:"1px solid white",
//                 borderRadius: "100px",
//                 width: "223px",
//                 height: "53px",
//               }}
              
//             >
//               SAVE CHANGES
//             </button>
//           </Col>
//       </Row>
//     </Modal>
//     </form>
    
//   );
// }

export default SecurityProfile;
