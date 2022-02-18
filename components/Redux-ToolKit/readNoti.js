import { useDispatch } from "react-redux";
import { readNoti } from "../../redux/reducer";
import styles from "../../styles/Home.module.css";
function Removenoti() {
  const dispatch = useDispatch();

  function readNotification() {
    dispatch(readNoti());
  }
  return (
    <>
      <button onClick={readNotification} className={styles.card}>
        <h2>Read Notification Toolkit &rarr;</h2>
        <p>Find in-depth information about Next.js features and API.</p>
      </button>
    </>
  );
}

export default Removenoti;
