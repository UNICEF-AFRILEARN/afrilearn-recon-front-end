import Image from "next/image";

// import styles from qui

const QuizInstruction = () => {
  const quizData = {
    heading: "Quiz:",
    topic: "Geometrical Construction (2):  Angles",
    name: "Feyikemi",
    subject: "Basic technology",
    instruction:
      "You are about to that a 10 question quiz to test how much you understand Geametrical Construction(2): Angles. ",
  };

  return (
    <>
      <div className="quizContainer">
        <div className="Image1" id="">
          <Image
            alt={"design image"}
            src={"/assets/img/common/login/HalfCircleBlackk.png"}
            width={86}
            height={200}
          />
        </div>
        <div className="image2"  id="">
          <Image
            alt={"design image"}
            src={"/assets/img/common/login/HalfCircleWhite.png"}
            width={150}
            height={90}
          />
        </div>
            <div id="quizSection">
            <div className="quizz">{quizData?.heading}</div>
          <div className="quizzTopic">{quizData?.topic}</div>
          <div className="quizImage"> </div>
          <div className="quizHelllo">
            <p>Hello {quizData.name} You have taken the right step </p>
          </div>
          <div className="quizSubject"> 
            Subject : <span className="instructionSubject"> {quizData.subject}</span>
          </div>
          <div className="row" id ="quizInstruction">
            <div className="col-md-3" id="instruction1"> Instructions:</div>
            <div className="col-md-9" id="instruction2">{quizData.instruction}</div>
          </div>
          <div className="quizGoodluck">No pressure! Take your time to answer the questions. Goodluck! <Image
            alt={"design image"}
            src={"/assets/img/common/quiz/goodluck.png"}
            width={35}
            height={31}
          /></div>
        <div className="buttonSection"><button>GET STARTED</button></div>  
   </div>
        <div className="image3">
          <Image
            alt={"design image"}
            src={"/assets/img/common/login/HalfCircleWhite.png"}
            width={150}
            height={90}
          />
        </div>
      </div>
    </>
  );
};
export default QuizInstruction;
