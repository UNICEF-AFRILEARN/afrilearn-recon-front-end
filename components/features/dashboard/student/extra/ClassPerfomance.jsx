import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import styles from "../../../../../styles/performance.module.css";
import { FiCheckCircle } from "react-icons/fi";
import { AiOutlineExclamationCircle } from "react-icons/ai";
import { MdLocationOn } from "react-icons/md";
import { FaRegCheckCircle } from "react-icons/fa";
import Spinner from "../../../../widgets/spinner";
import Barchart from "../../../../../pages/dashboard/performance/barchart";
import Piechart from "../../../../../pages/dashboard/performance/piechart";
import OverallChart from "../../../../../pages/dashboard/performance/overallbarchart";
import Pastquestionchart from "../../../../../pages/dashboard/performance/pastquestionchart";
// import BarChartSect from './BarChartSect';
// import PieChartSection from './PieChartSection';

const ClassPerfomance = ({
  currentStudent,
  classDetails,
  studentPerformance,
  classPerformance,
}) => {
  const { user } = useSelector((state) => state.auth);
  let pastQuestionPerformance = classPerformance?.data?.examsList;
  let subjectPerformance = classPerformance?.data?.subjectsList;

  // const result = Object?.values(classDetails);
  const [showPanel, setShowPanel] = useState(false);
  const [data, setData] = useState([]);
  const [student, setStudent] = useState();
  const [panelId, setPanelId] = useState(1);

  const displayPanel = () => {
    if (panelId === 1) {
      setShowPanel(true);
    } else {
      setShowPanel(false);
    }
  };

  const createPanelId = (id) => {
    setPanelId(id);
  };

  useEffect(() => {
    if (subjectPerformance) {
      setData(subjectPerformance);
    }
  }, [subjectPerformance]);

  useEffect(() => {
    if (currentStudent) {
      setStudent(currentStudent);
    }
  }, []);

  useEffect(() => {
    displayPanel();
  }, [panelId]);

  return (
    <div className={styles.performancemainwrapper}>
      <div className={styles.innermainwrapper}>
        <div className={styles.leftwrapper}>
          <div className={styles.innerwrapper}>
            <>
              <div className={styles.studentnamewrapper}>
                <h2>{currentStudent[0]?.userId.fullName}</h2>
                {user && <p>{user?.user?.email}</p>}
                {user && <h3>{user?.user?.classOwnership[0]?.name}</h3>}
              </div>
              <p className={styles.invitewrapper}>Invite your friends</p>
            </>
          </div>
          )}
        </div>
        <div>
          {/* <div className={styles.innerwrapper}>
              <div className={styles.studentnamewrapper}>
                  <h2>{currentStudent[0]?.userId.fullName}</h2>
                    <p>{currentStudent[0]?.userId.email}</p>
                  <h3>JSS 1</h3>
              </div>
          </div> */}
          <div className={styles.barinnerwrapper}>
            <div>
              <h3>Progress</h3>
              <p>Progress level per subject</p>
            </div>
            <Piechart data={data} />
          </div>
        </div>
      </div>
      <div className={styles.progresswrapper}>
        {/* testing */}
        {/* <div>
              <div className={styles.performancecontentwrapper}>
              
                 <div className={styles.subjectsectiononemiddle}>
                    <OverallChart />
                 </div>
                 <div className={styles.subjectsectiononemiddle}>
                    <div className={styles.subjectquestioninner}>
                       <p>TEST ATTEMPTED</p>
                        <p className={styles.totalquestionwrapperlast}>
                        <AiOutlineExclamationCircle size={25}/> 
                          
                        </p>
                    </div>
                    <p>REMARK</p>
           
                    <p className={styles.averagetimeremark}> 
                      <FaRegCheckCircle />
                      No Ratin
                      </p> : <p></p>
                 </div>
              </div>
          </div> */}
        {/* end testing */}
        <div>
          <ul className={styles.performancemenu}>
            <li
              key={1}
              onClick={() => createPanelId(1)}
              className={styles.innermenuwrapper}
            >
              Subject
            </li>
            <li
              key={2}
              onClick={() => createPanelId(2)}
              className={styles.innermenuwrapper}
            >
              Past Questions
            </li>
          </ul>
        </div>
        {!subjectPerformance || !pastQuestionPerformance ? (
          <div className={styles.spinnerwrapper}>
            <Spinner />
          </div>
        ) : (
          <div>
            {showPanel === true &&
              subjectPerformance &&
              subjectPerformance.map((subjectList, index) => (
                <div className={styles.performancecontentwrapper}>
                  <div className={styles.subjectsectionone}>
                    <p className={styles.subjectheaderwrapper}>
                      {subjectList.subject}
                    </p>
                    <Barchart
                      data={data}
                      outerIndex={index}
                      subjectPerformance={subjectPerformance}
                    />
                    {subjectList.performance === null ? (
                      <p className={styles.averagetimeremark}>No Rating</p>
                    ) : (
                      <p>{subjectList.performance}</p>
                    )}
                    <h3>PERFORMANCE</h3>
                  </div>
                  <div className={styles.subjectsectiononemiddle}>
                    <div className={styles.subjectquestioninner}>
                      <p>QUESTIONS CORRECT</p>
                      <p className={styles.totalquestionwrapper}>
                        <FiCheckCircle size={25} />
                        {subjectList.totalQuestionsCorrect}/
                        {subjectList.totalQuestions}
                      </p>
                    </div>
                    <p>AVG. TIME/TEST</p>
                    {subjectList.averageTimePerTest === null ? (
                      <p className={styles.totalquestionwrapperrating}>
                        <FaRegCheckCircle />
                        No Rating
                      </p>
                    ) : (
                      <p>{subjectList.averageTimePerTest}</p>
                    )}
                  </div>
                  <div className={styles.subjectsectiononemiddle}>
                    <div className={styles.subjectquestioninner}>
                      <p>TEST ATTEMPTED</p>
                      <p className={styles.totalquestionwrapperlast}>
                        <AiOutlineExclamationCircle size={25} />
                        {subjectList.numberOfTests}/{subjectList.totalTests}
                      </p>
                    </div>
                    <p>REMARK</p>
                    {subjectList.progress === 0 ? (
                      <p className={styles.averagetimeremark}>
                        <FaRegCheckCircle />
                        No Rating
                      </p>
                    ) : (
                      <p>{subjectList.progress}</p>
                    )}
                  </div>
                </div>
              ))}
            {showPanel === false &&
              pastQuestionPerformance &&
              pastQuestionPerformance.map((pastSubject, index) => (
                <div className={styles.performancecontentwrapperpast}>
                  <p className={styles.pastheaderwrapper}>{pastSubject.name}</p>
                  <div className={styles.pastquestionratewrapper}>
                    <div>
                      <Pastquestionchart
                        pastQuestionPerformance={pastQuestionPerformance}
                        outerIndex={index}
                      />
                      <p>No rated</p>
                      <h5>PERFORMANCE</h5>
                    </div>
                    <div>
                      <p>SUBJECT ATTEMPTED</p>
                      <p>
                        <AiOutlineExclamationCircle size={25} />
                        {pastSubject.subjectsAttempted}/
                        {pastSubject.totalSubjectsCount}
                      </p>
                    </div>
                    <div>
                      <p>AVG. TIME/SUBJECT</p>
                      {pastSubject.averageTimePerSubject === null ? (
                        <p className={styles.averagetimeremark}>
                          <FaRegCheckCircle />
                          No Rating
                        </p>
                      ) : (
                        <p>{pastSubject.averageTimePerSubject}</p>
                      )}
                    </div>
                  </div>
                  <div className={styles.accuracywrapper}>
                    <h5>ACCURANCY/SUBJECT</h5>
                    {pastSubject.perSubjectResults &&
                      pastSubject.perSubjectResults.map((perSubjects) => (
                        <ul className={styles.persubjectswrapper}>
                          <li>
                            {perSubjects.name}: {perSubjects.score}%
                          </li>
                        </ul>
                      ))}
                  </div>
                </div>
              ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default ClassPerfomance;
