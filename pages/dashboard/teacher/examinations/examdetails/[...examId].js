import React, { useState, useEffect} from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useRouter } from 'next/router';
import { fetchSingleExamDetailsInitiate } from '../../../../../redux/actions/exams';

const ExamDetails = () => {
  const { user } = useSelector((state) => state.auth);
  const { singleExam } = useSelector((state) => state.myExams);
  const dispatch = useDispatch();
  const { query } = useRouter();

  console.log("user ===> from exam details", user)

  let examId = query?.examId
  let token = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJkYXRhIjp7ImlkIjoiNjJmNGFkOGM5OWJjNjgwMDE2NjE2NTFkIiwicm9sZSI6IjYwMmYzY2UzOWIxNDZiMzIwMWMyZGMxZCIsImZ1bGxOYW1lIjoiSm9obiBkb2UifSwiaWF0IjoxNjYwOTIxNTA2LCJleHAiOjE2NjM1MTM1MDZ9.W1wGGQk8UzNGZaMY7ccTZaXPUL9UlUrbqkIhnFGBu0c'

  //Convert minutes to hours:
  function displayHours(a){
    var hours = Math.trunc(a/60);
    var minutes = a % 60;
    return hours +"hours, "+ minutes + "minutes";
  }

  useEffect(() => {
    dispatch(fetchSingleExamDetailsInitiate(token, examId))
  }, [])

  return (
    <div>
      <div>
          <p>Exam title: { singleExam.exams.title}</p>
          <p>loremmddddddddddddddddddddddddddddddd</p>
          <p>loremmddddddddddddddddddddddddddddddd</p>
      </div>
      <div>
          token: {user.token} <br/>
          ExamDetails id: {examId}
      </div>
      <div>
          <p>Exam title: { singleExam.exams.title}</p>
          <p>Exam Type: {singleExam.exams.questionTypeId.name}</p>
          <p>Duration: {displayHours(singleExam.exams.duration)}</p>
          <p>{singleExam.exams.questionsCount} Student(s)</p>
      </div>
    </div>
  )
}

export default ExamDetails