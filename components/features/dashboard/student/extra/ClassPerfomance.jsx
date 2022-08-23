import React, { useState, useEffect} from 'react';
import styles from '../../../../../styles/performance.module.css';
// import BarChartSect from './BarChartSect';
// import PieChartSection from './PieChartSection';


const ClassPerfomance = ({currentStudent, classDetails}) => {
  // const result = Object?.values(classDetails);
  const [showPanel, setShowPanel] = useState(false);
  const [panelId, setPanelId] = useState(1);
  console.log("classDetails from classPerformance ===>", classDetails)


  const displayPanel = () => {
    if(panelId === 1){
      setShowPanel(true)
    }else{
      setShowPanel(false)
    }
  }
  
  const createPanelId = (id) => {
    setPanelId(id)
  }
  
  useEffect(() => {
    displayPanel()
  }, [panelId])


  return (
    <div className={styles.performancemainwrapper}>
       <div className={styles.innermainwrapper}>
       <div className={styles.leftwrapper}>
            <div className={styles.innerwrapper}>
              <div className={styles.studentnamewrapper}>
                  <h2>{currentStudent[0]?.userId.fullName}</h2>
                    <p>{currentStudent[0]?.userId.email}</p>
                  <h3>JSS 1</h3>
              </div>
          </div>
        </div>
        <div className={styles.leftwrapper}>
            <div className={styles.innerwrapper}>
              <div className={styles.studentnamewrapper}>
                  <h2>{currentStudent[0]?.userId.fullName}</h2>
                    <p>{currentStudent[0]?.userId.email}</p>
                  <h3>JSS 1</h3>
              </div>
          </div>
        </div>
       </div>
        <div className={styles.progresswrapper}>
          
            <div>
              <ul className={styles.performancemenu}>
                <li 
                  key={1} 
                  onClick={() => createPanelId(1)}
                  className={styles.innermenuwrapper}
                  >Subject</li>
                <li 
                key={2} 
                onClick={() => createPanelId(2)}
                className={styles.innermenuwrapper}
                >Past Questions</li>
              </ul>
             { 
              showPanel === true && 
              <div className={styles.performancecontentwrapper}>
             cupiditate dolore aliquid aut voluptatum vel.
              </div>}
              {
              showPanel === false && 
              <div className={styles.performancecontentwrapper}>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque, cumque rem. Exercitationem neque illo alias excepturi minus itaque eius, deleniti vero distinctio laborum provident cupiditate dolore aliquid aut voluptatum vel.
              </div>}
          </div>
        </div>
    </div>
  )
}

export default ClassPerfomance