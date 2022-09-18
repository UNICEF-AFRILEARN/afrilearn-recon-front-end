import * as React from "react";
import { useRouter } from "next/router";
import { ExamQuestionPassage } from "../../../components/features/dashboard/student/pastQuestion/pastquestionPage/pastExamQue";
import { useSelector } from "react-redux";

const QuizPage = () => {
  const router = useRouter();
  const subject = useSelector((state) => state.mySubjectCourse);
  let quary = router.query[0];
  const lessons = subject.subjectDetails[1]?.relatedLessons.filter(
    (data) => data.id === quary,
  );
  const sub_data = {
    questions: lessons && lessons[0]?.questions,
    quizLessonId: lessons && lessons[0]?.id,
    subject: subject?.subjectDetails[0]?.subject.mainSubjectId.name,
    year: "",
    duration: false,
    questionNo: lessons && lessons[0]?.questions.length,
    questionId: subject?.pastQuestionQue[0]?.question_id,
    title: subject?.pastQuestionQue[0]?.title,
    subjectName: subject?.pastQuestionQue[0]?.question_id,
    motivation: subject?.pastQuestionQue[0]?.motivations,
  };
  return <ExamQuestionPassage sub_dat={sub_data} />;
};

export default QuizPage;
// questions: subject.pastQuestionQue[0]?.questions,
//     subject: subject.pastQuestionQue[0]?.subject_details.subject,
//     year: subject.pastQuestionQue[0]?.subject_details.exam_year,
//     duration: subject.pastQuestionQue[0]?.subject_details.duration,
//     questionNo: subject.pastQuestionQue[0]?.subject_details.no_of_questions,
//     questionId: subject.pastQuestionQue[0]?.question_id,
//     motivation: subject.pastQuestionQue[0]?.motivations,
