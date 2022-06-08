import Image from "next/image";
import SubHeading from "./subHeading";
import styles from "./../../student/pastQuetion.module.css";

const pastQuestion = () => {
  const features = [
    {
      logo: "WAEC",
      title: "WAEC",
      text: "Practice to pass in one sitting 20,000+ questions per subject",
      color: "purpleColor",
      className: 1,
    },
    {
      logo: "NECO",
      title: "NECO",
      color: "greenColor",
      className: 2,
    },
    {
      logo: "JAMB",
      title: "JAMB/UTME",
      color: "lightGreenColor",
      className: 3,
    },
  ];
  return (
    <div>
      <SubHeading title="Past Questions" />

      <div className={styles.container}>
        {features.map((feature) => (
          <div
            className={`${
              feature.className === 1
                ? styles.containerList1
                : feature.className === 2
                ? styles.containerList2
                : styles.containerList3
            }`}
          >
            <div
              className={`${
                feature.className === 1
                  ? styles.cointainerListLeft1
                  : feature.className === 2
                  ? styles.cointainerListLeft2
                  : styles.cointainerListLeft3
              }`}
            >
              <Image
                alt={"logo image"}
                src={`/assets/img/features/dashboard/student/${feature.logo}.png`}
                width="100%"
                height="100%"
              />
              <div className={styles.cointainerListRight}>
                <div className={styles.cointainerListLeftTop}>
                  {feature.title}
                </div>
                <div className={styles.cointainerListLeftBottom}>
                  {features[0].text}
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default pastQuestion;
