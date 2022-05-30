import {
  // MouseEvent,
  useState,
} from "react";
import styles from "../homepage.module.css";
import VideoBox from "./exploreVideoBox";
import StatsBox from "./statisticsBox";

const ExploreAfrilearn = () => {
  const [selectedOption, setSelectedOption] = useState(1);

  const handleNavigation = (section, e) => {
    e.preventDefault();
    setSelectedOption(section);
  };

  const data = [
    {
      _id: "6012d2b2cfe09249249f8a0e",
      subject: "Civic Education",
      class: "JSS One",
      title: "National Unity",
      thumbnailUrl:
        "https://afrilearn-media.s3.eu-west-3.amazonaws.com/jss-one/civic-education/third-term/national-unity/thumbnail/national-unity.jpeg",
      videoUrl:
        "https://afrilearn-media.s3.eu-west-3.amazonaws.com/jss-one/civic-education/third-term/national-unity/video-lessons/1619685168578CE_National+unity%2B%2B.mp4",
    },
    {
      _id: "6012d94ecfe09249249f9222",
      subject: "Economics",
      class: "SSS One",
      title: "Theory of Production",
      thumbnailUrl:
        "https://afrilearn-media.s3.eu-west-3.amazonaws.com/sss-one/economics/first-term/theory-of-production/thumbnail/production.jpeg",
      videoUrl:
        "https://afrilearn-media.s3.eu-west-3.amazonaws.com/sss-one/economics/first-term/theory-of-production/video-lessons/1622626857471Production+_+Economics+_+Afrilearn.mp4",
    },
    {
      _id: "6012d9fecfe09249249f9358",
      subject: "Literature in English",
      class: "SSS One",
      title: "Figures of Speech 11",
      thumbnailUrl:
        "https://afrilearn-media.s3.eu-west-3.amazonaws.com/sss-one/literature-in-english/third-term/thumbnail/figures-of-speech.jpeg",
      videoUrl:
        "https://afrilearn-media.s3.eu-west-3.amazonaws.com/sss-one/literature-in-english/third-term/figures-of-speech-ii/video-lessons/1622635953448Figures+Of+Speech+_+Antithesis+_+Afrilearn.mp4",
    },
    {
      _id: "6012d94ecfe09249249f921a",
      subject: "Economics",
      title: "Meaning Of Economics",
      class: "SSS One",
      thumbnailUrl:
        "https://afrilearn-media.s3.eu-west-3.amazonaws.com/sss-one/economics/first-term/meaning-of-economics/thumbnail/economics.jpeg",
      videoUrl:
        "https://afrilearn-media.s3.eu-west-3.amazonaws.com/sss-one/economics/first-term/meaning-of-economics/video-lessons/1622627851376Meaning+Of+Economics+_+Economics+_+Afrilearn.mp4",
    },
  ];

  const videoList = (section) => {
    let list = section === 1 ? data : data.reverse();
    if (list && list.length > 0) {
      return list.map((item) => {
        return <VideoBox key={item._id} data={item} />;
      });
    }
  };

  return (
    <div className={`container-fluid explore-added-class-currection ${styles.exploreAfrilearn}`}>
      <section className="row">
        <div className="col-md-6 add-class-for-the-header">
          <h3 className={styles.exploreAfrilearnh3}>Explore genius content</h3>
        </div>
        <div className="col-md-6 ul-class-added-corrected">
          <ul>
            <li
              onClick={(e) => handleNavigation(1, e)}
              className={`${
                selectedOption === 1
                  ? styles.exploreAfrilearnActive
                  : styles.exploreAfrilearnNotActive
              } class-li-corrected`}
            >
              {<span href="/">TRENDING</span>}
            </li>
            <li
              onClick={(e) => handleNavigation(2, e)}
              className={` ${
                selectedOption === 2
                  ? styles.exploreAfrilearnActive
                  : styles.exploreAfrilearnNotActive
              } class-li-corrected`}
            >
              {<span href="/">JUST ADDED</span>}
            </li>
          </ul>
        </div>
      </section>
      <section className={`row ${styles.explorePart2}`}>
        {videoList(selectedOption)}
      </section>
      <section className={`row ${styles.afterExplore}`}>
        <StatsBox title="Video and Audio Lessons" value={1500} />
        <StatsBox title="Practice Questions" value={23664} />
        <StatsBox title="Rich & Ready Class Notes" value={3500} />
        <StatsBox title="Learning Minutes" value={1500} />
      </section>
    </div>
  );
};

export default ExploreAfrilearn;
