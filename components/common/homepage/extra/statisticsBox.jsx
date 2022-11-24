import { numberWithCommas } from '../../../../utils/helper'

const StatisticsBox = ({ title, value }) => {
  return (
    <div className="video-corrected-responsive">
      <span>
        <big>{numberWithCommas(value)}+</big>
        <p>{title}</p>
      </span>
    </div>
  )
}

export default StatisticsBox
