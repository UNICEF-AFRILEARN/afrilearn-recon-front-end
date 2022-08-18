import * as React from "react";
import { useRouter } from "next/router";
import { ExamQuestionPassage } from "../../../components/features/dashboard/student/pastQuestion/pastquestionPage/pastExamQue";
import { useSelector } from "react-redux";

const QuizPage = () => {
  const router = useRouter();
  const subject = useSelector((state) => state.mySubjectCourse);
  let quary = router.query.Exam;
  console.log(quary);
  const lessons = subject.subjectDetails[1]?.relatedLessons;
  console.log(subject);
  const sub_data = {
    questions: lessons[quary]?.questions,
    subject: subject.subjectDetails[0].subject.mainSubjectId.name,
    year: "",
  };
  return <ExamQuestionPassage sub_dat={sub_data} />;
};

export default QuizPage;
