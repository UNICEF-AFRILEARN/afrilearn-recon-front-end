import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Form, InputGroup } from "react-bootstrap";
import { useRouter } from "next/router";
import Link from "next/link";
import styles from "./login.module.css";
import Image from "next/image";
import AppButton from "../../../widgets/buttons/AppButton";
import { loginInitiate } from "../../../../redux/actions/auth";
import { signIn } from "next-auth/react";
import { AiFillEyeInvisible, AiFillEye } from "react-icons/ai";

const Login = () => {
  const dispatch = useDispatch();
  const { user, error } = useSelector((state) => state.auth);
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const [errorCheck, setErrorCheck] = useState("");

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const router = useRouter();

  // console.log("error", error.status);

  const handleSubmit = async (e) => {
    e.preventDefault();
    dispatch(loginInitiate(email, password));
    if (user) {
      await setShow(true);
    }
    if (!user) {
      await setShow(true);
    }
  };

  useEffect(() => {
    if (user?.user?.role === "5fd08fba50964811309722d5") {
      router.push("/dashboard/student");
    }
    if (user?.user?.role === "602f3ce39b146b3201c2dc1d") {
      router.push("/dashboard/teacher");
    }
    if (user?.user?.role === "602f3cf79b146b3201c2dc1e") {
      router.push("/dashboard/admin");
    }
    if (user?.user?.role === "606ed82e70f40e18e029165e") {
      router.push("/dashboard/parent");
    }
    if (user?.user?.role === "607ededa2712163504210684") {
      router.push("/school");
    }
  }, [user]);

  const [seen, setSeen] = useState(false);

  return (
    <>
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
      <div className="container-fluid">
        <div className="row">
          <div className="col-xs-0 col-md-1 col-lg-3"> </div>
          <div className="col-xs-12 col-md-10 col-lg-6">
            <span className={styles.card}>
              <h5 className={`center `}>LOG IN</h5>
              <Form onSubmit={signIn}>
                <InputGroup className="mb-3">
                  <InputGroup.Text id="basic-addon1">@</InputGroup.Text>
                  <Form.Control
                    placeholder="Email"
                    aria-label="Email"
                    aria-describedby="basic-addon1"
                    type="text"
                    value={email}
                    name="email"
                    onChange={(e) => setEmail(e.target.value)}
                    className="shadow-none"
                  />
                </InputGroup>
                <InputGroup className="mb-3">
                  <Form.Control
                    aria-label="password"
                    aria-describedby="basic-addon1"
                    type={seen ? "text" : "password"}
                    onChange={(e) => setPassword(e.target.value)}
                    value={password}
                    name="password"
                    title="Password"
                    placeholder="Password"
                    className="shadow-none"
                  />
                  <InputGroup.Text
                    id="basic-addon1"
                    onClick={() => setSeen(!seen)}
                  >
                    {seen ? <AiFillEyeInvisible /> : <AiFillEye />}
                  </InputGroup.Text>
                </InputGroup>

                <h5>{errorCheck}</h5>
                <div className={`row ${styles.pushDown1}`}>
                  <div className="col-6">
                    <Form.Check
                      type="checkbox"
                      id="remembeme"
                      label="Remember me"
                    />
                  </div>
                  <div className={`col-6 right ${styles.pushDown14}`}>
                    <Link passHref href="/reset-password">
                      Forgot Password?
                    </Link>
                  </div>
                </div>
                <div className={`row ${styles.pushDown1}`}>
                  <AppButton
                    title="LOGIN"
                    type="submit"
                    secondary
                    className={styles.pushDown13}
                  />
                </div>
                <div className={`row ${styles.pushDown1}`}>
                  <p className={`center ${styles.socialSection}`}>
                    <small>Or log in with</small>
                  </p>
                  <div className="col-6">
                    <span>
                      <Image
                        alt={"design image"}
                        src={"/assets/img/common/login/google.png"}
                        width={23}
                        height={23}
                      />{" "}
                      <span className={styles.socialText}>Google</span>
                    </span>
                  </div>
                  <div className="col-6 right">
                    <span>
                      <Image
                        alt={"design image"}
                        src={"/assets/img/common/login/facebook.png"}
                        width={23}
                        height={23}
                      />{" "}
                      <span className={styles.socialText}>Facebook</span>
                    </span>
                  </div>
                </div>
              </Form>
            </span>
            <p className={`center ${styles.afterSocialText}`}>
              New to Afrilearn?{" "}
              <Link passHref href="/register">
                <b>Sign Up</b>
              </Link>
            </p>
          </div>
          <div className="col-md-4"> </div>
        </div>
        <Loginalert
          handleClose={handleClose}
          handleShow={handleShow}
          show={show}
          error={error}
        />
      </div>
    </>
  );
};

export default Login;
