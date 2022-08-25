import React from 'react';

import { BsShieldFillCheck, BsFillEyeSlashFill } from 'react-icons/bs';
import { MdCheckBoxOutlineBlank } from 'react-icons/md';
import { RiCheckboxBlankFill } from 'react-icons/ri';
import { AiOutlineUsergroupAdd } from 'react-icons/ai';
import styles from '../../../../styles/search.module.css';

const Feedcard = () => {
  return (
    <div className={styles.feedcardwrapper}>
        <div className={styles.innerfeedonewrapper}>
                  <h4>My Feeds</h4>
              <ul>
                  <li>Connections</li>
              </ul>
              
        </div>
        <div className={styles.innerfeedtwowrapper}>
            <ul>
                <li> <BsFillEyeSlashFill /> Post Visibility</li>
                <li> < RiCheckboxBlankFill color="green" /> Public (Everyone sees my post)</li>
                <li><MdCheckBoxOutlineBlank /> Private (Only my followers)</li>
            </ul>
        </div>
        <div className={styles.innerfeedthreewrapper}>
            <ul>
                <li><AiOutlineUsergroupAdd /> Role Indicator</li>
                <li><BsShieldFillCheck color="green" /> Student</li>
                <li><BsShieldFillCheck color="yellow"/> Teacher</li>
                <li><BsShieldFillCheck color="blue" /> School</li>
            </ul>
        </div>
    </div>
  )
}

export default Feedcard