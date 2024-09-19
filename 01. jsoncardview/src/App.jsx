import { useEffect, useMemo, useState } from "react"
import styles from "./App.module.css"
import ActionButtons from "./components/ActionButtons.jsx"
import likeIcon from "./assets/like.svg"

function App() {
  const [data, setData] = useState([])

  const fetchData = async () => {
    const rawData = await fetch("/data.json")
    const result = await rawData.json()

    setData(result.posts)

  }


  useEffect(() => {
    fetchData()

  }, [])

  return (
    <>
      <h2>{data.length} new posts</h2>
      <div className={styles['card-container']}>
        {data.map((element, index) => {
          return (
            <div key={element.id} className={styles.card}>
              <div className="title">{element.title}</div>
              {element.userId === 123 &&
                <ActionButtons />}

              <div className={styles['like-dislike-container']}>
                <span className={styles['like-action']}>
                  <img src={likeIcon} alt="" /> {element.reactions.likes}
                </span>
                <span className={styles['dislike-action']}>
                  <img src={likeIcon} alt="" /> {element.reactions.dislikes}
                </span>
              </div>
            </div>
          )
        })}
      </div>
    </>
  )
}

export default App
