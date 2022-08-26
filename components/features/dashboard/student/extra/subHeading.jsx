import styles from './../student.module.css';

const SubHeading = ({title}) => {
  return (
    <h3 className={`${styles.subHeadingTitle}`}>{title}</h3>
  )
}
export default SubHeading
