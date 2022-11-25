import React from 'react';
import { useRouter } from 'next/router';

import styles from './story.module.css';

const ImpactStory = () => {
const { query } = useRouter();

const stories = [
  {
    id: '1',
    videoId: 'vztXJceboTA',
    title: 'AFRICHALLENGE IMPACT STORY - OLOFINBIYI PRECIOUS',
    summary: "In a world where humans are quick to move on from people and places, the consistent win of Olofinbiyi Precious at the Afrilearn Challenge shows one thing - an impactful place can be addictive. Precious is a third-time winner of the Afrilearn Challenge; and he is not tired yet. The Afrilearn Challenge does not only reward Precious for his intelligence but has also built in him a winning resolve that can take down any obstacle on his path. It is safe to say that the Afrilearn Challenge has lived true to its name; it has indeed been a challenge for Precious to display his best self at every point.",
    date: 'Oct 14, 2021'
  },
  {
    id: '2',
    videoId: 'isoFbsZCSgA',
    title: "Teachers' Impact Stories",
    name: '',
    summary: 'When you think you have heard it all from the students, the teachers shared how impactful their experience has been on the Afrilearn Suite. Just as it was stated by a teacher in his testimonial, Afrilearn brags differently in ensuring that digital learning is accessible in the simplest procedures ever. We believe that the technicalities of the traditional educational system should not be repeated on the online space, or else the purpose of learning would be defeated. The Afrilearn App itself is a marked territory for impacts, for both the students and the teachers. This is who we are; and impact is what we do',
    date: 'Oct 8, 2021'
  },
  {
    id: '3',
    videoId: '1EEg63IeRwk',
    title: 'AFRILEARN CHALLENGE IMPACT STORY',
    name: '',
    summary: "When it comes to the gamified learning challenge on the Afrilearn App, Fathia Bakare is the Champ, who got to know about the Afrilearn Challenge from her cousin. We hope you have cousins like Fathia's cousin who would refer you to a place of progressive learning like the Afrilearn App. And if you don't have, we hope you become that cousin that talks about Afrilearn App to your other cousins who are in primary and secondary schools. Coming up against a set of other brilliant JSS3 students from other schools, Fathia depicted a remarkable sense of intelligence by acing the challenge with a huge mark of 1700. Fathia Bakare, a 14-year old student, was indeed exceptional during the challenge and we couldn't help but reward her with the sum of ₦5000; a small token yet motivating. The Afrilearn App coupled with the memorable experience Fathia had while playing the Afrilearn Challenge made her testify to the amazing features on the Afrilearn App that made learning easier for her. Also, how can we forget the sharp-witted Elijah? Adetutu Elijah's story, from the beginning, has been an interesting story of impact. First, he was impacted by his teacher who introduced him to the Afrilearn Challenge on the Afrilearn App. Secondly, he was impacted by the gamified learning experience on the Afrilearn App; which he obviously found easy with him earning 1500 mark. Adetutu Elijah is an SS2 student who has earned himself the Wizard title on Afrilearn Challenge and a cash prize of ₦5000. The most beautiful part of Elijah's story is that he actively embraces the continuous learning process on the Afrilearn App. You should be like Fathia and Elijah. Download the Afrilearn App for free today from either Google Play Store or Apple Store",
    date: 'Oct 8, 2021'
  }
]

console.log('query', query.impactstory[0])
  

// useEffect(() => {

// }, [])

return (
    <div className={styles.impactstorywrapper}>
        <h1>{query.impactstory[0]}</h1>
    </div>
  )
}

export default ImpactStory