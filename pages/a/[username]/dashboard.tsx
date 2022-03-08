import React ,{useState} from "react";
import Content from "../../../components/reusables/Dashboard/Content/Content";
import Sidebar from "../../../components/reusables/Dashboard/Sidebar/Sidebar";
import Navigation from "../../../components/reusables/Navigation";
import styles from "../../../styles/Dashboard/AlumniDashboard.module.scss";


type Props = {
 children : React.ReactNode;
}

export default function Dashboard({ children} :Props) {

  const [isOpen, setOpen] = useState(false);

  const toggleSidebar = () =>{
    setOpen((prev) => !prev);
  }
  return (
    <div className={styles.container}>
      <Navigation />
      <div className={styles.dashboard__container}>
        <div className={styles.dashboard__sidebar}>
          <Sidebar isOpen={isOpen} toggleSidebar={toggleSidebar}/>
        </div>
        <div className={styles.dashboard__content}>
          <Content />
        </div>
      </div>
    </div>
  );
}
