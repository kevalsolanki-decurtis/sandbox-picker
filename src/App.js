import React, { useState } from "react";
import Picker from "./component/Picker";
import WheelPicker from "react-simple-wheel-picker";

import "./styles.css";
import styled from "styled-components";

export default function App() {
  const [valueGroups, setValueGroups] = useState({
    title: "Mr.",
    firstName: "Micheal",
    secondName: "Jordan"
  });

  const handleChange = (name, value) => {
    setValueGroups((valueGroups) => ({
      valueGroups: {
        ...valueGroups,
        [name]: value
      }
    }));
  };

  console.log("Change made");
  console.log("change made 2");

  const setKeyValue = (arr) => {
    return arr.map((item) => {
      const dataSet = {
        id: item,
        value: item
      };
      return dataSet;
    });
  };

  const newOptionGroups = (optionGroups) => {
    let groups = {};
    for (const group in optionGroups) {
      groups[group] = setKeyValue(optionGroups[group]);
    }
    return groups;
  };
  const optionGroups = {
    title: ["Mr.", "Mrs.", "Ms.", "Dr."],
    firstName: ["Karan", "Micheal", "Elizabeth"],
    secondName: ["Lennon", "Jackson", "Jordan", "Legend", "Taylor"]
  };

  const opGroups = newOptionGroups(optionGroups);

  let pickerColumn = [];
  const handleOnChange = (target) => {
    console.log(target);
  };
  for (const group in opGroups) {
    const data = opGroups[group];

    pickerColumn.push(
      <StyledWheelPicker
        data={data}
        onChange={handleOnChange}
        height={400}
        width={100}
        titleText="Enter value same as aria-label"
        itemHeight={36}
        selectedID={data[0].id}
        color="#999999"
        activeColor="#fff"
        backgroundColor="black"
        shadowColor="none"
      />
    );
  }

  console.log(opGroups);

  return (
    <div className="App">
      <h1>Picker Test</h1>
      {/* <Picker
        onChange={handleChange}
        valueGroups={valueGroups}
        optionGroups={optionGroups}
      /> */}
      <PickerContainer>{pickerColumn}</PickerContainer>
    </div>
  );
}

const PickerContainer = styled.div`
  display: flex;
  justify-content: center;
`;

const StyledWheelPicker = styled(WheelPicker)`
  box-shadow: none;
  background-color: red;
`;
