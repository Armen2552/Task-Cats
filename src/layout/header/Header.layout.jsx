import {useHistory} from 'react-router-dom'
//STYLES
import styles from './Header.module.scss';


const Header = ()=>{
    const history = useHistory()

    return (
        <header className={styles.header}>
            <h2
                className={styles.logo}
                onClick={()=>{
                    history.push('/')
                }}
            >Cats</h2>
        </header>
    )
}

export default Header