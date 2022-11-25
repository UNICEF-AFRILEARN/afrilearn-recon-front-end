import { Dropdown, DropdownButton } from 'react-bootstrap'
import styles from '../../../../styles/search.module.css'
import CenterCard from './centerCard'

const CenterFeed = () => {
  return (
    <div className={styles.centerfeedwrapper}>
      <div className={styles.maintitlewrapper}>
        <h4>My Feeds</h4>
      </div>
      <CenterCard />
      {/* <div className={styles.maintitlewrapper}>
        <h4>Connections</h4>
      </div>
      <DropdownButton
        id="dropdown-basic-button"
        title="All roles"
        className="m-4 w-25"
      >
        <Dropdown.Item href="#/action-1">Action</Dropdown.Item>
        <Dropdown.Item href="#/action-2">Another action</Dropdown.Item>
        <Dropdown.Item href="#/action-3">Something else</Dropdown.Item>
      </DropdownButton>
      <CenterCard /> */}
    </div>
  )
}

export default CenterFeed
