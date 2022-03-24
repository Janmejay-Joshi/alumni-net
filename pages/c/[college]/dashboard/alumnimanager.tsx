import React from 'react'
import { BsSearch } from 'react-icons/bs';
import { BiTrashAlt } from 'react-icons/bi';
import DashboardLayout from '../../../../layout/DashboardLayout';
import styles from "../../../../styles/Dashboard/CollegeDashboard.module.scss";
import { DataGrid, GridColDef, GridValueGetterParams } from '@mui/x-data-grid';
import {alumniColumns , alumniRows} from "./AlumniData"




 function AlumniManager() {
  return (
    <>
      
        <h1 className={styles.heading}>Alumni Management</h1>

        <div className={styles.search_box}>
        <BsSearch className={styles.icon}/>
        <input type="text" className={styles.search_bar} placeholder="Search for Alumni..."/>
        </div>
     
        <div className={styles.Alumni__container}>
          <h1>List of Alumni</h1>
        <DataGrid
        rows={alumniRows}
        columns={alumniColumns}
        pageSize={5}
        rowsPerPageOptions={[5]}
        checkboxSelection
      />

    </div>
    </>
  )
}

AlumniManager.PageLayout = DashboardLayout

export default AlumniManager;