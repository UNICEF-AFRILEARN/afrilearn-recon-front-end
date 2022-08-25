import styles from '../../../../styles/search.module.css';
import CenterCard from './centerCard';

const CenterFeed = () => {
  return (
    <div className={styles.centerfeedwrapper}>
         <div className={styles.maintitlewrapper}>
             <h4>My Feeds</h4>
         </div>   
             <CenterCard />
             <CenterCard />
             <CenterCard />
             <CenterCard />
             <CenterCard />
    </div>
  )
}

export default CenterFeed