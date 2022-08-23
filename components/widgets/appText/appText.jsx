import styles from "./appText.module.css";

const AppText = ({ onClick, className, children, size }) => {
  return (
    <div
      className={`
        ${styles.primaryText}
        ${size === "large" && styles.large}
        ${size === "heading" && styles.heading}
        ${size === "subHeading" && styles.subHeading}
        ${size === "nav" && styles.nav}
        ${className} 
        ${styles.inlineBlock}
     `}
      onClick={onClick}
    >
      {children}
    </div>
  );
};

export default AppText;
