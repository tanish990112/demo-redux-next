import { useDispatch } from "react-redux";
import { recieveNoti } from "../../redux/reducer";
import styles from "../../styles/Home.module.css";
function Addnoti() {
  const dispatch = useDispatch();

  function recieveNotification() {
    dispatch(recieveNoti());
  }
  return (
    <>
      <button onClick={recieveNotification} className={styles.card}>
        <h2>Recieve Notification Toolkit &rarr;</h2>
        <p>Find in-depth information about Next.js features and API.</p>
      </button>
    </>
  );
}

export default Addnoti;
