import { Notification } from "grommet-icons";
import styles from "../styles/Count.module.css";
import { useContext } from "react";
import { NotiContext } from "../pages";
const BellContext = () => {
  const notiCount = useContext(NotiContext);
  return (
    <div className={styles.notiDiv}>
      <Notification color="plain" size="large" />
      <span className={styles.count}>{notiCount}</span>
    </div>
  );
};

export default BellContext;
