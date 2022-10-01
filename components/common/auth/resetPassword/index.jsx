import Link from "next/link";
import styles from "../forgotPassword/forgotPassword.module.css";
import Image from "next/image";
import { useDispatch, useSelector } from 'react-redux';
// import { useRouter } from "next/router";
import React, { useState} from "react";
import Modal from 'react-bootstrap/Modal';
import { sendChangepasswordemail } from "../../../../redux/actions/auth";

const ResetPassword = () => {
  const dispatch = useDispatch();
  const  {formConfirmPassword}  = useSelector((state) => state.auth);
  console.log( "reset user", formConfirmPassword)
  const [password, setPassword] = useState(" ");
  const [email, setEmail] = useState(" ");
  // const [showresponse, setShowresponse] = useState(" ")
  // const router = useRouter();
  const [show, setShow] = useState(false);
  const toggleModal = () => setShow(!show);
 
  const changePasword = (e) => {
    e.preventDefault();
     setShowresponse(formConfirmPassword)
    dispatch(sendChangepasswordemail(email, password));
   
  };

  return (
    <>
      <div className={styles.floatImg1}>
        <Image
          alt={"design image"}
          src={"/assets/img/common/login/HalfCircleBlackk.png"}
          width={86}
          height={200}
        />
      </div>
      <div className={styles.floatImg2}>
        <Image
          alt={"design image"}
          src={"/assets/img/common/login/HalfCircleWhite.png"}
          width={150}
          height={90}
        />
      </div>
      <div className={styles.floatImg3}>
        <Image
          alt={"design image"}
          src={"/assets/img/common/login/HalfCircleWhite.png"}
          width={150}
          height={90}
        />
      </div>
      <div className="row">
        <div className={`col-md-4 ${styles.resetContainer}`}>
          <h2 className="centerr">CHANGE PASSWORD</h2>
          <p className="centerrr">
          Please input your new password below
          </p>
          <form onSubmit={changePasword}>
            <input
              className={styles.Email}
              type="email"
              placeholder="Email"
              name="email"
              title="Email"
              onChange={(e) => setEmail(e.target.value)}

            />
             <input
              className={styles.Email}
              type="password"
              placeholder="Comfirm password"
              onChange={(e) => setPassword(e.target.value)}
            />
            <div className={`row ${styles.primaryy}`} >
              <button type="submit" onClick={toggleModal} >
                RESET PASSWORD
              </button>
            </div>
          </form>
        </div>
        <div>
          <p className={`center ${styles.afterSocialText}`}>
            Back to{" "}
            <Link passHref href="/login" >
              <b>Log In</b>
            </Link>
          </p>{" "}
        </div>
      </div>
      
      <Modal
    size="md"
    centered
    show={show}
    onHide={toggleModal}
    >
      <Modal.Body>
      <h6>Password changed successfully</h6>
      </Modal.Body>
    </Modal>
    </>
    
  );
};




export default ResetPassword;
