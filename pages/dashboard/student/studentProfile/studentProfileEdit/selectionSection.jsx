import PersonalProfile from "./personalProfile";
import PersonalSelectionClass from "./personalSelectionClass";
import SecurityProfile from "./SecurityProfile";

const selectionSection = ({ data }) => {
  console.log(data);
  return (
    <div className="mb-5">
      {data === "undefined" || data === 1 ? (
        <PersonalProfile />
      ) : data === 2 ? (
        <PersonalSelectionClass />
      ) : (
        <SecurityProfile />
      )}
    </div>
  );
};

export default selectionSection;
