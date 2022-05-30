import { useState, 
  // MouseEvent 
} from 'react';
import styles from '../homepage.module.css';
import ProfileSection from './profileSection';

const WhyAfrilearn = () => {
  const [selectedOption, setSelectedOption] = useState(1)

  const handleNavigation = (section, e) => {
    e.preventDefault();
    setSelectedOption(section)
  }

  const navigationData = [
    {
      id: 1, title: 'For Students', content: {
        title: 'Learn anytime,',
        titlePart2: ' anywhere, at your own pace.',
        description: ['Learn through your syllabus at your unique pace', 'Achieve best grades & pass WAEC, JAMB, BECE easily', 'Interact with top tutors & become a high-flying student'],
        imageURL: '/assets/img/common/homepage/student.png'
      }
    },
    {
      id: 2, title: 'For Parents', content: {
        title: 'Quality learning, ',
        titlePart2: 'better result.',
        description: ['Track your child’s strengths and progress', 'Engage your child for success in school and life️', 'Transform your child’s life with world-class education'],
        imageURL: '/assets/img/common/homepage/parent.png'
      }
    },
    {
      id: 3, title: 'For Teachers', content: {
        title: 'Create deeper ',
        titlePart2: 'connection with your students.',
        description: ['Save time, stress, and paper', 'Improve classroom engagement & performance', 'Become an award-winning '],
        imageURL: '/assets/img/common/homepage/teacher.png'
      }
    },
    {
      id: 4, title: 'For Schools', content: {
        title: 'Everything in',
        titlePart2: ' one place.',
        description: ['Discover how your students learn best, where to focus', 'Empower your school with advanced technologies', 'Improve enrollment & learning outcomes'],
        imageURL: '/assets/img/common/homepage/school.png'
      }
    }
  ]

  return (
    <div id="homepageSecondSection" className="row why-afrilear-works-segment" style={{margin: '93px'}}>
      <h2 className={styles.homepageSecondSectionh2}>Why Afrilearn works</h2>
      <ul className={`${styles.secondSectionul} sub-menu-items-corrected`}>
        {navigationData.map((item => {
          return <li key={item.id} className={`${selectedOption === item.id ? styles.activeOption : ''}`}>{selectedOption === item.id ? <span></span> : ''}
          
          <a onClick={handleNavigation.bind(this, item.id)} href={`${encodeURIComponent(item.id)}`}>{item.title}</a>
          </li>
        }))}
      </ul>
      <ProfileSection data={navigationData[selectedOption - 1].content} />
    </div>
  )
}

export default WhyAfrilearn
