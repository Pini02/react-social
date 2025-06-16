import { useParams } from "react-router"
import { Comments } from "../Comments/Comments"
import { useEffect } from "react"
import { Post } from "../Post/Post"
import { useComments } from "../../hooks/comment"
import { usePosts, usePost } from "../../hooks/post"



export function PostDetails(){
    const  {id} = useParams()
    const handleDelete = usePosts((state)=>state.deletePost)
    let idNumber : number
    try{
        idNumber = Number(id)
    }catch(error){
        idNumber = 0
    }
    const comments = useComments((state)=>state.comments)
    const setComments = useComments((state)=> state.setComments)
    const post = usePost((state)=>state.post)
    const setPost = usePost((state)=> state.setPost)
    
    useEffect(()=>{
        setPost(idNumber)
        setComments(idNumber)
    },[])

    return(
        <>
            <Post post={post} isDetails={true} handleDelete={handleDelete}/>
            <Comments comments={comments} />
        </>
    )
}