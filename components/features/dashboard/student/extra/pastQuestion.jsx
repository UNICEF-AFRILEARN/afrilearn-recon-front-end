import Image from "next/image";
import SubHeading from "./subHeading";
import styles from "./../../student/pastQuetion.module.css";
import { useEffect, useState, useRef } from "react";
import Slider from "react-slick";
import Link from "next/link";
import { useDispatch } from "react-redux";
import { fetchPastQuestionInitiate } from "../../../../../redux/actions/subject";

const PastQuestion = ({ subData }) => {
  const dispatch = useDispatch();
  const [subId, setSubId] = useState("");

  const Slidery = () => {
    const customeSlider = useRef();

    const settings = {
      infinite: true,
      slidesToShow: 3,
      slidesToScroll: 1,
      autoplay: true,
      speed: 1500,
      autoplaySpeed: 1000,
      cssEase: "linear",
      initialSlide: 0,
      arrows: false,
    };
    useEffect(() => {
      console.log(subId);
      if (subId !== "") {
        dispatch(fetchPastQuestionInitiate(subId));
      }
    }, [subId]);

    return (
      <>
        <Slider {...settings} ref={customeSlider}>
          {subData?.map((data, i) => {
            // console.log(data.pastQuestionTypes[0]);
            return (
              <Link
                passHref
                href={{
                  pathname: "/dashboard/student/pastQuestion",
                  query: {Exam:data.pastQuestionTypes[0].name},
                }}
              >
                <div
                  key={i}
                  className={`${
                    data.pastQuestionTypes[0].categoryId % 2 !== 0
                      ? styles.containerList1
                      : styles.containerList2
                  }`}
                  onClick={() => setSubId(data.pastQuestionTypes[0].categoryId)}
                >
                  <div
                    className={`${
                      data.pastQuestionTypes[0].categoryId % 2 !== 0
                        ? styles.cointainerListLeft1
                        : styles.cointainerListLeft2
                    }`}
                  >
                    <Image
                      alt={"logo image"}
                      src={data.pastQuestionTypes[0].imageUrl}
                      width="100%"
                      height="100%"
                    />
                    <div className={styles.cointainerListRight}>
                      <div className={styles.cointainerListLeftTop}>
                        {data.pastQuestionTypes[0].name}
                      </div>
                      <div className={styles.cointainerListLeftBottom}>
                        {data.pastQuestionTypes[0].description}
                      </div>
                    </div>
                  </div>
                </div>
              </Link>
            );
          })}
        </Slider>
      </>
    );
  };

  return (
    <div id="pastQuestions">
      <SubHeading title="Past Questions" />
      <div className={styles.container}>
        <section className="parnet-frag-color">
          <Slidery />
        </section>
      </div>
    </div>
  );
};

export default PastQuestion;
