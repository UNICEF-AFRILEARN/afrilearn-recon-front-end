import React from 'react';
import { useRouter } from 'next/router';

import styles from './story.module.css';

const ImpactStory = () => {
const { query } = useRouter();

const stories = [
  {
    id: '1',
    videoUrl: '',
    title: '',
    name: '',
    summary: '',
    date: ''
  },
  {
    id: '2',
    videoUrl: '',
    title: '',
    name: '',
    summary: '',
    date: ''
  },
  {
    id: '3',
    videoUrl: '',
    title: '',
    name: '',
    summary: '',
    date: ''
  }
]

console.log('query', query?.impactstory[0])
    
return (
    <div className={styles.impactstorywrapper}>
        ImpactStory
    </div>
  )
}

export default ImpactStory