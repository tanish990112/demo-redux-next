import { useSelector } from "react-redux";
import { Notification } from "grommet-icons";
import styles from "../styles/Count.module.css";
const BellIcon = () => {
  const unreadNoti = useSelector((state) => state.notification.value);
  return (
    <div className={styles.notiDiv}>
      <Notification color="plain" size="large" />
      <span className={styles.count}>{unreadNoti.notiCount}</span>
    </div>
  );
};

export default BellIcon;
