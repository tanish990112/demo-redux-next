import styles from "../../styles/Home.module.css";
import { useDispatch } from "react-redux";
function Removenotibasic() {
  const dispatch = useDispatch();
  function readNotification() {
    dispatch({
      type: "RemoveNotifications",
    });
  }

  return (
    <>
      <button onClick={readNotification} className={styles.card}>
        <h2>Read Notification baisc&rarr;</h2>
        <p>Find in-depth information about Next.js features and API.</p>
      </button>
    </>
  );
}

export default Removenotibasic;
