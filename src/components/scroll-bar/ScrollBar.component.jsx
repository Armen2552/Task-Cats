import styles from './ScrollBar.module.scss';


const ScrollBar = ({children})=>{
    return(
        <div className={styles.scrollBar}>
            {children}
        </div>
    )
}

export default ScrollBar