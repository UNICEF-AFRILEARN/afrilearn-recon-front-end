import Image from "next/image";
import SubHeading from "./subHeading";
import styles from "./../../student/topInClass.module.css";
import { useState } from "react";

const topInClass = () => {
  const title = { class: "SSS One" };
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

  
  const [show, setShow] = useState(false);
  const toggleModal = () => setShow(!show);

  return (
    <div>
      <SubHeading title={`Top in ${title.class}`} />

      <div
        className="col-md-3 relative video-corrected-responsive"
        onClick={toggleModal}
      >
        {/* <Image
          alt={"afrilearn marketing video"}
          src={data?.thumbnailUrl}
          width={303}
          height={150}
        /> */}
        {/* <span>
          {data?.subject}
          <hr />
          <small>
            {data?.class} ||{" "}
            {data && data.title
              ? toProperCase(cutString(data.title, 20))
              : null}
          </small>
        </span> */}
      </div>
    </div>
  );
};

export default topInClass;
