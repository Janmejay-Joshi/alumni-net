import styles from "./Dropdown.module.scss";
import dropdownData from "./data";
import Link from "next/link";

const Dropdown = () => {
  const data = dropdownData;
    console.log(data);
    
  return (
    <div className={styles.container}>
      {data.map((d,index)=> {
          return(
          <div className={styles.listitem} key={index}>
            <Link href={d.link}>{d.name}</Link>
          </div>
          );
      })}
    </div>
  );
};


export default Dropdown;
