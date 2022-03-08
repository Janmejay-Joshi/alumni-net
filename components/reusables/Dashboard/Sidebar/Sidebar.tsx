import React ,{useState}from 'react'
import styles from './Sidebar.module.scss'
import  data  from "./Data"
import Link from 'next/link'
import {GiHamburgerMenu} from 'react-icons/gi'
import {IoIosArrowBack} from 'react-icons/io'

type SidebarProps = {
  isOpen: boolean,
  toggleSidebar: () => void
}


const Sidebar = ({isOpen , toggleSidebar} : SidebarProps) => {
  return (
    <div className={styles.container} style={{ }}>
      <div className={`${styles.IconContainer}`}>

    {isOpen ? <GiHamburgerMenu /> : <IoIosArrowBack />}
      </div>
      <h1 className={styles.heading}>DASHBOARD</h1>


      {data.map((item) => {
        return (
          <div key={item.id} className={styles.sidebar__item}>
            <div className={styles.sidebar__item__text}>
              <Link href={item.path}><p>{item.name}</p></Link>
            </div>
          </div>
        )
      })
    }    
    </div>
  )
}

export default Sidebar