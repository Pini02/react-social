import { useEffect } from "react"
import { Posts } from "../Posts/Posts"
import { usePosts } from "../../hooks/post"
import styles from "./Homepage.module.css"
import Loader from "../Loader/Loader"

export function HomePage(){
    const posts = usePosts((state) => state.posts)
    const setPosts = usePosts((state) => state.setPosts)
    
  useEffect(() => {
    setPosts()
  }, [])
    
    


    return( <div className={styles.Homepage}>
                <img className={styles.Image} src="react-logo.png" width="128px" height="128px"/>
                <h2>ReactSocial</h2>
                <Posts posts={usePosts.getState().posts} />
            </div>)
}