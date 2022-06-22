import QuizInstruction from "./extra/quizInstruction";
import QuizPage from "./extra/quizPage";
import QuizResult from "./extra/quizResult";
import QuizReview from "./extra/quizReview";
import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
// import QuizPage from "./extra/quizPage";



const Quiz = () => {
    return (
        <>
        <QuizInstruction/>
        {/* <Router>
        <Switch>
          <Route path="/quizinstruction">
          <QuizInstruction/>
          </Route>
          <Route path="/quizPage">
          <QuizPage/>
          </Route>
          <Route path="quizResult">
          <QuizResult/>
          </Route>
          <Route path="quizReview">
          <QuizReview/>  
          </Route>
        </Switch>
        </Router> */}




</>
        )
}
export default Quiz;