import React, { useState } from "react";

const NewUserForm = (props) => {
  const [enteredFirstName, setEnteredFirstName] = useState("");
  const [enteredLastName, setEnteredLastName] = useState("");

  const firstNameChangeHandler = (event) => {
    setEnteredFirstName(event.target.value);
  };

  const lastNameChangeHandler = (event) => {
    setEnteredLastName(event.target.value);
  };

  const submitHandler = (event) => {
    event.preventDefault();
    const newUserData = {
      id: Math.random().toString(),
      firstName: enteredFirstName,
      lastName: enteredLastName,
    };
    props.onSaveNewUser(newUserData);
    setEnteredFirstName("");
    setEnteredLastName("");
  };
  return (
    <form onSubmit={submitHandler}>
      <div>
        <label>Enter First Name </label>
        <input
          type="text"
          value={enteredFirstName}
          onChange={firstNameChangeHandler}
        />
      </div>
      <div>
        <label>Enter Last Name </label>
        <input
          type="text"
          value={enteredLastName}
          onChange={lastNameChangeHandler}
        />
      </div>
      <div>
        <button type="submit">Add User</button>
      </div>
    </form>
  );
};

export default NewUserForm;
