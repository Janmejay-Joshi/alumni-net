import { HiDocument } from 'react-icons/hi'
import { IoMdPhotos } from 'react-icons/io'
import styles from './Postoverlay.module.scss'

export default function Postoverlay(){
    return(
        <div className={styles.container}>
            <div className={styles.overlay_wrapper}>
                <div className={styles.header_block}>
                    <img src="/assets/images/Nav/profile.svg" alt="profile" className={styles.profile_icon}/>
                    <div className={styles.heading}>
                        <h2 className={styles.heading_title}>Name</h2>
                        <button className={styles.visibility_button}>Anyone</button>
                    </div>
                </div>
                <div className={styles.text_block}>
                    <div className={styles.text_block_wrapper}>
                        <textarea className={styles.input_text} placeholder="What's on your mind ?"></textarea>
                    </div>
                    
                </div>
                <div className={styles.lower_block}>
                    <div className={styles.add_buttons}>
                        <IoMdPhotos size={30}/>
                        <HiDocument size={30}/>
                        <HiDocument size={30}/>
                        <HiDocument size={30}/>
                        <HiDocument size={30}/>
                    </div>
                        <button className={styles.submit_button_icon}>Submit</button>
                </div>
            </div>
        </div>
    )
}