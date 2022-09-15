import React, {useState} from 'react';
import styles from './fullpageloader.module.css';
import {BeatLoader} from "react-spinners";
import { css } from '@emotion/react';

const override = css`
  display: "block";
  margin: "100% auto";
  borderColor: "red";
`;

const FUllpageLoader = () => {
    let [loading, setLoading] = useState(true);
    let [color, setColor] = useState("#36d7b7");


  return (
    <div className={styles.fullpageloader}>
        <BeatLoader className={styles.loader}
        color={color} loading={loading} cssOverride={override} size={15}

      />
    </div>
  )
}

export default FUllpageLoader