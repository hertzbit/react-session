import UserItem from "./UserItem";
import NewUserForm from "./NewUserForm";
const UserList = (props) => {
  const onSaveNewUserHandler = (enteredNewUserData) => {
    props.onSaveNewUser(enteredNewUserData);
  };
  return (
    <div>
      <NewUserForm onSaveNewUser={onSaveNewUserHandler} />
      {props.userList.map((currentUser) => (
        <UserItem
          key={currentUser.id}
          firstName={currentUser.firstName}
          lastName={currentUser.lastName}
        />
      ))}
    </div>
  );
};

export default UserList;
