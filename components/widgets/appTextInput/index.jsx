import { useState } from "react";
import styles from "./textinput.module.css";
import Hide from "../../../public/assets/img/widgets/Hide.svg";
import Show from "../../../public/assets/img/widgets/Show.svg";


const AppTextInput = ({
  fullWidth = true,
  onChange,
  placeholder,
  rounded,
  className,
  type,
  title,
}) => {
  const [focused, setFocused] = useState(false);
  const [defaultType, setDefaultType] = useState(type);
  return (
    <div
      className={`${styles.afrInputWrapper} ${fullWidth && styles.fullWidth}`}
    >
      {focused && <div className={styles.afrInputTitle}>{title}</div>}
      <input
        className={`
         ${styles.afrInput}
         ${fullWidth && styles.fullWidth}
         ${rounded && styles.rounded}
         ${className}
      `}
        onBlur={() => setFocused(false)}
        // onChange={(e) => onChange(e.target.value)}
        onFocus={() => setFocused(true)}
        placeholder={placeholder}
        type={defaultType}
      />
      {type === "password" && (
        <span
          onClick={() => {
            if (defaultType === "password") {
              setDefaultType("text");
            } else {
              setDefaultType("password");
            }
          }}
        >
          {defaultType === "password" ? <Hide/> : <Show/>}
        </span>
      )}
    </div>
  );
};

export default AppTextInput;