import { useParams } from "react-router"
import { Comments } from "../Comments/Comments"
import { useEffect } from "react"
import { Post } from "../Post/Post"
import { useComments } from "../../hooks/comment"
import { usePosts, usePost } from "../../hooks/post"
import { useNavigate } from "react-router"
import styles from "./PostDetails.module.css"


export function PostDetails(){
const navigate = useNavigate()
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
    

    function redirectHome():void{
        navigate('/')
    }
    useEffect(()=>{
        setPost(idNumber)
        setComments(idNumber)
    },[])

    return(
        <div>
            <div className={styles.Logo}>
                <img src="../react-logo.png" width="64px" height="64px" onClick={() =>redirectHome()}/> 
            </div>
            <Post post={post} isDetails={true} handleDelete={handleDelete}/>
            <Comments comments={comments} />
        </div>
    )
}