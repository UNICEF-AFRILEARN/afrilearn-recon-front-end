import styles from "./button.module.css";

const AppButton = ({
  fullWidth,
  IconComponent,
  large,
  onClick,
  rounded = true,
  secondary,
  small,
  className,
  title,
}) => {
  return (
    <button
      className={`
        ${styles.afrBtn}
        ${rounded && styles.rounded} 
        ${secondary && styles.secondary} 
        ${fullWidth && styles.fullWidth}
        ${small && styles.small}
        ${large && styles.large}
        ${className}
      `}
      onClick={onClick}
    >
      {IconComponent ? (
        <div style={{ marginRight: 10 }}>{IconComponent}</div>
      ) : null}
      <div>{title}</div>
    </button>
  );
};

export default AppButton;
