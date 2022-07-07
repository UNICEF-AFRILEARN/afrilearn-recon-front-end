import Link from "next/link";
import styles from "./student.module.css";
// import SubHeading from "./extra/subHeading";

const studentHeropage = () => {
  const studentdata = [
    { class: "SSS-One", firstName: "Feyikemi" },
    [
      {
        linkdata: "#subjects",
        title: "My Subjects",
      },
      {
        linkdata: "#pastQuestions",
        title: "Past Questions",
      },
      {
        linkdata: "#resumePlaying",
        title: "Resume Watching",
      },
      {
        linkdata: "#topTen",
        title: "Top Ten Video",
      },
      {
        linkdata: "#performance",
        title: "Performance Summary",
      },
      {
        linkdata: "#classroom",
        title: "Classroom",
      },
      {
        linkdata: "#favourite",
        title: "My Favourite",
      },
      {
        linkdata: "#recommendations",
        title: "Recommendations",
      },
      {
        linkdata: "#recentActivities",
        title: "Recent Activities",
      },
    ],
  ];

  // const linkData =

  return <StudentPage stuData={studentdata} />;
};

export default studentHeropage;

export const StudentPage = ({ stuData }) => {
  const greetings = (firstName) => {
    return `Welcome ${firstName}!`;
  };
  return (
    <>
      <div
        id="dashboardFirstSection"
        className={`container-fluid relative ${styles.dashboardFirstSection}`}
      >
        <div className="row">
          <div className="col-md-12">
            <h1>{stuData[0].class}</h1>
          </div>
        </div>
         <div className={`row ${styles.push2}`}>
          <div className="col-md-12">
            {stuData[0].firstName && (
              <h2>{greetings(stuData[0].firstName)}</h2>
            )}
            {stuData[0].subject && <h2>{stuData[0].subject}</h2>}
            <p>Explore the fun in learning💃</p>
          </div>
        </div>
        <div className={`row ${styles.push2e}`}></div>
        <div className={`row ${styles.push2} ${styles.push3}`}>
          <div className="col-md-12">
            {stuData[0].firstName &&
              stuData[1].map((data, i) => (
                <Link key={i} href={data.linkdata}>
                  <a>{data.title}| </a>
                </Link>
              ))}
          </div>
        </div> 
      </div>
    </>
  );
};
