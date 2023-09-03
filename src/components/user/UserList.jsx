import UserCard from "./UserCard";

const UserList = ({ persons, deleteUser }) => {
  const personHandler = persons.map((el) => (
    <UserCard key={el.id} item={el} deleteUser={deleteUser} />
  ));
  return <>{personHandler}</>;
};

export default UserList;
