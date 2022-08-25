import {
  useState,
  // MouseEvent
} from "react";
import styles from "../../../../../components/common/homepage/homepage.module.css";
import SelectionSection from "./selectionSection";

const WhyAfrilearn = () => {
  const [selectedOption, setSelectedOption] = useState(1);

  const handleNavigation = (section, e) => {
    e.preventDefault();
    setSelectedOption(section);
  };
  const navigationData = [
    {
      id: 1,
      title: "Personal Details",
    },
    {
      id: 2,
      title: "Add A New Class",
    },

    {
      id: 3,
      title: "Security",
    },
  ];

  return (
    <div
      id="homepageSecondSection"
      className="row why-afrilear-works-segment"
      style={{ marginTop: "-120px" }}
    >
      <ul className={`${styles.secondSectionul} sub-menu-items-corrected`}>
        {navigationData.map((item) => {
          return (
            <li
              key={item.id}
              className={`${
                selectedOption === item.id ? styles.activeOption : ""
              }`}
            >
              {selectedOption === item.id ? <span></span> : ""}

              <a
                onClick={handleNavigation.bind(this, item.id)}
                href={`${encodeURIComponent(item.id)}`}
              >
                {item.title}
              </a>
            </li>
          );
        })}
      </ul>
      <SelectionSection data={selectedOption} />
    </div>
  );
};

export default WhyAfrilearn;
