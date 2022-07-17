import React from 'react';
import Image from 'next/image';
import styles from '../../../../styles/teacher.module.css'; 

const Submitquestions = () => {
  return (
    <div className={styles.submitquestionwrapper}>
        <div className={styles.questionwrapper}>
            <div className={styles.innerquestionwrapper}>
                <h4>Question 1</h4>
                <p>Which angle is represented in the diagram  shown above?</p>
                <Image 
                src="/assets/img/anglequestion.svg"
                alt="angle"
                width={400}
                height={200}
                />
            </div>
            <div className={styles.numberwrapper}>
                <ul>
                    <li>1</li>
                    <li>2</li>
                    <li>3</li>
                    <li>4</li>
                    <li>5</li>
                    <li>6</li>
                    <li>7</li>
                    <li>8</li>
                    <li>9</li>
                    <li>10</li>
                    <li>11</li>
                    <li>12</li>
                    <li>13</li>
                    <li>14</li>
                    <li>15</li>
                    <li>16</li>
                    <li>17</li>
                    <li>18</li>
                    <li>19</li>
                    <li>20</li>
                </ul>
            </div>
            
        </div>
        <div className={styles.optionwrapper}>
                <div className={styles.optionone}>
                    <h3>A.</h3> <h5>120</h5>
                </div>
                <div className={styles.optionone}>
                    <h3>B.</h3> <h5>120</h5>
                </div>
                <div className={styles.optionone}>
                    <h3>C.</h3> <h5>120</h5>
                </div>
                <div className={styles.optionone}>
                    <h3>D.</h3> <h5>120</h5>
                </div>
            </div>
    </div>
  )
}

export default Submitquestions