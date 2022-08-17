import React, { useState } from "react";
import "./App.css";
import UserList from "./components/UserList";

const DUMMY_USER_DATA = [
  {
    id: 1,
    firstName: "Wayne",
    lastName: "Rooney",
  },
  {
    id: 2,
    firstName: "Mason",
    lastName: "Mount",
  },
  {
    id: 3,
    firstName: "Mo",
    lastName: "Salah",
  },
];

function App() {
  const [userLists, setUserLists] = useState(DUMMY_USER_DATA);

  const addNewUserDataHandler = (newUserData) => {
    setUserLists((prevUserData) => {
      return [newUserData, ...prevUserData];
    });
  };

  return (
    <div className="App">
      <UserList userList={userLists} onSaveNewUser={addNewUserDataHandler} />
    </div>
  );
}

export default App;
