import PersonalProfile from "../dashboard/student/studentProfile/studentProfileEdit/personalProfile";
import SecurityProfile from "../dashboard/student/studentProfile/studentProfileEdit/securityProfile";

const selectionSection = ({ data }) => {
  return (
    <div className="mb-5">
      {data === "undefined" || data === 1 ? (
        <Schoolprofiledit />
      ) : (
        <SecurityProfile />
      )}
    </div>
  );
};

export default selectionSection;



const Schoolprofiledit = () => {
    return (
    <>
    <PersonalProfile/>
    </>
   
    )
};
