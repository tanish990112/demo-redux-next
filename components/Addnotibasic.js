import styles from "../styles/Home.module.css";
import { useDispatch } from "react-redux";
function Addnotibasic() {
  const dispatch = useDispatch();
  function recieveNotification() {
    dispatch({ type: "addNotifications" });
  }
  return (
    <>
      <button onClick={recieveNotification} className={styles.card}>
        <h2>Recieve Notification baisc&rarr;</h2>
        <p>Find in-depth information about Next.js features and API.</p>
      </button>
    </>
  );
}

export default Addnotibasic;
