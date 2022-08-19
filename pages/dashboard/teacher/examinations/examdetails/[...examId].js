import React from 'react';
import { useRouter } from 'next/router';

const ExamDetails = () => {
  const { query } = useRouter();


  return (
    <div>
      <div>
          <p>loremmddddddddddddddddddddddddddddddd</p>
          <p>loremmddddddddddddddddddddddddddddddd</p>
          <p>loremmddddddddddddddddddddddddddddddd</p>
      </div>
      <div>
          ExamDetails id: {query?.examId}
      </div>
    </div>
  )
}

export default ExamDetails