import Head from 'next/head'
import { Button, Col, Modal, Row } from 'react-bootstrap'
import styles1 from '../../../../../components/features/dashboard/student/student.module.css'
import styles from './studentProfileEdit.module.css'
import ProfileEdit from './profileEdit'
import Image from 'next/image'
import { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { updateProfilePicture } from '../../../../../redux/actions/subject'
import Swal from 'sweetalert2'
import { useRouter } from 'next/router'

const StudentProfileEdit = () => {
  const { user } = useSelector((state) => state.auth)
  const [modalShow, setModalShow] = useState(false)
  const router = useRouter()

  const { changeProfilePix } = useSelector((state) => state.mySubjectCourse)

  function MyVerticallyCenteredModal(props) {
    const handleClosure = async () => {
      Swal.fire({
        text: 'You will be required to login again',
        icon: 'warning',
        // showCancelButton: true,
        confirmButtonText: 'OK',
      }).then((result) => {
        if (result.value) {
          Swal.fire(
            'Submitted!',
            'Your test details are been recorded.',
            'success'
          )

          const data = new FormData()
          data.append('profilePhotoUrl', profilePix)
          dispatch(updateProfilePicture(data, token))

          router.push({
            pathname: '/login',
          })
        }
      })
    }
    const [profilePix, setProfilePix] = useState('')
    const dispatch = useDispatch()

    const token = user?.token

    return (
      <Modal
        {...props}
        size="md"
        aria-labelledby="contained-modal-title-vcenter"
        centered
      >
        <Modal.Header closeButton></Modal.Header>
        <Modal.Body>
          <Row>
            <Col md={10}>
              <input
                type="file"
                id="inputGroupFile01"
                className="pointer"
                onChange={(e) => {
                  setProfilePix(e.target.files[0])
                }}
              />
            </Col>
            <Col md={2}>
              <Button
                onClick={() => {
                  setModalShow(false)
                  handleClosure()
                }}
              >
                Done
              </Button>
            </Col>
          </Row>
        </Modal.Body>
      </Modal>
    )
  }

  return (
    <div>
      <Head>
        <title>ProfileEdit | Myafrilearn.com</title>
        <meta
          name="description"
          content="Afrilearn is on a mission to provide affordable, world-class education for Africans, anywhere."
        />
      </Head>
      <div
        className={`container-fluid relative ${styles1.dashboardFirstSection2}`}
        style={{ position: 'relative' }}
      ></div>
      <Row
        style={{
          position: 'absolute',
          bottom: '33%',
          width: '100%',
          zIndex: '3',
        }}
      ></Row>
      <Row>
        <Col className={`m-auto`}>
          <div className={`m-auto ${styles.studentProfileAvatar}`}>
            <Image
              alt={'afrilearn user-avatar'}
              src={
                changeProfilePix.length !== 0
                  ? changeProfilePix
                  : user?.user?.profilePhotoUrl
                  ? user?.user?.profilePhotoUrl
                  : `/assets/img/features/dashboard/student/person_2 1.png`
              }
              width={174}
              height={174}
              style={{ borderRadius: '87px' }}
            />
            <div className={`m-auto ${styles.studentProfileAvatar3}`}>
              <div
                onClick={() => setModalShow(true)}
                className={`m-auto pointer ${styles.studentProfileAvatar4}`}
              ></div>
            </div>
          </div>
        </Col>
        <MyVerticallyCenteredModal
          show={modalShow}
          onHide={() => setModalShow(false)}
        />
      </Row>
      <Row>
        <ProfileEdit />
      </Row>
    </div>
  )
}

export default StudentProfileEdit
