import { useState } from "react";
import styles from "./greyNavigation.module.css";

const GreyNavigation = ({ data }) => {
  const [selectedOption, setSelectedOption] = useState(0);
  return (
    <div className={styles.secondSectionulWrapper}>
      <ul className={styles.secondSectionul}>
        {data?.map((item) => {
          return (
            <li
              key={item.index}
              className={`${
                selectedOption === item.index ? styles.activeOption : ""
              }`}
              onClick={() => setSelectedOption(item.index)}
            >
              {selectedOption === item.index ? (
                <span className={styles.border}></span>
              ) : (
                ""
              )}
              <div>{item.label}</div>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default GreyNavigation;
