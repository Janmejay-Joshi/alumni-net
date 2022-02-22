import React from "react";
import styles from './Searchbox.module.scss';

const Searchbox=()=>{
    return(
        <>
        <div className={styles.searchbox}>
            <input className={styles.input_search} type="text" placeholder="Search..">

            </input>
        </div>
        </>
    );
}
export default Searchbox;