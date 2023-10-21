import styles from "./user.module.css";
import { Button } from "../index";
const UserCard = ({ item, deleteUser, getUserData }) => {
  const deleteHandler = () => {
    deleteUser(item.id);
  };
  return (
    <div className={styles.userCard}>
      <ul>
        <li>name:{item.name}</li>
        <li>phone:{item.phone}</li>
        <li>city:{item.city}</li>
      </ul>
      <div className="btnGroup">
        <Button onClick={() => getUserData(item)}> Edit</Button>
        <Button onClick={deleteHandler} color="danger">
          Delete
        </Button>
      </div>
    </div>
  );
};
export default UserCard;
