import Link from "next/link";
import styles from "./forgotPassword.module.css";
import Image from "next/image";
import { useDispatch, useSelector } from 'react-redux';
import { useRouter } from "next/router";
import React, { useState} from "react";
import Modal from 'react-bootstrap/Modal';
import { sendForgotpasswordemail } from "../../../../redux/actions/auth";

const Login = () => {
  const dispatch = useDispatch();
  const  {formPassword}  = useSelector((state) => state.auth);
  console.log( "reset user", formPassword)
  const [email, setEmail] = useState(" ");
  const [showresponse, setShowresponse] = useState(" ")
  const router = useRouter();
  const [show, setShow] = useState(false);
  const toggleModal = () => setShow(!show);
 
  const forgotPassword = (e) => {
    e.preventDefault();
     setShowresponse(formPassword)
    dispatch(sendForgotpasswordemail(email));
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
          <h2 className="centerr">RESET PASSWORD</h2>
          <h5>{showresponse}</h5>
          <p className="centerrr">
            Type your email address to send instructions to reset your password
            to your inbox
          </p>
          <form onSubmit={forgotPassword}>
            <input
              className={styles.Email}
              type="email"
              placeholder="Email"
              value={email}
              name="email"
              onChange={(e) => setEmail(e.target.value)}
              title="Email"
            />
            <div className={`row ${styles.primaryy}`}  >
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
      <h6>Password reset link has been sent to your email</h6>
      </Modal.Body>
    </Modal>
    </>
    
  );
};




export default Login;
