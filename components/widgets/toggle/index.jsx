import React from 'react';
import styles from '../toggle/toggle.module.css'

const Toggle = ({ checked, onChange }) => (
  <span className={styles.togglecontrol}>
    <input
      className={styles.dmcheck}
      type="checkbox"
      checked={checked}
      onChange={onChange}
      id="dmcheck"
    />
    <label htmlFor="dmcheck" />
  </span>
);

export default Toggle;