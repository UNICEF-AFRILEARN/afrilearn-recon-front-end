import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import {AiOutlineExclamationCircle } from 'react-icons/ai'

const UnlinkChildModal = (props) =>  {
  return (
    <Modal
      {...props}
      size="md"
      aria-labelledby="contained-modal-title-vcenter"
      centered
      className='text-center p-5'
    >
      <Modal.Body className='text-center'>
          <AiOutlineExclamationCircle 
          color='red'
          size={150}
          />
        <h4>Are you sure?</h4>
        <p>
          Do you want to unlink this child account?
        </p>
      </Modal.Body>
      <Modal.Body className='d-flex justify-center'>
        <Button 
         onClick={() => {props.clickUnlinkChild(), props.onHide()}}
         className='w-25 mx-5' 
        >Yes</Button>
        <Button className='w-25 mx-5' onClick={props.onHide}>No</Button>
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