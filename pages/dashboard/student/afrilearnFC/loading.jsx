import { useEffect, useState } from "react";
import { Container, Row } from "react-bootstrap";
import { useRouter } from "next/router";
// import { setInterval } from "timers/promises";
// import { clearInterval } from "timers";

let counter = 0;
const loading = () => {
  const [timer, setfirstTimer] = useState(3);
  const router = useRouter();

  useEffect(() => {
    const timerfunc = setInterval(() => {
      setfirstTimer((timer) => timer - 1);
      console.log(timer);
    }, 1000);
    if (timer === 0) {
      router.push("afrilearnChallenge");
      clearInterval(timerfunc);
    }
    return () => {
      clearInterval(timerfunc);
    };
  }, [timer]);

  return (
    <Container
      fluid
      style={{
        background: "rgba(0, 0, 0, 0.89)",
        height: "100vh",
        width: "100vw",
        text: "center",
        display: "grid",
        justifyItems: "center",
        // alignItems: "center",
      }}
    >
      <Row>
        <p
          style={{
            fontWeight: "700",
            fontSize: "35px",
            color: "white",
            text: "center",
            width: "100%",
            display: "block",
            alignSelf: "end",
          }}
        >
          Brace Yourself for Battle!
        </p>
      </Row>
      <Row>
        <p
          style={{
            width: "100%",
            fontWeight: "700",
            color: "white",
            text: "center",
            display: "block",
            justifySelf: "center",
            fontSize: "120px",
          }}
        >
          {timer}
        </p>
      </Row>
    </Container>
  );
};

export default loading;
