import Link from "next/link";
import React from "react";
import { Button, Col, Row } from "react-bootstrap";

const trial = () => {
  return (
    <Row className="get-trial pt-3">
      <Col className="get-trial-messege ms-5">
        <h2 className="mb-5">Get 15-day free trial</h2>
        <h4>
          <img
            alt={"design image"}
            src="/assets/img/Crown.png"
            width={34}
            height={28}
          />
          Afrilearn Pro
        </h4>

        <p>
          {" "}
          <strong>Everything in free plus: </strong>
        </p>

        <ul type="none">
          <li className="get-trial-list-check mt-3">Unlimited Video Lessons</li>
          <li className="get-trial-list-check mt-3"> Online Homework Help</li>
          <li className="get-trial-list-check mt-3">
            Solutions Review with a personalized lesson to practice your
            mistakes.
          </li>
          <li className="get-trial-list-check mt-3">
            Coding Classes (Including HTML, CSS and JavaScript)
          </li>
          <li className="get-trial-list-check mt-3">
            Languages Classes (Including Yoruba, Ibo etc)
          </li>
          <li className="get-trial-list-check mt-3"> Access to live tutors</li>
          <li className="get-trial-list-check mt-3">
            Students & teachers chat room
          </li>
          <li className="get-trial-list-check mt-3">No ads</li>
        </ul>

        <p>
          <strong>Cancel any time.</strong> We'll remind you 3 days before your
          trial ends.
        </p>
        <Link href='/payment'>
        <Button className="w-50">START FREE TRIAL</Button>
        </Link>
      </Col>
      <Col>
        <div className="get-trial-pic"></div>
      </Col>
    </Row>
  );
};

export default trial;
