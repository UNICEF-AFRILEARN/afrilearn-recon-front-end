import styles from "../student/student.module.css";

const Dashboard = () => {
  return (
    <div>
      <Heropage />
    </div>
  );
};

export default Dashboard;

export const Heropage = () => {
  return (
    <div
      className={`container-fluid relative ${styles.dashboardFirstSection3}`}
      style={{ position: "relative" }}
    ></div>
  );
};
