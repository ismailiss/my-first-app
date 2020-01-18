import React, { useState, useEffect } from "react";
import InputText from "./components/input";
import Button from "./components/button";
import Checkbox from "./components/checkbox";

export default () => {
  const [myInputValue, setMyInputValue] = useState("");
  const [tasksList, setTasksList] = useState([]);

  useEffect(() => {
    if (myInputValue === "react") {
      setTasksList(["React "]);
    }
  }, [myInputValue]);

  return (
    <div>
      <InputText
        myInputValue={myInputValue}
        setmyinputvalue={setMyInputValue}
        placeholder="Task..."
      />
      <Button
        onClick={() => {
          setTasksList([...tasksList, myInputValue]);
          setMyInputValue("");
        }}
      >
        ADD
      </Button>
      <ul>
        {tasksList.map(element => {
          return (
            <li key={element}>
              <Checkbox element={element} />
            </li>
          );
        })}
      </ul>
    </div>
  );
};
