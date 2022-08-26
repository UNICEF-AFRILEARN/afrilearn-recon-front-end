import React, {useState} from 'react';
import Image from 'next/image';
import styles from "../../../../../styles/material.module.css";
import PastQuestion from './PastQuestion';
import Mathematics from './Mathematics';
import EnglishLanguage from './EnglishLanguage';
import BusinessStudies from './BusinessStudies';
import ComputerScience from './ComputerScience';
import Crk from './Crk';
// import pastQuestion from './pastQuestion';
import BasicTechnologies from './BasicTechnologies';
import French from './French';
import BasicScience from './BasicScience';
import Yoruba from './Yoruba';

const Material = () => {
  const [toggleState, setToggleState] = useState(1)

  const toggleTabs = (index) => {
    setToggleState(index)
  }
  return (
    <div className={styles.classworkwrapper}>

        <nav className={styles.sidenavbar}>
          <h5>All Subjects</h5>
          <ul>
            <li 
            onClick={() => toggleTabs(1)}
            className={toggleState === 1 ? styles.activetab : styles.tabs}
            >Mathematics</li>
            <li
            onClick={() => toggleTabs(2)}
            className={toggleState === 2 ? styles.activetab : styles.tabs}
            >English Language</li>
            <li
            onClick={() => toggleTabs(3)}
            className={toggleState === 3 ? styles.activetab : styles.tabs}
            >Business Studies</li>
            <li
            onClick={() => toggleTabs(4)}
            className={toggleState === 4 ? styles.activetab : styles.tabs}
            >Computer Science</li>
            <li
            onClick={() => toggleTabs(5)}
            className={toggleState === 5 ? styles.activetab : styles.tabs}
            >CRK</li>
            <li
            onClick={() => toggleTabs(6)}
            className={toggleState === 6 ? styles.activetab : styles.tabs}
            >Basic Technology</li>
            <li
            onClick={() => toggleTabs(7)}
            className={toggleState === 7 ? styles.activetab : styles.tabs}
            >French</li>
            <li
            onClick={() => toggleTabs(8)}
            className={toggleState === 8 ? styles.activetab : styles.tabs}
            >Basic Science</li>
            <li
             onClick={() => toggleTabs(9)}
             className={toggleState === 9 ? styles.activetab : styles.tabs}
            >Yoruba</li>
            <li
            onClick={() => toggleTabs(10)}
            className={toggleState === 10 ? styles.activetab : styles.tabs}
            >pastQuestion</li>
          </ul>
        </nav>
        <div className={toggleState === 1 ? styles.activecontent : styles.content}>
         <Mathematics />
        </div>
        <div className={toggleState === 2 ? styles.activecontent : styles.content}>
          <EnglishLanguage />
        </div>
        <div className={toggleState === 3 ? styles.activecontent : styles.content}>
          <BusinessStudies />
        </div>
        <div className={toggleState === 4 ? styles.activecontent : styles.content}>
          <ComputerScience />
        </div>
        <div className={toggleState === 5 ? styles.activecontent : styles.content}>
         <Crk />
        </div>
        <div className={toggleState === 6 ? styles.activecontent : styles.content}>
        <BasicTechnologies />
        </div>
        <div className={toggleState === 7 ? styles.activecontent : styles.content}>
        <French />
        </div>
        <div className={toggleState === 8 ? styles.activecontent : styles.content}>
        <BasicScience />
        </div>
        <div className={toggleState === 9 ? styles.activecontent : styles.content}>
         <Yoruba />
        </div>
        <div className={toggleState === 10 ? styles.activecontent : styles.content}>
        <PastQuestion />
        </div>
        
    </div>
  )
}

export default Material