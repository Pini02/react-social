import { useEffect } from "react"
import { Posts } from "../Posts/Posts"
import { usePosts } from "../../hooks/post"




export function HomePage(){
    const posts = usePosts((state) => state.posts)
    const setPosts = usePosts((state) => state.setPosts)
  useEffect(() => {
    setPosts()
  }, [])
    
    


    return( <div>
                <Posts posts={usePosts.getState().posts} />
            </div>)
}