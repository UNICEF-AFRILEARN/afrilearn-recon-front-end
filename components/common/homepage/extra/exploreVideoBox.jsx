import { useState } from 'react';
import { Modal, Button } from 'react-bootstrap'
import Image from 'next/image';
import { toProperCase, cutString } from '../../../../utils/helper';
import styles from './../homepage.module.css';

const ExploreVideoBox = ({ data }) => {
  const [show, setShow] = useState(false);
  const toggleModal = () => setShow(!show);
 
  return (
    <>
      <div className="col-md-3 relative" onClick={toggleModal}>
        <Image alt={"afrilearn marketing video"} src={data?.thumbnailUrl} layout='fill' />
        <span>
          {data?.subject}
          <hr />
          <small>{data?.class} || {data && data.title ? toProperCase(cutString(data.title, 20)) : null}</small>
        </span>
      </div>
      <Modal
        show={show}
        onHide={toggleModal}
        backdrop="static"
        keyboard={false}
        className={styles.trendingModalClass}
      >
        <Modal.Header closeButton>
          <Modal.Title>Modal title</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          I will not close if you click outside me. Don not even try to press
          escape key.
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={toggleModal}>
            Close
          </Button>
          <Button variant="primary">Understood</Button>
        </Modal.Footer>
      </Modal>
    </>
  )
}

export default ExploreVideoBox
