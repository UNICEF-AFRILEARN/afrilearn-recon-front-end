import styles from "../../school/dashbord.module.css"
import Image from "next/image";
import Link from "next/link";

const Schoolheropage = () => {
    return (
    <>
    <div>
        <div className={styles.heroSchool}>
        <div className={styles.videoheropage}>  
     <Image src="/assets/img/school/person_2\ 1.svg" width={"174px"} height={"174px"}   className={styles.avatarCoin} />
     </div>
      </div>  
    </div>
    </>
    )
};

export default Schoolheropage;