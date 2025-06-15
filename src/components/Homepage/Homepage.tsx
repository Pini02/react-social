import { useEffect } from "react"
import { Posts } from "../Posts/Posts"
import { usePosts } from "../../hooks/post"




export function HomePage(){
    const posts = usePosts((state) => state.posts)
    const setPosts = usePosts((state) => state.setPosts)
    const deletePost = usePosts((state)=> state.deletePost)
  useEffect(() => {
    setPosts()
  }, [])
    
    


    return( <div>
                <Posts posts={usePosts.getState().posts} handleDelete={deletePost} />
            </div>)
}