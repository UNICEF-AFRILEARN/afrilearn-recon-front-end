import { Form } from "react-bootstrap";
import { useRouter } from "next/router";
import Link from "next/link";
import styles from "./login.module.css";
import Image from "next/image";
import TextInput from "../../../widgets/appTextInput";
import AppButton from "../../../widgets/buttons/AppButton";
import React, { useState } from "react";
// import { API } from "../../../../pages/api/client-side/fetcher";

const Login = () => {
  // const dispatch = useDispatch();
  const loginDetails = [
    {
      id: "1",
      userName: "Kiyoonewton",
      email: "kiyoonewton41@gmail.com",
      password: "1234",
    },
  ];

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const router = useRouter();
  
  const signIn = (e) => {
    e.preventDefault();
    // console.log(email, password);
    // const log = loginDetails[0];
    // if (email === log.email && password === log.password) {
      router.push("/dashboard/student");
      // dispatch(getUsername(log.userName));
    // }
  };

  // const register = (e) => {
  //   e.preventDefault();
  //   alert(
  //     "you can only use 'kiyoonewton41@gmail.com' as email and '1234' as password "
  //   );

  // const userInfo = {};
  // const handleChange = (key, value) => (userInfo[key] = value);
  // const startLogin = () => {
  //   API.loginDefault(userInfo).then(
  //     ({ error, status, fieldsErrors, user, token }) => {
  //       status === "success" || 200
  //         ? console.log(
  //             `Login status\n ${status}\n`,
  //             `User Profile\n ${JSON.stringify(user, null, 2)}\n`,
  //             `Token\n ${token}`,
  //           )
  //         : console.log(
  //             `Login status\n ${status}\n`,
  //             `Error Message\n ${error}\n`,
  //             `Fields Errors\n ${fieldsErrors}`,
  //           );
  //     },
  //   );
  // };
  return (
    <>
      <div className={styles.floatImg1}>
        {/* <Image
          alt={"design image"}
          src={"/assets/img/common/login/HalfCircleBlack.png"}
          width={86}
          height={200}
          className={styles.floatImg13}
        /> */}
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
      <div className="container-fluid">
        <div className="row">
          <div className="logo-login-seg">
            {" "}
            <Image
              alt={"logo image"}
              src={"/assets/img/logo.PNG"}
              width={200}
              height={50}
            />{" "}
          </div>
          <div className="col-xs-0 col-md-1 col-lg-3"> </div>
          <div className="col-xs-12 col-md-10 col-lg-6">
            <span className={styles.card}>
              <h5 className={`center `} onClick={signIn}>
                LOG IN
              </h5>
              <form>
                <TextInput
                  type="text"
                  value={email}
                  onChange={(e) =>
                    setEmail(e.target.value )
                  }
                  title="Email"
                  placeholder="Email"
                  className={styles.pushDown}
                />
                <TextInput
                  type="password"
                  onChange={(e) =>
                    setPassword(e.target.value )
                  }
                  value={password}
                  title="Password"
                  placeholder="Password"
                />
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
                  <Link passHref href="#">
                    <AppButton
                      title="LOGIN"
                      onClick={signIn}
                      secondary
                      className={styles.pushDown13}
                    />
                  </Link>
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
              </form>
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
      </div>
    </>
  );
};

export default Login;
