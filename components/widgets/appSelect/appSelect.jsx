import styles from "./appSelect.module.css";

const AppSelect = ({
  rolesContext,
  fullWidth = true,
  onChange,
  placeholder,
  rounded,
  className,
}) => {
  return (
    <select
      className={`
         ${styles.afrInput}
         ${fullWidth && styles.fullWidth}
         ${rounded && styles.rounded}
         ${className}
      `}
      onChange={(e) => onChange(e.target.value)}
      placeholder={placeholder}
    >
      <option value="">{placeholder}</option>
      {rolesContext?.map((item, index) => (
        <option value={item.id} key={index}>
          {item.name}
        </option>
      ))}
    </select>
  );
};

export default AppSelect;
