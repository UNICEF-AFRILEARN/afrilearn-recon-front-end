import { useState } from 'react'
import { Modal, Button } from 'react-bootstrap'
import Image from 'next/image'
import { toProperCase, cutString } from '../../../../utils/helper'
import styles from './../homepage.module.css'

const ExploreVideoBox = ({ data }) => {
  const [show, setShow] = useState(false)
  const toggleModal = () => setShow(!show)
  return (
    <>
      <div
        className="col-lg-3 col-md-6 relative video-corrected-responsive"
        onClick={toggleModal}
      >
        <Image
          alt={'afrilearn marketing video'}
          src={data?.thumbnailUrl}
          width={303}
          height={150}
        />
        <span>
          {data?.subject}
          <hr />
          <small>
            {data?.class} ||{' '}
            {data && data.title
              ? toProperCase(cutString(data.title, 20))
              : null}
          </small>
        </span>
      </div>
      <Modal
        show={show}
        onHide={toggleModal}
        backdrop="static"
        keyboard={false}
        size="lg"
        aria-labelledby="contained-modal-title-vcenter"
        centered
        className={styles.trendingModalClass}
      >
        {/* <div className={styles.videoPlaying}> */}
        <Modal.Header
          closeButton
          className={`p-0 border-none headedHeader`}
          style={{ borderBottom: 'none' }}
          // style={{ position: 'absolute', top: '20px', right: '20px' }}
        >
          <video
            src={data?.videoUrl}
            width="100%"
            height="auto"
            controls
            autoPlay
            style={{ borderRadius: '6px' }}
          />
        </Modal.Header>

        {/* </div> */}
      </Modal>
    </>
  )
}

export default ExploreVideoBox
