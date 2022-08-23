
// import Show from "../../public/assets/img/common/textInput/Show.svg";

const components = () => {
  return (

    <></>
    // <div className="p-2 container">
    //   <p>Text</p>
    //   <AppText size="large">Large Text</AppText>
    //   <br />
    //   <AppText size="heading">Heading Text</AppText>
    //   <br />
    //   <AppText size="subHeading">Sub Heading Text</AppText>
    //   <br />
    //   <AppText size="nav">Nav Text</AppText>
    //   <br />
    //   <br />
    //   <div
    //     data-bs-toggle="collapse"
    //     data-bs-target="#Texts"
    //     aria-expanded="false"
    //     aria-controls="Texts"
    //   >
    //     See Code
    //   </div>

    //   <pre className="collapse card" id="Texts">
    //     <code className="card-body">
    //       {`
    //     <AppText size="large">Large Text</AppText>
    
    //     <AppText size="heading">Heading Text</AppText>
      
    //     <AppText size="subHeading">Sub Heading Text</AppText>
      
    //     <AppText size="nav">Nav Text</AppText>
    //         `}
    //     </code>
    //   </pre>
    //   <hr />
    //   <br />
    //   <p>Nav</p>
    //   <GreyNavigation
    //     data={[
    //       { index: 0, label: "Zero" },
    //       { index: 1, label: "One" },
    //       { index: 2, label: "Two" },
    //       { index: 3, label: "Three" },
    //       { index: 4, label: "Four" },
    //       { index: 5, label: "Five" },
    //     ]}
    //   />
    //   <div
    //     data-bs-toggle="collapse"
    //     data-bs-target="#GreyNavigation"
    //     aria-expanded="false"
    //     aria-controls="GreyNavigation"
    //   >
    //     See Code
    //   </div>

    //   <pre className="collapse card" id="GreyNavigation">
    //     <code className="card-body">
    //       {`<GreyNavigation 
    //         data=
    //             {[
    //                 { index: 0, label: "Zero" },
    //                 { index: 1, label: "One" },
    //                 { index: 2, label: "Two" },
    //                 { index: 3, label: "Three" },
    //                 { index: 4, label: "Four" },
    //                 { index: 5, label: "Five" },
    //             ]}
    //     />
    //         `}
    //     </code>
    //   </pre>
    //   <hr />
    //   <br />
    //   <p>Primary Button</p>
    //   <AppButton title="Button" />
    //   <br />
    //   <div
    //     data-bs-toggle="collapse"
    //     data-bs-target="#PrimaryButton"
    //     aria-expanded="false"
    //     aria-controls="PrimaryButton"
    //   >
    //     See Code
    //   </div>

    //   <pre className="collapse card" id="PrimaryButton">
    //     <code className="card-body">
    //       {`<AppButton title="Button" />
    //         `}
    //     </code>
    //   </pre>
    //   <hr />

    //   <br />
    //   <p>Secondary Button</p>
    //   <AppButton title="Button" secondary />
    //   <br />
    //   <div
    //     data-bs-toggle="collapse"
    //     data-bs-target="#SecondaryButton"
    //     aria-expanded="false"
    //     aria-controls="SecondaryButton"
    //   >
    //     See Code
    //   </div>

    //   <pre className="collapse card" id="SecondaryButton">
    //     <code className="card-body">
    //       {`<AppButton title="Button" secondary />
    //         `}
    //     </code>
    //   </pre>
    //   <hr />
    //   <br />
    //   <p>Small Button</p>
    //   <AppButton title="Button" small />
    //   <br />
    //   <div
    //     data-bs-toggle="collapse"
    //     data-bs-target="#SmallButton"
    //     aria-expanded="false"
    //     aria-controls="SmallButton"
    //   >
    //     See Code
    //   </div>

    //   <pre className="collapse card" id="SmallButton">
    //     <code className="card-body">
    //       {`<AppButton title="Button" small />
    //         `}
    //     </code>
    //   </pre>
    //   <hr />
    //   <br />
    //   <p>Large Button</p>
    //   <AppButton title="Button" large />
    //   <br />
    //   <div
    //     data-bs-toggle="collapse"
    //     data-bs-target="#LargeButton"
    //     aria-expanded="false"
    //     aria-controls="LargeButton"
    //   >
    //     See Code
    //   </div>

    //   <pre className="collapse card" id="LargeButton">
    //     <code className="card-body">
    //       {`<AppButton title="Button" large />
    //         `}
    //     </code>
    //   </pre>
    //   <hr />
    //   <br />
    //   <p>Button with Icon</p>
    //   <AppButton title="Button" IconComponent={<Show />} />
    //   <br />
    //   <div
    //     data-bs-toggle="collapse"
    //     data-bs-target="#ButtonWithIcon"
    //     aria-expanded="false"
    //     aria-controls="ButtonWithIcon"
    //   >
    //     See Code
    //   </div>

    //   <pre className="collapse card" id="ButtonWithIcon">
    //     <code className="card-body">
    //       {`<AppButton title="Button" IconComponent={<Show />} />
    //         `}
    //     </code>
    //   </pre>
    //   <hr />
    //   <br />

    //   <p>Input</p>
    //   <AppTextInput
    //     title="Title"
    //     placeholder="Placeholder"
    //     onChange={(text) => {
    //       console.log(text);
    //     }}
    //   />
    //   <br />
    //   <br />
    //   <div
    //     data-bs-toggle="collapse"
    //     data-bs-target="#AppTextInput"
    //     aria-expanded="false"
    //     aria-controls="AppTextInput"
    //   >
    //     See Code
    //   </div>

    //   <pre className="collapse card" id="AppTextInput">
    //     <code className="card-body">
    //       {`<AppTextInput
    //             title="Title"
    //             placeholder="Placeholder"
    //             onChange={(text) => {
    //             console.log(text);
    //             }}
    //         />
    //         `}
    //     </code>
    //   </pre>
    //   <hr />
    //   <br />
    //   <br />
    //   <p>Select</p>
    //   <AppSelect
    //     placeholder="Placeholder"
    //     onChange={(text) => {
    //       console.log(text);
    //     }}
    //     data={[
    //       {
    //         label: "One",
    //         value: "One",
    //       },
    //       {
    //         label: "Two",
    //         value: "Two",
    //       },
    //     ]}
    //   />

    //   <br />
    //   <br />
    //   <div
    //     data-bs-toggle="collapse"
    //     data-bs-target="#AppSelect"
    //     aria-expanded="false"
    //     aria-controls="AppSelect"
    //   >
    //     See Code
    //   </div>

    //   <pre className="collapse card" id="AppSelect">
    //     <code className="card-body">
    //       {` <AppSelect
    //     placeholder="Placeholder"
    //     onChange={(text) => {
    //     console.log(text);
    //     }}
    //     data={[
    //     {
    //         label: "One",
    //         value: "One",
    //     },
    //     {
    //         label: "Two",
    //         value: "Two",
    //     },
    //     ]}
    //         />
    //         `}
    //     </code>
    //   </pre>
    //   <hr />
    // </div>
  );
};

export default components;
