import {useEffect, useState} from "react";
import {useSelector, useDispatch} from 'react-redux'

//STYLES
import styles from './Cats.module.scss'
//ACTIONS
import {getCatsData} from "../../redux/common/common.action";


const Cats = (props) => {
  const [page, setPage] = useState(1)

  const catsData = useSelector(state => state.common.catsData)
  const dispatch = useDispatch()

  const categories = useSelector(state => state.common.categories)
  const urlCategory = props.match.params.id

  useEffect(() => {
    setPage(1)
    if (categories.length) {
      dispatch(getCatsData(urlCategory, 1))
    }
  }, [urlCategory, categories])


  const getMore = () => {
    setPage(prevState => 1 + prevState)
    dispatch(getCatsData(urlCategory, page + 1))
  }

  return (
    <div className={styles.container}>
      <div className={styles.catsBlock}>
        {
          catsData.map(item => {
            return (
              <div key={item.id} className={styles.item}>
                <img src={item.url} alt=""/>
              </div>
            )
          })
        }
      </div>

      <span onClick={getMore} className={styles.more}>more</span>
    </div>
  )
}

export default Cats