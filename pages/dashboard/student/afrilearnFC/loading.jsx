import { Container, Row } from "react-bootstrap";

const loading = () => {
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
          3
        </p>
      </Row>
    </Container>
  );
};

export default loading;
