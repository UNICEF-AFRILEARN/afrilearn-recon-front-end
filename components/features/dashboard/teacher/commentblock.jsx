import React, { useState, useEffect} from 'react';
import { useSelector, useDispatch } from 'react-redux';
import Image from "next/image";
import Link from "next/link";
import { Col, Container, Row } from "react-bootstrap";
import PastQuestion from "../student/extra/PastQuestion";
import Subjects from "../student/extra/subjects";
import { AiOutlineSend } from 'react-icons/ai';
import styles1 from "../student/student.module.css";
import styles from "../student/studentProfile/studentProfile.module.css";
import styles2 from "../../../../pages/dashboard/teacher/teacher.module.css";
import { fetchSubjectsInitiate } from '../../../../redux/actions/subjects';
import { 
  makeAnnouncementInitiate, 
  fetchAnnouncementInitiate,
  addCommentToTeacherAnnouncementInitiate
} from '../../../../redux/actions/classes';

const CommentBlock = ({announceMessage}) => {
    const { classAnnouncement, announcementComment} = useSelector((state) => state.schoolClasses);
    const dispatch = useDispatch();
    const [text, setText] = useState("");
    const { user } = useSelector((state) => state.auth);

    let token = user?.token;
    let classId = user?.user?.classOwnership[0]?.enrolledCourse?.classId
    console.log("announcementComment =====>", classAnnouncement)

    const handleCommentSubmit = (announcementId) => {
        dispatch(addCommentToTeacherAnnouncementInitiate(announcementId, text, token))
        // window.location.reload();
    }

    useEffect(() => {
        dispatch(fetchAnnouncementInitiate(classId))
    }, [])

    return (
        <Row className="border-top pb-6"
        >
          <Row>
            <Col className="p-0 ps-5 mt-4">
              <Image
                alt={"assign content placeholder"}
                src={`/assets/img/features/dashboard/teacher/teacherPix.png`}
                width={46}
                height={45}
              />
            </Col>
            <Col className="mt-4" md={10}>
            <div class="input-group mb-3 w-50">
              <input 
              type="text" 
              class="form-control" 
              placeholder="Add class comment"
              value={text}
              onChange={(e) => setText(e.target.value)}
              />
              <button 
              onClick={() => handleCommentSubmit(announceMessage.id)}
              class="btn btn-outline-secondary" type="button" id="button-addon2"><AiOutlineSend /></button>
             </div>
            </Col>
            <Col md={1}>
            </Col>
          </Row>
            
        </Row>
    )
}

export default CommentBlock;

