
import {useSelector} from "react-redux";
import {NavLink} from 'react-router-dom'
//STYLES
import styles from './NavBar.module.scss';

const NavBar = ()=>{
    const categories = useSelector(state=>state.common.categories)
    return (
        <nav className={styles.container}>
            <ul className={styles.list}>
                {
                    categories.map((item)=>{
                        return (
                            <li key={item.id}>
                                <NavLink className={styles.link} activeClassName={styles.active} to={`/${item.name}/${item.id}`}>
                                    {item.name}
                                </NavLink>
                            </li>
                        )
                    })
                }
            </ul>
        </nav>
    )
}

export default NavBar