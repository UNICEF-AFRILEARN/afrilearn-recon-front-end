import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import {AiOutlineExclamationCircle } from 'react-icons/ai'

const UnlinkChildModal = (props) =>  {

  console.log("props ===>", props.userId)
  return (
    <Modal
      {...props}
      size="md"
      aria-labelledby="contained-modal-title-vcenter"
      centered
      className='text-center p-5'
    >
      <Modal.Body className='text-center'>
          {props.userId &&
            <AiOutlineExclamationCircle 
          color='red'
          size={150}
          />
          }
        {props.userId !== ''? 
        <>
          <h4>Are you sure?</h4>
        <p>
          Do you want to unlink this child account?
        </p>
        </> : <p>No child is selected</p>
        }
      </Modal.Body>
      <Modal.Body className='d-flex justify-center'>
        {props.userId !== ''? 
        <div className="d-flex align-items-center justify-content-center w-100 ">
          <Button 
         onClick={() => {props.clickUnlinkChild(), props.onHide()}}
         className='w-25 mx-5' 
        >Yes</Button>
        <Button className='w-25 mx-5' onClick={props.onHide}>No</Button>
        </div>:  
        <div className="d-flex align-items-center justify-content-center w-100">
          <Button className='w-25 mx-5' onClick={props.onHide}>Ok</Button>
        </div>
        }
      </Modal.Body>
    </Modal>
  );
}


export default UnlinkChildModal;

// function App() {
//   const [modalShow, setModalShow] = React.useState(false);

//   return (
//     <>
//       <Button variant="primary" onClick={() => setModalShow(true)}>
//         Launch vertically centered modal
//       </Button>

//       <MyVerticallyCenteredModal
//         show={modalShow}
//         onHide={() => setModalShow(false)}
//       />
//     </>
//   );
// }

// render(<App />);