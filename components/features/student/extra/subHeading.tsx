import { FC } from 'react';
import styles from './../student.module.css';

type Props = {
  title:string
}
const SubHeading: FC<Props> = ({title}) => {
  return (
    <h3 className={`${styles.subHeadingTitle}`}>{title}</h3>
  )
}
export default SubHeading
