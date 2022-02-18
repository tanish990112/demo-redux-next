import styles from "../../styles/Count.module.css";
import { Notification } from "grommet-icons";
import { useSelector } from "react-redux";
const Bellbasic = () => {
  const unread = useSelector((state) => state);

  return (
    <div className={styles.notiDiv}>
      <Notification color="plain" size="large" />
      <span className={styles.count}>{unread}</span>
    </div>
  );
};

export default Bellbasic;
